import classes from "./InputDeleteBtn.module.css";
import { AiOutlineClose } from "react-icons/ai";

const InputDeleteBtn: React.FC<{ reset: () => void }> = ({ reset }) => {
  return <AiOutlineClose onClick={reset} className={classes.close} />;
};

export default InputDeleteBtn;
