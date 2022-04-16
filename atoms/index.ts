import { atom, selector } from 'recoil';

import mock from '../mock.json';

export interface AssetsModel {
  wallet_name: string;
  bank_name: string;
  balance: number;
  transfer: boolean;
  address: string;
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
