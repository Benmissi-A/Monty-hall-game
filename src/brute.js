const {randomiseGate,hiddenGates,autoPlayerChoice,aiChoice,autoPlayerFinalChoice} = require('./utils/utils')



  let w1 = 0
  let l1 = 0
  let w2 = 0
  let l2 = 0

  for(let i = 0 ; i < 1000 ; ++i){
    const gates = randomiseGate()
    const hidGates = hiddenGates(gates)
    const pChoice = autoPlayerChoice(hidGates)
    const aChoice = aiChoice(gates,pChoice)
    const final1 = autoPlayerFinalChoice(gates,pChoice,aChoice,'o')
    const final2 = autoPlayerFinalChoice(gates,pChoice,aChoice,'n')
  
    final1 === 'car' ? w1++ : l1++
    final2 === 'car' ? w2++ : l2++
}

console.log('keep:')
console.log(`Cars: ${w1}`)
console.log(`Goats: ${l1}`)
console.log('')
console.log('change:')
console.log(`Cars: ${w2}`)
console.log(`Goats: ${l2}`)