const { check } = require('express-validator');
const usersRepo = require('../../../model/repositories/users');

module.exports = {
	requireTitle: check('title')
		.trim()
		.isLength({ min: 5, max: 40 })
		.withMessage('must be between 5 and 40 characters'),
	requirePrice: check('price')
		.trim()
		.toFloat()
		.isFloat({ min: 1 })
		.withMessage('must be a greater than 1$'),
	requireEmail: check('email')
		.trim()
		.normalizeEmail()
		.isEmail()
		.withMessage(
			'email address must be valid')
		.custom(
			async email => {
				const thisUser = await usersRepo.getOneBy({ email });
				if (thisUser) {
					return res.send('email already exist');
				}
			}),
	requirePassword:
		check('password')
			.trim()
			.isLength({ min: 5, max: 15 })
			.withMessage(
				'password must be between 5 and 15 characters'
			),
	requirePasswordCon:
		check('passwordCon')
			.trim()
			.isLength({ min: 5, max: 15 })
			.withMessage('password must be between 5 and 15 characters')
			.custom(
				async (passwordCon, { req }) => {
					if (passwordCon !== req.body.password) {
						throw new Error('passwords must match');
					}
				}),
	requireEmailExists: check('email')
		.trim()
		.normalizeEmail()
		.isEmail()
		.withMessage('kindly provide a valid email')
		.custom(async email => {
			const user = await usersRepo.getOneBy({ email });
			if (!user) {
				throw new Error('sorry, email not found!');
			}
		}),
	requireValidPasswordForUser: check('password')
		.trim()
		.custom(async (password, { req }) => {
			const user = await usersRepo.getOneBy({ email: req.body.email });
			if (!user) {
				throw new Error('invalid username or password');
			}

			const validPassword = await usersRepo.comparePasswords(
				user.password,
				password
			);
			if (!validPassword) {
				throw new Error('invalid password');
			}
		})
};