var timeCOst=(function () {

    var price={};

    function caculatePrice(time) {
        var total=0;
        if(time<=15){
            total=0;
        }
        else if(time<=20){
            total=(time-15)*5;
        }
        else if(time<=30){
            total=(time-20)*10+25;
        }
        else{
            total=(time-30)*15+125;
        }

        return total;
    }
    price.caculatePrice=caculatePrice;

    return price;
})();

(function calculate(a,b) {

    console.log(a*b);
})(90,88);