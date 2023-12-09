import HeroSlider from 'hero-slider/dist/HeroSlider';
import { Slide } from 'hero-slider';
import legal1 from '../assets/legal1.jpg';
import legal2 from '../assets/legal2.jpg';
import legal3 from '../assets/legal3.jpg';
import legal4 from '../assets/legal4.jpg';

const Slider = () => {
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
      <Slide
        background={{
          backgroundImageSrc: legal1,
          backgroundImageAlt: 'legal1',
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: legal2,
          backgroundImageAlt: 'legal2',
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: legal3,
          backgroundImageAlt: 'legal3',
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: legal4,
          backgroundImageAlt: 'legal4',
        }}
      />
    </HeroSlider>
  );
};
export default Slider;
