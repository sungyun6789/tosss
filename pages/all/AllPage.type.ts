export interface MenuModel {
  category:
    | '관리자'
    | '최근'
    | '신규'
    | '대출'
    | '보험'
    | '송금'
    | '결제'
    | '계좌'
    | '신용'
    | '카드'
    | '자동차'
    | '부동산'
    | '토스 주민센터'
    | '혜택'
    | '생활'
    | '사장님';
  menu: {
    [key: string]: {
      url: string;
    };
  };
}
