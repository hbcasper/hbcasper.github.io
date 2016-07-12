$(document).ready(function() {
	$(function() {
		$('[data-toggle="popover"]').popover({
			html : true
		});
	});

	$(function() {
		var ctx1 = $("#grafica1");
		var ctx2 = $("#grafica2");
		var ctx3 = $("#grafica3");
		// This will get the first returned node in the jQuery collection.
		var datos = {
			labels : ["January", "February", "March", "April", "May", "June", "July"],
			datasets : [
        {
            label: "My First dataset",

            // Boolean - if true fill the area under the line
            fill: false,

            // Tension - bezier curve tension of the line. Set to 0 to draw straight lines connecting points
            // Used to be called "tension" but was renamed for consistency. The old option name continues to work for compatibility.
            lineTension: 0.1,

            // String - the color to fill the area under the line with if fill is true
            backgroundColor: "rgba(75,192,192,0.4)",

            // String - Line color
            borderColor: "rgba(75,192,192,1)",

            // String - cap style of the line. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap
            borderCapStyle: 'butt',

            // Array - Length and spacing of dashes. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
            borderDash: [],

            // Number - Offset for line dashes. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
            borderDashOffset: 0.0,

            // String - line join style. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
            borderJoinStyle: 'miter',

            // The properties below allow an array to be specified to change the value of the item at the given index

            // String or Array - Point stroke color
            pointBorderColor: "rgba(75,192,192,1)",

            // String or Array - Point fill color
            pointBackgroundColor: "#fff",

            // Number or Array - Stroke width of point border
            pointBorderWidth: 1,

            // Number or Array - Radius of point when hovered
            pointHoverRadius: 5,

            // String or Array - point background color when hovered
            pointHoverBackgroundColor: "rgba(75,192,192,1)",

            // String or Array - Point border color when hovered
            pointHoverBorderColor: "rgba(220,220,220,1)",

            // Number or Array - border width of point when hovered
            pointHoverBorderWidth: 2,

            // Number or Array - the pixel size of the point shape. Can be set to 0 to not render a circle over the point
            // Used to be called "radius" but was renamed for consistency. The old option name continues to work for compatibility.
            pointRadius: 1,

            // Number or Array - the pixel size of the non-displayed point that reacts to mouse hover events
            //
            // Used to be called "hitRadius" but was renamed for consistency. The old option name continues to work for compatibility.
            pointHitRadius: 10,

            // The actual data
            data: [65, 59, 80, 81, 56, 55, 40],

            // String - If specified, binds the dataset to a certain y-axis. If not specified, the first y-axis is used. First id is y-axis-0
            yAxisID: "y-axis-0",
        }]
		};
		var datos2 = {
			labels : ["January", "February", "March", "April", "May", "June", "July"],
			datasets : [ {
            label: "My Second dataset",
            fill: false,
            backgroundColor: "rgba(255,205,86,0.4)",
            borderColor: "rgba(255,205,86,1)",
            pointBorderColor: "rgba(255,205,86,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,205,86,1)",
            pointHoverBorderColor: "rgba(255,205,86,1)",
            pointHoverBorderWidth: 2,
            data: [28, 48, 40, 19, 86, 27, 90]
        }]
		};
		var datos3 = {
			labels : ["January", "February", "March", "April", "May", "June", "July"],
			datasets : [{
				label : "My First dataset",
				fillColor : "rgba(220,220,220,0.2)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#47A8AA",
				pointHighlightFill : "#47A8AA",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : [65, 59, 80, 81, 56, 55, 40]
			}, {
				label : "My Second dataset",
				fillColor : "rgba(151,187,205,0.2)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(151,187,205,1)",
				data : [28, 48, 40, 19, 86, 27, 90]
			}]
		};

		var myLineChart = new Chart(ctx1, {
			type : "line",
			data : datos
		});
		var myLineChart = new Chart(ctx2, {
			type : "line",
			data : datos2
		});
		var myLineChart = new Chart(ctx3, {
			type : "line",
			data : datos3
		});
	});
});
