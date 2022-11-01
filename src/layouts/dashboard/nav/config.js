// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    // icon: icon('ic_analytics'),
    // icon: icon('ic_home'),
    icon: icon('home-heart'),
    // icon: 'flat-color-icons:home',
  },
  {
    title: 'users',
    path: '/dashboard/user',
    // icon: icon('ic_user'),
    icon: 'mdi:user',
  },
  {
    title: 'product',
    path: '/dashboard/products',
    // icon: icon('ic_cart'),
    icon: 'dashicons:products',
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    // icon: icon('ic_blog'),
    icon: 'dashicons:welcome-write-blog',
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   // icon: icon('ic_lock'),
  //   icon: 'mdi-light:lock',
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
