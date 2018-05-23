function theBeatlesPlay(musicians,instruments){
  var plays = []
  for(i = 0; i < musicians.length; i++){
    plays[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return plays
}

function johnLennonFacts(facts){
 var xtremefacts = []
 i = 0
 while(i < facts.length){
   xtremefacts[i] = `${facts[i]}!!!`
 }
 return xtremefacts
}