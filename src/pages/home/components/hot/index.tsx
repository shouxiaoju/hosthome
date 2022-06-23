import "./hot.less"
import React, { useState } from 'react'
import { Grid ,Image} from 'antd-mobile'
import { /* connect */history } from 'umi';
const  Hot=(props:any)=>{
    const {hots ,dispatch}=props
    console.log("接收到的props",props);
   const gotulist=(item:any)=>{
       /*  dispatch({
            type:"hostlist/queryUser",
            payload:"晚上吃什么"
        }) */
        history.push({
            pathname:"listplay",
            query:{
                id:item
            }
        })
    }
    return(
        <div className="hot">
            <div className="hot_title">最热民宿</div>
            <Grid columns={2} gap={8}>
                {
                    hots.map((item :any) =>{
                        return <Grid.Item key={item.id} onClick={()=>{gotulist(item.id)}}>
                        <Image
                            src={item.img}
                            width={"auto"}
                            height={94}
                            fit='cover'
                            style={{ borderRadius: 4 }}
                        />
                        <p>{item.title}</p>
                        <p>{item.info}</p>
                        <p className="hot_listmony">￥{item.price}</p>
                    </Grid.Item>
                    })
                }
                
        </Grid>
        </div>
    )
}
//export default connect((hotlist:any)=>({hotlist}))(Hot)
export default Hot