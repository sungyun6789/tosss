import { atom, selector } from 'recoil';

import mock from '../mock';

export interface AssetsModel {
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
    type: string;
  }[];
}

export const assetsState = atom<AssetsModel[]>({
  key: 'assets',
  default: mock,
});

export const assetsSelector = selector<AssetsModel[]>({
  key: 'assetsSelector',
  get: ({ get }) => {
    const data = get(assetsState);
    return (JSON.parse(JSON.stringify(data)) as AssetsModel[]).sort((lhs, rhs) =>
      lhs.wallet_name.localeCompare(rhs.wallet_name),
    );
  },
});
