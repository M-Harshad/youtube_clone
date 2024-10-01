import SearchInput from "./SearchInput"
import { useGlobalState } from "../../globalState/GlobalState";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";



function NavBar({open, setOpen}) {
    const {expand, setExpand} = useGlobalState();
  return (
    <div className="h-14 w-full bg-background pl-0 after358:pl-6 pr-6 flex items-center overflow-hidden justify-between ">
    {/* Logo and SideBar Toggle Button */}
    <div className="flex items-center">
      <button
        onClick={() => setExpand(!expand)}
        className="rounded-full hover:bg-Hover w-10 h-10"
      >
        <HiOutlineBars3 className="text-text h-7 w-10" />
      </button>
      <NavLink to="/">

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
  )
}

export default NavBar