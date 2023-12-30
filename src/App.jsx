/* eslint-disable no-undef */
import "./App.css";
import image from "./assets/images/illustration-article.svg";
import av from "./assets/images/image-avatar.webp";

function App() {
  return (
    <div className="w-screen justify-center items-center h-screen absolute top-0 left-0 flex">
      <div className="w-[300px] h-1/2 flex flex-col justify-between p-4 bg-white border-black border-2 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,7)]">
        <img className=" w-full rounded-lg object-cover" src={image} alt="" />
        <div>
          <div className="text-black mt-5 projectYellowBody  text-left max-w-min px-2 text-sm font-bold rounded py-1">
            Learning
          </div>
        </div>

        <div className="text-black text-left text-xs py-2 font-semibold">
          Published 21 Dec 2023
        </div>

        <div className="text-black text-xl text-left font-bold">
          HTML & CSS foundations
        </div>

        <div className=" text-gray-500 text-xs text-left">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </div>

        <div className="flex items-center">
          <img className=" size-5" src={av} alt="" />
          <div className="text-black text-left text-xs font-bold ml-2">
            Greg Hooper
          </div>
        </div>
      </div>
      {/* <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Snehasis Debbarman</a>.
      </div> */}
    </div>
  );
}

export default App;
