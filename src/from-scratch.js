
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
  const listHobbies = () => {
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
  const listAllKeys = () => {
  };
  
  //9. 
  const listAllValues = (obj) => {
    return Object.values(obj)
  };
  
  //.10
  const convertToMatrix = () => {
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
