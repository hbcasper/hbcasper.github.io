$(function () {
    var datos = [
    	{
    		"nombre":"Luis",
    		"empresa":"EP01",
    		"aPaterno":"Palma",
	    	"aMaterno":"Suarez",
	    	"usuario":"user",
	    	"correo":"correo@ejemplo.com",
	    	"direccion":"calle 18",
	    	"telefono":"9876543",
	    	"celular":"91876543",
	    	"sucursal":"SC01",
	    	"area":"AR01",
	    	"estado":"activo",
	    	"perfil":"operativo",
    		"fecha":"2015-08-29",
    		"imagen":"http://audubondermatology.com/wp-content/uploads/2012/09/skin-care-for-men-good-looking-guy.jpg"
    	},        
    	{
    		"nombre":"USER02",
    		"empresa":"EP02",
    		"direccion":"calle 18 num 670",
    		"fecha":fechaActual,
    		"imagen":"http://dev.alurosu.com/bobo/chat/data/img/admin/default.png"
    	}
    ];
    $table.bootstrapTable({data: datos});
});