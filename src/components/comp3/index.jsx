import { closeModal, openModal } from "../../zustand/modal-store/actions";
import { Button } from "../button";
import Modal from "../modal";

const Comp3 = () => {
  return (
    <>
      <section className="container">
        <h2>Component 3</h2>
        <p>Nested Modals</p>
        <Button label="Modal 3" onClick={() => openModal("innerModal")} />
      </section>
      <Modal title="Inner Modal 1" modalKey="innerModal">
        <Button label="Open modal" onClick={() => openModal("innerModal2")} />
      </Modal>
      <Modal
        title="Inner Modal 2"
        modalKey="innerModal2"
        width="30%"
        height="30%"
      >
        <Button
          label="Close single modal"
          onClick={() => closeModal("innerModal2")}
        />
        <Button
          label="Close all modals"
          onClick={() => closeModal("innerModal", "innerModal2")}
        />
      </Modal>
    </>
  );
};

export default Comp3;
