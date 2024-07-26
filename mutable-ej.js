// //Mutable
// const updateAge = (userInfo) => {
//   userInfo.age = userInfo.age + 1
//
//   return userInfo;
// }

//Inmutable: Object.assign
// const updateAge = (userInfo) =>{
//   return Object.assign({}, userInfo, {age: userInfo.age + 1})
// }

//Inmutable: Spread Operator
const updateAge = (userInfo) => {
  return {
    ...userInfo,
    age: userInfo.age + 1
  };
}

const userInfo = {
  name: 'Abraham',
  age: 27,
  email: 'abraham@mail.com'
}

console.log('userInfo BEFORE>>', userInfo)

const updatedUserInfo = updateAge(userInfo);
console.log('userInfo AFTER>', userInfo);
console.log('updatedUser>>', updatedUserInfo);


