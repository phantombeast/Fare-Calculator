var distanceCost=(function () {

    var price={};

    function calculatePrice(distance) {
        var total;
        if(distance<=5){
          //  total=distance*20;
            total=distance*5;
        }
        else if(distance<=10){
          //  total=(distance-5)*30+100;
            total=(distance-5)*10+25;
        }
        else if(distance<=15){
         //   total=(distance-10)*40+250;
            total=(distance-10)*20+75;
        }
        else {
            //total=(distance-15)*50+450;
            total=(distance-15)*30+175;
        }
        return total;
    }

    price.calculatePrice=calculatePrice;

    return price;
})();