// rcc

import { connect } from "react-redux";

import React, { Component } from "react";
class ChiTietSanPham extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#chiTietSanPham"
            onClick={() => this.props.getShoeDetail(this.props.element)}
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
                  <img
                    className="img-fluid"
                    alt=""
                    src={this.props.shoeDetail.image}
                  />
                </div>
                <div className="col-8">
                  <table className="table">
                    <thead>
                      <tr>
                        <td colSpan={2}>
                          <h1>{this.props.shoeDetail.name}</h1>
                        </td>
                      </tr>
                      <tr>
                        <td>Mô tả sản phẩm</td>
                        <td>{this.props.shoeDetail.description}</td>
                      </tr>
                      <tr>
                        <td>Tóm tắt</td>
                        <td>{this.props.shoeDetail.shortDescription}</td>
                      </tr>
                      <tr>
                        <td>Giá</td>
                        <td>{this.props.shoeDetail.price}$</td>
                      </tr>
                      <tr>
                        <td>Số lượng hàng còn</td>
                        <td>{this.props.shoeDetail.quantity}</td>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getShoeDetail(shoe) {
      dispatch({
        type: "GET_SHOE_DETAIL",
        payload: shoe,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return { shoeDetail: state.shoeReducer.shoeDetail };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChiTietSanPham);
