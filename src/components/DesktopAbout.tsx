import Paragraph from './Paragraph';

const DesktopAbout = () => {
  const desktopAbout = (
    <section className="flex">
      <article>
        <div className="bg-black h-1/3 items-center text-center text-white flex justify-start text-6xl w-full py-48 font-tenor">
          <h1 className="ml-20">Услуге које пружамо</h1>
        </div>
        <Paragraph isMobile={false} />
      </article>
    </section>
  );
  return desktopAbout;
};
export default DesktopAbout;
