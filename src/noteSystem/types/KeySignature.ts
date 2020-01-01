import { StringConvertible } from "string-converter";
import { Accidential } from ".";

export interface KeySignature extends StringConvertible {
  name: string;
  type: Accidential;
  signatures: number;
}
