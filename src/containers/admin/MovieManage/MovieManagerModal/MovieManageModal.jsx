import React, { Component } from "react";
import { GROUP_ID } from "settings/apiConfig";
import "../../UserAccount/UserModal/UserModal.scss";
class MovieManageModal extends Component {
  state = {
    data: {
      maPhim: 0,
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: {},
      moTa: "",
      maNhom: GROUP_ID,
      ngayKhoiChieu: "",
      danhGia: null,
    },
  };
  handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if(name === 'hinhAnh'){
      value = e.target.files[0];
    }
    const data = {...this.state.data, [name]:value};
    this.setState({data:data,})
  }
  submitForm = () => {
    this.props.addNewMovie(this.state.data);
  }
  render() {
    const { isAddMovie } = this.props;
    return (
      <>
        <div
          id="movieAdminModal"
          className="modal fade"
          tabIndex={-1}
          onClick={this.closeModal}
        >
          <div className="modalContent" onClick={this.handleClick}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {isAddMovie ? "Thêm Phim" : "Cập nhật phim"}
                  </h5>
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
                  <form action="" method="post" id="movieInfo">
                    {/* <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          id="user"
                          type="text"
                          name="maPhim"
                          className="form-input"
                          placeholder="Mã phim"
                          value={this.state.data.maPhim}
                          onChange={this.handleChange}
                        /> */}
                        {/* <i class="fa fa-user"></i> */}
                        {/* {this.changeStatus(this.props.messageError.taiKhoan)} */}
                      {/* </div>
                    </div> */}
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          id="user"
                          type="text"
                          name="tenPhim"
                          className="form-input"
                          placeholder="Tên phim"
                          value={this.state.data.tenPhim}
                          onChange={this.handleChange}
                        />
                        <i class="fa fa-user"></i>
                        {/* {this.changeStatus(this.props.messageError.taiKhoan)} */}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          id="user"
                          type="text"
                          name="biDanh"
                          className="form-input"
                          placeholder="Bí danh"
                          value={this.state.data.biDanh}
                          onChange={this.handleChange}
                        />
                        <i class="fa fa-user"></i>
                        {/* {this.changeStatus(this.props.messageError.taiKhoan)} */}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          id="user"
                          type="text"
                          name="trailer"
                          className="form-input"
                          placeholder="Link trailer"
                          value={this.state.data.trailer}
                          onChange={this.handleChange}
                        />
                        <i class="fa fa-user"></i>
                        {/* {this.changeStatus(this.props.messageError.taiKhoan)} */}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          id="user"
                          type="text"
                          name="danhGia"
                          className="form-input"
                          placeholder="Đánh giá"
                          value={this.state.data.danhGia}
                          onChange={this.handleChange}
                        />
                        <i class="fa fa-user"></i>
                        {/* {this.changeStatus(this.props.messageError.taiKhoan)} */}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          id="user"
                          type="text"
                          name="ngayKhoiChieu"
                          className="form-input"
                          placeholder="DD/MM/YYYY"
                          value={this.state.data.ngayKhoiChieu}
                          onChange={this.handleChange}
                        />
                        <i class="fa fa-user"></i>
                        {/* {this.changeStatus(this.props.messageError.taiKhoan)} */}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input name="hinhAnh" classname="form-control" type="file" id="imgUpload" accept = "image/png,imgae/jpg,image/gif,image/jpeg" onChange={this.handleChange}/>
                        <i class="fa fa-user"></i>
                        {/* {this.changeStatus(this.props.messageError.taiKhoan)} */}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <textarea name="moTa" id="descriptionInput" placeholder="Mô tả phim" onChange={this.handleChange}></textarea>
                        {/* {this.changeStatus(this.props.messageError.taiKhoan)} */}
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    id="exitModal"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Thoát
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.submitForm}
                  >
                    {isAddMovie ? "Thêm" : "Cập nhật"}
                    {this.props.loadingModal ? (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                      </div>
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MovieManageModal;
