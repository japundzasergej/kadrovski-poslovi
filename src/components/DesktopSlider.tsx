import HeroSlider from 'hero-slider/dist/HeroSlider';
import Slider from './Slider';
import legal1 from '../assets/legal1.jpg';
import legal2 from '../assets/legal2.jpg';
import legal3 from '../assets/legal3.jpg';
import legal4 from '../assets/legal4.jpg';

const DesktopSlider = () => {
  const src = [legal1, legal2, legal3, legal4];
  return (
    <HeroSlider
      autoplay={{
        autoplayDuration: 4000,
        autoplayDebounce: 2000,
      }}
      animations={{
        slidingAnimation: 'fade',
      }}
      controller={{
        initialSlide: 2,
      }}
      accessibility={{
        shouldSlideOnArrowKeypress: true,
      }}
    >
      <Slider src={src} />
    </HeroSlider>
  );
};
export default DesktopSlider;
