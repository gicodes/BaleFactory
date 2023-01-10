const layout = require('../admin/layouts');

module.exports = ({ content }) => {
  return layout({
    content: `
        <body>
          <header class="container">
            <nav class="navbar navbar-bottom">
              <div class="container navbar-container">
                <div class="navbar-item">
                  <div class="navbar-buttons">
                    <div class="navbar-item">
                      <a href="/products"><i class="fa fa-star"></i> Products</a>
                    </div>
                    <div class="navbar-item">
                      <a href="/cart"><i class="fa fa-shopping-cart"></i> Cart</a>
                    </div>
                  </div>
                </div>
                <div class="navbar level">
                  <div class="level-right">
                    <div class="navbar-item">
                      <a href="/products"><i class="fa fa-user"></i> Login</a>
                    </div>
                    <div class="navbar-item">
                      <a href="/cart"><i class="fa fa-shopping-cart"></i> Cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          
          <section class="banner">
            <div class="container">
              <div class="columns is-centered">
                <img src="/images/banner.jpg" />
              </div>
            </div>
            <div>
              <a href="/">
                <p class="subtitle">Click here to read more on Bale Factory</p>
              </a>
            </div>
          </section>

          <section>
           <div class="box">
            ${content}
           </div>
          </section>
        </body>
      </html>
      `
  })

};
