function kilometerToMeter(m){
    if(m<0){
        return "distance cannot be negative"
    }
    else{
        var meter= m*1000;
    return meter;
    }
}

function budgetCalculator(watch,phone,laptop){
    if(watch<0){
       return "product number cannot be negative"}
   if(phone<0){
       return "product number cannot be negative"
   }
   if(laptop<0){
       return "product number cannot be negative"
   }
   else{
       var total =(watch*50)+(phone*100)+(laptop*500);
       
       return total;
   }
}

   function hotelCost(days){
    var cost=0;
    if (days<=10){
        cost= days*100;
    }
    else if(days<=20){
        var firstcost=10*100;
        var remaining = days-10;
        var secondcost = remaining*80;
        cost= firstcost + secondcost;
    }
    else{
        var firstcost = 10*100;
        var secondcost = 10*80;
        var remaining = days-20;
        var thirdcost = remaining*50;
        cost = firstcost+secondcost+thirdcost;
    }
       return cost;
    }

    function megaFriend(array){
        var longestWord="";
        array.forEach(function(word){
            if(word.length > longestWord.length){
                longestWord=word;
            }
        });
        return longestWord;
        }

