import _ from 'lodash';
import History from './History';
import Tree from './Tree';

let o;
export default class TreeState {
  /**
   * @param {Tree | String | Object} treeData
   * @param {String} root
   */
  constructor(treeData, root) {
    this.tree = TreeState.buildTree(treeData, root);
    this.history = new History();
    this.selected = null;
    this.initialNode = null;
    if (this.tree)
      this.select(this.tree.root, true);
  }

  static buildTree(treeData, root) {
    if (!treeData || treeData.constructor.name === 'Tree')
      return treeData;
    const jsonObj = _.isString(treeData) ? TreeState.parseJson(treeData) : treeData;
    return jsonObj ? new Tree(jsonObj, root) : null;
  }

  /**
   * @param {TreeNode | String} node
   * @param {Boolean} initialNode
   */
  select(node, initialNode) {
    if (this.tree == null)
      return;

    if (_.isString(node)) {
      node = this.tree.root.getByPath(node);
      if (!node)
        return;
    }

    if (initialNode)
      this.initialNode = node;
    if (this.selected === node)
      return;
    this.selected = node;
    this.history.append(node);
  }

  isRootSelected() { return this.tree != null && this.selected === this.tree.root; }
  isInitialNodeSelected() { return this.tree != null && this.selected === this.initialNode; }
  canBack() { return this.history.canBack(); }
  canForward() { return this.history.canForward(); }
  back() { this.selected = this.history.back(); }
  forward() { this.selected = this.history.forward(); }

  static parseJson(jsonStr) {
    try {
      return JSON.parse(jsonStr);
    } catch (e) {
      try {
        /* eslint-disable no-eval */
        eval(`o=${jsonStr}`);
        return o;
      } catch (e1) {
        console.error(e1);
        return null;
      }
    }
  }
}
