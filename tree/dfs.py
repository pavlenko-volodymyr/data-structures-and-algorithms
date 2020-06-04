def dfs_walk(tree):
    visited = []

    def travers(node):
        visited.append(node.value)
        if node.left:
            travers(node.left)
        if node.right:
            travers(node.right)
    
    travers(tree.root)
    return visited