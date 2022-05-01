const copy = (text: string) =>
  navigator.clipboard
    .writeText(text)
    .then(() => alert('계좌 번호가 복사되었습니다.'))
    .catch(() => alert('다시 시도해주세요.'));

export default copy;
