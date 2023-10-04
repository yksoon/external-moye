import { defineStore } from "pinia";

export const usePagesStore = defineStore("pages", {
    persist: {
        storage: sessionStorage, //쓰고싶은 스토리지(세션 또는 로컬)
    },
    state: () => ({ pages: "" }),
    actions: {
        setPages(param) {
            this.pages = param;
        },
        //addList: (param) => this.list.push(param);
    },
    getters: {
        getPages(state) {
            return state.pages;
        },
        //getAllList: (state) => state.list
    },
});
