import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Mentorness = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Machine Learning
        <span className="text-textGreen tracking-wide">Mentorness</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2024 - April 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led projects on Customer Churn Prediction and World Cup 2023 Analysis, demonstrating strong data analysis
          skills.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Efficiently managed remote tasks using collaborative tools for streamlined communication.
          Showcased adeptness in research methodologies through successful project execution.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Ensured seamless operations by overseeing remote tasks effectively.
        </li>
      </ul>
    </motion.div>
  );
};

export default Mentorness;
