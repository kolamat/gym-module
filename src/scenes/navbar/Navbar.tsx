import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Links";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";


type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1023px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/* LEFT-SIDE */}
                <img src={Logo} alt="logo" />

                      {/* RIGHT-SIDE */}
                      { isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>

                    {/* INNER-LEFT-SIDE */}
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link
                         page="Home" 
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} 
                        />
                        <Link 
                        page="Benefits"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}
                        />
                        <Link 
                        page="Our_Classes"
                        selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}
                        />
                        <Link 
                        page="Contact_Us"
                        selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}
                        />
                    </div>
                    {/* INNER-RIGHT-SIDE */}
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign_Up</p>
                                  <ActionButton setSelectedPage={setSelectedPage}>
                                      Become_a_Member
                                  </ActionButton>
                              </div>
                          </div>
                      ) : (
                              <button
                                  className="rounded-full bg-secondary-500 p-2"
                              onClick={() => setIsMenuToggled( ! isMenuToggled)}
                              > 
                                  <Bars3Icon className="h-6 w-6 text-white" />
                                  </button>
                     ) }
            </div>
        </div>
          </div>
          {/* MOBILE-MENU */}
          {!isAboveMediumScreens && isMenuToggled && (
              <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                  {/* CLOSE-ICON */}
                  <div className="flex justify-end">
                      
                  </div>
           </div>   
          )}
    </nav>
  )
}

export default Navbar