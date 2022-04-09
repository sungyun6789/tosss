import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const AssetsDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
};

export default AssetsDetail;
