import ReactDOM from "react-dom";
import { useModalStore } from "../../zustand/modal-store";
import { closeModal } from "../../zustand/modal-store/actions";
import { useEffect } from "react";
import CloseIcon from "../svg/closeIcon";
import "./styles.css";

const Modal = ({
  modalKey,
  title = "Modal 1",
  width = "40%",
  height = "40%",
  children,
}) => {
  const { storeModalKey } = useModalStore();

  useEffect(() => {
    if (storeModalKey?.length) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [storeModalKey]);

  return ReactDOM.createPortal(
    <>
      {storeModalKey?.some((s) => s === modalKey) && (
        <>
          <section
            className="modalContainer"
            onClick={() => closeModal(modalKey)}
          />
          <section
            className="modalWrapper"
            style={{ width: `${width}`, height: `${height}` }}
          >
            <CloseIcon
              className="closeIcon"
              onClick={() => closeModal(modalKey)}
            />
            <h3 className="title">{title}</h3>
            {children}
          </section>
        </>
      )}
    </>,
    document.querySelector("#modal")
  );
};

export default Modal;
