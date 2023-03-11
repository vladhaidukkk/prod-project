// https://dev.to/harry0000/a-bit-convenient-typescript-type-definitions-for-objectentries-d6g
type TupleEntry<
  T extends readonly unknown[],
  I extends unknown[] = [],
  R = never
> = T extends readonly [infer Head, ...infer Tail]
  ? TupleEntry<Tail, [...I, unknown], R | [`${I['length']}`, Head]>
  : R;

type ObjectEntry<T extends object> = T extends object
  ? { [K in keyof T]: [K, Required<T>[K]] }[keyof T] extends infer E
    ? E extends [infer K, infer V]
      ? K extends string | number
        ? [`${K}`, V]
        : never
      : never
    : never
  : never;

type Entry<T extends object> = T extends readonly [unknown, ...unknown[]]
  ? TupleEntry<T>
  : T extends ReadonlyArray<infer U>
  ? [`${number}`, U]
  : ObjectEntry<T>;

type Entries<T extends object> = ReadonlyArray<Entry<T>>;

export function typedEntries<T extends object>(object: T): Entries<T> {
  return Object.entries(object) as unknown as Entries<T>;
}
