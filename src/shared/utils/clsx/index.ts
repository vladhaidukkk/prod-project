export function clsx(cls: string, mods: Record<string, boolean>, additional: string[]) {
  return [cls, ...additional, ...Object.keys(mods).filter((className) => mods[className])].join(
    ' '
  );
}
