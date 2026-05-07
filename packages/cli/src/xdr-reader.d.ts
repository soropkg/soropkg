declare module "@stellar/js-xdr" {
  export class XdrReader {
    constructor(data: Buffer | Uint8Array);
    readonly eof: boolean;
    read(n: number): Buffer;
    readUInt32(): number;
    readInt32(): number;
  }
}
