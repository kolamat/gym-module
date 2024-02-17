import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Links";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";


type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
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
                        <button>Become_a_Member</button>
                              </div>
                          </div>
                      ) : (
                    <div></div>
                     ) }
            </div>
        </div>

        </div>
    </nav>
  )
}

export default Navbar