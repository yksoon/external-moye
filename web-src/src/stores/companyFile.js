import { defineStore } from "pinia";

export const useCompanyFileStore = defineStore("companyFile", {
    persist: {
        storage: sessionStorage, //쓰고싶은 스토리지(세션 또는 로컬)
    },
    state: () => (""),
    actions: {
        setCompanyFile(param) {
            this.companyFile = param;
        },
        //addList: (param) => this.list.push(param);
    },
    getters: {
        getCompanyFile(state) {
            return state.companyFile;
        },
        //getAllList: (state) => state.list
    },
});
