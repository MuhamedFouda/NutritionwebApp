import {  Fragment } from "react"
import { useRecoilState } from "recoil"
import $isauth from "../../atoms/authatom"
import { Navigate } from "react-router-dom"

export default function Logined({children}) {
    const [userauth]=useRecoilState($isauth)
    if(userauth.isauth) return <Navigate to={'/'}/>

  return (
<Fragment>
{children}
</Fragment>
    )
}
