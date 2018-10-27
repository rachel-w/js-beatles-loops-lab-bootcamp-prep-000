// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
  	array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var johnArray = []
  var counter = 0
    while (counter < facts.length) {
      johnArray.push(facts[counter] + "!!!")
      counter++
    }
    return johnArray
}

function iLoveTheBeatles(number){
  var loveArray = []
  do{
    loveArray.push("I love the Beatles!")
      number++
    }while(number < 15);

    return loveArray
}
