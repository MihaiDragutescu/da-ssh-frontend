import ContactInfo from './ContactInfo/ContactInfo';
import ContactForm from './ContactForm/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <main id='main'>
      <div className='ssh-container px-[30px] pt-6 xsm:pt-8 pb-16 sm:pb-20'>
        <div className='ssh-row'>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
