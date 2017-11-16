// Views
import Home from '../../app/views/Home';
import User from '../../app/views/User';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/user',
    component: User,
    exact: true
  }
];

export default routes;
