import { type FC, lazy } from 'react';
import { type AddCommentFormProps } from './add-comment-form';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () => import('./add-comment-form')
);
