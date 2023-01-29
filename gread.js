// Describe grade  system:
/*
0-32=F
32-49=D
50-59=C
60-69=B
70-79=A
80-100=A+
*/ 
var result= 30;

if (result >100){
    console.log('Vai, Result kemny 100 theky boro hoy');
}
else if(result <=100 && result >= 0){
    
    if(result >= 0 && result <33 ){
        console.log('F grade paicho');
    }
    else if(result >= 32 && result <50 ){
        console.log('Tumi D grade paicho');
    }
    

}
else{
    console.log('vai result 0 thekew kom hoy kmny..')
}