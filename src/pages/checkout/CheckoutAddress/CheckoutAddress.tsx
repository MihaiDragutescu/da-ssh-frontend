import Form from '@Components/form/Form';
import Input from '@Components/form/Input';
import Button from '@Components/ui/Button';
import { useForm } from '@Hooks/useForm';
import { useState } from 'react';
import { timeout } from '@Utils/timeout';
import Spinner from '@Components/ui/Spinner';
import Swal from 'sweetalert2';
import { addressFormSchema, AddressFormType } from '@Types/formDataTypes';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';
import { useDispatch } from 'react-redux';
import { AppDispatch, clearCart } from '@Store/index';
import './CheckoutAddress.scss';

const CheckoutAddress: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    schema: addressFormSchema,
  });

  const onSubmit = async (data: AddressFormType) => {
    setIsSubmitting(true);
    await timeout(500);
    setIsSubmitting(false);
    Swal.fire({
      position: 'top',
      title: 'Thank you for your order!',
      showConfirmButton: false,
      timer: 1500,
      willClose: () => {
        dispatch(clearCart());
        localStorage.clear();
      },
      didClose: () => {
        navigate(RouterPaths.HOME);
      },
    });
    form.reset();
  };

  return (
    <section className='checkout-address'>
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
    </section>
  );
};

export default CheckoutAddress;
