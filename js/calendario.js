$(document).ready(function() {  
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  $('#calendario').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    editable: true,
    selectable: true,
	selectHelper: true,
	select: function(start, end) {
				var title = prompt('Evento:');
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					$('#calendario').fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				$('#calendario').fullCalendar('unselect');
			},

    eventLimit: true,
    events: [
      {
        title: 'Evento todo el día',
        start: new Date(y, m, 1)
      },
      {
        title: 'Evento largo',
        start: new Date(y, m, d-5),
        end: new Date(y, m, d-2)
      },
      {
        id: 999,
        title: 'Evento que se repite',
        start: new Date(y, m, d-3, 16, 0),
        allDay: false
      },
      {
        id: 999,
        title: 'Evento que se repite',
        start: new Date(y, m, d+4, 16, 0),
        allDay: false
      },
      {
        title: 'Junta',
        start: new Date(y, m, d, 10, 30),
        allDay: false
      },
      {
        title: 'Lunch',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false
      },
      {
        title: 'Fiesta',
        start: new Date(y, m, d+1, 19, 0),
        end: new Date(y, m, d+1, 22, 30),
        allDay: false
      },
      {
        title: 'Link a Google',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://google.com/'
      }
    ]
  });
});