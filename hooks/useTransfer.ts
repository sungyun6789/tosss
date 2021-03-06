import { assetsState } from 'atoms';
import date from 'utils/date';

import { useRecoilState } from 'recoil';

interface Props {
  price: number;
  depositBank: string;
  withdrawalBank: string;
  isAdmin: boolean;
}

const useTransfer = ({ price, depositBank, withdrawalBank = '', isAdmin = false }: Partial<Props>) => {
  const [assets, setAssets] = useRecoilState(assetsState);

  return () => {
    if (price && depositBank) {
      setAssets(
        assets.map((value) => {
          if (value.wallet_name === depositBank) {
            return {
              ...value,
              balance: value.balance + price,
              details: [
                {
                  id: value.details!.length + 1,
                  name: isAdmin ? '관리자 입금' : withdrawalBank,
                  date,
                  balance: price,
                  type: 'deposit',
                },
                ...value.details!,
              ],
            };
          } else if (value.wallet_name === withdrawalBank) {
            return {
              ...value,
              balance: value.balance - price,
              details: [
                {
                  id: value.details!.length + 1,
                  name: depositBank,
                  date,
                  balance: price,
                  type: 'withdrawal',
                },
                ...value.details!,
              ],
            };
          } else {
            return value;
          }
        }),
      );
      alert('보내기에 성공했습니다!');
    }
  };
};

export default useTransfer;
