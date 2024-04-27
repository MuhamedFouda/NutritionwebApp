import { atom } from "recoil";
const Localdata = JSON.parse(localStorage.getItem('userslogined'));

const $isAdmin=atom({
    key:"$isAdmin",
    default: Localdata?.role =='admin' ? true : false,
})
export default $isAdmin;