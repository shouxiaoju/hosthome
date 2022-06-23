import { request } from "umi"
const getlist=()=>{
    return request("/api/city")
  }
export default {
    
    namespace :"hostlist",//命名空间
    state: {//数据
        tagelist:[]
    },
   
    effects: {//异步操作
      *queryUser({ payload  }, { call, put }) {
        const  data  = yield call(getlist);
        yield put({ type: 'queryUserSuccess', payload: data });
      },
    },
   
    reducers: {//同步操作
      queryUserSuccess(state, { payload }) {
        return {
          ...state,
          user: payload,
        };
      },
    },
   
  };