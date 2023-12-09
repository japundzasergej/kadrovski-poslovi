interface ParaProps {
  isMobile: boolean;
}

const Paragraph = ({ isMobile }: ParaProps) => {
  const mobileStyling =
    'bg-gray-100 h-2/3 flex justify-center items-center text-start text-lg md:text-3xl pt-48 pb-24 md:px-16 px-8 ml-4 font-light';
  const desktopStyling =
    'bg-gray-100 h-2/3 flex justify-center items-center text-start text-3xl py-64 px-48';
  return (
    <div className={isMobile ? mobileStyling : desktopStyling}>
      <ul className="list-disc">
        <li>
          Саветовање и израда правилника о организацији и систематизацији
          послова.
        </li>
        <li>Саветовања и израда правилника о раду и општих аката.</li>
        <li>
          Израда уговора о раду/ анекса уговора о раду/ уговора о обављању
          привремених и повремених послова/ уговора о делу.
        </li>
        <li>Израда свих решења из области радног односа.</li>
        <li>Пријаве и одјаве запослених у CROSO.</li>
        <li>Саветовања у вези вођења персоналних досијеа запослених.</li>
        <li>Вођење евиденције рада запослених.</li>
      </ul>
    </div>
  );
};
export default Paragraph;
