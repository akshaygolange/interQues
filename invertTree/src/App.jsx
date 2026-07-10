import { useState } from "react";

const initialTree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

function invertTree(node) {
  if (!node) return null;
  return {
    ...node,
    left: invertTree(node.right),
    right: invertTree(node.left),
  };
}

export default function App() {
  const [tree, setTree] = useState(initialTree);
  // console.log(tree);

  return (
    <div>
      <button onClick={() => setTree(invertTree(tree))}>Invert</button>
      <pre>{JSON.stringify(tree, null, 2)}</pre>
    </div>
  );
}
