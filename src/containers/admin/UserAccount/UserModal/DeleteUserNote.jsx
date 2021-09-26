import React, { Component } from "react";

class DeleteUserNote extends Component {
    state = {
        isDelete: false,
    }
  deleteUser = () => {
      this.setState({isDelete: true});
    this.props.deleteUser(this.props.userAccount[this.props.idx].taiKhoan);
    this.wait = setTimeout(() => {
      document.querySelector("#cancle").click();
      this.setState({isDelete:false});
    }, 1500);
  };
  renderStatus = () =>{
      if(this.state.isDelete){
        if(this.loadingModal){
            return (
              <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
              </div>
            );
        }
        else{
            return this.props.note
        }
      }
      else{
        return (<>Bạn có chắc xóa tài khoản {
            this.props.idx?(this.props.userAccount[this.props.idx].taiKhoan):''
          }</>)
      }
      
  }
  render() {
    if (!this.props.idx) return "";
    return (
      <>
        <div
          className="modal fade"
          id="deleteNoteModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Xóa tài khoản
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
                {this.renderStatus()}
              </div>
              <div className="modal-footer">
                <button
                  id="cancle"
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.deleteUser}
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DeleteUserNote;
