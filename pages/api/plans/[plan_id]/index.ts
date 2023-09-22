import { handleMySql } from '../../../../db/db';

async function getDetail(plan_id: any) {
  const sql = `SELECT Plans.plan_id, Plans.carrier, Plans.plan_title, Plans.monthly_data, Plans.daily_data, Plans.postExhaustedDataSpeed, Plans.requirement, Plans.contract_period, Plans.eSIM, Plans.sim_delivery, Plans.nfc_delivery, Plans.data_sharing, Plans.roaming, Plans.micropayment, Plans.authentication_method, Plans.underage_registration, Plans.foreigner_registration, Plans.transfer_charge, Plans.voice, Plans.SMS, Plans.network, Plans.original_price, Plans.discount_period, Plans.discounted_price, Plans.parent_carrier, Plans.addition_call, ExceededPrice.data_price, ExceededPrice.call_price, ExceededPrice.video_price, ExceededPrice.SMS_price, ExceededPrice.LMS_price, ExceededPrice.MMS_text_price, ExceededPrice.MMS_image_price, ExceededPrice.MMS_video_price
    FROM ExceededPrice 
    INNER JOIN 
    Plans ON ExceededPrice.parent_carrier=Plans.parent_carrier
    WHERE Plans.plan_id = ?;`;
  const values = [plan_id];
  const res = await handleMySql(sql, values);
  return res;
}

function distinguishSupportive(plan: any) {
  const supportedProperties: string[] = [];
  const unsupportedProperties: string[] = [];
  const list = ['data_sharing', 'micropayment', 'roaming', 'family_combination', 'mobile_hotSpot'];
  for (let i = 0; i < list.length; i++) {
    if (plan[list[i]] === 1) {
      supportedProperties.push(list[i]);
    } else {
      unsupportedProperties.push(list[i]);
    }
  }

  return {
    isSupported: supportedProperties,
    isUnsupported: unsupportedProperties,
  };
}

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const { plan_id } = req.query;
    const [plan] = await getDetail(plan_id);
    const additional_service = distinguishSupportive(plan);
    const numberOfUser = getRandomNumber(10000, 50000);
    res.status(200).send({ numberOfUser, additional_service, plan });
  }
}
