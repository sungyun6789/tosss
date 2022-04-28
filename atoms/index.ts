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
