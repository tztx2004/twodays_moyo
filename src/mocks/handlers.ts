import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:4000/plans/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        numberOfUser: 25102,
        additional_service: {
          isSupported: ['micropayment', 'roaming', 'family_combination', 'mobile_hotSpot'],
          isUnsupported: ['data_sharing'],
        },
        plan: {
          plan_id: 22,
          carrier: '아이즈모바일',
          plan_title: '기본 요금제',
          monthly_data: 3,
          daily_data: 0.2,
          postExhaustedDataSpeed: 10,
          requirement: '신분증',
          contract_period: 12,
          eSIM: 0,
          sim_delivery: 1,
          nfc_delivery: 1,
          data_sharing: 0,
          roaming: 1,
          micropayment: 1,
          authentication_method: '비밀번호',
          underage_registration: 0,
          foreigner_registration: 0,
          transfer_charge: 0,
          voice: '100',
          SMS: '문자 무제한',
          network: '4G',
          original_price: 30000,
          discount_period: 12,
          discounted_price: 25000,
          parent_carrier: 'KT',
          addition_call: '사용량 초과 요금 부과',
          data_price: 22.53,
          call_price: 1.98,
          video_price: 3.3,
          SMS_price: 22,
          LMS_price: 33,
          MMS_text_price: 33,
          MMS_image_price: 220,
          MMS_video_price: 220,
          family_combination: 1,
          mobile_hotSpot: 1,
        },
      }),
    );
  }),
  rest.get('http://localhost:4000/plans?page=1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        pageObject: {
          numberOfPlans: 480,
          numberOfPlansPerPage: 1,
          maxDisplayedPages: 10,
          startIndex: 0,
          endIndex: 0,
          startPage: 1,
          current_page: 1,
          endPage: 5,
        },
        plans: [
          {
            carrier_logo:
              'https://phoneb.s3.ap-northeast-2.amazonaws.com/images/%EC%95%84%EC%9D%B4%EC%A6%88%EB%AA%A8%EB%B0%94%EC%9D%BC.svg',
            plan_id: 960,
            carrier: '아이즈모바일',
            plan_title: '보이스안심요금제(200분/7GB)',
            monthly_data: '7',
            daily_data: 0,
            postExhaustedDataSpeed: 0,
            voice: '200',
            SMS: '100',
            network: '5G',
            parent_carrier: 'LGU+',
            original_price: 17000,
            discount_period: 999999,
            discounted_price: 11500,
            starPoint: {
              score: '1.3',
              numberOfParticipants: 3961,
            },
            isAppliableHere: 0,
          },
        ],
      }),
    );
  }),
];
