import cpy from "cpy";
import makeDir from "make-dir";

async function copy() {
  await makeDir("./dist/js/lib");
  await cpy("node_modules/@glidejs/glide/dist/glide.min.js", "dist/js/lib/", {
    flat: true,
  });
}

copy();
