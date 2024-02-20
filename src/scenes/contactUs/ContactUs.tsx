import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return <div>ContactUs</div>;
};

export default ContactUs;
