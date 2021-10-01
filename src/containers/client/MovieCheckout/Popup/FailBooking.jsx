import React, { Component } from 'react';
import '../../SeatPlan/NotePopup/notePopup.scss';

class FailNotePopup extends Component {
    state = {
        display: false,
        fall: false,
    }
    componentDidMount() {
        this.wait = setTimeout(() => {
            this.setState({display:true});
        },1500);
    }
    booking = () => {
        this.setState({fall:true,display:false});
        this.wait = setTimeout(() => {
            this.setState({fall:false});
        }, 1000);
        this.wait = setTimeout(() => {
            if(!!this.props.isContinueBooking){
                this.props.history.go(-2);
            }
            else{
                this.props.history.goBack();
            }
        },1200)
    }
    cancleBooking = () => {
        this.props.history.goBack(-2);
    }
    render() {
        const {isBooking} = this.props;
        return (
            <div className={"Popup-container " + (isBooking?"show":"")}>
                <div className={"BookingFail-box " + (this.state.display?"display":"") + (this.state.fall?"fall":"")}>
                    <div className="BookingFail-note">
                        <p className="BookingFail-message">{this.props.isContinueBooking?"Đặt vé thành công":"Không thể đặt vé. Ghế đã được đặt bởi người khác"}</p>
                        <button className="BookingFail-confirm" onClick={this.booking}>{this.props.isContinueBooking?"Hoàn tất":"Đặt lại ghế khác"}</button>
                        {this.props.isContinueBooking?"":(<button className="BookingFail-cancle" onClick={this.cancleBooking}>Thoát</button>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default FailNotePopup;
