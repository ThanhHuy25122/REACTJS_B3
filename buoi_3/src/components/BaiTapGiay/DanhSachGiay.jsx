//rcc

import React, { Component } from "react";
import data from "../../data/DataShoes.json";
import Giay from "./Giay";

export default class DanhSachGiay extends Component {
  renderShoeList = () => {
    return data.map((element) => {
      return (
        <div className="col-4 mb-5" key={element.id}>
          <Giay
            element={element}
            addToCart={this.props.addToCart}
            getShoeDetail={this.props.getShoeDetail}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <div className="row">{this.renderShoeList()}</div>s
      </>
    );
  }
}
