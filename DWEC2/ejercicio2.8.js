let res = "";
for (var i = 1; i < 25; i++) {

    if (i%2 == 0) {
    
        if (i == 25-1){
            res += i;
        }
        else{
            res += i + ", ";
        }
    }
}
alert(res);