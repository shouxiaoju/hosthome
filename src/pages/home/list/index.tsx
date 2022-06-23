import { useEffect,useState } from 'react'
import { request,Location,history } from 'umi'
import {  Swiper ,Toast,Modal} from 'antd-mobile'
import styles from './index.less'
const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
    
    
  <Swiper.Item key={index}>
    <div
        className={styles.content}
        style={{ background: color }}
        onClick={() => {
            Toast.show(`你点击了卡片 ${index + 1}`)
        }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))
export default function Listplay(props:any){
    console.log("列表props",props);
    const {location}=props
    const [datalist,setDatelist]=useState([{info:"",price:"",time:'',star:"",end:""}])
    useEffect(()=>{
        console.log(location.query.id);
        if(location.query.id<=2){
            request(`/api/list/id${location.query.id}`).then((res)=>{
                let arr=[]
                arr=res
                setDatelist(arr)
            })
        }else{
            Modal.alert({
                content: '没有对应的详情数据',
                
                onConfirm: () => {
                    history.push("/home")
                  console.log('Confirmed')
                },
              })
        }
        
        
    },[])
    return(
        <div>
            <Swiper autoplay loop={true} style={{marginBottom:"10px"}}>{items}</Swiper>
            {datalist.length>0&&<div className={styles.play} >
                <p className={styles.play_p}>简介：{datalist[0].info}</p>
                <p className={styles.play_p}>价格：{datalist[0].price}</p>
                <p className={styles.play_p}>发布时间：{datalist[0].time}</p>
                <p className={styles.play_p}>开始结束：{datalist[0].star}</p>
                <p className={styles.play_p}>结束出租：{datalist[0].end}</p>
            </div>}
        </div>
    )
}