import HeroSlider from 'hero-slider/dist/HeroSlider';
import { Slide } from 'hero-slider';
import legal1 from '../assets/legal1.jpg';
import legal2 from '../assets/legal2.jpg';
import legal3 from '../assets/legal3.jpg';
import legal4 from '../assets/legal4.jpg';
import useMediaQuery from '../hooks/useMediaQuery';

const Slider = () => {
  const isDesktop = useMediaQuery('(min-width: 1040px)');
  const maxWidth = isDesktop ? 'max-w-full' : 'max-w-[500px] h-20vh';
  return (
    <HeroSlider
      height={isDesktop ? '100vh' : '20vh'}
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
      accessibility={{
        shouldSlideOnArrowKeypress: true,
      }}
      manager={{
        isMobile: !isDesktop ? false : true,
      }}
      className={`${!isDesktop && 'border-b border-black'}`}
    >
      {[1, 2, 3, 4].map((item) => {
        const src = 'src/assets/legal' + item + '.jpg';
        return (
          <div key={item}>
            <Slide
              className={maxWidth}
              background={{
                backgroundImageSrc: src,
                backgroundImageAlt: 'legal' + item,
              }}
            />
          </div>
        );
      })}
    </HeroSlider>
  );
};
export default Slider;
