import { type Country } from 'shared/consts/country';
import { type Currency } from 'shared/consts/currency';
import { type ProfileValidationError, type ProfileError } from './consts';

export type Profile = {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
};

export type ProfileSchema = {
  data?: Profile;
  form?: Profile;
  loading: boolean;
  error?: ProfileError;
  readonly: boolean;
  validationErrors?: ProfileValidationError[];
};
