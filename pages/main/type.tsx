export interface Idata {
  data: Iobject;
}

export interface Iobject {
  pageObject: object;
  plans: Iobj[];
}

export interface Iobj {
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
