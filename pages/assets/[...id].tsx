import { useRouter } from 'next/router';

import mock from '../../mock.json';

const AssetsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const data = id ? mock.filter((data) => data.wallet_name === id[1])[0] : undefined;

  return (
    <section>
      <h1>{data?.wallet_name}</h1>
    </section>
  );
};

export default AssetsPage;
