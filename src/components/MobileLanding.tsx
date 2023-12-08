import AnchorLink from 'react-anchor-link-smooth-scroll';
import { GoChevronRight } from 'react-icons/go';
import Slider from './Slider';

const MobileLanding = () => {
  const mobileLanding = (
    <section className="flex flex-col-reverse z-0 font-bold font-tenor w-full pt-40 mini:pt-44 micro:pt-48">
      <div className="w-full flex flex-col text-center justify-center items-center text-4xl md:text-8xl px-12">
        <h1 className="pt-28 pb-6">
          Кадровски Послови <span className="text-slate-600">"Ђорђевић"</span>
        </h1>
        <div className='mini:pb-40 micro:pb-28'>
          <AnchorLink
            className="border-2 border-black px-6 py-2 rounded-3xl md:text-3xl text-lg flex mx-auto group hover:bg-black hover:text-white font-black transition duration-200 cursor-pointer mb-20"
            href="#contact"
          >
            Контакт{' '}
            <span>
              <GoChevronRight className="h-6 w-6 group-hover:rotate-90 duration-500" />
            </span>
          </AnchorLink>
        </div>
      </div>
      <div className="w-full mt-[-30px]">
        <Slider />
      </div>
    </section>
  );
  return mobileLanding;
};
export default MobileLanding;
