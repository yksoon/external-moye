import { defineStore } from "pinia";

export const useSpinnerStore = defineStore("isSpinner", {
    state: () => ({ isSpinner: false }),
    actions: {
        setIsSpinner(param) {
            this.isSpinner = param;
        },
        //addList: (param) => this.list.push(param);
    },
    getters: {
        getIsSpinner(state) {
            return state.isSpinner;
        },
        //getAllList: (state) => state.list
    },
});
