import ReactDOM from 'react-dom';
import { useEffect } from 'react';

interface ModalProps {
  children?: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  container: Element;
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
      <div
        onClick={props.onClose}
        className='ssh-modal__overlay absolute opacity-80 bg-[#553e3e66] inset-0'
      ></div>
      {props.children}
    </div>,
    props.container
  );
};

export default Modal;
