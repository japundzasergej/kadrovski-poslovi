import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import useMediaQuery from '../hooks/useMediaQuery';

const Navbar = () => {
  const isDesktop = useMediaQuery('(min-width: 1040px)');
  return <>{isDesktop ? <DesktopNav /> : <MobileNav />}</>;
};
export default Navbar;
