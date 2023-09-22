import { handleMySql } from "../../../db/db";

function validatePage(current_page: number, total_page: number):number {
    return isNaN(current_page) || current_page <= 0 || current_page > total_page ? 1 : Number(current_page);
}

async function getNumberOfPlans() {
    const sql = `SELECT COUNT(plan_id) AS num FROM Plans;`;
    const [ numberOfPlans ] = await handleMySql(sql);
    return numberOfPlans.num;
}

function validateItemsPerPage(itemsPerPage: number) {
    return isNaN(itemsPerPage) || itemsPerPage<=0 ? 50 : Number(itemsPerPage);
}

async function getPageObject(current_page: number, itemsPerPage: number) {
    itemsPerPage = validateItemsPerPage(itemsPerPage);
    // const numberOfPlansPerPage = this.numberOfPlansPerPage;
    const numberOfPlansPerPage = itemsPerPage;
    const numberOfPlans = await getNumberOfPlans();
    const maxDisplayedPages = 10;
    const total_page = Math.ceil(numberOfPlans/itemsPerPage);
    current_page = validatePage(current_page, total_page);
    const startIndex = (current_page-1)*itemsPerPage;
    const endIndex = current_page===total_page ? numberOfPlans-1 : current_page*itemsPerPage-1;

    const offset = Math.floor((maxDisplayedPages-1) / 2);
    let startPage = current_page - offset;
    let endPage = current_page + offset;
    startPage = startPage<1 ? 1 : startPage;
    endPage = endPage>total_page ? total_page : endPage;

    if(endPage-startPage+1 < maxDisplayedPages) {
        startPage = Math.max(1, endPage-maxDisplayedPages+1);
    }

    return {  
        numberOfPlans,
        numberOfPlansPerPage,
        maxDisplayedPages,
        startIndex,
        endIndex,
        startPage,
        current_page,
        endPage,
    };
}

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random()*(max-min+1)) + min;
}

function getStarPoint(min: number, max: number) {
    return {
        score: (Math.random() * (max - min) + min).toFixed(1),
        numberOfParticipants: getRandomNumber(0, 5000)
    };
}

async function getPlans(pageObject: any): Promise<any> {
    const sql = `SELECT 
    Carriers.carrier_logo, 
    Plans.plan_id, 
    Plans.carrier, 
    Plans.plan_title, 
    Plans.monthly_data, 
    Plans.daily_data, 
    Plans.postExhaustedDataSpeed, 
    Plans.voice, 
    Plans.SMS, 
    Plans.network, 
    Plans.parent_carrier, 
    Plans.original_price, 
    Plans.discount_period, 
    Plans.discounted_price 
FROM 
    Carriers 
INNER JOIN 
    Plans ON Carriers.carrier = Plans.carrier 
ORDER BY 
    Plans.plan_id DESC LIMIT ? OFFSET ?;
`;

    // limit: 추출하고 싶은 데이터의 갯수
    const limit = pageObject.endIndex-pageObject.startIndex+1;
    // offset: offset 만큼 자르고 시작. ex) offset->3: 3개는 제외하고 다음거부터 시작.
    const offset = pageObject.startIndex===0 ? 0 : pageObject.startIndex;
    const values = [ limit, offset ];

    let plans = await handleMySql(sql, values);
    for(let i=0;i<plans.length;i++) {
        plans[i]['starPoint'] = getStarPoint(1.0, 5.0);
        plans[i]['isAppliableHere'] = getRandomNumber(0,1);
    }
    return plans;
}

export default async function handler(req: any, res: any) {
    if(req.method==='GET') {
        const { page, 'items-per-page': itemsPerPage } = req.query;
        const pageObject = await getPageObject(page, itemsPerPage);
        const plans = await getPlans(pageObject);
        return res.status(200).send({ pageObject, plans})
    }
}
