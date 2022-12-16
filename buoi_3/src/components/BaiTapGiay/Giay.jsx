// rcc

import React, { Component } from "react";
import ChiTietSanPham from "./ChiTietSanPham";

export default class Giay extends Component {
  render() {
    const { image, name, price } = this.props.element;
    return (
      <div className="card d-flex min-height-550">
        <img className="card-img-top" src={image} alt="" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text card-price">{price} $</p>
          <div className="d-flex justify-content-around">
            <ChiTietSanPham element={this.props.element} />
            <button
              onClick={() => this.props.addToCart(this.props.element)}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
