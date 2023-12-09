import HeroSlider from 'hero-slider/dist/HeroSlider';
import legal1 from '../assets/mLegal1.jpg';
import legal2 from '../assets/mLegal2.jpg';
import legal3 from '../assets/mLegal3.jpg';
import legal4 from '../assets/mLegal4.jpg';
import Slider from './Slider';
import useMediaQuery from '../hooks/useMediaQuery';

const MobileSlider = () => {
  const src = [legal1, legal2, legal3, legal4];
  const isTablet = useMediaQuery('(min-width: 1024px)');
  return (
    <HeroSlider
      height={isTablet ? '40vh' : '20vh'}
      autoplay={{
        autoplayDuration: 4000,
        autoplayDebounce: 2000,
      }}
      animations={{
        slidingAnimation: 'fade',
      }}
      controller={{
        initialSlide: 4,
      }}
      manager={{
        isMobile: true,
      }}
      className="border-b border-black"
    >
      <Slider src={src} />
    </HeroSlider>
  );
};
export default MobileSlider;
