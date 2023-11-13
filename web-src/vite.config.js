import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import mkcert from 'vite-plugin-mkcert';
import fs from 'fs';

const path = require("path");

// https://vitejs.dev/config/

export default ({ mode }) => {
    return defineConfig({
        // server: {
        //     https: {
        //         // key: '/usr/local/apache2/conf/ssl/moye.hicompint.com/2023/www_mo-ye.com.key',
        //         // cert: '/usr/local/apache2/conf/ssl/moye.hicompint.com/2023/www_mo-ye.com_cert.crt',
        //         key: fs.readFileSync('/usr/local/apache2/conf/ssl/moye.hicompint.com/2023/www_mo-ye.com.key'),
        //         cert: fs.readFileSync('/usr/local/apache2/conf/ssl/moye.hicompint.com/2023/www_mo-ye.com_cert.crt'),
        //     }
        // },
        server: { https: true },
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
            mkcert()
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
                        jquery: ["window.jQuery", "window.$"],
                        // jquery: "window.$",
                    },
                },
            },
        },
        // define: {
        //     global: {},
        // },
    });
};
