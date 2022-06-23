import { Tabs } from 'antd-mobile'
export default function Order() {
    return (
      <Tabs>
          <Tabs.Tab title='未支付' key='fruits'>
            菠萝
          </Tabs.Tab>
          <Tabs.Tab title='已支付' key='vegetables'>
            西红柿
          </Tabs.Tab>
          
      </Tabs>
    );
  }