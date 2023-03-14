export type newslettersFormDataType = {
  email: string;
};

export type addressFormDataType = {
  firstName: string;
  lastName: string;
  streetAddress: string;
  apartment?: string;
  country: string;
  city: string;
  zipCode: string;
  phone: string;
};

export type contactFormDataType = {
  fullName: string;
  email: string;
  message: string;
};
