import { SelectedPage, ClassType } from "../../shared/types";
import image1 from "@/assets/S-assets/S-img1.jpg";
import image2 from "@/assets/S-assets/S-img2.jpg";
import image3 from "@/assets/S-assets/S-img3.jpg";
import image4 from "@/assets/S-assets/S-img4.jpg";
import image5 from "@/assets/S-assets/S-img5.jpg";
import image6 from "@/assets/S-assets/S-img6.jpg";
import { motion } from "framer-motion";
import HText from "../../shared/Htext";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "    It was popularised in the 1960s with the release of Letraset versions of Lorem Ipsum.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "    It was popularised in the 1960s with the release of Letraset versions of Lorem Ipsum.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "    It was popularised in the 1960s with the release of Letraset versions of Lorem Ipsum.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "    It was popularised in the 1960s with the release of Letraset versions of Lorem Ipsum.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="mx-auto w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-[23px] items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
