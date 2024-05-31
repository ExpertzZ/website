import '../styles/global.css';

function NavigationBar () {
  return (
    <div className="flex justify-center h-20 items-center font-roboto font-black text-xl">
        <ul className="flex gap-36">
            <li className="text-indigo-400">PROJECTS</li>
            <li className="text-indigo-400">CONTACT</li>
            <li className="text-indigo-400">RESUME</li>
        </ul>
    </div>
  );
}

export default NavigationBar;