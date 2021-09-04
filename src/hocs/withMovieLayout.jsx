import React, { Component } from 'react';

const withMovieLayout = (WrappedComponent) => {
    return class extends Component{
        state={
            data: this.props,
        }
        render(){
            return (
                <WrappedComponent data = {this.state.data} {...this.props}/>
            )
        }
    }
}

export default withMovieLayout;
