// Modal.js
import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title} className="modal-image" />
                <p className='features'><span>Funcionalidades:</span> {project.features}</p>
                <br />
                <p className='description'>{project.description}</p>
                <br />
                <div className='projet-div'>
                <a className='projet' href={project.deploy} target="_blank" rel="noopener noreferrer">Deploy</a>
                <br />
                <a className='projet' href={project.code} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Modal;