import { Link } from "umi"
import "./index.less"
export default  function Header(props:any){
    return(
        <div className="headertop">
            <div className="header_title">民宿</div>
            <div className="header_login">
                <Link to="/login">登录</Link> | <Link to="/sergister">注册</Link>
            </div>
        </div>
    )
}