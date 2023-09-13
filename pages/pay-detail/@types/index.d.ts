interface Data {
  numberOfUser: number;
  additional_service: AdditionalService;
  plan: Plan;
}

interface AdditionalService {
  isSupported: string[];
  isUnsupported: string[];
}

interface Plan {
  plan_id: number;
  carrier: string;
  plan_title: string;
  monthly_data: number;
  daily_data: number;
  postExhaustedDataSpeed: number;
  requirement: string;
  contract_period: number;
  eSIM: number;
  sim_delivery: number;
  nfc_delivery: number;
  data_sharing: number;
  roaming: number;
  micropayment: number;
  authentication_method: string;
  underage_registration: number;
  foreigner_registration: number;
  transfer_charge: number;
  voice: string;
  SMS: string;
  network: string;
  original_price: number;
  discount_period: number;
  discounted_price: number;
  parent_carrier: string;
  addition_call: string;
  data_price: number;
  call_price: number;
  video_price: number;
  SMS_price: number;
  LMS_price: number;
  MMS_text_price: number;
  MMS_image_price: number;
  MMS_video_price: number;
  family_combination: number;
  mobile_hotSpot: number;
  [extraService: string]: number;
}
