import HeroSlider from 'hero-slider/dist/HeroSlider';
import { Slide } from 'hero-slider';
import useMediaQuery from '../hooks/useMediaQuery';


interface ScalableSliderProps {
  src: string;
}

const ScalableSlider = ({ src }: ScalableSliderProps) => {
  return (
    <>
      {[1, 2, 3, 4].map((item) => {
        const source = 'src/assets/' + src + 'legal' + item.toString() + '.jpg';

        console.log(source);

        return (
          <Slide
            background={{
              backgroundImageSrc: source,
              backgroundImageAlt: src + 'legal' + item,
            }}
          />
        );
      })}
    </>
  );
};

const Slider = () => {
  const isDesktop = useMediaQuery('(min-width: 1040px)');

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
      {isDesktop ? (
        <ScalableSlider src="desktop" />
      ) : (
        <ScalableSlider src="m" />
      )}
    </HeroSlider>
  );
};
export default Slider;
