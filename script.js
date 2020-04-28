
function planner() {

$("#weekly-schedule").dayScheduleSelector({

// Sun - Sat
days        : [0, 1, 2, 3, 4, 5, 6],  

// HH:mm format
startTime   : '08:00',         

// HH:mm format       
endTime     : '20:00',

// minutes                
interval    : 30,    

stringDays  : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

// Custom template                 
template    : '<div class="day-schedule-selector">'         +
                '<table class="schedule-table">'            +
                  '<thead class="schedule-header"></thead>' +
                  '<tbody class="schedule-rows"></tbody>'   +
                '</table>'                                  +
              '<div>'


    });

    $("#weekly-schedule").data('artsy.dayScheduleSelector').deserialize({
        '0': [['09:30', '11:00'], ['13:00', '16:30']]
      });
    



    }
    console.log("working")
