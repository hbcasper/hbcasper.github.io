$(function () {
    var datos = [
    	{
    		"nombre":"ST01",
    		"empresa":"EP01",
    		"direccion":"calle 8 num 67",
    		"fecha":"2015-08-29",
    		"centroProd":"CP01"
    	},        
    	{
    		"nombre":"ST02",
    		"empresa":"EP02",
    		"direccion":"calle 18 num 670",
    		"fecha":fechaActual,
    		"centroProd":"CP02"
    	}
    ];
    $table.bootstrapTable({data: datos});
});