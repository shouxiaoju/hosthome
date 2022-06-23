import Menubar from "@/components/MenuBar";
import { useHistory ,useLocation } from 'umi'

export default function Lyouts(props :any) {
console.log(props);
const location=useLocation()
const patct =["/","/home","/order","/user"]

    return (
      <div className="Lyouts">
        {props.children}
        {patct.includes(location.pathname)&& <Menubar/>}
      </div>
    );
  }