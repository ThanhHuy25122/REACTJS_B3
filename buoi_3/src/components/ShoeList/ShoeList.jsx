// rcc

import React, { Component } from "react";
import data from "../../data/DataShoes.json";
import ShoeItem from "./ShoeItem";

export default class ShoeList extends Component {
  renderShoeList = () => {
    return data.map((element) => {
      return (
        <div className=" col-4" key={element.id}>
          <ShoeItem element={element} showDescription={this.showDescription} />;
        </div>
      );
    });
  };

  showDescription = (description) => {
    alert(description);
  };

  render() {
    return (
      <div className="container d-flex flex-column align-items-center">
        <h3>Bài Tập Shoe</h3>
        <div className="row">{this.renderShoeList()}</div>
      </div>
    );
  }
}
