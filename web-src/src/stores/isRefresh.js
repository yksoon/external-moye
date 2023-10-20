import { defineStore } from "pinia";

export const useIsRefreshStore = defineStore("isRefresh", {
    state: () => ({ isRefresh: false }),
    actions: {
        setIsRefresh(param) {
            this.isRefresh = param;
        },
        //addList: (param) => this.list.push(param);
    },
    getters: {
        getIsRefresh(state) {
            return state.isRefresh;
        },
        //getAllList: (state) => state.list
    },
});
