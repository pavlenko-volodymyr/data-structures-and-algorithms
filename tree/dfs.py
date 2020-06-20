def dfs_walk_preorder(tree):
    visited = []

    def traverse(node):
        if node is None:
            return

        visited.append(node.value)
        if node.left:
            traverse(node.left)
        if node.right:
            traverse(node.right)
    
    traverse(tree.root)
    return visited


def dfs_walk_postorder(tree):
    visited = []

    def traverse(node):
        if node is None:
            return

        if node.left:
            traverse(node.left)
        if node.right:
            traverse(node.right)
        visited.append(node.value)
    
    traverse(tree.root)
    return visited


def dfs_walk_inorder(tree):
    visited = []

    def traverse(node):
        if node is None:
            return

        if node.left:
            traverse(node.left)
        visited.append(node.value)
        if node.right:
            traverse(node.right)
    
    traverse(tree.root)
    return visited
