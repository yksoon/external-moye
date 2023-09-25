import { defineStore } from "pinia";

export const useResultCodeStore = defineStore("resultCode", {
    persist: {
        storage: sessionStorage, //쓰고싶은 스토리지(세션 또는 로컬)
    },
    state: () => ({ resultCode: [] }),
    actions: {
        setResultCode(param) {
            this.resultCode = param;
        },
        //addList: (param) => this.list.push(param);
    },
    getters: {
        getResultCode(state) {
            return state.resultCode;
        },
        //getAllList: (state) => state.list
    },
});
