import styled from '@emotion/styled';

export const SponsoredButtonWrapper = styled.section`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 30px;

  // TODO: DWButton과 하나로 합쳐도 될 듯
  button {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #2196f3;
    transition: 0.3s;
    font-size: 15px;
    cursor: pointer;
    :hover {
      background-color: #1565c0;
    }
  }
`;
