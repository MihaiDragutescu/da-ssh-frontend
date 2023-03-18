import Form from '@Components/form/Form';
import Input from '@Components/form/Input';
import Button from '@Components/ui/Button';
import { useForm } from '@Hooks/useForm';
import { useState } from 'react';
import { timeout } from '@Utils/timeout';
import Spinner from '@Components/ui/Spinner';
import Swal from 'sweetalert2';
import Textarea from '@Components/form/Textarea';
import { contactFormSchema, ContactFormType } from '@Types/formDataTypes';
import './ContactForm.scss';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    schema: contactFormSchema,
  });

  const onSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true);
    await timeout(500);
    setIsSubmitting(false);
    Swal.fire({
      position: 'top',
      title: 'Thank you for your message!',
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
  };

  return (
    <section className='contact-form'>
      <div className='contact-form__form'>
        <Form form={form} onSubmit={(values) => onSubmit(values)}>
          <Input
            className='contact-form__input'
            placeholder='Full Name'
            type='text'
            {...form.register('fullName')}
          />
          <Input
            className='contact-form__input'
            placeholder='Email'
            type='email'
            {...form.register('email')}
          />
          <Textarea
            className='contact-form__textarea'
            placeholder='Your Message'
            {...form.register('message')}
          />
          <Button type='submit' className='contact-form__button'>
            {isSubmitting ? <Spinner /> : 'SUBMIT'}
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
