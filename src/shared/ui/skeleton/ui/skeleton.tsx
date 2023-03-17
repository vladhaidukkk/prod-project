import { type CSSProperties, memo, useMemo } from 'react';
import { clsx } from 'shared/utils/clsx';
import cls from './skeleton.module.scss';

type SkeletonProps = {
  className?: string;
  width: number | string;
  height: number | string;
  borderRadius?: number | string;
};

export const Skeleton = memo(({ className, width, height, borderRadius }: SkeletonProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width,
      height,
      borderRadius,
    }),
    [width, height, borderRadius]
  );

  return <div className={clsx(cls.skeleton, {}, [className])} style={styles} />;
});
