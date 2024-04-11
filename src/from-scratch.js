const coolGreeting = () => {
};

const haveBirthday = (person) => {
  person.age += 1
  console.log(person)
};

const becomeSecretAgent = () => {
};

const carMaker = (name, marker, year) => {
  return {
    name: name,
    maker: marker,
    year: year,
    needsOilChange: false,
  }
};

const weAreNotFriends = () => {
};

const listHobbies = (person) => {
  const list = person.hobbies
  for (let activity in list) {
    console.log(`${person.name} likes ${person.hobbies[activity]}.`)
  }
};

const getNextOpponent = () => {
};

const listAllKeys = (obj) => {
  return Object.keys(obj)
};

const listAllValues = () => {
};

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
