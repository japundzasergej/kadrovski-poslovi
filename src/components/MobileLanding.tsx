import AnchorLink from 'react-anchor-link-smooth-scroll';
import { GoChevronRight } from 'react-icons/go';
import Slider from './Slider';

const MobileLanding = () => {
  const mobileLanding = (
    <section className="flex flex-col z-0 font-bold font-tenor border-black border-b-6 w-full pt-4">
      <div className="w-full flex flex-col text-center justify-center items-center text-4xl md:text-8xl px-12 md:py-32 py-6 ">
        <h1 className="pt-48 pb-6">
          Кадровски Послови <span className="text-slate-600">"Ђорђевић"</span>
        </h1>
        <div>
          <AnchorLink
            className="border-2 border-black px-6 py-2 rounded-3xl md:text-3xl text-lg flex mx-auto group hover:bg-black hover:text-white font-black transition duration-200 cursor-pointer"
            href="#contact"
          >
            Контакт{' '}
            <span>
              <GoChevronRight className="h-6 w-6 group-hover:rotate-90 duration-500" />
            </span>
          </AnchorLink>
        </div>
      </div>
      <div className="w-full">
        <Slider />
      </div>
    </section>
  );
  return mobileLanding;
};
export default MobileLanding;
