// rcc

import React, { Component } from "react";
import GioHang from "./GioHang";
import DanhSachGiay from "./DanhSachGiay";

export default class BaiTapGiayRedux extends Component {
  render() {
    return (
      <div className="container d-flex flex-column align-items-center">
        <h3>Bài Tập Shoe</h3>
        <GioHang />
        <DanhSachGiay />
      </div>
    );
  }
}
