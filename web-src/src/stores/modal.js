import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";

// 알럿
export const useModalStore = defineStore("modal", () => {
    // state: () => ({ isAlertOpen: false }),

    const isOpen = ref(false);
    const title = ref("");
    const component = ref("");
    const width = ref("");
    const boardIdx = ref(0);
    const state = reactive({
        modData: {},
    });
    const handleNeedUpdate = ref(undefined);

    // const state = () => ({handleNeedUpdate: ""})

    const setIsModalOpen = (params) => {
        document.querySelectorAll("body")[0].style.overflow = "hidden";

        isOpen.value = true;
        title.value = params.title;
        component.value = params.component;
        width.value = params.width;
        state.modData = params.modData;
        boardIdx.value = params.boardIdx;

        handleNeedUpdate.value = params.handleNeedUpdate
            ? () => params.handleNeedUpdate()
            : null;
    };

    const setIsModalClose = async (result, callback) => {
        document.querySelectorAll("body")[0].style.overflow = "";

        isOpen.value = false;
        title.value = "";
        component.value = "";
        width.value = "";
        state.modData = {};
        boardIdx.value = 0;
    };

    return {
        isOpen,
        title,
        component,
        width,
        state,
        boardIdx,
        handleNeedUpdate,
        setIsModalOpen,
        setIsModalClose,
    };
});
