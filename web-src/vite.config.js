import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const path = require("path");

// https://vitejs.dev/config/

export default ({ mode }) => {
    return defineConfig({
        plugins: [
            vue({
                template: {
                    compilerOptions: {
                        isCustomElement: (tag) => {
                            return tag.startsWith("*"); // (return true)
                        },
                        jsx: "preserve",
                    },
                },
            }),
            vueJsx({
                // options are passed on to @vue/babel-plugin-jsx

                compilerOptions: {
                    jsx: "preserve",
                },
            }),
        ],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        build: {
            // mode에 따라 분기처리 참고 : https://minu0807.tistory.com/121
            outDir: mode === "development" ? "../build" : "../build_prd",
            // rollupOptions: {
            //     input: {
            //         main: resolve(__dirname, "index.html"),
            //     },
            // },
            rollupOptions: {
                output: {
                    globals: {
                        jquery: "window.jQuery",
                        jquery: "window.$",
                    },
                },
            },
        },
        // define: {
        //     global: {},
        // },
    });
};
