<script>
import { storeToRefs } from "pinia";
import { useAlertStore } from "@/stores/noti";
import { onMounted, watch } from "vue";

export default {
    name: "CommonAlert",
    setup() {
        const useAlert = useAlertStore();
        const { isOpen, title, message, callback } = storeToRefs(useAlert);

        return {
            useAlert: useAlert,
            isOpen: isOpen,
            title: title,
            message: message,
            callback: callback,
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
            this.useAlert.setIsAlertClose(this.result, this.callback);
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

                <v-btn text="OK" @click="ok"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
