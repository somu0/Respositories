var arr=[];
var c=prompt("Enter 1st Number:");
c=parseInt(c);
arr.push(c);
var c=prompt("Enter 2nd Number:");
c=parseInt(c);
arr.push(c);
var c=prompt("Enter 3rd Number:");
c=parseInt(c);
arr.push(c);
if((arr[0]>=arr[1]) && (arr[0]>=arr[2])){
    alert(arr[0],);
}
else if((arr[1]>=arr[0] && (arr[1]>=arr[2]))){
    alert(arr[1]);
}
else{
    alert(arr[2]);
}
