import TreeNode from "./TreeNode";

// Maps JavaScript type values to string symbols.
const typeToSym = {
  number: "\\d",
  string: "\\s"
};
// Maps string symbols to JavaScript type values.
const symToType = {
  d: "number",
  s: "string"
};

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root Root node of tree.
 * @return {string} serialized result.
 */
export function serialize(root) {
  // Recursive base Case is null
  if (root === null) {
    return "!";
  } else {
    // To store the value's type in the token, insert symbol after value.
    const symbol = typeToSym[typeof root.val];

    // Encode via Pre-Order Traversal, delimited with space character
    return `${root.val}${symbol} ${serialize(root.left)} ${serialize(
      root.right
    )}`;
  }
}

/**
 * Decodes encoded data to tree.
 *
 * @param {string} data serialized tree string.
 * @return {TreeNode} Root node of rebuilt tree.
 */
export function deserialize(data) {
  // Split input string into separate tokens for each tree node.
  const nodeTokens = data.split(" ");

  // Track progress through tokens array.
  let currentIndex = -1;

  function recursiveBuild() {
    // Each recursive call advances to next token in array.
    currentIndex += 1;
    const currentToken = nodeTokens[currentIndex];

    // Base case is null
    if (currentToken === "!") {
      return null;
    } else {
      // Split token into the value and type symbol
      let [value, symbol] = currentToken.split("\\");
      // Rehydrate value
      const type = symToType[symbol];
      switch (type) {
        case "number":
          value = Number(value);
          break;
        // no default
      }
      // Rebuild via Pre-Order Traversal
      const currentNode = new TreeNode(value);
      currentNode.left = recursiveBuild();
      currentNode.right = recursiveBuild();
      return currentNode;
    }
  }

  return recursiveBuild();
}
