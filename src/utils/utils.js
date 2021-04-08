const randomiseGate = () =>{
  const { randomInt } = require('crypto')
  const n = randomInt(0, 3) // un nombre aléatoire entre 0 et 2
  const gates = ['goat', 'goat', 'goat'] // 3 chèvres par défaut derrière chacune des portes
  let randGates = [...gates]
  randGates[n] = 'car' 
  return randGates  
}

const hiddenGates = (gates) => {
  let tmpTab = []
  gates.forEach(e => tmpTab.push('X'))
  return tmpTab
}
const showHiddenGates = () => {

}

const playerChoice = () => {
  const readlineSync = require('readline-sync')
  let choice = Number(readlineSync.question('choisissez une porte: '))
  console.log(`vous avez choisi la porte n°: ${choice}`)
  return choice-1
}
const playerFinalChoice = (randGates,choice,aiChoice) => {
  const readlineSync = require('readline-sync')
  let finalChoice = ''
  while((finalChoice !== 'o') && (finalChoice !== 'n')){
    finalChoice = readlineSync.question('voulez-vous changer de porte ? (o/n) : ')
  }
    console.log(finalChoice)
    let tmp = ''
    switch(finalChoice){
      case 'o':
        for( let i = 0 ; i < randGates.length ; ++i ){
          if(i === choice && i === aiChoice){
            continue
          }else{
            tmp = randGates[i]
          }
        }
      case 'n':
        tmp = randGates[choice]
        break
        }
        return tmp
}


const aiChoice = (randGates,choice) => { 
  const { randomInt } = require('crypto')
  const n = randomInt(0, 2) // un nombre aléatoire entre 0 et 1
  let tmp
  let tmpTab=[]
  for( let i = 0 ; i < randGates.length ; ++i ){
    if(choice === i || randGates[i]==='car'){
        continue
    }else if(randGates[choice === 'car']){
      for( let j = 0 ; j < randGates.length ; ++j ){
        if(i === choice){
          continue
        }else{
          tmpTab.push(i)
        }
      }
      tmp = tmpTab[n]
    }else{
      tmp = i 
    }
  }
  return tmp
}

exports.randomiseGate = randomiseGate
exports.hiddenGates = hiddenGates
exports.playerChoice = playerChoice
exports.aiChoice = aiChoice
exports.playerFinalChoice = playerFinalChoice
exports.showHiddenGates = showHiddenGates