// rcc

import React, { Component } from "react";

export default class ShoeItem extends Component {
  render() {
    const { image, name, description } = this.props.element;
    return (
      <div className="card d-flex s">
        <img className="card-img-top" src={image} alt="" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{description}</p>
          <button
            onClick={() => this.props.showDescription(description)}
            className="btn btn-primary"
          >
            Show description
          </button>
        </div>
      </div>
    );
  }
}
