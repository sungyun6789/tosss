const date = (() => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();

  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
})();

export default date;
