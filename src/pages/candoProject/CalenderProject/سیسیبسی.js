import { req } from 'superagent'; // ajax library

var calendar = new Calendar(calendarEl, {

  events: function(info, successCallback, failureCallback) {
    req.get('myxmlfeed.php')
      .type('xml')
      .query({
        start: info.start.valueOf(),
        end: info.end.valueOf()
      })
      .end(function(err, res) {

        if (err) {
          failureCallback(err);
        } else {

          successCallback(
            Array.prototype.slice.call( // convert to array
              res.getElementsByTagName('event')
            ).map(function(eventEl) {
              return {
                title: eventEl.getAttribute('title'),
                start: eventEl.getAttribute('start')
              }
            })
          )
        }
      })
  }

});