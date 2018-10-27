// add solution here

function theBeatlesPlay(musicians, instruments){
 var beatles = []

  for(var i = 0; i < musicians.length; i++){
    beatles.push(`${musicians[0]} plays ${instruments[0]}`)
  }
  return beatles
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
    }while(n < 15);

    return loveArray
}
