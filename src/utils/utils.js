const randomiseGate = () =>{
  const { randomInt } = require('crypto')
  const n = randomInt(0, 3) // un nombre aléatoire entre 0 et 2
  const gates = ['goat', 'goat', 'goat'] // 3 chèvres par défaut derrière chacune des portes
  let randGates = [...gates]
  randGates[n] = 'car' 
  // console.log(n)
  // console.log(randGates)
  return randGates  
}
const hiddenGates = (gates) => {
  let hidGates = []
  gates.forEach(e => hidGates.push('X'))
  return hidGates
}
const selectGate = (hidGates, ) => {

}

exports.randomiseGate = randomiseGate
exports.hiddenGates = hiddenGates