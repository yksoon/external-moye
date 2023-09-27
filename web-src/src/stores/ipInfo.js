import { defineStore } from "pinia";

export const useIpInfoStore = defineStore("ipInfo", {
    persist: {
        storage: sessionStorage, //쓰고싶은 스토리지(세션 또는 로컬)
    },
    state: () => ({ ipInfo: "" }),
    actions: {
        setIpInfo(param) {
            this.ipInfo = param;
        },
        //addList: (param) => this.list.push(param);
    },
    getters: {
        getIpInfo(state) {
            return state.ipInfo;
        },
        //getAllList: (state) => state.list
    },
});
