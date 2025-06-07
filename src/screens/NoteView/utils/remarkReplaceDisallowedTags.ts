import { markdownAllowedElements } from '@/screens/NoteView/data/markdownAllowedElements';
import { Root } from 'hast';
import { visit } from 'unist-util-visit';

export const remarkReplaceDisallowedTags = () => (tree: Root) => {
  visit(tree, 'element', (node, index, parent) => {
    if (!markdownAllowedElements.includes(node.tagName)) {
      if (!parent || typeof index !== 'number') return;

      if ('tagName' in parent && parent.tagName === 'p') {
        parent.children.splice(index, 1, ...node.children);
      } else {
        node.tagName = 'div';
      }
    }
  });
};
