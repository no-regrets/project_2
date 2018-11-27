module.exports = function (startTime, bac) {
    var moment = require('moment');
    moment().format();
    console.log(bac)
    var current = moment()
    var difference = startTime.diff(current, "minutes")
    console.log(difference)
    difference *= (.015 / 60)
    bac -= difference
    if (bac < 0) {
        bac = 0
    }
    console.log(bac)
    return bac

}