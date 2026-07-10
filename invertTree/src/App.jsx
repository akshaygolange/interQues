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

  const something = `<h3>something</h3>`;
  console.log(something);

  return (
    <div>
      {/* <div>{something}</div> */}  {/* instead   */}

      {/* Make sure there is no text, no <p>, no spaces between <div> and </div> - no children inside div */}

      <div dangerouslySetInnerHTML={{__html:something}}></div>


      <button onClick={() => setTree(invertTree(tree))}>Invert</button>
      <pre>{JSON.stringify(tree, null, 2)}</pre>
    </div>
  );
}
