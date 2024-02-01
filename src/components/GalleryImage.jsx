import { useState } from "react";
import Modal from "react-bootstrap/Modal";

// eslint-disable-next-line react/prop-types
const GalleryImage = ({ imageSrc }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="overflow-hidden w-[20rem] max-[350px]:w-[16rem] group cursor-pointer"
        onClick={handleShow}
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:transfrom transition-transform duration-300"
        />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        dialogClassName="w-[90%] mx-auto"
      >
        <Modal.Header closeButton className="px-0 mx-0">
          <div className="flex justify-end w-[200%]">
            <button onClick={handleClose} className="text-4xl">
              &times;
            </button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <img src={imageSrc} alt="" className="w-full h-full" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GalleryImage;
