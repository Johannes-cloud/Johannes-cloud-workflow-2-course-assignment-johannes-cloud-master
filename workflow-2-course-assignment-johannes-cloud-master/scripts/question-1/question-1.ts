interface User {
  school?: string;
  firstName: string;
  lastName: string;
  age: number;
  isAdmin?: boolean;
}

// Convert the function to TypeScript, making sure to use the
//  User interface as the return type
function createUser({ school, firstName, lastName, age, isAdmin}: User) {
  return {
    school,
    firstName,
    lastName,
    age,
    isAdmin,
  };
}

const newUser = createUser({
  school: 'Noroff',
  firstName: 'Ola',
  lastName: 'Nordmann',
  age: 18,
  isAdmin: false,
});

const newAdmin = createUser ({
  school: 'Noroff',
  firstName: 'Kari',
  lastName: 'Nordmann',
  age: 36,
  isAdmin: true,
});

console.log(newUser);
console.log(newAdmin);