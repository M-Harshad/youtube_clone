import PropTypes from "prop-types";
import { useGlobalState } from "../GlobalState";

const NavigationBar = () => {
  const {expand, setExpand} = useGlobalState();
  return (
    <main className={`
      grid ${expand ? "grid-cols-4 grid-rows-10" : "grid-cols-5 grid-rows-8"} 
      gap-3 p-4 w-full box-border
    `}>
        <div className={`${expand ? "w-[368px] h-[280px]" : "w-[340px] h-[280px]"} bg-red-600 rounded-xl flex flex-col`}>
          {/* <img src="youtube.logo" alt="thumbnile" /> */}
          <div className="bg-green-600 w-full h-[180px] rounded-xl relative">
             <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
               10:25
             </div>
          </div>
          <div className="grid grid-cols-[50px_1fr] p-3">
             <div className="w-10 h-10 rounded-full bg-yellow-400"></div>
             <div>
              <p className={`ml-2 overflow-hidden text-ellipsis whitespace-nowrap ${expand ? "max-w-[280px]" : "max-w-[240px]"}`}>
                hello welcome to my youtube channel hello welcome to my youtube channel
              </p>
          <p className="ml-2">channel name</p>
          <p className="ml-2">Views Date</p>
             </div>
         </div>
      </div>



    </main>

  );
};


NavigationBar.propTypes = {
  expand: PropTypes.bool.isRequired,
};

export default NavigationBar;
