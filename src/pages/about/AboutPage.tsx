import { LayoutDirections } from '@Types/layouts';
import AboutSection from './AboutSection/AboutSection';

const AboutPage: React.FC = () => {
  return (
    <main id='main'>
      <div className='ssh-container px-[30px] pt-6 xsm:pt-8 pb-16 sm:pb-24 md:pb-32'>
        <div className='ssh-row'>
          <div className='about-us w-full'>
            <h1 className='about-us__title text-center'>About Us</h1>
            <div className='about-us__text mt-5 sm:mt-8 mb-5 sm:mb-8'>
              <span className='block text-center md:max-w-[725px] mx-auto text-brown text-[20px] sm:text-[24px] leading-6 sm:leading-7'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                consequat sit amet orci in rhoncus. Curabitur cursus urna a nibh
                cursus egestas. Curabitur eget varius nulla, a fringilla lacus.
                Vestibulum orci tortor, vestibulum ut efficitur accumsan, mattis
                ut mauris. Sed eros mi, imperdiet nec risus a, commodo malesuada
                felis. Ut non justo felis. Morbi nec laoreet metus, vel euismod
                metus. Aenean iaculis quam nec odio vestibulum, sed sagittis
                quam mollis. Suspendisse sit amet sem tellus.
              </span>
            </div>
          </div>
          <AboutSection image='https://ucarecdn.com/667c2ebb-fd38-41ef-9f93-66f835ce48da/-/quality/smart/-/format/webp/'>
            <h2 className='about-section__title'>Our Vision</h2>
            <p>
              Pellentesque fermentum tortor eget metus venenatis mollis. In quis
              interdum lectus, sed commodo erat. Etiam volutpat vestibulum ante,
              sit amet feugiat odio bibendum sit amet. Duis at vestibulum nunc.
              Donec at tempus urna, nec ornare ipsum. Vivamus non hendrerit dui,
              eget malesuada quam. Quisque vehicula, eros id suscipit lacinia,
              sem lorem eleifend augue, quis aliquam leo purus quis quam. Sed
              lacinia lorem quis erat eleifend sollicitudin et tincidunt libero.
            </p>
            <p>
              Pellentesque fermentum tortor eget metus venenatis mollis. In quis
              interdum lectus, sed commodo erat. Etiam volutpat vestibulum ante,
              sit amet feugiat odio bibendum sit amet. Duis at vestibulum nunc.
              Donec at tempus urna, nec ornare ipsum. Vivamus non hendrerit dui,
              eget malesuada quam. Quisque vehicula, eros id suscipit lacinia,
              sem lorem eleifend augue, quis aliquam leo purus quis quam. Sed
              lacinia lorem quis erat eleifend sollicitudin et tincidunt libero.
            </p>
            <p>
              Donec at tempus urna, nec ornare ipsum. Vivamus non hendrerit dui,
              eget malesuada quam. Quisque vehicula, eros id suscipit lacinia,
              sem lorem eleifend augue, quis aliquam leo purus quis quam. Sed
              lacinia lorem quis erat eleifend sollicitudin et tincidunt libero.
            </p>
          </AboutSection>
          <AboutSection
            direction={LayoutDirections.RIGHT_TO_LEFT}
            image='https://ucarecdn.com/ce17c2f9-c201-4d0f-a47f-b64de4da4a8f/-/quality/smart/-/format/webp/'
          >
            <h2 className='about-section__title'>Our Approach</h2>
            <p>
              Pellentesque fermentum tortor eget metus venenatis mollis. In quis
              interdum lectus, sed commodo erat. Etiam volutpat vestibulum ante,
              sit amet feugiat odio bibendum sit amet. Duis at vestibulum nunc.
              Donec at tempus urna, nec ornare ipsum. Vivamus non hendrerit dui,
              eget malesuada quam. Quisque vehicula, eros id suscipit lacinia,
              sem lorem eleifend augue, quis aliquam leo purus quis quam. Sed
              lacinia lorem quis erat eleifend sollicitudin et tincidunt libero.
            </p>
            <p>
              Pellentesque fermentum tortor eget metus venenatis mollis. In quis
              interdum lectus, sed commodo erat. Etiam volutpat vestibulum ante,
              sit amet feugiat odio bibendum sit amet. Duis at vestibulum nunc.
              Donec at tempus urna, nec ornare ipsum. Vivamus non hendrerit dui,
              eget malesuada quam. Quisque vehicula, eros id suscipit lacinia,
              sem lorem eleifend augue, quis aliquam leo purus quis quam. Sed
              lacinia lorem quis erat eleifend sollicitudin et tincidunt libero.
            </p>
            <p>
              Donec at tempus urna, nec ornare ipsum. Vivamus non hendrerit dui,
              eget malesuada quam. Quisque vehicula, eros id suscipit lacinia,
              sem lorem eleifend augue, quis aliquam leo purus quis quam. Sed
              lacinia lorem quis erat eleifend sollicitudin et tincidunt libero.
            </p>
          </AboutSection>
          <AboutSection
            image='https://ucarecdn.com/f2da7395-6990-44a4-a0e4-05e77896a11f/-/quality/smart/-/format/webp/'
            className='pb-0'
          >
            <h2 className='about-section__title'>Our Process</h2>
            <p>
              Pellentesque fermentum tortor eget metus venenatis mollis. In quis
              interdum lectus, sed commodo erat. Etiam volutpat vestibulum ante,
              sit amet feugiat odio bibendum sit amet. Duis at vestibulum nunc.
              Donec at tempus urna, nec ornare ipsum. Vivamus non hendrerit dui,
              eget malesuada quam. Quisque vehicula, eros id suscipit lacinia,
              sem lorem eleifend augue, quis aliquam leo purus quis quam. Sed
              lacinia lorem quis erat eleifend sollicitudin et tincidunt libero.
            </p>
            <p>
              Pellentesque fermentum tortor eget metus venenatis mollis. In quis
              interdum lectus, sed commodo erat. Etiam volutpat vestibulum ante,
              sit amet feugiat odio bibendum sit amet. Duis at vestibulum nunc.
              Donec at tempus urna, nec ornare ipsum. Vivamus non hendrerit dui,
              eget malesuada quam. Quisque vehicula, eros id suscipit lacinia,
              sem lorem eleifend augue, quis aliquam leo purus quis quam. Sed
              lacinia lorem quis erat eleifend sollicitudin et tincidunt libero.
            </p>
            <p>
              Donec at tempus urna, nec ornare ipsum. Vivamus non hendrerit dui,
              eget malesuada quam. Quisque vehicula, eros id suscipit lacinia,
              sem lorem eleifend augue, quis aliquam leo purus quis quam. Sed
              lacinia lorem quis erat eleifend sollicitudin et tincidunt libero.
            </p>
          </AboutSection>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
