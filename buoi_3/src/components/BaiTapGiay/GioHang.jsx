import React, { Component } from "react";

export default class GioHang extends Component {
  renderCart = () => {
    return this.props.cart.map((element, idx) => {
      return (
        <tr key={element.id}>
          <td>{idx + 1}</td>
          <td>
            <img
              width={50}
              src={element.image}
              className="img-fluid"
              alt="phone"
            />
          </td>
          <td className="max-width-100">{element.name}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={() => this.props.handleQuantity(element, false)}
            >
              -
            </button>
            <span className="mx-1">{element.count}</span>
            <button
              className="btn btn-warning"
              onClick={() => this.props.handleQuantity(element, true)}
            >
              +
            </button>
          </td>
          <td>{element.price.toLocaleString()}</td>
          <td>{(element.price * element.count).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.handleDelete(element)}
            >
              XÓA
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#gioHang"
          >
            GIỎ HÀNG ({this.props.cart.length})
          </button>
        </div>
        <div
          className="modal fade"
          id="gioHang"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình Ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
