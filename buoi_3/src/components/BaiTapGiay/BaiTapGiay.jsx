// rcc

import React, { Component } from "react";
import GioHang from "./GioHang";
import DanhSachGiay from "./DanhSachGiay";

export default class BaiTapGiay extends Component {
  state = {
    cart: [],
  };

  getShoeDetail = (shoe) => {};

  addToCart = (shoe) => {
    const data = [...this.state.cart];

    const idx = data.findIndex((element) => element.id === shoe.id);

    if (idx === -1) {
      data.push({ ...shoe, count: 1 });
    } else {
      data[idx].count += 1;
    }

    this.setState({
      cart: data,
    });
  };

  handleQuantity = (shoe, isIncrease) => {
    const data = [...this.state.cart];
    const idx = data.findIndex((element) => element.id === shoe.id);

    if (isIncrease) {
      // tăng số lượng trong giỏ hàng
      data[idx].count += 1;
    } else {
      // giảm số lượng trong giỏ hàng
      if (data[idx].count > 1) {
        data[idx].count -= 1;
      } else if (window.confirm(`Bạn có muốn xóa sản phẩm ${shoe.name} `)) {
        data.splice(idx, 1);
      }
    }

    this.setState({
      cart: data,
    });
  };

  handleDelete = (shoe) => {
    const data = [...this.state.cart];
    const idx = data.findIndex((element) => element.id === shoe.id);

    if (window.confirm(`Bạn có muốn xóa sản phẩm ${shoe.name}`)) {
      data.splice(idx, 1);
    }
    this.setState({
      cart: data,
    });
  };

  render() {
    return (
      <div className="container d-flex flex-column align-items-center">
        <h3>Bài Tập Shoe</h3>
        <GioHang
          cart={this.state.cart}
          handleQuantity={this.handleQuantity}
          handleDelete={this.handleDelete}
        />
        <DanhSachGiay
          addToCart={this.addToCart}
          getShoeDetail={this.getShoeDetail}
        />
      </div>
    );
  }
}
