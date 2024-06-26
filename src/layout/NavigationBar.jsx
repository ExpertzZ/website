import '../styles/global.css';

function NavigationBar () {
  return (
    <div className="absolute top-0 right-0 flex justify-end h-20 items-center font-roboto font-black text-xl mr-96 z-10">
        <ul className="flex gap-36">
            <li className="text-indigo-400 hover:text-purple-600">PROJECTS</li>
            <li className="text-indigo-400 hover:text-purple-600">CONTACT</li>
            <li className="text-indigo-400 hover:text-purple-600">RESUME</li>
        </ul>
    </div>
  );
}

export default NavigationBar;