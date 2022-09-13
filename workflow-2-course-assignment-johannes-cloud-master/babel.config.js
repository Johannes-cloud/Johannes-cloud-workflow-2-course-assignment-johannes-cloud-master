module.exports = {
    presets: [
     ["@babel/preset-env", { targets: { node: "current" } }],
     // this preset is the new addition
     "@babel/preset-typescript",
    ],
};