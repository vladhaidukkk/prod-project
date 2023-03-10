import { type CounterSchema } from 'entities/counter';
import { type AuthSchema } from 'entities/auth';
import { type LoginSchema } from 'features/auth-by-username';

export type StateSchema = {
  counter: CounterSchema;
  auth: AuthSchema;
  login: LoginSchema;
};
