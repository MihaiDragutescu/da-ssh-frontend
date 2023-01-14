import './Modal.scss';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

interface ModalProps {
  children?: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = (props) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  return ReactDOM.createPortal(
    <div className='ssh-modal'>
      <div onClick={props.onClose} className='ssh-modal__overlay'></div>
      {props.children}
    </div>,
    document.querySelector('#search-overlay-container')!
  );
};

export default Modal;
