const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: process.env.NODE_ENV === "production" ? path.resolve(__dirname, "../build_prd") : path.resolve(__dirname, "../build")
  // publicPath: process.env.VUE_ENV === "production" ? path.resolve(__dirname, "../build_prd") : path.resolve(__dirname, "../build")
})
