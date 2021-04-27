const express = require('express');
const faker = require('faker');


//create app
const app = express();

//port
const port = 8000;


class User {
    constructor(){
        this.id = faker.random.number();
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phonenumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor(){
        this.id = faker.random.number();
        this.company = faker.company.companyName();
        this.address = [{
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country(),
        }]

    }
}

class usersCompany {
    constructor(){
        this.id = faker.random.number();
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phonenumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.id = faker.random.number();
        this.company = faker.company.companyName();
        this.address = [{
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country(),
        }]

    }
}


app.get("/api/users/new", (req, res) => {
        console.log(new User)
        res.json(new User );
    });

app.get("/api/companies/new", (req, res) => {
            res.json( new Company );
        });

app.get("/api/users/company", (req, res) => {
        res.json( new usersCompany );
    });

//Listens for server start and console logs entry
app.listen(port, () => console.log(`Running on port ${port}!!`));
