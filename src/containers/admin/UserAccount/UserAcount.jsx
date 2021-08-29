import React, { Component } from "react";
import Pagination from 'components/Pagination/Pagination';
class UserAcount extends Component {
    pageSize = 10;
  render() {
    return (
      <>
        <div className="row justify-content-between mx-0 my-2 container-fluid">
          <button className="btn btn-primary">
            <div className="row justify-content-between align-items-center px-3">
              <p className="font-weight-bold mb-0 mr-2">Thêm</p>
              <i class="fa fa-user-plus"></i>
            </div>
          </button>
          <div
            className="searchItem row text-right m-0"
            style={{ width: "auto" }}
          >
            <input
              name="searchUser"
              style={{ width: "400px" }}
              type="text"
              className="form-control mr-2"
              placeholder="Nhập vào tài khoản hoặc họ tên người dùng..."
            />
            <button className="btn btn-primary">Tìm</button>
          </div>
        </div>
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tài khoản</th>
              <th scope="col">Mật Khẩu</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Email</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='align-items-center'>1</td>
              <td className='align-items-center'>Mark</td>
              <td className='align-items-center'>Otto</td>
              <td className='align-items-center'>@mdo</td>
              <td className='align-items-center'>@mdo</td>
              <td className='align-items-center'>Lorem ipsum</td>
              <td className="row justify-content-center m-0">
                <button className="btn btn-primary m-1">Sửa</button>
                <button className="btn btn-danger m-1">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination totalCount ={100}
            siblingCount = {1}
            currentPage = {5}
            pageSize = {this.pageSize}/>
      </>
    );
  }
}

export default UserAcount;
