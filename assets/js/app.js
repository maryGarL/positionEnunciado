var body=document.getElementsByTagName("BODY")[0]
var contenedor=document.createElement("div");
for (var i = 1; i < 3; i++) {
var div0=document.createElement("div");
var div1=document.createElement("div");
var div2=document.createElement("div");
div0.setAttribute("id","divPrincipal-"+i);
div1.setAttribute("id","divHijo")
div2.setAttribute("id","divNieto")
contenedor.setAttribute("id","cajapadre")
div1.appendChild(div2);
div0.appendChild(div1);
contenedor.appendChild(div0);
body.appendChild(contenedor)
}
