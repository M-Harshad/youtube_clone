import { useState, useEffect } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import YoutubeLogo from "../assets/YoutubeLogo.png";
import { NavLink, Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import SearchInput from "../components/SearchInput";
import { IoMdClose } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { BiSolidVideos } from "react-icons/bi";
import { IoIosTrendingUp } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoIosMusicalNote } from "react-icons/io";
import { MdOutlineLocalMovies, MdOutlineLiveTv, MdOutlineFlag } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { FaNewspaper, FaRegLightbulb, FaPodcast, } from "react-icons/fa";
import { IoTrophyOutline } from "react-icons/io5";
import { GiHanger } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useGlobalState } from "../GlobalState";

function NavigationBar() {
  const {expand, setExpand} = useGlobalState();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const MainSideContent = [
    { name: 'Home', path: '/', activeFalse: <GoHome className="w-7 h-7 text-text" /> },
    { name: 'Shorts', path: '/shorts', activeFalse: <SiYoutubeshorts className="w-7 h-7 text-text" /> },
    { name: 'Subs', path: '/subs', activeFalse: <MdOutlineSubscriptions className="w-7 h-7 text-text" /> },
    { name: 'You', path: '/You', activeFalse: <BiSolidVideos className="w-7 h-7 text-text" /> },
  ];

  const explore = [
    { name: 'Trending', pic: <IoIosTrendingUp className="w-6 h-6 text-text" /> },
    { name: 'Shopping', pic: <RiShoppingBag4Line className="w-6 h-6 text-text" /> },
    { name: 'Music', pic: <IoIosMusicalNote className="w-6 h-6 text-text" /> },
    { name: 'Movies', pic: <MdOutlineLocalMovies className="w-6 h-6 text-text" /> },
    { name: 'Live', pic: <MdOutlineLiveTv className="w-6 h-6 text-text" /> },
    { name: 'Gaming', pic: <SiYoutubegaming className="w-6 h-6 text-text" /> },
    { name: 'News', pic: <FaNewspaper className="w-6 h-6 text-text" /> },
    { name: 'Sports', pic: <IoTrophyOutline className="w-6 h-6 text-text" /> },
    { name: 'Courses', pic: <FaRegLightbulb className="w-6 h-6 text-text" /> },
    { name: 'Fashion & Beauty', pic: <GiHanger className="w-6 h-6 text-text" /> },
    { name: 'Podcasts', pic: <FaPodcast className="w-6 h-6 text-text" /> },
  ];

  const lastSide = [
    { name: 'Settings', pic: <CiSettings className="w-6 h-6 text-text" /> },
    { name: 'Report History', pic: <MdOutlineFlag className="w-6 h-6 text-text" /> },
    { name: 'Help', pic: <GoQuestion className="w-6 h-6 text-text" /> },
    { name: 'Sent Feedback', pic: <IoMdInformationCircleOutline className="w-6 h-6 text-text" /> },
  ];

  // Small Screen Search Handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 428 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  // Sidebar expand/collapse
  useEffect(() => {
    const handleResize = () => setExpand(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <nav className="grid grid-row-[56px_1fr] h-screen">
        {!open ? (
          <div className="h-14 w-full bg-background pl-0 after358:pl-6 pr-6 flex items-center overflow-hidden justify-between sticky top-0 left-0 z-40">
            {/* Logo and SideBar Toggle Button */}
            <div className="flex items-center">
              <button
                onClick={() => setExpand(!expand)}
                className="rounded-full hover:bg-Hover w-10 h-10"
              >
                <HiOutlineBars3 className="text-text h-7 w-10" />
              </button>
              <NavLink to="/">
                <img
                  src={YoutubeLogo}
                  alt="youtube-logo"
                  className="min-w-18 max-w-[100px] ml-3 object-cover"
                />
              </NavLink>
            </div>

            {/* Search Bar */}
            <section className="flex items-center justify-center p-4 w-search flex-grow">
              <div className="hidden after428:block w-full max-w-search">
                <SearchInput />
              </div>

              {/* Small Screen Search Button */}
              <div
                onClick={() => setOpen(!open)}
                className="ml-2 after428:hidden flex min-w-10 min-h-10 rounded-full bg-secondary after358:ml-4 justify-center items-center hover:bg-Hover"
              >
                <FaSearch className="text-text" />
              </div>

              {/* Mic Button */}
              <button className="ml-2 mr-2 min-w-10 min-h-10 rounded-full bg-secondary after358:ml-5 flex justify-center items-center hover:bg-Hover">
                <MdKeyboardVoice className="text-text w-6 h-6" />
              </button>
            </section>

            {/* Login Button */}
            <button className="w-auto h-auto after428:flex gap-1 items-center rounded-3xl border border-Hover p-2 hover:border-transparent hover:bg-secondary after428:min-w-[86px] after428:min-h-[42px] whitespace-nowrap">
              <BsPersonCircle className="text-text" />
              <p className="hidden after428:text-text text-sm after428:block">
                Sign In
              </p>
            </button>
          </div>
        ) : (
          <div className="after428:hidden pl-6 w-full h-14 bg-background pr-6 flex items-center overflow-hidden justify-between fixed z-40">
            <SearchInput />
            <button
              onClick={() => setOpen(!open)}
              className="ml-3 min-w-10 min-h-10 rounded-full bg-secondary after358:ml-4 flex justify-center items-center"
            >
              <IoMdClose className="text-text w-6 h-6" />
            </button>
          </div>
        )}

        {/* Main Section */}
        <main className={`grid ${expand ? "grid-cols-[240px_1fr]" : "grid-cols-[50px_1fr]"} h-[calc(100vh-56px)]`}>

          <aside className={`bg-background ${expand ? "max-w-[240px]" : "max-w-[50px]"} pt-5 overflow-y-auto sidebar h-screen`}>
            <div>
              {MainSideContent.map((item, index) => (
                <NavLink
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  to={item.path}
                  className={`
                    ${expand 
                      ? `flex w-56 h-10 hover:bg-Hover items-center pl-3 mb-2 ${activeIndex === index ? "bg-Hover text-white" : "bg-transparent"}` 
                      : "grid grid-rows-1 w-full h-12 justify-center items-center hover:bg-Hover mb-8"}
                    rounded-lg
                  `}
                >
                  {item.activeFalse}
                  <p className={`text-text font-roboto pt-1 ${expand ? "text-NormSideNav pl-6" : "text-SmallSideNav"}`}>
                    {item.name}
                  </p>
                </NavLink>
              ))}

              <div className={`border-t-2 ml-1 mb-4 mt-4 border-Hover ${expand ? "block" : "hidden"}`}></div>

              <div className={`${expand ? "block" : "hidden"}`}>
                <h2 className="text-text text-lg pl-5 font-bold mb-3">Explore</h2>
                {explore.map((item, index) => (
                  <div key={index} className="flex w-56 h-10 hover:bg-Hover items-center pl-3 mb-1 rounded-lg">
                    {item.pic}
                    <p className="ml-3 text-text text-sm">{item.name}</p>
                  </div>
                ))}
              </div>

              <div className={`border-t-2 ml-1 mb-4 mt-4 border-Hover ${expand ? "block" : "hidden"}`}></div>

              <div className={`${expand ? "block" : "hidden"}`}>
                {lastSide.map((item, index) => (
                  <div key={index} className="flex w-56 h-10 hover:bg-Hover items-center pl-3 mb-1 rounded-lg">
                    {item.pic}
                    <p className="ml-3 text-text text-sm">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="min-h-full z-10">
            <Outlet />
          </div>
        </main>
      </nav>
    </section>
  );
}

export default NavigationBar;
