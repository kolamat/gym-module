import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";


type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between";
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/* LEFT-SIDE */}
                <img src={Logo} alt="logo" />

                {/* RIGHT-SIDE */}
                <div className={`${flexBetween} w-full`}>

                    {/* INNER-LEFT-SIDE */}
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <link
                         page="Home" 
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} 
                        />
                        <link page="Benefits">
                        <link page="Our_Classes">
                        <link page="Contact_Us">
                    </div>
                    {/* INNER-RIGHT-SIDE */}
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign_Up</p>
                        <button>Become_a_Member</button>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </nav>
  )
}

export default Navbar