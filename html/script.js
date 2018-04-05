window.onload=function () {
    var distance=document.getElementById('distance');
    var waitingtime=document.getElementById('waitingtime');
    var buttot=document.getElementById('btn-tot');
    var result=document.getElementById('result');

    var taxes=document.getElementById('taxes');
    var total=document.getElementById('total');


    function totalPrice() {
        var distanceCostt=distance.value;
        var wtingTime=waitingtime.value;

        var price=distanceCost.calculatePrice(distanceCostt)+ timeCOst.caculatePrice(wtingTime);

        result.innerHTML=price;

       var taxess=price* 5/100;
       var totall= taxess+price;

        taxes.innerHTML=taxess;
        total.innerHTML=totall;



    }
    window.totalPrice=totalPrice;


}