/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface NodeModule {
  hot: {
    accept(path: string, fn: () => void, callback?: () => void): void;
  };
}

declare interface Library {
  add: (icon: any) => void;
}

declare interface Body {
  bodyUsed: boolean;
  body: NodeJS.ReadableStream;
  json(): Promise<any>;
  json<T>(): Promise<T>;
  text(): Promise<string>;
  buffer(): Promise<Buffer>;
}
