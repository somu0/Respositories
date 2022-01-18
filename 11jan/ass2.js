var a=prompt("enter your number")
var b=" ";
for(var i=0;i<a;i++){
    for(var j=0;j<=i;j++){
        b+="*";
    }
    b+="<br>";
}
document.write(b)
