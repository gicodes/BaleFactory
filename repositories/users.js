const Repository = require('./repository');
const crypto = require('crypto');
const util = require('util');

const scrypt = util.promisify(crypto.scrypt);


class UsersRepo extends Repository {
    async create(attrs) {
        attrs.id = this.randomId();

        const salt = crypto.randomBytes(8).toString('hex');
        const hash = await scrypt(attrs.password, salt, 64);

        const records = await this.getAll();
        const record = {
            ...attrs,
            password: `${hash.toString('hex')}.${salt}`
        };

        records.push(record);

        await this.writeAll(records)

        return record;
    }

    async comparePasswords(saved, input) {

        const [hashed, salt] = saved.split('.');
        const hashedInput = await scrypt(input, salt, 64);

        return hashed === hashedInput.toString('hex');
    }
}


module.exports = new UsersRepo('users.json');
