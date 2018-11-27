module.exports = function (bac) {
    var moment = require('moment');
    moment().format();
    var minutes = 0
    //bac reduces at .015 an hour
    //legally sober at .08 bac
    //need to take start time of session, then find the amount of time until bac = 0 at the pace of .015 an hour.
    var bacReductionPerMinute = .015 / 60
    console.log(bacReductionPerMinute)
    while (bac > .08) {
        bac -= bacReductionPerMinute
        minutes += 1
    }
    console.log(minutes)

    //takes current time then adds the amount of minutes until sober, formats into hour:minutes AM/PM
    var TimeOfSober = moment().add(minutes, "minutes").format("hh:mm a")
    console.log(TimeOfSober)
    return TimeOfSober;
    //finds difference in minutes between current time and time will sober, though all of this is unnecessary since the minutes variable already knows this information....
    // var TimeTillSober = moment().add(minutes, "minutes")
    // var current = moment()
    // console.log(TimeTillSober.diff(current, "minutes"))

}