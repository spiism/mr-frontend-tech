// components/Modal.js
import ReactModal from "react-modal";

interface Item {
  id: number;
  title: string;
  price: number;
  imageURL: string;
  sizeOptions: { id: number; label: string }[];
  selectedSize: string;
}

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  items: Item[];
}

const Modal = ({ isOpen, onRequestClose, items }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
    >
      <div className="flex flex-wrap">
        {items.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <img
              src={item.imageURL}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold my-2">{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Selected Size: {item.selectedSize}</p>
          </div>
        ))}
      </div>
      <button
        className="block mt-4 mx-auto px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={onRequestClose}
      >
        Close Cart
      </button>
    </ReactModal>
  );
};

export default Modal;
