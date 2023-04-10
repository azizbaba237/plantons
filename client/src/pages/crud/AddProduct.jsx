import React, { useState } from "react";
import AddProductModal from "../../modal/AddProductModal";


// auto add id remain 
function AddProduct() {
  const [showModal, setShowModal] = useState(false);
  const handlOnClose = () => setShowModal(false);
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-400 p-6 font-medium hover:bg-gray-600 hover:text-white"
      >
        (+) Add Product
      </button>
      <AddProductModal onClose={handlOnClose} visible={showModal} />
    </div>
  );
}

export default AddProduct;
