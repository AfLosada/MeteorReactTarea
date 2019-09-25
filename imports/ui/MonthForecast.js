import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Forecast } from '../api/forecast.js';
import WeekForecast from '../ui/WeekForecast.js';

class MonthForecast extends Component {

    sacarSemanas() {
        let arreglo = this.props.forecast;
        console.log(arreglo);
        let semanas = [];
        for (let i = 0; i < arreglo.length - 6; i += 7) {
            console.log(i);
            semanas.push(arreglo.slice(i, i + 7));
        }
        console.log(semanas);
        return semanas;
    }

    render() {

        return (
            <div>
                <div className="row text-center bg-primary">
                    <div className="col-sm">
                        Monthly Forecast
                    </div>
                </div>
                <div className="row">
                    {this.sacarSemanas().map(
                        d =>
                            <div className="col-12">
                                <WeekForecast report={d} />
                            </div>
                    )}
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        forecast: Forecast.find({}).fetch(),
    };
})(MonthForecast);
