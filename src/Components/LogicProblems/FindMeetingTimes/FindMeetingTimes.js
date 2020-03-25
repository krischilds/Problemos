import React from "react";

export default class FindMeetingTimes extends React.Component {
    constructor(props) {
        super(props);

        this.times1 = [];
        this.times2 = [];
        this.state = {
            freeTimes: []
        };
    }

    //

    setupProblem() {
        this.times1 = [
            ["9:00", "10:00"],
            ["11:30", "12:00"],
            ["13:00", "14:30"],
            ["16:00", "17:00"]
        ];
        this.times2 = [["8:00", "9:30"], ["11:00", "11:30"], ["13:30", "15:00"]];

        // convert times to float
        // create list of all free times for times1, times2
        // now we have free1, free2 as float
        // e.g.
        // f = t2[0]-t1[1],
        // foreach tuple get endtime - start of next meeting (or boundary)
        // store array of [{ start, end, duration }
    }

    getFreeTimes(times) {
        let freeTimes = [];

        return freeTimes;
    }

    convertTimeToNum(time) {
        let f = 0.0;
        let i = time.indexOf(":");
        let h = time.slice(0, i);
        f = parseFloat(h);
        let m = time.slice(i, time.length);
        f = f + m / 60;
        return f;
    }
    render() {
        return <div>Find Meeting Times {this.convertTimeToNum("14:30")}</div>;
    }
}
