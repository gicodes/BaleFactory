const layout = require('../layouts')

module.exports = ({ req }) => {
    return layout({
        content:
            `<div>
				<form method="POST">
					<input placeholder="email" name="email" />
					<input placeholder="password" name="password" />
					<button>Sign-in</button>
				</form>
			</div>
	`})
}
