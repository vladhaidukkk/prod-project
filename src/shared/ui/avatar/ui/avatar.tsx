import { type CSSProperties, useMemo, memo } from 'react';
import { clsx } from 'shared/utils/clsx';
import cls from './avatar.module.scss';

type AvatarProps = {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
};

export const Avatar = memo(({ className, src, alt, size = 100 }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return <img src={src} alt={alt} className={clsx(cls.avatar, {}, [className])} style={styles} />;
});
