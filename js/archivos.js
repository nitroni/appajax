var rutaurl="http://php52.secuencia24.com/";
var rutafacebook="";
function cargarlista(tipo) {
    
	var pa = global_idubi;//$("#idubi").find(':selected').val();
	var dep = global_depart;//$("#depart").find(':selected').val();
	var idt=fr;
	var conta=0;
	var tip;
	tip=1;
    $.post(rutaurl+'mememovil/lib/genera-archivos.php', {op : tipo,idp : pa ,dp : dep, idt : idt,idd : dep, cont : conta, tipo : tip },       
     function(data){
           if (data != "[]") {
			   var arc_id="";
			   var arc_nombre="";
			   var arc_ruta_archivo="";
			   var i=0;
			   var valores = JSON.parse(data);  
			   var $ruta="";
			   document.getElementById("imgc").innerHTML="";   
			   while (i<valores.length){
				     arc_nombre=valores[i]["arc_nombre"];
					 arc_id=valores[i]["arc_id"];
					 arc_ruta_archivo=valores[i]["arc_ruta_archivo"];
					 ruta="http://php52.secuencia24.com/mememovil/"+arc_ruta_archivo;
					  if (arc_ruta_archivo !== null) {
                           $("#imgc").append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-corner-top ui-corner-bottom ui-li-last ui-btn-up-c"><div class="ui-btn-inner ui-li ui-corner-top"><div class="ui-btn-text"><a href="#page6" onclick="archivosfull('+arc_id+')" class="ui-link-inherit"><img class="imaProductoPrin ui-li-thumb ui-corner-tl ui-corner-bl" height="65" src="'+ruta+'"> '+arc_nombre+'</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');   
                      }
					 $ruta="";
					 i=i+1;
			   }
           }
           return false;
    });
	valores="";
	data="";
	window.location="#page7";
} 
function GuardarImagen(idarch) {
	var pa = $("#idubi").find(':selected').val();
	var dep = $("#depart").find(':selected').val();
	var idt=fr;
	var conta=0;
	var tip;
	var canvas = document.getElementById("canvas");
    var codigo = canvas.toDataURL("image/png").replace("image/png;base64"); 
	codigo=codigo.replace('data:undefined,','');
	
	tip=1;
    $.post(rutaurl+'mememovil/lib/ControllerGuardarImagen.php', {idarch : idarch, codigo : codigo },       
     function(data){
           if (data != "[]") {
			   var arc_id="";
			   var codigor="";
			   var imgcodigor="";
			   var arc_ruta_archivo="";
			   var i=0;
			   var valores = JSON.parse(data);  
			   var ruta="";
			   var uimg="";
			   document.getElementById("imagenmod").innerHTML="";   
				     codigor=valores[0]["codigo"];
                     imgcodigor=valores[0]["imgcodigo"]; 
					 rutafacebook=rutaurl+'mememovil/'+imgcodigor;
					  if (codigor !== null) {
						  
						  uimg="data:image/png;base64,"+codigor;                                                                                 
                          $("#imagenmod").append('<img src="'+uimg+'" width="100%" height="256px" />'); 
                          //$("#imagenmod").append('<img src="'+uimg+'" width="100%" height="256px" /><a href="https://www.facebook.com/sharer/sharer.php?s=100&p[images][0]='+rutafacebook+'" target="_blank">compatir con facebook h</a>'); 
						  var a = document.getElementById('fac'); //or grab it by tagname etc
                          a.href = 'https://www.facebook.com/sharer/sharer.php?u='+rutafacebook+'';						  
                      }
					
           }
           return false;
    });
	valores="";
	data="";
	window.location="#page8";
}
function archivosfull(idimg) {
	var pa = $("#idubi").find(':selected').val();
	var dep = $("#depart").find(':selected').val();
	var idt=fr;
	var conta=0;
	var op=5;
	var tipo=2;
    $.post(rutaurl+'mememovil/lib/genera-archivos.php', {idimg:idimg, tipo : tipo },       
     function(data){
           if (data != "[]") {
			   var arc_id="";
			   var arc_nombre="";
			   var arc_ruta_archivo="";
			   var i=0;
			   var valoresd = JSON.parse(data);  
			   var $rutaf="";
			   document.getElementById("imgcr").innerHTML="";
			   while (i<valoresd.length){
				     arc_nombre=valoresd[i]["arc_nombre"];
					 arc_id=valoresd[i]["arc_id"];
					 arc_ruta_archivo=valoresd[i]["arc_ruta_archivo"];
					 rutaf="http://php52.secuencia24.com/mememovil/"+arc_ruta_archivo;
					  if (arc_ruta_archivo !== null) {
                           $("#imgcr").append('<canvas id="canvas"></canvas><input id="top-line" placeholder="Top text"><input id="bottom-line" placeholder="Bottom text">'); 

						    Meme(rutaf, 'canvas');

							$('#top-line, #bottom-line').keyup(function() {
								Meme(rutaf, 'canvas', $('#top-line').val(), $('#bottom-line').val());
							});
                      }
					  $rutaf="";
					 i=i+1;
			   }
           }
           return false;
    });
	valores="";
	data="";
	window.location="#page6";
} 

