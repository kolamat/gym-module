import { HomeIcon, UserGroupIcon, AcademicCapIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "../../../shared/types";
import { motion } from "framer-motion";
import Htext from "../../../shared/Htext";

const Benefits: Array<Object> = [
{
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "",
}
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
<motion.div
onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
>
    {/* HEADER */}
<div className="md:my-5 md:w-3/5">
    <Htext>
        MORE THAN JUST A GYM
    </Htext>
    <p className="my-5 text-sm">
        We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease, we provide true care into each and every member
    </p>
</div>
{/* BENEFITS */}
<div className="mt-5 items-center justify-between gap-8 md:flex"></div>
</motion.div>
    </section>
  )
}

export default benefits;