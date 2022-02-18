import classes from "./Modal.module.css";
import ReactDom from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal: React.FC<{ onClose: () => void }> = ({ children, onClose }) => {
  return ReactDom.createPortal(
    <>
      <div onClick={onClose} className={classes.overlay} />

      <div className={classes.modal}>
        <div onClick={onClose}>
          <AiOutlineClose className={classes.close} />
        </div>

        {children}
      </div>
    </>,
    document.getElementById("modal")!
  );
};

export default Modal;
