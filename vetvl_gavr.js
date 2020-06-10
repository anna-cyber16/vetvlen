function zad1(){
    var a_1, b_1, result;
    a_1  = + document.getElementById('in1').value;
    b_1  = + document.getElementById('in2').value;

    if(a_1>b_1){
        result=a_1;
    }else if (a_1==b_1){
         result="Числа равны";
    }
    else{
        result=b_1;
    }
    document.getElementById('otvet_1').innerHTML = result;
} 
function zad2(){
    var a_1, b_1, c_1, result;
    a_1  = + document.getElementById('in21').value;
    b_1  = + document.getElementById('in22').value;
    c_1  = + document.getElementById('in23').value;
    if(a_1>b_1 && a_1>c_1){
        result=a_1;
    }else if (a_1==b_1 && a_1==c_1){
         result="Числа равны";
    }else if(b_1>a_1 && b_1>c_1){
        result=b_1;
    }
    else{
        result=c_1;
    }
    document.getElementById('otvet_2').innerHTML = result;
} 
function zad3(){
    var a_1, b_1, result;
    a_1  = + document.getElementById('in31').value;
    b_1  = + document.getElementById('in32').value;
    
    if (a_1> 0 && b_1 >0){
        result="Первая четверть";
     } else if (a_1 < 0 && b_1 >0){
         result="Вторая четверть";
     } else if (a_1 < 0 && b_1 < 0){
         result="Третья четверть";
     } else if (a_1 > 0 && b_1 <0){
         result="Четвертая четверть";
     } else if (a_1 == 0 && b_1 ==0){
         result="Начало координатной плоскости";
     } else if (a_1 == 0 || b_1 !=0){
        result="Точка лежит на оси ОУ";
     } else if (b_1 == 0 || a_1 !=0){
        result="Точка лежит на оси ОХ";
     }
    document.getElementById('otvet_3').innerHTML = result;
} 
function zad4(){
    var a_1, b_1, result;
    a_1  = + document.getElementById('in41').value;
    b_1  = + document.getElementById('in42').value;
    if (Number.isInteger(a_1) && Number.isInteger (b_1)){
        if (a_1 > b_1){
         result=a_1;
        } else if (a_1 < b_1){
        result=b_1;
        } else{
         result="0";
        }
     } else{
         result="Числа не являются целыми";
     }   
    document.getElementById('otvet_41').innerHTML = result;
    document.getElementById('otvet_42').innerHTML = result;
} 
function zad5(){
    var a_1, result;
    a_1  = + document.getElementById('in5').value;
    if (Number.isInteger(a_1)){
        if (a_1%2==0 ){
            if (a_1>=10 && a_1<100){
             result="Число четное и двузначное";
            } else{
              result="Число четное и недвузначное"
            }
         } else if (a_1>=10 && a_1<100){
            result="Число нечетное и двузначное";
           } else{
           result="Число нечетное и недвузначное";
           }
     } else{
         result="Не целое число";
    }
    document.getElementById('otvet_5').innerHTML = result;
}  
function zad6(){
    var a_1, result;
    a_1  = + document.getElementById('in6').value;
    if (a_1 >0){
        if (a_1%2==0){
            result="Число положительное и кратно 2";
        } else {
        result="Число положительное, но не кратно 2";
        } 
    }else if (a_1 <0 || a_1==0) {
        if (a_1%2==0){
            result="Число неположительное и кратно 2";
        } else {
        result="Число неположительное и не кратно 2";
        } 
    }
    document.getElementById('otvet_6').innerHTML = result;
}
function zad7(){
    var a_1, result;
    a_1  = + document.getElementById('in7').value;
    if (a_1%2==0 && a_1%3==0 ){
        result="Число кратно 2 и 3"
    }else if (a_1%2==0 && a_1%5!=0) {
        result="Число кратно 2 и не кратно 5";
    }else if (a_1>0 && a_1<3){
        result="Число пренадлежи интервалу (0;3)"
    }else if (a_1>=-2 && a_1<=0){
        result="Число принадлежит интервалу [-2;0]"
    }else {
        result="Число не соответствует ни одному из условий";   
    }    
    document.getElementById('otvet_7').innerHTML = result;
}
function zad8(){
    var a_1, result;
    a_1  = + document.getElementById('in8').value;
    if (Number.isInteger(a_1) && a_1>0){
        if (a_1>=100 && a_1<1000){
            if (a_1%10==(a_1-a_1%100)/100){
                result="Число является полиндромом";
            } else {
                result="Число не является полиндромом";
            }
        }else {
            result="Введенное число не корректно";
        }
    }
    
    document.getElementById('otvet_8').innerHTML = result;
}
function zad9(){
    var a_1, b_1, result;
    a_1  = + document.getElementById('in91').value;
    b_1  = + document.getElementById('in92').value;
    if (a_1>=0 && a_1<24 && b_1>=0 && b_1<60){
        if (a_1>=5 && a_1<12){
            result="Доброе утро!"
        }
        else if (a_1>=12 && a_1<18){
            result="Добрый день!";
        }
        else if (a_1>=18 && a_1<21){
            result="Добрый вечер!";
        }
        else{
            result="Доброй ночи!";
        }
    }
    else {
        result="Введен некорректный формат времени"
    }
    document.getElementById('otvet_9').innerHTML = result;
}
function zad10(){
    var a_1, result;
    a_1  = + document.getElementById('in10').value;
    if (a_1%10==5 || a_1%10==0){
        result="Число делится на 5"
    }else {
        result="Число не делится на 5";
    }
    document.getElementById('otvet_10').innerHTML = result;
}
function zad11(){
    var x_1, y_1, z_1, a_1, result;
    x_1  = + document.getElementById('in111').value;
    y_1  = + document.getElementById('in112').value;
    z_1  = + document.getElementById('in113').value;
    a_1  = + document.getElementById('in114').value;
    
    if (x_1>0 && y_1>0 && z_1>0 && a_1>0){
        if(x_1<=a_1 && y_1<=a_1){
           result='Кирпич пройдет';
       }
        else if (x_1<=a_1 && z_1<=a_1){
           result='Кирпич пройдет';
       }
        else if (y_1<=a_1 && z_1<=a_1){
           result='Кирпич пройдет';
       }
        else if ((x_1>a_1 && y_1>a_1) || (x_1>a_1 && z_1>a_1) || (y_1>a_1 && z_1>a_1)){
           result ='Кирпич не пройдет';
       }
       } else {
           result="Некорректный ввод данных"
       }
    document.getElementById('otvet_11').innerHTML = result;
}
function zad12(){
    var a_1, b_1, result;
    a_1  = + document.getElementById('in121').value;
    b_1  = + document.getElementById('in122').value;
    
    if(a_1>0){
        if (a_1>b_1){
            result=a_1;
        }else {
            result=b_1;
        }
    }else if (a_1<=0) {
        if (a_1<b_1){
            result=a_1;
        }else {
            result=b_1;
        }
    }
document.getElementById('otvet_12').innerHTML = result;
} 
function zad13(){
    var a_1, b_1, result_1, result_2 ;
    a_1  = + document.getElementById('in131').value;
    b_1  = + document.getElementById('in132').value;
    if (a_1>b_1){
        result_1=a_1*b_1;
        result_2=(a_1+b_1)/2;
    } else if (b_1>a_1) {
            result_1=(a_1+b_1)/2;
            result_2=a_1*b_1; 
    } else {
        result_1=a_1;
        result_2=b_1;
    }      
document.getElementById('otvet_131').innerHTML = result_1;
document.getElementById('otvet_132').innerHTML = result_2;
} 
function zad14(){
    var a_1, b_1, result;
    a_1  = + document.getElementById('in141').value;
    b_1  = + document.getElementById('in142').value;
    if (a_1%2==0){
        if (a_1>b_1){
            result=a_1;
        }else{
            result=b_1;
        }
    }
    else {
        result=a_1/2+b_1/2 
    }
document.getElementById('otvet_141').innerHTML = result;
}
function zad15(){
    var a_1, b_1, result_1, result_2 ;
    a_1  = + document.getElementById('in151').value;
    b_1  = + document.getElementById('in152').value;
    
    if (Number.isInteger(a_1)){
        if (a_1>b_1){
        result_1=a_1%10;
        result_2=result_1%3;
        }else {
            result_1=b_1%10;
            result_2=result_1%3;
        }
    }
    else { 
        result_1="Число не целое";
        result_2=" ";
    }
document.getElementById('otvet_151').innerHTML = result_1;
document.getElementById('otvet_152').innerHTML = result_2;
} 