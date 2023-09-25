import { defineStore } from "pinia";

export const useAlertStore = defineStore("isAlertOpen", {
    state: () => ({ isAlertOpen: false }),
    actions: {
        setIsAlertOpen(param) {
            this.isAlertOpen = param;
            console.log(param);
        },

        //addList: (param) => this.list.push(param);
    },
    getters: {
        getIsAlertOpen(state) {
            return state.isAlertOpen;
        },
        //getAllList: (state) => state.list
    },
});
