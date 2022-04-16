import { atom } from 'recoil';

import mock from '../mock.json';

export interface AssetsModel {
  wallet_name: string;
  bank_name: string;
  balance: number;
  transfer: boolean;
  address: string;
}

export const AssetsInfoState = atom({
  key: 'user',
  default: mock.sort((lhs, rhs) => lhs.wallet_name.localeCompare(rhs.wallet_name)),
});
