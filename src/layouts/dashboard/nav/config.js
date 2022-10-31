// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: 'mdi-light:home',
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: 'mdi-light:user',
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: 'mdi-light:cart',
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: 'mdi-light:blog',
  },
  {
    title: 'login',
    path: '/login',
    icon: 'mdi-light:lock',
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
