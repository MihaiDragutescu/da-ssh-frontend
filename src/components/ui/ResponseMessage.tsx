interface ResponseMessageProps {
  children: React.ReactNode;
  className?: string;
}

const ResponseMessage: React.FC<ResponseMessageProps> = (props) => {
  return (
    <div
      className={`ssh-message flex justify-center py-8 sm:py-11 md:py-14 w-full ${
        props.className ?? ''
      }`}
    >
      <span className='text-center text-2xl text-brown sm:text-3xl md:text-4xl'>
        {props.children}
      </span>
    </div>
  );
};

export default ResponseMessage;
