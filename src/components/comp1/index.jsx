import { openModal } from "../../zustand/modal-store/actions";
import { Button } from "../button";
import Modal from "../modal";

const Comp1 = () => {
  return (
    <>
      <section className="container">
        <h2>component 1</h2>
        <Button label="Modal 1" onClick={() => openModal("singlemodal")} />
      </section>
      <Modal modalKey="singlemodal">Add your content here</Modal>
    </>
  );
};

export default Comp1;
