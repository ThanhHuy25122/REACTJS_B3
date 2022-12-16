import data from "../../data/DataShoes.json";
const DEFAULT_STATE = {
  cart: [],
  shoeDetail: data[0],
};
export const shoeReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_SHOE_DETAIL": {
      state.shoeDetail = payload;
      break;
    }
    case "ADD_TO_CART": {
      const data = [...state.cart];

      const idx = data.findIndex((element) => element.id === payload.id);

      if (idx === -1) {
        data.push({ ...payload, count: 1 });
      } else {
        data[idx].count += 1;
      }

      state.cart = data;
      break;
    }
    case "HANDLE_QUANTITY": {
      const data = [...state.cart];
      const idx = data.findIndex((element) => element.id === payload.shoe.id);

      if (payload.isIncrease) {
        // tăng số lượng trong giỏ hàng
        data[idx].count += 1;
      } else {
        // giảm số lượng trong giỏ hàng
        if (data[idx].count > 1) {
          data[idx].count -= 1;
        } else if (
          window.confirm(`Bạn có muốn xóa sản phẩm ${payload.shoe.name} `)
        ) {
          data.splice(idx, 1);
        }
      }

      state.cart = data;
      break;
    }

    case "HANDLE_DELETE": {
      const data = [...state.cart];
      const idx = data.findIndex((element) => element.id === payload.id);

      if (window.confirm(`Bạn có muốn xóa sản phẩm ${payload.name}`)) {
        data.splice(idx, 1);
      }
      state.cart = data;
      break;
    }

    default:
      break;
  }

  return { ...state };
};
