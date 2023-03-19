import { addCommentActions, addCommentReducer, selectAddCommentText } from '../../model';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { clsx } from 'shared/utils/clsx';
import {
  type AsyncReducersMap,
  useAsyncReducers,
  useAppDispatch,
  useAppSelector,
} from 'shared/utils/hooks';
import cls from './add-comment-form.module.scss';
import { memo, useCallback } from 'react';

const asyncReducers: AsyncReducersMap = {
  addComment: {
    reducer: addCommentReducer,
    destroy: true,
  },
};

export type AddCommentFormProps = {
  className?: string;
  onSendComment: (text: string) => void;
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const text = useAppSelector(selectAddCommentText);

  useAsyncReducers(asyncReducers);

  const commentTextChangeHandler = useCallback(
    (value: string) => {
      dispatch(addCommentActions.textSet(value));
    },
    [dispatch]
  );

  const sendCommentHandler = useCallback(() => {
    onSendComment(text);
    dispatch(addCommentActions.textSet(''));
  }, [dispatch, onSendComment, text]);

  return (
    <div className={clsx(cls.addCommentForm, {}, [className])}>
      <Input
        className={cls.input}
        value={text}
        onChange={commentTextChangeHandler}
        placeholder={t('Enter comment text')}
      />
      <Button variant="outlined" onClick={sendCommentHandler}>
        {t('Send')}
      </Button>
    </div>
  );
});

export default AddCommentForm;
