import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ChoseBox.scss';
class ChoseBox extends Component {
    render() {
        const {seatChose,movieInfo,match, history, location, loaddingPost} = this.props;
        const newTo = { 
            pathname: "/checkout", 
            seatChose: this.props.seatChose,
            movieInfo: this.props.movieInfo,
            match:this.props.match,
            history: this.props.history,
            location: this.props.location,
          };
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
                    
                        <Link to={newTo} className="seatChose-btn">
                        Thanh toán
                        </Link>
                    
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
