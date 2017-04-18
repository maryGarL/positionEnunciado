var body=document.getElementsByTagName("BODY")[0]
for (var i = 1; i < 3; i++) {
var div0=document.createElement("div");
var div1=document.createElement("div");
var div2=document.createElement("div");
div0.setAttribute("id","divPrincipal-"+i);
div1.setAttribute("id","divHijo")
div2.setAttribute("id","divNieto")
div1.appendChild(div2);
div0.appendChild(div1);
body.appendChild(div0);
}
