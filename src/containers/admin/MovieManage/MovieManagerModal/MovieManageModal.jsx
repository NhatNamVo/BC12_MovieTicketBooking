import React, { Component } from "react";
import { GROUP_ID } from "settings/apiConfig";
import { formValid } from "settings/formValidation";
import "../../UserAccount/UserModal/UserModal.scss";
class MovieManageModal extends Component {
  state = {
    isValidation: true,
    messageError: {
      tenPhim: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      ngayKhoiChieu: "",
      danhGia: "",
    },
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
    isNote: false,
    isImage: false,
    images: "",
    customTextArea: 36,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.movieCode !== this.props.movieCode) {
      if (!this.props.isAddMovie && this.props.movieCode !== null) {
        this.setDataMovie();
      }
    }
    if (prevProps.isAddMovie !== this.props.isAddMovie) {
      if (this.props.isAddMovie) {
        this.resetData();
      } else {
        this.setDataMovie();
      }
    }
  }
  setDataMovie() {
    const movieItem = this.props.movieList.find((movie) => {
      return movie.maPhim == this.props.movieCode;
    });
    const date = movieItem.ngayKhoiChieu.slice(0,10);
    const { data } = this.state;
    for (let mainKey in data) {
      for (let key in movieItem) {
        if (mainKey == key) {
          data[mainKey] = movieItem[key];
          break;
        }
      }
    }
    const dataMovie = { ...data, hinhAnh: null, ngayKhoiChieu: date};
    this.setState({ data: dataMovie, customTextArea: 200,images:movieItem.hinhAnh,isImage: true});
  }
  resetData() {
    let info = {
      maPhim: 0,
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: {},
      moTa: "",
      maNhom: GROUP_ID,
      ngayKhoiChieu: "",
      danhGia: null,
    };
    const {messageError} = this.state;
    for(let key in messageError){
      messageError[key] = '';
    };
    this.setState({ data: info, messageError:messageError, customTextArea: 36, isImage: false, images: ''});
  }
  handleChange = (e) => {
    const {messageError} = this.state;
    const name = e.target.name;
    let value = e.target.value;
    if (name === "hinhAnh") {
      value = e.target.files[0];
      if(value.name !== ''){
        let reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onload = (e) => {
          this.setState({images:e.target.result, isImage: true});
        }
      }
      else{
        this.setState({images:'', isImage: false});
      }
      
    }
    if (name === "moTa") {
      if (value === "") {
        this.wait = setTimeout(() => {
          this.setState({ customTextArea: 36 });
        }, 200);
      }
    }
    const status = formValid(name,value, null, messageError);
    const data = { ...this.state.data,  [name]: value };
    this.setState({ data: data, isValidation: status.isvalid, messageError:status.messageError });
  };
  handleClick = (e) => {
    e.stopPropagation();
    const closeBtn = e.target.closest('.close');
    const exitModal = e.target.closest('#exitModal');
    if(!!closeBtn||!!exitModal){
      this.closeModal();
    }
  }

  submitForm = () => {
    const {tenPhim, trailer, hinhAnh, moTa, ngayKhoiChieu, danhGia} = this.state.data;
    let {messageError} = this.state;
    let isValid = true;
    for (let key in messageError) {
      if (messageError[key] !== "" && messageError[key] !== "true") {
          isValid = false;
          break;
        }
    };
    if(!tenPhim || !trailer || !this.state.images || !ngayKhoiChieu || !danhGia || !moTa) {
      if(!tenPhim){
        messageError.tenPhim = 'Tên phim đang trống';
      }
      if(!trailer){
        messageError.trailer = 'Link trailer đang trống';
      }
      if(!this.state.images) {
        messageError.hinhAnh = 'Chưa có hình ảnh phim';
      }
      if(!ngayKhoiChieu) {
        messageError.ngayKhoiChieu = 'Ngày khởi chiếu đang trống';
      }
      if(!danhGia) {
        messageError.danhGia = 'Lượt đánh giá đang trống';
      }
      if(!moTa){
        messageError.moTa = 'Mô tả phim đang trống';
      }
      this.setState({ messageError: messageError});
      return;
    }
    if(!this.state.isValidation || !isValid){
      return;
    };
    if (this.props.isAddMovie) {
      this.props.addNewMovie(this.state.data);
    } else {
      this.props.updateMovie(this.state.data);
    }
    if (!this.props.loadingModal) {
      this.setState({ isNote: true });
      this.wait = setTimeout(() => {
        document.querySelector("#exitModal").click();
        this.setState({ isNote: false });
      }, 1500);
    }
  };
  customForm = (e) => {
    this.setState({ customTextArea: e.target.scrollHeight });
  };
  uploadImage = (e) =>{
    e.preventDefault();
    const uploadForm = document.querySelector('#imgUpload');
    uploadForm.click();
  }
  closeModal = () =>{
    this.resetData();
    this.props.changeMovieCode();
  }
  changeStatus = (status) => {
    if (status === "") {
      return <span className="inputStatus"></span>;
    } else if (status === "true") {
      return (
        <span className="inputStatus">
          <i class="fa fa-check"></i>
        </span>
      );
    } else {
      return (
        <span className="inputStatus error">
          <i class="fa fa-exclamation-circle"></i>
          <div className="errorMessage">{status}</div>
        </span>
      );
    }
  };
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
                    <div id="movieNameForm" className="form-inputContainer">
                      <input
                        type="text"
                        name="tenPhim"
                        className="form-input"
                        placeholder="Tên phim"
                        value={this.state.data.tenPhim}
                        onChange={this.handleChange}
                      />
                      <i class="fa fa-film"></i>
                      {this.changeStatus(this.state.messageError.tenPhim)}
                    </div>
                    <div className="form-inputContainer" id="movieTrailerForm">
                      <input
                        type="text"
                        name="trailer"
                        className="form-input"
                        placeholder="Link trailer"
                        value={this.state.data.trailer}
                        onChange={this.handleChange}
                      />
                      <i class="fa fa-play"></i>
                      {this.changeStatus(this.state.messageError.trailer)}
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          type="text"
                          name="danhGia"
                          className="form-input"
                          placeholder="Đánh giá"
                          value={this.state.data.danhGia}
                          onChange={this.handleChange}
                        />
                        <i class="fa fa-star"></i>
                        {this.changeStatus(this.state.messageError.danhGia)}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          type="date"
                          id="start"
                          className="form-input"
                          name="ngayKhoiChieu"
                          value={this.state.data.ngayKhoiChieu}
                          placeholder="DD/MM/YYYY"
                          onChange={this.handleChange}
                        />
                        <i class="fa fa-hourglass-end"></i>
                        {this.changeStatus(this.state.messageError.ngayKhoiChieu)}
                      </div>
                    </div>
                    <div id="formTextArea" className="form-inputContainer">
                      <textarea
                        style={{ height: this.state.customTextArea + "px" }}
                        onInput={this.customForm}
                        className={
                          this.state.customTextArea >= 200 ? "active" : ""
                        }
                        name="moTa"
                        id="descriptionInput"
                        placeholder="Mô tả phim"
                        onChange={this.handleChange}
                        onInput={this.customForm}
                        value={this.state.data.moTa}
                        rows={1}
                      ></textarea>
                      {this.changeStatus(this.state.messageError.moTa)}
                      <i class="fa fa-sticky-note"></i>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer" id="movieAdmin-uploadImg">
                        <input
                          name="hinhAnh"
                          classname="form-control selectFileUpload"
                          hidden
                          type="file"
                          id="imgUpload"
                          accept="image/png,imgae/jpg,image/gif,image/jpeg"
                          onChange={this.handleChange}
                        />
                        <button class="imgUpload" onClick={this.uploadImage}><i class="fa fa-upload"></i></button>
                        <span className="noteFile">{this.state.isImage?"Ảnh đã được tải lên":"Ảnh chưa tải lên"}</span>
                        <br />
                        {this.state.isImage?<img src={this.state.images} alt="..." width="180px" />:""}
                        
                        {this.changeStatus(this.state.messageError.hinhAnh)}
                      </div>
                    </div>
                  </form>
                  {this.state.isNote ? (
                    <div className="modalNote">
                      <h5>{this.props.note}</h5>
                    </div>
                  ) : (
                    ""
                  )}
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
