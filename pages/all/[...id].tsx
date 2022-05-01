import { useRouter } from 'next/router';

import { DetailWrapper } from './AllPage.style';

const AllDetails = () => {
  const router = useRouter();
  const queryId = router.query.id?.[0];

  if (!queryId) return;

  return (
    <DetailWrapper>
      <h1>{queryId}</h1>
      <p>현재 준비 중인 기능입니다. 조금만 기다려주세요!</p>
    </DetailWrapper>
  );
};

export default AllDetails;
