import Input from '@Components/form/Input';
import Button from '@Components/ui/Button';
import { z } from 'zod';
import Form from '@Components/form/Form';
import { useForm } from '@Hooks/useForm';
import { newslettersFormDataType } from '@Types/formDataTypes';
import './HomeNewsletters.scss';

const newslettersFormSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
});

const HomeNewsletters: React.FC = () => {
  const form = useForm({
    schema: newslettersFormSchema,
  });

  const onSubmit = (data: newslettersFormDataType) => {
    form.reset();
    console.log(data);
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
              SUBSCRIBE
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletters;
