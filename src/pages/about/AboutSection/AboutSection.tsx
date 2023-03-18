import { LayoutDirections } from '@Types/layouts';
import './AboutSection.scss';

interface aboutSectionInterface {
  direction?: LayoutDirections;
  image: string;
  children: React.ReactNode;
  className?: string;
}

const AboutSection: React.FC<aboutSectionInterface> = ({
  direction = LayoutDirections.LEFT_TO_RIGHT,
  ...props
}) => {
  return (
    <section
      className={`about-section about-section--${direction} ${
        props.className ?? ''
      }`}
    >
      <div className='about-section__col about-section__text'>
        {props.children}
      </div>
      <div className='about-section__col about-section__image'>
        <img src={props.image} alt='Our vision' />
      </div>
    </section>
  );
};

export default AboutSection;
