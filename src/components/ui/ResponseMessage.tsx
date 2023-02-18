interface ResponseMessageProps {
  children: React.ReactNode;
}

const ResponseMessage: React.FC<ResponseMessageProps> = (props) => {
  return (
    <div className='ssh-message flex justify-center py-8 sm:py-11 md:py-14'>
      <span className='text-red-800 text-4xl text-brown'>{props.children}</span>
    </div>
  );
};

export default ResponseMessage;
