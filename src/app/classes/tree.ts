import { UtilService } from '../services/util.service';

type Json = {
  [index: string]: Json | string | number | boolean | Array<string>;
};

export class TreeNode<T> {
  private _key: string;
  private _value: T | null = null;
  private _children: TreeNode<T>[] = [];
  private _depth = 1;
  public _isRoot: boolean;

  get key() {
    return this._key;
  }

  get children() {
    return this._children;
  }

  get value() {
    return this._value;
  }

  get depth() {
    if (this._depth === 1) {
      this.calculateDepth(this);
    }

    return this._depth;
  }

  calculateDepth(node: TreeNode<T>, currentDepth: number = 2) {
    if (this._depth <= currentDepth && node.hasChildren()) {
      currentDepth += 1;
    }

    for (const child of node.children) {
      if (child.hasChildren()) {
        const depth = this.calculateDepth(child, currentDepth);

        if (depth >= this._depth) {
          this._depth = depth;
        }
      }
    }

    return currentDepth;
  }

  constructor(key: string, value: T, isRoot?: boolean) {
    this._key = key;
    this._value = value;
    this._isRoot === undefined ? false : isRoot;
  }

  getChild(index: number) {
    return this._children[index];
  }

  addChild<S extends T>(node: TreeNode<S>) {
    this._children.push(node);
  }

  hasChildren() {
    return this._children.length !== 0;
  }

  isRoot() {
    return this._isRoot;
  }
}

export class Tree<T> {
  private _root: TreeNode<T>;
  private static util = new UtilService();

  constructor(root: TreeNode<T>) {
    this._root = root;
  }

  get root() {
    return this._root;
  }

  static toArray<S>(currentNode: TreeNode<S>, array: TreeNode<S>[] = []) {
    array.push(currentNode);
    if (currentNode.hasChildren()) {
      for (const child of currentNode.children) {
        array = this.toArray(child, array);
      }
    }
    return array;
  }

  static fromJson(json: Json, node: TreeNode<unknown>) {
    const jsonKeys = Object.keys(json);
    for (const key of jsonKeys) {
      if (Tree.util.isJson(json[key])) {
        let newNode = new TreeNode(key, null);
        //@ts-ignore
        newNode = Tree.fromJson(json[key] as Json, newNode);
        node.addChild(newNode);
      } else {
        node.addChild(new TreeNode(key, json[key]));
      }
    }

    return node;
  }
}
