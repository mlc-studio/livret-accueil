import React from 'react';

import style from './Modal.module.css'

const Modal = ({ title = 'Modal', children, isOpen, onClose }: { title: String, children: React.ReactNode, isOpen: boolean, onClose: () => void }) => {
  return (
    <>
      {isOpen && (
        <div className={style.Modal}>
          <div className="ModalContainer">
            <div className={style.ModalContent}>
              <div className={style.ModalHeader}>
                <h2 className={style.ModalTitle}>{title}</h2>
                <button className={style.ModalClose} onClick={onClose}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={style.ModalCloseIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className={style.ModalBody}>
                {children}
              </div>
            </div>
            <div className={style.ModalBackground} onClick={onClose}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;