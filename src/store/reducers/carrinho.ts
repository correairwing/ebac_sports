import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhState = {
  itens: Produto[]
}

const initialState: CarrinhState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const prod = action.payload
      if (state.itens.find((p) => p.id === prod.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(prod)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
