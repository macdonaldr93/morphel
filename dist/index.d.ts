export interface MorphOptions {
    childrenOnly?: boolean;
    getNodeKey?: (node: Node) => any;
    onBeforeElChildrenUpdated?: (fromEl: HTMLElement, toEl: HTMLElement) => boolean;
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
    get el(): T;
    constructor(element: T);
    morph(toNode: string | Node, options?: MorphOptions): void;
    restore(): void;
}
