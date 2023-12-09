import Paragraph from './Paragraph';

const MobileAbout = () => {
  const mobileAbout = (
    <section className="flex">
      <article>
        <div className="bg-black h-[200px] items-center text-start text-white flex md:text-5xl text-3xl font-tenor">
          <h1 className="ml-8">Услуге које пружамо</h1>
        </div>
        <Paragraph isMobile={true} />
      </article>
    </section>
  );
  return mobileAbout;
};
export default MobileAbout;
