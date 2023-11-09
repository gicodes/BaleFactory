const { validationResult } = require('express-validator');

module.exports = {
    handleErrors(templateFunc, DataCb) {
        return async (req, res, next) => {

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                let data = {}
                if (DataCb) {
                    data = await DataCb(req)
                }


                return res.send(templateFunc({ errors, ...data }))
            }

            next();
        }
    },

    authUser(req, res, next) {
        if (!req.session.userId) {
            return res.redirect('/signin');
        }

        next()
    }
}