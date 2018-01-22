// Views
import Home from '../../app/views/Home';
import User from '../../app/views/User';
import Register from '../../app/views/Register';

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
  },
  {
    path: '/register',
    component: Register,
    exact: true
  }
];

export default routes;
