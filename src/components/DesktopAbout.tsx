const DesktopAbout = () => {
  const desktopAbout = (
    <section className="flex w-full">
      <article>
        <div className="bg-black h-1/3 items-center text-center text-white flex justify-start text-6xl w-[200%] pb-24 font-tenor">
          <h1 className="ml-20">Услуге које пружамо</h1>
        </div>
        <div className="bg-gray-100 h-2/3 flex justify-center items-center text-start text-2xl py-64 px-48">
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
  return desktopAbout;
};
export default DesktopAbout;
