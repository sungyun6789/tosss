import { atom, selector } from 'recoil';

import mock from '../mock.json';

export interface AssetsModel {
  wallet_name: string;
  bank_name: string;
  balance: number;
  transfer: boolean;
  address: string;
}

export const AssetsInfoState = atom<AssetsModel[]>({
  key: 'initialAssetsValue',
  default: mock,
});

export const assetsSelector = selector<AssetsModel[]>({
  key: 'sortedAsstesValue',
  get: ({ get }) => {
    const data = get(AssetsInfoState);
    return (JSON.parse(JSON.stringify(data)) as AssetsModel[]).sort((lhs, rhs) =>
      lhs.wallet_name.localeCompare(rhs.wallet_name),
    );
  },
});
