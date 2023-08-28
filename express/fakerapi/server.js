const express = require("express");
const app = express();
const port = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newFakeUser = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(), 
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),

    };
    return newFakeUser;
};

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.string.uuid(),
        Name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }

    };
    return newFakeCompany;
};


const newFakeUsers = createUser();
console.log(newFakeUsers);

const newFakeCompanys = createCompany();
console.log(newFakeCompanys);

app.get("/api/users/new", (req, res) => {
    res.json( createUser() );
});

app.get("/api/company/new", (req, res) => {
    res.json( createCompany() );
});

app.get("/api/user/company", (req, res) => {
    res.json( {Company :createCompany() , User : createUser()} );
});

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));