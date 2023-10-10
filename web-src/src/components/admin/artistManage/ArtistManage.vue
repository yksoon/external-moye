<script setup>
import { CommonModal } from "@/common/js/common";
import { reactive, ref, h, toRaw, onMounted } from "vue";

// ------------------- import End --------------------

const searchKeyword = ref(null);

const regArtist = () => {
    const modalOption = {
        title: "인물 등록",
        component: "ArtistModalMain",
        width: "1400",
        handleNeedUpdate: () => handleNeedUpdate(),
    };

    CommonModal(modalOption);
};

const handleNeedUpdate = () => {
    // TODO:
};
</script>
<template>
    <div class="content">
        <div class="title">
            <h3>아티스트 관리</h3>
        </div>
        <div class="con_area">
            <div class="adm_search">
                <div>
                    <input type="text" class="input" ref="searchKeyword" />
                    <a class="btn btn02" @click="doSearch"> 검색 </a>
                </div>
                <div class="btn_box btn_right" style="margin: 0">
                    <a class="btn btn01" @click="regArtist"> 아티스트 등록 </a>
                    <a class="btn btn03" @click="removeArtist"> 삭제 </a>
                </div>
            </div>
        </div>
    </div>
</template>
