// code your solution here
function saturdayFun(fun = 'roller-skate') {
  if (fun === 'roller-skate') {
    console.log("This Saturday, I want to roller-skate!");
    return "This Saturday, I want to roller-skate!"
  } else {
    console.log(`"This Saturday, I want to ${fun}!"`)
    return `This Saturday, I want to ${fun}!`
  }
}

saturdayFun("bathe my dog")

const mondayWork = function (act = 'go to the office') {
  if (act === 'go to the office') {
    console.log("This Monday, I will go to the office.");
    return "This Monday, I will go to the office.";
  } else {
    console.log(`This Monday, I will ${act}.`);
    return `This Monday, I will ${act}.`
  }
}

mondayWork('work from home');

function wrapAdjective( outer ) {
  if( outer == '*'){
    const innerFnc = function( inner ){
      return `You are ${outer}${inner}${outer}!`
    }
    return innerFnc('a hard worker')
  } else if ( outer == '||'){
    const innerFnc = function( inner ){
      return `You are ${outer}${inner}${outer}!`
    }
    return innerFnc('a dedicated programmer')
  }
}

wrapAdjective('*')