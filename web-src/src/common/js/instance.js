import axios from "axios";
import { useIpInfoStore } from "@/stores/ipInfo";
import { storeToRefs } from "pinia";
import { useUserTokenStore } from "@/stores/userInfo";

let ip;
let token;

const headerTokenName = "Moye-Token";
const headerSrcnName = "Moye-Src";

const timeOut = 30000;

/*
    REST CONNECTION 시 Request 를 가로채서
    request.headers 를 셋팅한다.
    
    Moye-Src = : 0.0.0.0
    Moye-Token = MODOO xxxxxxxxxxxxxxx

*/

// application/json
const Instance = axios.create({
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": "text/plain",
    },
    timeout: timeOut,
});

Instance.interceptors.request.use(
    (config) => {
        // ip = store.getState().ipInfo.ipInfo;
        // token = store.getState().userInfo.userToken;

        // config.headers["Jobara-Src"] = ip ? ip : "";
        // config.headers["Jobara-Token"] = token ? token : "";
        setInterceptors(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// application/json
// admin
const Instance_admin = axios.create({
    headers: {
        "Content-Type": "application/json",
        // "Content-Type":
        //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8",
    },
    timeout: timeOut,
});

Instance_admin.interceptors.request.use(
    (config) => {
        // ip = store.getState().ipInfo.ipInfo;
        // token = store.getState().userInfo.userToken;

        // config.headers["Jobara-Src"] = ip ? ip : "";
        // config.headers["Jobara-Token"] = token ? token : "";
        setInterceptorsAdmin(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// multipart/form-data
const Instance_multi = axios.create({
    headers: {
        "Content-Type": "multipart/form-data",
    },
    timeout: timeOut,
});

Instance_multi.interceptors.request.use(
    (config) => {
        // ip = store.getState().ipInfo.ipInfo;
        // token = store.getState().userInfo.userToken;

        // config.headers["Jobara-Src"] = ip ? ip : "";
        // config.headers["Jobara-Token"] = token ? token : "";

        setInterceptors(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// multipart/form-data
// admin
const Instance_admin_multi = axios.create({
    headers: {
        "Content-Type": "multipart/form-data",
    },
    timeout: timeOut,
});

Instance_admin_multi.interceptors.request.use(
    (config) => {
        // ip = store.getState().ipInfo.ipInfo;
        // token = store.getState().userInfo.userToken;

        // config.headers["Jobara-Src"] = ip ? ip : "";
        // config.headers["Jobara-Token"] = token ? token : "";
        setInterceptorsAdmin(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

const setInterceptors = (config) => {
    // ip = store.getState().ipInfo.ipInfo;
    // token = store.getState().userInfo.userToken;

    // ip =
    //     JSON.parse(sessionStorage.getItem("recoilSession")).ipInfo !== null
    //         ? JSON.parse(sessionStorage.getItem("recoilSession")).ipInfo
    //         : sessionStorage.getItem("ipInfo");
    // const recoilSession = JSON.parse(sessionStorage.getItem("recoilSession"));

    const useIpInfo = useIpInfoStore();
    const { ipInfo } = storeToRefs(useIpInfo);

    const ip = ipInfo.value;

    const userToken = useUserTokenStore().getUserToken;

    // ip =
    //     recoilSession === null
    //         ? sessionStorage.getItem("ipInfo")
    //         : recoilSession.ipInfo;
    // token = recoilSession === null ? "" : recoilSession.userToken;

    config.headers[headerSrcnName] = ip ? ip : "";
    config.headers[headerTokenName] = userToken ? userToken : "";

    return config;
};

const setInterceptorsAdmin = (config) => {
    // ip = store.getState().ipInfo.ipInfo;
    // token = store.getState().userInfoAdmin.userTokenAdmin;
    // const userTokenAdmin = useRecoilValue(userTokenAdminAtom);

    // ip =
    //     JSON.parse(sessionStorage.getItem("recoilSession")).ipInfo !== null
    //         ? JSON.parse(sessionStorage.getItem("recoilSession")).ipInfo
    //         : sessionStorage.getItem("ipInfo");
    // const recoilSession = JSON.parse(sessionStorage.getItem("recoilSession"));

    // ip =
    //     recoilSession === null
    //         ? sessionStorage.getItem("ipInfo")
    //         : recoilSession.ipInfo;
    // token = recoilSession === null ? "" : recoilSession.userTokenAdmin;

    const useIpInfo = useIpInfoStore();
    const { ipInfo } = storeToRefs(useIpInfo);

    const ip = ipInfo.value;

    const userToken = useUserTokenStore().getUserToken;

    config.headers[headerSrcnName] = ip ? ip : "";
    config.headers[headerTokenName] = userToken ? userToken : "";

    return config;
};

export { Instance, Instance_multi, Instance_admin, Instance_admin_multi };
