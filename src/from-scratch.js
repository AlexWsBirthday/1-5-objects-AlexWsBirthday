
//1.
const coolGreeting = (person) => {
  if (person.isCool === true){
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }
  };
  
  
  //2.
  const haveBirthday = (person) => {
    person.age += 1
    console.log(person)
  };
  
  //3.
  const becomeSecretAgent = (person, spyHandle) => {
    delete person.name
    person.spyHandle = spyHandle //to add properties, you state the object name followed by dot notation with the name of the new key, then assign the key a value. 
  };
  
  
  
  //4. 
  const carMaker = (name, marker, year) => {
    return {
      name: name,
      maker: marker,
      year: year,
      needsOilChange: false,
    }
  };
  
  //5.
  const weAreNotFriends = (person) => {
  return person.friends.pop() //just had to access the friends array and use the .pop() method on it
  };
  
  
  //6.
  const listHobbies = (person) => {
    const list = person.hobbies
  for (let activity in list) {
    console.log(`${person.name} likes ${person.hobbies[activity]}.`)
  }
};
  
  //7.
  const getNextOpponent = (team) => {
    if(team.matches[0] === undefined) {
      return null 
    }
      let nextTeam = team.matches[0]; //make a variable for the opposing teams 
      let oppTeamName = nextTeam.teamName
      return oppTeamName //since you can use notation on the variable instead of index notation ([0]), it fetches the team!
  }
  
  //8.
  const listAllKeys = (obj) => {
    return Object.keys(obj)
};
  
  //9. 
  const listAllValues = (obj) => {
    return Object.values(obj)
  };
  
  //.10
  const convertToMatrix = (arr) => {
    if (arr.length === 0) {
    return []
  }
  let arr2 = [Object.keys(arr[0])]
  for (let list of arr) {
    arr2.push(Object.values(list))
  } return arr2
};
  
  module.exports = {
    coolGreeting,
    haveBirthday,
    becomeSecretAgent,
    carMaker,
    weAreNotFriends,
    listHobbies,
    getNextOpponent,
    listAllKeys,
    listAllValues,
    convertToMatrix,
  };
