import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import fs from "fs";

const config = {
  entryPoints: ["src/components/taro-swiper-week/index.tsx"],
  outdir: "lib",
  sourcemap: true,
  bundle: true,
  // minify: true,  开启压缩
  // splitting: true,
  format: "cjs",
  target: ["esnext"],
  plugins: [
    sassPlugin({
      type: "style"
    })
  ],
  external: [
    "react",
    "react-dom",
    "@tarojs/components",
    "@tarojs/runtime",
    "@tarojs/taro",
    "@tarojs/react"
  ]
};
esbuild.build(config).then(() => {
  // let indexJs = fs.readFileSync("./lib/index.js", "utf-8");
  // indexJs = `import './index.css'; \n` + indexJs;
  // fs.writeFileSync("./lib/index.js", indexJs)
});
