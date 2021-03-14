# Issues with Webpack dev server

Adding browserlist to package.json makes reloading or hot reload not work
```
  "browserslist": [
    "<2%",
    "ie 11",
    "not dead"
  ],
```
Solution and Reference for Fix (Webpack 5)
https://github.com/webpack/webpack-dev-server/issues/2758
