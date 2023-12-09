import { Slide } from 'hero-slider/dist/components/Slide';

interface SliderProps {
  src: string[];
}

const Slider = ({ src }: SliderProps) => {
  return (
    <>
      {src.map((item) => {
        return (
          <div key={item}>
            <Slide
              background={{
                backgroundImageSrc: item,
                backgroundImageAlt: item,
              }}
            />
          </div>
        );
      })}
    </>
  );
};
export default Slider;
