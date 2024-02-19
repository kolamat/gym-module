import { useEffect, useState } from "react";
import Home from "./scenes/navbar/home/home"
import Benefits from "./scenes/navbar/benefits/Benefits"
import Navbar from "./scenes/navbar/Navbar";
import { SelectedPage } from "@/shared/types";


function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsTopOfPage(true);
            setSelectedPage(SelectedPage.Home)
        }
        if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
 } , [])    

  return <div className="app bg-gray-20">
      <Navbar 
          isTopOfPage={isTopOfPage}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage} 
      />  
    <Home setSelectedPage={setSelectedPage}  />
    <Benefits setSelectedPage={setSelectedPage}  /> 
  </div>;
}

export default App;
