import React, { Component } from 'react';

class TimeLeft extends Component {
    state = {
        second: 0,
        minute: 3,
    }
    componentDidMount() {
        this.timeLeft = setInterval(() => {
            this.changeTime();
        }, 1000);
    }
    changeTime = () => {
        let {second,minute} = this.state;
        if(second === 0){
            if(minute === 0) {
                clearInterval(this.timeLeft);
                this.setState({second: second, minute: minute});
                // this.props.timeLeftWidth(100);
                this.props.checkTimeLeft();
                return;
            }
            second = 59;
            minute--;
        }
        second--;

        this.setState({second: second, minute: minute});
    }
    leftPad = (number,targetLength) => {
        let output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    }
    componentWillUnmount() {
        clearInterval(this.timeLeft);
    }
    render() {
        const {second, minute} = this.state;
        return (
            <>
                {this.leftPad(minute,2) + ':' + this.leftPad(second,2)}
            </>
        );
    }
}

export default TimeLeft;
