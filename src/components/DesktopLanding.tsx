import AnchorLink from 'react-anchor-link-smooth-scroll';
import { GoChevronRight } from 'react-icons/go';
import DesktopSlider from './DesktopSlider';

const DesktopLanding = () => {
  const title = 'Кадровски Послови';
  const desktopLanding = (
    <section className="flex z-0 font-bold font-tenor">
      <div className="w-1/2 flex flex-col text-center justify-center items-center pt-36">
        <h1 className="flex flex-col-reverse text-4xl">
          {title.toLowerCase()}
          <span className="text-slate-600 text-8xl italic py-2">Ђорђевић</span>
        </h1>
        <div className="bg-black w-[600px] h-[2px] my-10"></div>
        <div>
          <AnchorLink
            className="border-2 border-black px-6 py-2 rounded-3xl text-xl flex mx-auto group hover:bg-black hover:text-white font-semibold transition duration-100 cursor-pointer"
            href="#contact"
          >
            Контакт{' '}
            <span>
              <GoChevronRight className="h-6 w-6 group-hover:rotate-90 duration-500" />
            </span>
          </AnchorLink>
        </div>
      </div>
      <div className="w-1/2">
        <DesktopSlider />
      </div>
    </section>
  );
  return desktopLanding;
};
export default DesktopLanding;
