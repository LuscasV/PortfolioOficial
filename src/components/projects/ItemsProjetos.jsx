// ItemsProjetos.js
import React, { useState } from 'react';
import Modal from '../Modal/index';

const ItemsProjetos = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="work__card" >
        <img src={item.image} className="work__img" alt={item.title} />
        <h3 className="work__title">{item.title}</h3>
        <button className='button-modal' onClick={handleOpenModal}>Detalhes</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} project={item} />
    </>
  );
};

export default ItemsProjetos;