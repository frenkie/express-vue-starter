SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "express-vue-starter/": "js/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.18"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "express-vue-starter": {
      "format": "esm",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "text": "github:systemjs/plugin-text@0.0.9",
    "vue": "npm:vue@2.1.8"
  },
  packages: {
    "vue": {
      "main": "dist/vue.js"
    }
  }
});
