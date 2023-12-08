import DesktopAbout from '../components/DesktopAbout';
import MobileAbout from '../components/MobileAbout';
import useMediaQuery from '../hooks/useMediaQuery';

const About = () => {
  const isDesktop = useMediaQuery('(min-width: 1040px)');
  return <>{isDesktop ? <DesktopAbout /> : <MobileAbout />}</>;
};
export default About;
