import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#1976d2"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  </div>
);

export const LoaderLocal = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#1976d2"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  </div>
);
