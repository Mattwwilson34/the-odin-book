import { useEffect } from 'react';

const LoginSuccess = () => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);

  return <div>Thanks for Logging In!</div>;
};

export default LoginSuccess;
