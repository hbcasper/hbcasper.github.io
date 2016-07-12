$(function () {
    var datos = [
    	{
    		"nombre":"CP01",
    		"empresa":"EP01",
    		"direccion":"calle 8 num 67",
    		"fecha":"2015-08-29",
    		"sucursal":"SC01"
    	},        
    	{
    		"nombre":"CP02",
    		"empresa":"EP02",
    		"direccion":"calle 18 num 670",
    		"fecha":fechaActual,
    		"sucursal":"SC02"
    	}
    ];
    $table.bootstrapTable({data: datos});
});