function registrarusuario() {
	var email = document.getElementById("emaill").value;
	var password  = document.getElementById("passworr").value;
	var passwordd  = document.getElementById("passwordd").value;
	
	var idt=fr;
	var conta=0;
	var op=5;
	var tipo=2;
    $.post(rutaurl+'mememovil/lib/registrar_usuario_movil.php', {email:email, password : password, passwordd : passwordd},       
     function(data){
           if (data != "[]") {
			   var sw="";
			   var valoresd = JSON.parse(data);  
			   var $rutaf="";
			   document.getElementById("imgcr").innerHTML="";
					 sw=valoresd[0]["sw"];
					  if (sw== 1) {
                          alert("Registro completo");
						  window.location="#page2";
                      }  
					  if (sw== 2) {
                          alert("El E-mail ya existe, ingresa otro e-mail");
                      } 
					  if (sw== 3) {
                          alert("El password no es igual");
                      } 
					  if (sw== 4) {
                          alert("Los campos no pueden estar vacios");
                      } 
           }
           return false;
    });
	valores="";
	data="";
	
} 
function loginusuario() {
	var email = document.getElementById("email1").value;
	var password  = document.getElementById("passwor").value;
	
	var idt=fr;
	var conta=0;
	var op=5;
	var tipo=2;
    $.post(rutaurl+'mememovil/lib/login_usuario_movil.php', {email:email, password : password},       
     function(data){
           if (data != "[]") {
			   var sw="";
			   var valoresd = JSON.parse(data);  
			   var $rutaf="";
			   document.getElementById("imgcr").innerHTML="";
					 sw=valoresd[0]["sw"];
					  if (sw== 1) {
						  window.location="#page2";
                      }  
					  if (sw== 2) {
                          alert("Los campos no pueden estar vacios");
                      } 
					  if (sw== 3) {
                          alert("El usuario no existe, intentelo nuevamente");
                      } 
           }
           return false;
    });
	valores="";
	data="";
	
} 


function envioemailimagen() {

	var idt=fr;
	var conta=0;
	var op=5;
	var tipo=2;
    $.post(rutaurl+'mememovil/lib/ControllerEnviarImagen.php', {imagen:rutafacebook},       
     function(data){
           if (data != "[]") {
			   var sw="";
			   var valoresd = JSON.parse(data);  
			   var $rutaf="";
			   document.getElementById("imgcr").innerHTML="";
					 sw=valoresd[0]["sw"];
					  if (sw== 1) {
						  window.location="#page2";
                      }  
					  if (sw== 2) {
                          alert("Los campos no pueden estar vacios");
                      } 
					  if (sw== 3) {
                          alert("El usuario no existe, intentelo nuevamente");
                      } 
           }
           return false;
    });
	alert("Imagen se ha enviado a tu E-mail");
	valores="";
	data="";
	
}
function GuardarImgMovile(){
			var canvas = document.getElementById("canvas");
			var image = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");	
			window.location.href = image;
}
function GuardarImgMovilee(){
			var canvas = document.getElementById("canvas");
			
			
			var cs = new CanvasSaver('http://greenethumb.com/canvas/lib/saveme.php')
            var btn = cs.generateButton('save an image!', canvas, 'myimage');
			document.body.insertBefore(btn, cnvs);
			
}
function MensajeEmail(){
			alert("La imagen tiene que ser aprobada para poderla enviar al E-mail");			
}
function MensajeFacebook(){
			alert("La imagen tiene que ser aprobada para poderla compatir con Facebook");			
}