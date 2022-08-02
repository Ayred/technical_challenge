export const state = () => {
  return {
    orderDetails: [],
  }
}

export const mutations = {
  loadOrderDetails: (state, orderDetails) => {
    state.orderDetails = orderDetails.map((item) => {
      return {
        sku: item.sku,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      }
    })
  },
  addOrderDetail: (state, orderDetail) => {
    state.orderDetails.push({
      sku: orderDetail.sku,
      name: orderDetail.name,
      quantity: orderDetail.quantity,
      price: orderDetail.price,
    })
  },
}
