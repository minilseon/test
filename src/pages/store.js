import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({ //useState 역할 : state를 만들고 변경
  name: 'user',
  // initialState: '홍길동',
  initialState: {name: '홍길동', memberYear: 1},
  reducers: {
    // changeName() {
    //   return 'Green'
    // }
    // changeName(state) {
    //   return state + ' : Green'
    // }
    changeName(state) {
      state.name = state.name + ' : Green'
    },
    changeYear(state, action) {
      state.memberYear += action.payload
    }
  }
})

export const { changeName, changeYear } = user.actions


const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      // state.push(action.payload)
      const index = state.findIndex((findId) => { return findId.id === action.payload.id})
      if(index > -1) {
        state[index].count++
      } else {
        state.push(action.payload)
      }
    },
    deleteItem(state, action) {
      const index = state.findIndex((findId) => { return findId.id === action.payload})
      state.splice(index, 1)
    },
    addCount(state, action) {
      const index = state.findIndex((findId) => { return findId.id === action.payload})
      state[index].count++
    },
    subCount(state, action) {
      const index = state.findIndex((findId) => { return findId.id === action.payload})
      if(state[index].count > 1) state[index].count--
    }
  }
})

export const { addItem, addCount, subCount, deleteItem } = cart.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
})