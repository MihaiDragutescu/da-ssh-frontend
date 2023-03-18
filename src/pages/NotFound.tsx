import NoContent from '@Components/ui/NoContent';

const NotFound: React.FC = () => {
  return (
    <main id='main'>
      <div className='ssh-container py-24'>
        <div className='ssh-row full-height'>
          <NoContent>Page not found!</NoContent>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
