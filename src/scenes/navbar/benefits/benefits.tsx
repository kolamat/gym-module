import { HomeIcon, UserGroupIcon, AcademicCapIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "../../../shared/types";
import { motion } from "framer-motion";
import Htext from "../../../shared/Htext";
import Benefit from "./Benefit";

const benefit: Array<BenefitType> = [
{
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}, 
{
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
},
{
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
<motion.div
onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
>
    {/* HEADER */}
<motion.div 
className="md:my-5 md:w-3/5"
initial="hidden"
whileInView="visible"
viewport={{once: true, amount: 0.5 }}
transition={{ duration: 0.5 }} 
variants={{
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0}
}}
>
    <Htext>
        MORE THAN JUST A GYM
    </Htext>
    <p className="my-5 text-sm">
        We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease, we provide true care into each and every member
    </p>
</motion.div>
{/* BENEFITS */}
 <motion.div 
 className="mt-5 items-center justify-between gap-8 md:flex"
 initial="hidden"
 whileInView="visible"
 viewport={{once: true, amount: 0.5}}
 variants={container}
 >
    {benefit.map((benefits: BenefitType) => ( 
    <Benefit
    key={benefits.title}
    icon={benefits.icon}
    title={benefits.title}
    description={benefits.description}
    setSelectedPage={setSelectedPage}
    />
    ))}  
</motion.div>
{/* GRAPHICS-AND-DESCRIPTION */}
<div>
    {/* GRAHIC*/}
    <img src="" alt="" />

    {/* DESCRIPTION */}
    <div>
        {/* TITLE */}

        {/* DESCRIPT */}

        {/* BUTTON */}
    </div>
</div>
</motion.div>
    </section>
  )
}

export default Benefits;