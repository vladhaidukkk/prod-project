type DeepPartial<Thing> = Thing extends Function
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? Array<DeepPartial<InferredArrayMember>>
  : Thing extends object
  ? {
      [Key in keyof Thing]?: DeepPartial<Thing[Key]>;
    }
  : Thing | undefined;
