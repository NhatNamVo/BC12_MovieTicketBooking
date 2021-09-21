import React, { Component } from 'react';
import './notePopup.scss';

class FailNotePopup extends Component {
    state = {
        display: false,
        fall: false,
    }
    componentDidMount() {
        this.wait = setTimeout(() => {
            this.setState({display:true});
        },1000);
    }
    bookingAgain = () => {
        this.setState({fall:true,display:false});
        this.wait = setTimeout(() => {
            this.setState({fall:false});
        }, 1000);
        this.wait = setTimeout(() => {
            this.props.bookingAgain();
        },1200)
    }
    cancleBooking = () => {
        this.props.history.goBack();
    }
    render() {
        const {isBooking} = this.props;
        return (
            <div className={"Popup-container " + (isBooking?"show":"")}>
                <div className={"BookingFail-box " + (this.state.display?"display":"") + (this.state.fall?"fall":"")}>
                    <div className="BookingFail-note">
                        <p className="BookingFail-message">Đặt vé thất bại</p>
                        <button className="BookingFail-confirm" onClick={this.bookingAgain}>Đặt lại</button>
                        <button className="BookingFail-cancle" onClick={this.cancleBooking}>Thoát</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FailNotePopup;
