const layout = require('../layouts');

const getError = (errors, prop) => {
    // prop === 'email' || 'password' || 'passwordCon'
    try {
        return errors.mapped()[prop].msg
    }
    catch (err) {
        return '';
    }
}

module.exports = ({ req, errors }) => {
    return layout({
        content:
            `<div>
      	Your session id is: ${req.session.userId}
      	<form method="POST">
        	<input placeholder="email" name="email" />
			${getError(errors, 'email')}
			<input placeholder="password" name="password" />
			${getError(errors, 'password')}
        	<input placeholder="confirm password" name="passwordCon" />
			${getError(errors, 'passwordCon')}
			<button>Sign-up</button>
      	</form>
			</div>
		`})
}
