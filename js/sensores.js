$(document).ready(function() {
	$('.btn-filtro').click(function(){
		$('#filtros').toggle();
	});
	
	$('.filtro').click(function(){
		var filtrar = [];
		$('.filtrosForm').children('label').children('input').each(function(){
			if (this.checked)
				filtrar.push(this.value);
		});
		$table.bootstrapTable('filterBy', {'tipo': filtrar});
		$("#table").bootstrapTable('resetView');
	});
	
	$("#modalInfoSensor").on('shown.bs.modal', function () {
            resizeMap();
    });
	
	$(function() {
		var ctx = $("#grafica");
		var datos = {
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
		var myLineChart = new Chart(ctx, {
			type : "line",
			data : datos
		});
	});
});