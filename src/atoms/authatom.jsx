import { atom } from "recoil";
const Localdata = JSON.parse(localStorage.getItem('userslogined'));

const $isauth = atom({
    key: "$isauth",
    default:{
        isauth:Localdata? true : false,
        user: Localdata ? Localdata : null,
    }
})
export default $isauth;


// default: Localdata || {
//     isauth: false,
//     user: null,
// }


// default:{
//     isauth:Localdata? true : false,
//     user: Localdata ? Localdata : null,
// }