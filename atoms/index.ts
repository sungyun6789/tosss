import { atom } from 'recoil';

import mock from '../mock.json';

export const AssetsInfoState = atom({
  key: 'user',
  default: mock,
});
