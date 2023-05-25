import { Morphel } from './morphel';
import type { MorphOptions } from './morphel';

export {Morphel}

export default function morphel(
  fromEl: Element,
  toNode: string | Node,
  options?: MorphOptions
) {
  return new Morphel(fromEl).morph(toNode, options);
}
