import * as React from 'react';
import {
  FlatTree as Tree,
  TreeItem,
  TreeItemLayout,
  HeadlessFlatTreeItemProps,
  useHeadlessFlatTree_unstable,
} from '@fluentui/react-tree';
import story from './TreeSingleSelection.md';

type Item = HeadlessFlatTreeItemProps & { content: string };

const defaultItems: Item[] = [
  { value: '1', content: 'Level 1, item 1' },
  { value: '1-1', parentValue: '1', content: 'Level 2, item 1' },
  { value: '1-2', parentValue: '1', content: 'Level 2, item 2' },
  { value: '2', content: 'Level 1, item 2' },
  { value: '2-1', parentValue: '2', content: 'Level 2, item 1' },
  { value: '2-1-1', parentValue: '2-1', content: 'Level 3, item 1' },
  { value: '2-2', parentValue: '2', content: 'Level 2, item 2' },
  { value: '3', content: 'Level 1, item 3' },
];

export const TreeSingleSelection = () => {
  const flatTree = useHeadlessFlatTree_unstable(defaultItems, {
    defaultOpenItems: ['1', '2', '2-1'],
    selectionMode: 'single',
  });

  return (
    <Tree {...flatTree.getTreeProps()} aria-label="Tree">
      {Array.from(flatTree.items(), flatTreeItem => {
        const { content, ...treeItemProps } = flatTreeItem.getTreeItemProps();
        return (
          <TreeItem {...treeItemProps} key={flatTreeItem.value}>
            <TreeItemLayout>{content}</TreeItemLayout>
          </TreeItem>
        );
      })}
    </Tree>
  );
};

TreeSingleSelection.parameters = {
  docs: {
    description: {
      story,
    },
  },
};
