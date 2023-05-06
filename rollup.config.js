import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

const output_plugins = [process.env.NODE_ENV === "production" && terser()];

export default [
  {
    input: "src/js/odse.js",
    plugins: [resolve(), commonjs()],
    output: [
      {
        file: "dist/js/odse.js",
        format: "iife",
        name: "odse",
        plugins: output_plugins,
      },
    ],
  },
  {
    input: "focus-visible/src/focus-visible.js",
    plugins: [resolve(), commonjs()],
    output: [
      {
        file: "dist/js/lib/focus-visible.js",
        format: "umd",
        plugins: output_plugins,
      },
    ],
  },
];
