// code your solution here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun("bathe my dog"));

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork('work from home'));

function wrapAdjective(symbol = "" ){

        return function encouragingPromptFunction(sentence){
        
            return (`You are ${symbol}${sentence}${symbol}!`) 
        }
    }

console.log(wrapAdjective('*')('a dedicated programmer'))


