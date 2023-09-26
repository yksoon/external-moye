import { defineStore } from "pinia";
import { ref, computed } from "vue";

// 알럿
export const useAlertStore = defineStore("alert", () => {
    // state: () => ({ isAlertOpen: false }),

    const isOpen = ref(false);
    const title = ref("");
    const message = ref("");
    const callback = ref(undefined);

    const setIsAlertOpen = (params) => {
        isOpen.value = true;
        title.value = params.title;
        message.value = params.message;
        // callback.value =  () => params.callback()
        callback.value = params.callback ? () => params.callback() : null;
    };

    const setIsAlertClose = async (result, callback) => {
        isOpen.value = false;
        title.value = "";
        message.value = "";

        if (result) {
            if (typeof callback === "function") {
                await callback();
            }
        }
    };

    return {
        isOpen,
        title,
        message,
        callback,
        setIsAlertOpen,
        setIsAlertClose,
    };

    // actions: {
    //     setIsAlertOpen() {
    //         this.isOpen = true;
    //     },
    //     setIsAlertClose() {
    //         this.isAlertOpen = false;
    //     },

    //     //addList: (param) => this.list.push(param);
    // },
    // getters: {
    //     getIsAlertOpen(state) {
    //         return state.isAlertOpen;
    //     },
    //     //getAllList: (state) => state.list
    // },
});

// 컨펌
export const useConfirmStore = defineStore("confirm", () => {
    // state: () => ({
    //     isConfirmOpen: false,
    //     confirmTitle: "",
    //     confirmMessage: "",
    // }),

    const isOpen = ref(false);
    const title = ref("");
    const message = ref("");
    const callback = ref(undefined);

    const setIsConfirmOpen = (params) => {
        isOpen.value = true;
        title.value = params.title;
        message.value = params.message;
        callback.value = () => params.callback();
    };

    const setIsConfirmClose = async (result, callback) => {
        isOpen.value = false;
        title.value = "";
        message.value = "";

        if (result) {
            await callback();
        }
    };

    return {
        isOpen,
        title,
        message,
        callback,
        setIsConfirmOpen,
        setIsConfirmClose,
    };
    // actions: {
    //     setIsConfirmOpen(params) {
    //         this.isConfirmOpen = params.isConfirmOpen;
    //         this.confirmTitle = params.confirmTitle;
    //         this.confirmMessage = params.confirmMessage;
    //     },
    //     setIsConfirmClose() {
    //         this.isConfirmOpen = params.isConfirmOpen;
    //         this.confirmTitle = "";
    //         this.confirmMessage = "";
    //     },

    //     //addList: (param) => this.list.push(param);
    // },
    // getters: {
    //     getIsConfirmOpen(state) {
    //         return state.isConfirmOpen;
    //     },
    //     //getAllList: (state) => state.list
    // }
});
