interface Idata {
  data: Iobject;
}

interface Iobject {
  pageObject: IpageObject;
  plans: Iplans[];
}

interface Iplans {
  carrier_logo: string;
  plan_id: number;
  carrier: string;
  plan_title: string;
  monthly_data: string;
  daily_data: number;
  postExhaustedDataSpeed: number;
  voice: string;
  SMS: string;
  network: string;
  parent_carrier: string;
  original_price: number;
  discount_period: number;
  discounted_price: number;
}

interface IpageObject {
  numberOfPlans: number;
  numberOfPlansPerPage: number;
  maxDisplayedPages: number;
  startIndex: number;
  endIndex: number;
  startPage: number;
  current_page: number;
  endPage: number;
}
