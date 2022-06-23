import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import {AppOutline,UnorderedListOutline,UserOutline,} from 'antd-mobile-icons'
import { useHistory ,useLocation } from 'umi'
import style from "./index.less"
export default function Menubar(){
    const tabs = [
        {
          key: '/home',
          title: '首页',
          icon: <AppOutline />,
          badge: Badge.dot,
        },
        {
          key: '/order',
          title: '我的待办',
          icon: <UnorderedListOutline />,
          badge: '5',
        },
        {
          key: '/user',
          title: '个人中心',
          icon: <UserOutline />,
        },
      ]
      const history = useHistory()
      const location = useLocation()
      const { pathname } = location
      const setRouteActive = (value: string) => {
        history.push(value)
      }
    return(
      <div className={style.menuba}>
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {
            tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))
        }
      </TabBar>
      </div>
        
    )
}
