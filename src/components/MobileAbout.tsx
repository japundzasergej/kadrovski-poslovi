const MobileAbout = () => {
  const mobileAbout = (
    <section className="flex">
      <article>
        <div className="bg-black h-[200px] items-center text-start text-white flex md:text-5xl text-3xl font-tenor">
          <h1 className="ml-12">Услуге које пружамо</h1>
        </div>
        <div className="bg-gray-100 h-2/3 flex justify-center items-center text-start text-lg md:text-3xl pt-48 pb-24 md:px-16 px-8 ml-4 font-semibold">
          <ul className="list-disc">
            <li>
              Саветовање и израда правилника о организацији и систематизацији
              послова.
            </li>
            <li>Саветовања и израда правилника о раду и општих аката.</li>
            <li>
              Израда уговора о раду/анекса уговора о раду/уговора о обављања
              привремених и повремених послова/уговора о делу.
            </li>
            <li>Израда свих решења из области радног односа.</li>
            <li>Пријаве и одјаве запослених у CROSO.</li>
            <li>Саветовања у вези вођења персоналних досијеа запослених.</li>
            <li>Вођења евиденције рада запослених.</li>
          </ul>
        </div>
      </article>
    </section>
  );
  return mobileAbout;
};
export default MobileAbout;
