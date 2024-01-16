"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.custom = exports.data = void 0;
const faker_1 = require("@faker-js/faker");
exports.data = Array.from(Array(10).keys()).map(() => ({ image: faker_1.faker.image.url() }));
exports.custom = Array.from(Array(10).keys()).map(() => ({
    title: faker_1.faker.company.name(),
    phrase: faker_1.faker.company.catchPhrase(),
    avatar: faker_1.faker.image.urlPicsumPhotos(),
}));
