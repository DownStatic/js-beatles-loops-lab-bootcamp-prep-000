function theBeatlesPlay(musicians,instruments){
  var plays = []
  for(let i = 0; i < musicians.length; i++){
    plays[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return plays
}

function johnLennonFacts(facts){
 var xtremefacts = []
 while(xtremefacts.length < facts.length){
   xtremefacts.push(`${facts[i]}!!!`)
 }
 return xtremefacts
}

function iLoveTheBeatles(num){
  var love = []
  do{
    love.push("I love the Beatles!")
    num++
  }while (num < 15)
}