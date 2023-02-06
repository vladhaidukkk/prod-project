export function clsx(
  cls: string,
  mods: Record<string, boolean> = {},
  additional: (string | undefined)[] = []
) {
  return [cls, ...additional, ...Object.keys(mods).filter((className) => mods[className])]
    .filter(Boolean)
    .join(' ');
}
