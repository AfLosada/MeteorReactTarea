import React, { Component } from 'react';

export default class DayForecast extends Component {
    render() {
        console.log(this.props);
        console.log(this.props.report);
        return (
            <div className="col" object-fit="contain">
                <div className="card" backgroundcolor="#90E8DB">
                    <div className="card-head">
                        <h4 className="card-title">
                            <span className="border border-primary">{this.props.report.dayName}</span>
                        </h4>
                        {this.props.report.dayName === "Rain" ? (
                            <img className="card-img-top" src="https://yt3.ggpht.com/a/AGF-l78oIMKfJMfzEVijL28x4KkN73XSrBgXDEjzcQ=s900-c-k-c0xffffffff-no-rj-mo" height="30%" width="20%" object-fit="contain" />) : (<img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpd1oRutfpPxraKCATS5xuB1_PVqKq04Zccf5RSEOEChUXxPKmA" height="20%" width="20%" object-fit="contain" />)}
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Max {this.props.report.maxTemp}</h4>
                        <p>Min {this.props.report.minTemp}</p>
                        <p>{this.props.report.status}</p>
                    </div>
                </div>
            </div>
        );
    }
}