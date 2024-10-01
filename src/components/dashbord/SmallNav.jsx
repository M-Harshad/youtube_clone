import { useGlobalState } from "../../globalState/GlobalState";
import { IoMdClose } from "react-icons/io";
import SearchInput from "./SearchInput";


function SmallNav({open, setOpen}) {


  return (
    <div className="after428:hidden pl-6 w-full h-14 bg-background pr-6 flex items-center overflow-hidden justify-between fixed z-40">
            <SearchInput />
            <button
              onClick={() => setOpen(!open)}
              className="ml-3 min-w-10 min-h-10 rounded-full bg-secondary after358:ml-4 flex justify-center items-center"
            >
              <IoMdClose className="text-text w-6 h-6" />
            </button>
          </div>
  )
}

export default SmallNav