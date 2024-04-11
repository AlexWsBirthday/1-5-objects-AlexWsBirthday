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

const listAllKeys = () => {
};

const listAllValues = () => {
};

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
