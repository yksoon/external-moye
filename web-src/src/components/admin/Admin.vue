<script scoped>
export default {
    name: "Admin",
    data() {
        return {};
    },
};
</script>

<template>
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
</template>

<!-- import 시 동일하게 scoped 옵션이 적용되어 다른 컴포넌트에 영향 없는지 테스트 해보기 -->
<!-- 퍼블리싱 어떻게 적용하는게 좋을지 고민해보기 -->
<style scoped></style>
