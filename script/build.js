const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const config = {
  entryPoints: ["src/components/taro-swiper-week/index.tsx"],
  outdir: "lib",
  sourcemap: true,
  bundle: true,
//   minify: true,  开启压缩
  splitting: true,
  format: "esm",
  target: ["esnext"],
  plugins: [sassPlugin()],
  external: [
    'react',
    'react-dom',
    '@tarojs/components',
    '@tarojs/runtime',
    '@tarojs/taro',
    '@tarojs/react',
  ]
};
esbuild.build(config);
