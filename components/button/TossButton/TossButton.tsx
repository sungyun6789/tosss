import styled from '@emotion/styled';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  text: string;
}

const TossButton = ({ onClick, disabled = false, text }: Props) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  width: 140px;
  height: 40px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  transition: 0.3s;

  :not(:disabled) {
    color: white;
    background-color: var(--tossLightColor);
    cursor: pointer;
    :hover {
      background-color: var(--tossDeepColor);
    }
  }
`;

export default TossButton;
