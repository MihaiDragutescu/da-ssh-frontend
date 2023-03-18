import Input from '@Components/form/Input';
import Button from '@Components/ui/Button';
import Form from '@Components/form/Form';
import { useForm } from '@Hooks/useForm';
import { useState } from 'react';
import { timeout } from '@Utils/timeout';
import Spinner from '@Components/ui/Spinner';
import Swal from 'sweetalert2';
import {
  newslettersFormSchema,
  NewslettersFormType,
} from '@Types/formDataTypes';
import './HomeNewsletters.scss';

const HomeNewsletters: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    schema: newslettersFormSchema,
  });

  const onSubmit = async (data: NewslettersFormType) => {
    setIsSubmitting(true);
    await timeout(500);
    setIsSubmitting(false);
    Swal.fire({
      position: 'top',
      title: 'Thank you for subscribing!',
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
  };

  return (
    <section className='home-newsletters'>
      <div className='home-newsletters__container ssh-container'>
        <div className='home-newsletters__row ssh-row'>
          <h2 className='home-newsletters__title'>Hear more from us</h2>
          <h3 className='home-newsletters__subtitle'>
            Subscribe to our newsletter
          </h3>
          <Form
            className='home-newsletters__form'
            form={form}
            onSubmit={(values) => onSubmit(values)}
          >
            <Input
              className='home-newsletters__input'
              placeholder='Email...'
              type='email'
              {...form.register('email')}
            />
            <Button type='submit' className='home-newsletters__button'>
              {isSubmitting ? <Spinner /> : 'SUBSCRIBE'}
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletters;
