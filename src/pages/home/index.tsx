import { useEffect ,useState} from 'react';
import { request } from 'umi';
import styles from './index.less';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';
export default function Home() {
  const[city,setCity]=useState()
  const[hots,setHots]=useState()
  const[logding,setLogding]=useState(false)
  const[logdinghost,setLogdinghost]=useState(false)
  useEffect(()=>{
    request("/api/city").then(res=>{
      setCity(res)
      setLogding(true)
      console.log("获取数据city",res);
    })
    request("/api/hots").then(res=>{
      setHots(res)
      setLogdinghost(true)
      console.log("获取数据hots",res);
    })
  },[])
  return (
    <div className={styles.Home}>
      {/* 头部 */}
      <Header/>
      {/* 可选城市 */}
      {logding&&<Search city={city}/>}
      {/* 热门民宿 */}
      {logdinghost&&<Hot hots={hots}/>}
    </div>
  );
}
