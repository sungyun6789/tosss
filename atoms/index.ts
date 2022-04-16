import { atom } from 'recoil';

import mock from '../mock.json';

export const AssetsInfoState = atom({
  key: 'user',
  default: mock.sort((lhs, rhs) => lhs.wallet_name.localeCompare(rhs.wallet_name)),
});
