import { atom, selector } from 'recoil';

import type { MockModel } from '../mock';
import mock from '../mock';

export const assetsState = atom<MockModel[]>({
  key: 'assets',
  default: mock,
});

export const assetsSelector = selector<MockModel[]>({
  key: 'assetsSelector',
  get: ({ get }) => {
    const data = get(assetsState);
    return (JSON.parse(JSON.stringify(data)) as MockModel[]).sort((lhs, rhs) =>
      lhs.wallet_name.localeCompare(rhs.wallet_name),
    );
  },
});

export const isTransferSelector = selector<MockModel[]>({
  key: 'isTransferSelector',
  get: ({ get }) => {
    const data = get(assetsState);
    return data.filter(({ isTransfer }) => isTransfer === true);
  },
});

export const tossBankSelector = selector<MockModel[]>({
  key: 'tossBankSelector',
  get: ({ get }) => {
    const data = get(assetsState);
    return data.filter(({ bank_name }) => bank_name === '토스뱅크');
  },
});
