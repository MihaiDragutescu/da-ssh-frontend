import FooterSocials from '@Components/layout/footer/subcomponents/FooterSocials';
import './ContactInfo.scss';

const ContactInfo: React.FC = () => {
  return (
    <section className='contact-info'>
      <div className='contact-info__col location-col'>
        <div className='contact-info__title'>
          <h1>Location</h1>
        </div>
        <div className='contact-info__location'>
          <span>
            151-171 Lorem ipsum dolor sit amet, consectetur adipiscing elit 5
            tristique in orci at fermentum 050691
          </span>
        </div>
      </div>
      <div className='contact-info__col socials-col'>
        <div className='contact-info__title'>
          <h1>Follow Us</h1>
        </div>
        <div className='contact-info__socials'>
          <FooterSocials />
        </div>
        <div className='contact-info__policy'>
          <span>© 2023 Privacy policy</span>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
