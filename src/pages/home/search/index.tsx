import { useState,useEffect } from 'react'
import { InfiniteScroll, SearchBar, List,Image} from 'antd-mobile'
import { request } from 'umi'
import useObserverHook from '@/hook/useObserverHook'
import './searchbar.less'
export default function Searchlist(){
    const [loding,setLoding]=useState(false)
    const[data,setDate]=useState([])
    const [hasMore, setHasMore] = useState(true)
    const [num,setNum]=useState(1)
    async function loadMore() {
        console.log("打印");
       await request(`/api/hots/${num}`).then(res=>{
           if(res.length===0) {
            setHasMore(false)
            return 
           }
            setLoding(true)
            setDate((presdata)=>{
                let arr=[...presdata].concat(res)
                return  arr
            })
            setNum(num+1)
            
            
            console.log("获取数据hots",data);
          })
      }
    return(
        <div id='search_observer' className='searchbar' >
            <SearchBar placeholder='请输入内容' showCancelButton  className='searchbar_header'/>
                {loding&&
                    <List header='热门民宿'>
                        {
                        data.length>0?data.map((item:any)=>{
                            return  <List.Item key={item.id}>
                                        <Image
                                            src={item.img}
                                            width={94}
                                            height={94}
                                            fit='cover'
                                            style={{ borderRadius: 4 }}
                                        />
                                        <div className='searchlist'>
                                            <span>{item.title}</span>
                                            <span>￥{item.price}</span>
                                        </div>
                                        
                                    </List.Item>
                            }):""
                        }
                    </List>
                }
             <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={0}/>    
        </div>
        
    )
}