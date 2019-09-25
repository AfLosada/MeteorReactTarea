import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Forecast } from '../api/forecast.js';
import DayForecast from "./DayForecast.js";

export default class WeekForecast extends Component {

    paraelDiaMaria() {
        return this.props.report;
    }

    renderDays() {
        console.log(this.paraelDiaMaria());
        return this.paraelDiaMaria().map(d => {
            return <DayForecast key={d._id} report={d} />
        });
    }

    render() {
        return (
            <div>
                <div className="row text-center bg-success">
                    <div className="col-sm">
                        Weekly Forecast
                    </div>
                </div>
                <div className="row">
                    {this.renderDays()}
                </div>
            </div>
        );
    }
}