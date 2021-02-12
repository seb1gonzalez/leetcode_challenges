var minDepth = function(root) {
    if(!root) return 0;
    const queue = [{ node: root, height: 1 }]
    while(queue.length) {
      const current = queue.shift();
      if (!current.node.left && !current.node.right)  {
          // as soon as we get the first height we break out of loop
        return current.height;
      }
      if(current.node.left) queue.push({ node: current.node.left, height: current.height + 1});
      if(current.node.right) queue.push({ node: current.node.right, height: current.height + 1});
    }
  }