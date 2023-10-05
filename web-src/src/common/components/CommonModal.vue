<script>
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";
import { useModalStore } from "@/stores/modal";
import NoticeModalMain from "@/components/admin/boardManage/noticeBoard/modal/NoticeModalMain.vue";

export default {
    name: "CommonModal",
    components: { NoticeModalMain },
    setup() {
        const useModal = useModalStore();
        const { isOpen, title, component, width, handleNeedUpdate, state } =
            storeToRefs(useModal);

        return {
            useModal: useModal,
            isOpen: isOpen,
            title: title,
            component: component,
            width: width,
            state,
            handleNeedUpdate,
        };
    },
    data() {
        return {
            result: undefined,
        };
    },
    methods: {
        cancel() {
            this.useModal.setIsModalClose();
        },
    },
};
</script>

<template>
    <v-dialog v-model="isOpen">
        <!-- <v-card> -->
        <div class="modal_wrap" id="modal_wrap">
            <div :class="`modal w${width}`">
                <div class="modal_close" @click="cancel">
                    <img src="img/common/modal_close.png" alt="" />
                </div>
                <h4 class="mo_title" id="transition-modal-title">
                    {{ title }}
                </h4>
                <div id="transition-modal-description">
                    <!-- 공지사항 등록 -->
                    <NoticeModalMain
                        v-if="component === 'RegNoticeModal'"
                        :handleNeedUpdate="handleNeedUpdate"
                        :modData="state.modData"
                    />
                </div>
            </div>
        </div>
        <!-- </v-card> -->
    </v-dialog>
</template>
