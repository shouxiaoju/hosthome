import { Picker,Calendar,Button,Popup,Toast} from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'
import { useState } from 'react'
import { Location,history } from 'umi'
import "./index.less"

export default  function Search(props:any){
    console.log(props);
    const{city}=props
    const [value1, setValue] = useState<any>([])
    const [time,setTime]= useState<any>([])
    const [visible1, setVisible1] = useState(false)
    const [time1, setTime1] = useState("可选时间")
    const add1=()=>{
        let tex=""
        for(let i=0;i<time.length;i++){
            tex+=formatDate(time[i])+`${i<time.length-1?"~":""}`
        }
        setTime1(tex)
        setVisible1(false)
        
    }
    const gotosearch=()=>{
        if(!value1.length ||time1=="可选时间"){
            Toast.show({
                icon: 'fail',
                content: '请选择地区和时间',
              })
              return
        }
        history.push({
            pathname:"/searchlist",
            query:{
                code:value1[0],
                start: time1.split("~")[0],
                end:time1.split("~")[1],
            }
        })
    }
   const formatDate = (date:any) => {
        var y = date.getFullYear();  
        var m = date.getMonth() + 1;  
        m = m < 10 ? '0' + m : m;  
        var d = date.getDate();  
        d = d < 10 ? ('0' + d) : d;  
        return y + '-' + m + '-' + d;  
      }
    return(
        <div className="search">
            {/* 可选城市 */}
            <div className="search_city">
                <Picker
                    columns={city}
                    value={value1}
                    onConfirm={(v)=>{
                        console.log(v);
                        setValue(v)
                    }}
                >
                     { (items, { open }) => {
                        return (
                            <div className="search_citysearch" onClick={open} >
                                <span>可选城市</span>
                                 <span> {items.every(item => item === null)? '未选择': items.map(item => item?.label ?? '未选择').join(' - ')}</span>
                            </div>
                        )
                    }}
                </Picker>
            </div>
            {/* 出租时间 */}
            <div className='search_time' onClick={()=>{setVisible1(true)}}>
                <div className='search_time_left' >出租时间</div>
                <div className='search_time_cigt'>{time1}</div>
                <Popup
                    visible={visible1}
                    onMaskClick={() => {setVisible1(false)}}
                >
                    <div className='search_time_eat'>
                        <CloseOutline  style={{width:"38px"}} onClick={()=>{setVisible1(false)}}/>
                        <Button color='primary' fill='solid' onClick={add1}>确定</Button>
                    </div>
                    <Calendar
                        selectionMode='range'
                        onChange={(val:any)=>{
                            setTime(val)
                        }}
                    />
                </Popup>
            </div>
            {/* 搜索民宿 */}
            <Button block color='danger' size='large' onClick={gotosearch} style={{height:"40px" , padding:"0px"}}>搜索民宿</Button>
        </div>
    )
}