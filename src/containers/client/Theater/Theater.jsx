import React, { Component } from 'react'
import "containers/client/Theater/Theater.scss"

export default class Theater extends Component {
    render() {
        return (
            <div className="theater__banner hero-area" style={{ backgroundImage: "url('/images/banner-1.jpg')" }}>
                <div className="container">
                    <div className="theater__banner__content">
                        <h3 className="title">Theater</h3>
                    </div>
                </div>
            </div>
        )
    }
}
