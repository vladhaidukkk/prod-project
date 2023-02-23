import { type CounterSchema } from 'entities/counter';
import { type AuthSchema } from 'entities/auth';

export type StateSchema = {
  counter: CounterSchema;
  auth: AuthSchema;
};
