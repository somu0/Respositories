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
    alert(arr[0]," is Maximum");
}
else if((arr[1]>=arr[0] && (arr[1]>=arr[2]))){
    alert(arr[1],"is Maximum");
}
else{
    alert(arr[2],"is Maximum");
}
