// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// // const [firstAnimal, secondAnimal] = animals;
// const [firstAnimal, secondAnimal, ...otherAnimals] = animals; //Con ... extraemos solo lo a continuación, omitiendo lo que hay detras
// console.log(otherAnimals)
// // => ['fish', 'cat', 'bird']

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};
                                //rest
const { firstName, lastName, ...attributes } = person;

//spread
const personCopy = { ...person };
personCopy === person //Limitaciones (copia superficial)
// => false
personCopy.addresses === person.addresses
// => true