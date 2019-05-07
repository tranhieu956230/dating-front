import axios from "axios";
const domain = "http://localhost:3001/";

function getUserInfo(access_token) {
    return axios({
        method: "GET",
        url: "/user",
        baseURL: domain,
        headers: {
            authorization: "Bearer " + access_token
        }
    }).then(res => res.data);
}

export { getUserInfo };
