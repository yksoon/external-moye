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
    <v-dialog width="500" v-model="isSpinner">
        <v-progress-circular indeterminate></v-progress-circular>
    </v-dialog>
</template>
