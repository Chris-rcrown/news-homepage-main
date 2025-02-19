// Sidebar Component
const Sidebar = () => {
    return (
      <aside className="bg-[#00001a] text-white p-6 rounded-lg mt-6 md: mt-10 h-auto">
        <h3 className="text-yellow-400 text-xl font-bold">New</h3>
        <ul className="mt-4 space-y-4 flex flex-col justify-even">
          <li className="border-b pb-2">
            <h4 className="font-bold">Hydrogen VS Electric Cars</h4>
            <p className="text-gray-400 text-sm">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </li>
          <li className="border-b pb-2">
            <h4 className="font-bold">The Downsides of AI Artistry</h4>
            <p className="text-gray-400 text-sm">What are the possible adverse effects of on-demand AI image generation?</p>
          </li>
          <li>
            <h4 className="font-bold">Is VC Funding Drying Up?</h4>
            <p className="text-gray-400 text-sm">Private funding by VC firms is down 50% YOY.</p>
          </li>
        </ul>
      </aside>
    );
  };
  export default Sidebar