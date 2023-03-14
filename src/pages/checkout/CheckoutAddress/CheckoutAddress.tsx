import { z } from 'zod';
import Form from '@Components/form/Form';
import Input from '@Components/form/Input';
import Button from '@Components/ui/Button';
import { useForm } from '@Hooks/useForm';
import { useState } from 'react';
import { timeout } from '@Utils/timeout';
import Spinner from '@Components/ui/Spinner';
import Swal from 'sweetalert2';
import { addressFormDataType } from '@Types/formDataTypes';
import './CheckoutAddress.scss';

const addressFormSchema = z.object({
  firstName: z
    .string()
    .min(3, 'First Name must be atleast 3 characters long!')
    .max(50, 'Consider using shorter First Name.'),
  lastName: z
    .string()
    .min(3, 'Last Name must be atleast 3 characters long!')
    .max(50, 'Consider using shorter Last Name.'),
  streetAddress: z
    .string()
    .min(6, 'Address must be atleast 6 characters long!')
    .max(256, 'Consider using shorter Address.'),
  apartment: z
    .string()
    .optional()
    .refine(
      (value) => !value || value.length >= 6,
      'Apartment/Suite must be atleast 6 characters long!'
    ),
  country: z
    .string()
    .min(3, 'Country must be atleast 3 characters long!')
    .max(50, 'Consider using shorter Country.'),
  city: z
    .string()
    .min(3, 'City must be atleast 3 characters long!')
    .max(50, 'Consider using shorter City.'),
  zipCode: z
    .string()
    .min(3, 'Zip Code must be atleast 3 characters long!')
    .max(50, 'Consider using shorter Zip Code.'),
  phone: z
    .string()
    .refine(
      (value) => /^[\s()+-]*([0-9][\s()+-]*){6,20}/.test(value),
      'Please enter a valid phone number.'
    ),
});

const CheckoutAddress: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    schema: addressFormSchema,
  });

  const onSubmit = async (data: addressFormDataType) => {
    setIsSubmitting(true);
    await timeout(500);
    setIsSubmitting(false);
    Swal.fire({
      position: 'top',
      title: 'Thank you for your order!',
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
  };

  return (
    <div className='checkout-address'>
      <div className='checkout-address__title'>
        <h1>Shipping Address</h1>
      </div>
      <div className='checkout-address__form'>
        <Form form={form} onSubmit={(values) => onSubmit(values)}>
          <div className='checkout-address__form-col'>
            <Input
              className='checkout-address__input'
              placeholder='First Name'
              type='text'
              {...form.register('firstName')}
            />
            <Input
              className='checkout-address__input'
              placeholder='Last Name'
              type='text'
              {...form.register('lastName')}
            />
          </div>
          <Input
            className='checkout-address__input'
            placeholder='Street Address'
            type='text'
            {...form.register('streetAddress')}
          />
          <Input
            className='checkout-address__input'
            placeholder='Apartment/Suite'
            type='text'
            {...form.register('apartment')}
          />
          <Input
            className='checkout-address__input'
            placeholder='Country'
            type='text'
            {...form.register('country')}
          />
          <Input
            className='checkout-address__input'
            placeholder='City'
            type='text'
            {...form.register('city')}
          />
          <Input
            className='checkout-address__input'
            placeholder='Zip Code'
            type='text'
            {...form.register('zipCode')}
          />
          <Input
            className='checkout-address__input'
            placeholder='Phone +40 743 269 539'
            type='text'
            {...form.register('phone')}
          />
          <Button type='submit' className='checkout-address__button'>
            {isSubmitting ? <Spinner /> : 'SUBMIT'}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutAddress;
