// https://github.com/p2edwards/civet-watch-all
//
// Within an ESM Node.js application:
import { compile } from "@danielx/civet";

const civetCode = `
# My Civet source code
name := "World"

hello: (subject: string) =>
  "Hello, #{subject}!"

console.log hello name
`;

// Compile to TypeScript (default)
const tsCode = await compile(civetCode);
console.log("Compiled TypeScript:");
console.log(tsCode);

// Compile to JavaScript by passing an option
const jsCode = await compile(civetCode, { js: true });
console.log("\nCompiled JavaScript:");
console.log(jsCode);

// Compile with source maps
const tsCodeWithSourceMap = await compile(civetCode, { inlineMap: true });
console.log("\nCompiled TypeScript with inline source map:");
console.log(tsCodeWithSourceMap);


// Within a CommonJS Node.js application:
const { compile } = require("@danielx/civet");

const civetCode = `
# My Civet source code
name := "World"

hello: (subject: string) =>
  "Hello, #{subject}!"

console.log hello name
`;

// Use the compile function similarly
(async () => {
  const jsCode = await compile(civetCode, { js: true });
  console.log("Compiled JavaScript:");
  console.log(jsCode);
})();
