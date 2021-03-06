import styled from '@emotion/styled';

import type { DWType } from './AssetsPage.type';

export const AssetsHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-bottom: 50px;
`;

export const AssetsInfoSection = styled.section`
  width: 1000px;
  margin: auto;

  span {
    display: flex;
    justify-content: flex-end;

    color: gray;
    text-decoration: underline;

    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: flex-end;
    margin: 30px 0;
    font-size: 30px;
  }
`;

export const AsstesDetailSection = styled.section`
  width: 700px;
  margin: auto;
  font-size: 16px;
  border: 1px solid #f0f0f0;

  article {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    padding: 0 30px;
    cursor: pointer;
  }
`;

export const DetailName = styled.div`
  margin-bottom: 5px;
`;

export const DetailDate = styled.div`
  font-size: 12px;
`;

export const DetailBalance = styled.div<DWType>`
  color: ${(props) => (props.type === 'deposit' ? 'var(--tossLightColor)' : '#3A3845')};
`;
