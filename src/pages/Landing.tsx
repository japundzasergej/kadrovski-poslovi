import useMediaQuery from '../hooks/useMediaQuery';
import DesktopLanding from '../components/DesktopLanding';
import MobileLanding from '../components/MobileLanding';

const Landing = () => {
  const isDesktop = useMediaQuery('(min-width: 1040px)');
  return <>{isDesktop ? <DesktopLanding /> : <MobileLanding />}</>;
};
export default Landing;
