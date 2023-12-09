import AnchorLink from 'react-anchor-link-smooth-scroll';
import { GoChevronRight } from 'react-icons/go';
import MobileSlider from './mobileSlider';

const MobileLanding = () => {
  const title = 'Кадровски Послови';
  const mobileLanding = (
    <section className="flex flex-col-reverse z-0 font-bold font-tenor border-black border-b-6 w-full pt-48">
      <div className="w-full flex flex-col text-center justify-center items-center px-12 md:pb-32 pb-6 md:pt-12 pt-6">
        <h1 className="pt-28 pb-6 flex flex-col-reverse text-xl md:text-4xl">
          <span className='py-2 md:py-6'>{title.toLowerCase()}</span>
          <span className="text-slate-600 italic text-5xl md:text-8xl">
            Ђорђевић
          </span>
        </h1>
        <div className="pb-28 pt-8">
          <AnchorLink
            className="border-2 border-black px-6 py-2 rounded-3xl md:text-4xl text-lg flex mx-auto group hover:bg-black hover:text-white font-black transition duration-200 cursor-pointer mb-20"
            href="#contact"
          >
            Контакт{' '}
            <span>
              <GoChevronRight className="mt-1 md:h-8 md:w-8 h-[1.25rem] w-[1.25rem] group-hover:rotate-90 duration-500" />
            </span>
          </AnchorLink>
        </div>
      </div>
      <div className="mt-[-30px]">
        <MobileSlider />
      </div>
    </section>
  );
  return mobileLanding;
};
export default MobileLanding;
