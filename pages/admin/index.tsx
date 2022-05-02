import { AdminPageWrapper } from './AdminPage.style';

const AdminPage = () => {
  return (
    <AdminPageWrapper>
      <article>
        <input placeholder="단위: 원" />
      </article>
      <article>
        <button>충전</button>
      </article>
    </AdminPageWrapper>
  );
};

export default AdminPage;
