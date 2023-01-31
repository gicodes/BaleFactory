const layout = require('../layouts');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class="hero">
        <div class="hero-body">
          <div class="columns is-centered">
            <div class="column is-one-quarter">
              <div class="box">
                <form method="POST">
                  <div class="notification has-text-centered">
                    <h1 class='title'>Sign in</h1>
                  </div>
                  <div class="field">
                    <label class="label">Email</label>
                    <input required class="input" placeholder="Email" name="email" />
                    <p class="help is-danger">${getError(errors, 'email')}</p>
                  </div>
                  <div class="field">
                    <label class="label">Password</label>
                    <input required class="input" placeholder="Password" name="password" type="password" />
                    <p class="help is-danger">${getError(errors, 'password')}</p>
                  </div>
                  <button class="button is-primary">Submit</button>
                  <hr/>
                  <div>
                    <a href="/signup">Need an account? 
                      <b>Sign up</b>
                    </a>
                  </div>
                </form>
              <div>
            </div>
          </div>
        </div>
      </div>
    `
  });
};