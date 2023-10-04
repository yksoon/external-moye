import { defineStore } from "pinia";
import { ref, computed } from "vue";

// 알럿
export const useModalStore = defineStore("modal", () => {
    // state: () => ({ isAlertOpen: false }),

    const isOpen = ref(false);
    const title = ref("");
    const component = ref("");
    const width = ref("");

    const setIsModalOpen = (params) => {
        isOpen.value = true;
        title.value = params.title;
        component.value = params.component;
        width.value = params.width;
    };

    const setIsModalClose = () => {
        isOpen.value = false;
        title.value = "";
        component.value = "";
        width.value = "";
    };

    return {
        isOpen,
        title,
        component,
        width,
        setIsModalOpen,
        setIsModalClose,
    };
});
