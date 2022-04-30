import { useRouter } from 'next/router';

const AllDetails = () => {
  const router = useRouter();
  const queryId = router.query.id?.[0];

  if (!queryId) return;

  return <div>{queryId}</div>;
};

export default AllDetails;
