import { Link, Outlet } from 'react-router-dom';

export const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          width: '250px',
          height: '100vh',
          backgroundColor: 'rgb(11 19 67 / 74%)',
          color: 'white',
          transition: 'width 0.3s ease',
          padding: '20px',
          flexDirection: 'column',
        }}
      >
        <h2>Admin menu</h2>
        <Link to="adminpanel" style={{ color: '#fff' }}>
          Dashboard
        </Link>
        <Link to="users" style={{ color: '#fff' }}>
          Users
        </Link>
        <Link to="transaction" style={{ color: '#fff' }}>
          Transaction
        </Link>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};
