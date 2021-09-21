import React, { Component } from 'react';
import './ChoseBox.scss';
class ChoseBox extends Component {
    render() {
        const {seatChose, loaddingPost} = this.props;

        return (
            <div className="choseBox-content">
                <div className="seatChose-item seat-chosed">
                    <p className="title">
                        Ghế chọn
                    </p>
                    <h3 className="result">
                        {seatChose.choseSeat.map((seat,idx)=>{
                            if(idx>0){return <span>, {seat}</span>}
                            return <span>{seat}</span>;
                        })}
                    </h3>
                </div>
                <div className="seatChose-item">
                    <p className="title">
                        Tổng tiền
                    </p>
                    <h3 className="result">
                        {seatChose.totalPrice}
                    </h3>
                </div>
                <div className="seatChose-item">
                    <button className="seatChose-btn">Thanh toán</button>
                    <span
                  className={
                    "spinner-border spinner-border-sm " +
                    (!loaddingPost ? "d-none" : "")
                  }
                  role="status"
                  aria-hidden="true"
                />
                </div>                 
            </div>
        );
    }
}

export default ChoseBox;
