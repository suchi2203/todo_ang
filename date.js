module.exports.t_date=Today_date;
function Today_date(){
var today = new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let todayDate_ = today.toLocaleDateString("en-US",options);
    return todayDate_;
}

module.exports.t_day=Today_day;
function Today_day(){
    var today = new Date();
        var options={
            weekday:"long",
        };
        let todayDay = today.toLocaleDateString("en-US",options);
        return todayDay;
    }