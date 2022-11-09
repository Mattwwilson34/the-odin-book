import { Outlet } from 'react-router-dom';

const Root = () => (
  <div>
    <h1>This is the Root element</h1>
    <Outlet />
  </div>
);

export default Root;
