import styled from '@emotion/styled';

export const BenefitWrapper = styled.section`
  max-width: 1000px;
  margin: auto;

  h1 {
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
  }

  article {
    padding: 20px;
    border-bottom: 1px solid #f0f0f0;
    transition: 0.3s;
    cursor: pointer;
    :hover {
      background-color: #fafafa;
    }
    div {
      padding: 0 10px;
    }
  }
`;

export const FirstText = styled.div`
  font-size: 14px;
  color: #dee0e6;
  margin-bottom: 10px;
`;

export const SecondText = styled.div`
  font-size: 16px;
  color: var(--tossLightColor);
`;
