const faker = require("faker");

const generateUsers = (count) => {
    result = [];
    for (let i = 0; i < count; i++) {
        result = [...result, { name: faker.name.findName() }];
    }
    return result;
};

exports.generateUsers = generateUsers;
