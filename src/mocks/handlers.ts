import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:4000/plans/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        additional_service: {
          isSupported: ['micropayment', 'roaming'],
          isUnsupported: ['data_sharing'],
        },
        plan: [
          {
            plan_id: 22,
            carrier: '아이즈모바일',
            plan_title: '기본 요금제',
            monthly_data: '3GB',
            daily_data: 200,
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
          },
        ],
      }),
    );
  }),
];
