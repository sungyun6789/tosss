import type { DWType } from 'pages/assets/Assets.type';

export interface MockModel {
  id: number;
  wallet_name: string;
  bank_name: string;
  balance: number;
  isTransfer: boolean;
  address: string;
  details?: {
    id: number;
    name: string;
    date: string;
    balance: number;
    type: DWType['type'];
  }[];
}

const mock: MockModel[] = [
  {
    id: 1,
    wallet_name: '토스뱅크',
    bank_name: '토스뱅크',
    balance: 106591,
    isTransfer: true,
    address: '0000-0000-0000-0000',
    details: [
      {
        id: 1,
        name: '편의점',
        date: '2022년 4월 05일 21시 30분',
        balance: 3000,
        type: 'withdrawal',
      },
      {
        id: 2,
        name: '카페',
        date: '2022년 4월 23일 14시 00분',
        balance: 6500,
        type: 'withdrawal',
      },
      {
        id: 3,
        name: '월급',
        date: '2022년 4월 25일 14시 00분',
        balance: 10000,
        type: 'deposit',
      },
    ],
  },
  {
    id: 2,
    wallet_name: '보통예금',
    bank_name: 'NH농협은행',
    balance: 5491,
    isTransfer: true,
    address: '1111-1111-1111-1111',
    details: [
      {
        id: 1,
        name: '술',
        date: '2022년 4월 20일 20시 44분',
        balance: 50000,
        type: 'withdrawal',
      },
      {
        id: 2,
        name: '치킨',
        date: '2022년 4월 21일 23시 10분',
        balance: 24000,
        type: 'withdrawal',
      },
    ],
  },
  {
    id: 3,
    wallet_name: '주택청약종합저축',
    bank_name: 'NH농협은행',
    balance: 300000,
    isTransfer: false,
    address: '2222-2222-2222-2222',
    details: [
      {
        id: 1,
        name: '농협',
        date: '2022년 2월 28일 00시 00분',
        balance: 20000,
        type: 'withdrawal',
      },
      {
        id: 2,
        name: '농협',
        date: '2022년 3월 28일 00시 00분',
        balance: 20000,
        type: 'withdrawal',
      },
      {
        id: 3,
        name: '농협',
        date: '2022년 4월 28일 00시 00분',
        balance: 20000,
        type: 'withdrawal',
      },
    ],
  },
  {
    id: 4,
    wallet_name: '대출',
    bank_name: 'NH농협은행',
    balance: 100000000,
    isTransfer: false,
    address: '3333-3333-3333-3333',
  },
];

export default mock;
