
import { useGlobalState } from "../globalState/GlobalState";
import { Outlet } from "react-router-dom";
import SideBar from "../components/dashbord/SideBar/SideBar";
import { useState,useEffect } from "react";
import NavBar from "../components/dashbord/NavBar/NavBar";
import SmallNav from "../components/dashbord/NavBar/SmallNav";

function Dashboard() {
  const {expand, setExpand} = useGlobalState();
  const [open, setOpen] = useState(false);


 

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
 <nav>

        {!open ? (
            <NavBar open={open} setOpen={setOpen}  className="sticky top-0 left-0"/>
          ) : (
            <SmallNav open={open} setOpen={setOpen} />
         )}
      <div className="grid grid-cols-[auto_1fr] h-screen relative">
      
        <div className="sticky top-0 h-screen">
          <SideBar />
        </div>

        {/* Main Content, scrollable */}
        <div className="overflow-y-auto">
          <Outlet />
        </div>

      </div>

  </nav>
</section>


  );
}

export default Dashboard;
