declare module '*.scss' {
  type ClassNames = {
    [className: string]: string;
  };
  const classNames: ClassNames;
  export = classNames;
}
