import morphdom from 'morphdom';

export interface MorphOptions {
  childrenOnly?: boolean;
  getNodeKey?: (node: Node) => any;
  onBeforeElChildrenUpdated?: (
    fromEl: HTMLElement,
    toEl: HTMLElement
  ) => boolean;
  onBeforeElUpdated?: (fromEl: HTMLElement, toEl: HTMLElement) => boolean;
  onBeforeNodeAdded?: (node: Node) => Node;
  onBeforeNodeDiscarded?: (node: Node) => boolean;
  onElUpdated?: (el: HTMLElement) => void;
  onNodeAdded?: (node: Node) => Node;
  onNodeDiscarded?: (node: Node) => void;
}

export default class Morphel<T extends Element = Element> {
  readonly element: T;

  originalHTML?: string;

  get el() {
    return this.element;
  }

  constructor(element: T) {
    this.element = element;
    this.originalHTML = element.outerHTML.toString();
  }

  morph(toNode: string | Node, options?: MorphOptions) {
    morphdom(this.element, toNode, options);
  }

  restore() {
    if (this.originalHTML) {
      morphdom(this.element, this.originalHTML);
    }
  }
}
