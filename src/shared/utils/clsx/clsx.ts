export function clsx(
  cls: string,
  mods: Record<string, boolean | undefined> = {},
  additional: Array<string | undefined> = []
) {
  return [cls, ...additional, ...Object.keys(mods).filter((className) => mods[className])]
    .filter(Boolean)
    .join(' ');
}
