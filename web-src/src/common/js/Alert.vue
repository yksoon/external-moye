<script>
import { useAlertStore } from "@/stores/noti";

export default {
    name: "Alert",
    setup() {
        const isActive = useAlertStore().getIsAlertOpen;

        onMounted(() => {
            console.log(isActive);
        });

        return {
            isActive: isActive,
        };
    },
};
</script>

<script setup>
// import { useAlertStore } from "@/stores/noti";

// const isActive = useAlertStore().getIsAlertOpen;

// onMounted(() => {
//     console.log("111111111111111");
//     console.log(isActive);
// });
</script>

<template>
    <v-dialog width="500">
        <template v-if="{ isActive }">
            <v-card title="Dialog">
                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        text="Close Dialog"
                        @click="isActive.setIsAlertOpen(false)"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<!-- <template>
    <h1>Admin Page</h1>
    <div>
        <v-dialog width="500">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" text="테스트 모달"> </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Dialog">
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            text="Close Dialog"
                            @click="isActive.value = false"
                        ></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template> -->
