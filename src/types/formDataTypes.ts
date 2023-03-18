import { z } from 'zod';

export const newslettersFormSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
});

export type NewslettersFormType = z.infer<typeof newslettersFormSchema>;

export const addressFormSchema = z.object({
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

export type AddressFormType = z.infer<typeof addressFormSchema>;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(5, 'Name must be atleast 5 characters long!')
    .max(50, 'Consider using shorter Name.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(5, 'Message must be atleast 5 characters long!'),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;
