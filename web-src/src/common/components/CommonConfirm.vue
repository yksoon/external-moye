<script>
import { storeToRefs } from "pinia";
import { useConfirmStore } from "@/stores/noti";

export default {
    name: "CommonConfirm",
    setup() {
        const useConfirm = useConfirmStore();
        const { isOpen, title, message, callback } = storeToRefs(useConfirm);

        return {
            useConfirm: useConfirm,
            isOpen: isOpen,
            title: title,
            message: message,
            callback: callback,
            // handleConfirmClose: handleConfirmClose,
        };
    },
    data() {
        return {
            result: undefined,
        };
    },
    methods: {
        ok() {
            this.result = true;
            this.useConfirm.setIsConfirmClose(this.result, this.callback);
        },
        cancel() {
            this.result = false;
            this.useConfirm.setIsConfirmClose(this.result);
        },
    },
};
</script>

<template>
    <v-dialog width="500" v-model="isOpen">
        <v-card>
            <v-card-title v-if="title">{{
                decodeURI(title).replaceAll("%20", " ")
            }}</v-card-title>
            <v-card-text>{{
                decodeURI(message).replaceAll("%20", " ")
            }}</v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="확인" @click="ok"></v-btn>
                <v-btn text="취소" @click="cancel"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
