import { defineStore } from "pinia";

export const useUserInfoStore = defineStore("userInfo", {
    persist: {
        storage: sessionStorage, //쓰고싶은 스토리지(세션 또는 로컬)
    },
    state: () => ({ userInfo: {} }),
    actions: {
        setUserInfo(param) {
            this.userInfo = param;
        },
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo;
        },
    },
});

export const useUserTokenStore = defineStore("userToken", {
    persist: {
        storage: sessionStorage, //쓰고싶은 스토리지(세션 또는 로컬)
    },
    state: () => ({ userToken: "" }),
    actions: {
        setUserToken(param) {
            this.userToken = param;
        },
    },
    getters: {
        getUserToken(state) {
            return state.userToken;
        },
    },
});
