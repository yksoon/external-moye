import { defineStore } from "pinia";

export const useCodesStore = defineStore("codes", {
    persist: {
        storage: sessionStorage, //쓰고싶은 스토리지(세션 또는 로컬)
    },
    state: () => ({ codes: [] }),
    actions: {
        setCodes(param) {
            this.codes = param;
        },
        //addList: (param) => this.list.push(param);
    },
    getters: {
        getCodes(state) {
            return state.codes;
        },
        //getAllList: (state) => state.list
    },
});
