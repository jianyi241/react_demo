import {createStore} from "redux";

const reducer = (state = { count: 0 }, action) => {
    console.log(action)  //在action有 type:'INCREASE'
    switch (action.type) {
        case 'INCREASE':  //7  派发后由动作接收并进行具体的内容
            return {
                count: state.count + 1,
            };
        default:
            return state;//返回count的默认值
    }
};
const store = createStore(reducer)


export default store
