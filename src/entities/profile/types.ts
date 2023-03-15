import { type Country } from 'shared/consts/country';
import { type Currency } from 'shared/consts/currency';

export type Profile = {
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
  error?: string;
  readonly: boolean;
};
