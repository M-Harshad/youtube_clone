
import { useGlobalState } from "../globalState/GlobalState";
import { Outlet } from "react-router-dom";
import NavBar from "../components/dashbord/NavBar";
import SmallNav from "../components/dashbord/SmallNav";
import SideBar from "../components/dashbord/SideBar";
import { useState,useEffect } from "react";

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
//     <section className="grid grid-cols-[auto_1fr] relative">
//     <aside className="sticky" >
//         <SideBar />
//     </aside>
//     <main className="grid grid-rows-[56px,1fr] relative">
//         <nav className="sticky top-0 left-0 bg-white z-10">
//             {!open ? (
//                 <NavBar open={open} setOpen={setOpen} />
//             ) : (
//                 <SmallNav open={open} setOpen={setOpen} />
//             )}
//         </nav>
//         <section className="overflow-auto">
//             <Outlet />
//         </section>
//     </main>
// </section>
<section>
<nav>
        {!open ? (
            <NavBar open={open} setOpen={setOpen}  className="sticky top-0 left-0"/>
          ) : (
            <SmallNav open={open} setOpen={setOpen} />
         )}
         <div className="grid grid-cols-[auto_1fr] relative">

              <SideBar className="sticky"/>
              <Outlet />
         </div>
  </nav>
</section>


  );
}

export default Dashboard;
