// rcc

import React, { Component } from "react";

export default class ChiTietSanPham extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#chiTietSanPham"
          >
            Detail
          </button>
        </div>
        <div
          className="modal fade"
          id="chiTietSanPham"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title">Chi Tiết Sản Phẩm</h1>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body row">
                <div className="col-4 text-center">
                  <h2>Vinsmart Live</h2>
                  <img
                    className="img-fluid"
                    alt=""
                    src={this.props.element.image}
                  />
                </div>
                <div className="col-8">
                  <table className="table">
                    <thead>
                      <tr>
                        <td colSpan={2}>
                          <h1>{this.props.element.name}</h1>
                        </td>
                      </tr>
                      <tr>
                        <td>Mô tả sản phẩm</td>
                        <td>{this.props.element.description}</td>
                      </tr>
                      <tr>
                        <td>Tóm tắt</td>
                        <td>{this.props.element.shortDescription}</td>
                      </tr>
                      <tr>
                        <td>Giá</td>
                        <td>{this.props.element.price}$</td>
                      </tr>
                      <tr>
                        <td>Số lượng hàng còn</td>
                        <td>{this.props.element.quantity}</td>
                      </tr>
                    </thead>
                  </table>
                </div>
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
      </>
    );
  }
}
