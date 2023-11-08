<script>
import { storeToRefs } from "pinia";
import { useSpinnerStore } from "@/stores/spinner";

export default {
    name: "CommonSpinner",
    setup() {
        const useSpinner = useSpinnerStore();
        const { isSpinner } = storeToRefs(useSpinner);

        return {
            isSpinner: isSpinner,
        };
    },
};
</script>

<template>
    <v-dialog width="auto" v-model="isSpinner" :lazy="true">
        <v-progress-circular indeterminate></v-progress-circular>
    </v-dialog>
</template>
