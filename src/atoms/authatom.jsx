import { atom } from "recoil";
const Localdata = JSON.parse(localStorage.getItem('userslogined'));

const $isauth = atom({
    key: "$isauth",
    default: Localdata || {
        isauth: false,
        user: null,
    }
})
export default $isauth;



