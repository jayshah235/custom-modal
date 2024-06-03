import { openModal } from "../../zustand/modal-store/actions";
import { Button } from "../button";

const Comp2 = () => {
  return (
    <>
      <section className="container">
        <h2>Component 2</h2>
        <p>Opening modal 1 from component 2</p>
        <Button label="Modal 2" onClick={() => openModal("singlemodal")} />
      </section>
    </>
  );
};

export default Comp2;
