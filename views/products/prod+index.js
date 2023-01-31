const layout = require('../admin/layouts');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
        <div class="column is-one-quarter">
          <div class="card product-card">
            <figure>
              <img src="data:image/png;base64, ${product.image}"/>
            </figure>
            <div class="card-content">
              <h3 class="subtitle">${product.title}</h3>
              <h5>$${product.price}</h5>
            </div>
            <footer class="card-footer">
              <form action="/cart/products" method="POST">
              <input hidden value="${product.id}" name="productId" />
                <button class="button has-icon is-inverted">
                  <i class="fa fa-shopping-cart"></i> Add to cart
                </button>
              </form>
            </footer>
          </div>
        </div>
      `;
    })
    .join('\n');

  return layout({
    content: `
      <body>
        <nav class="navbar container vert-space" role="navigation" aria-label="main navigation">
          <div class="navbar-menu">

            <div class="navbar-start">
              <div class="tags has-addons">
                <span class="tag is-medium">
                  <a href="/products"><i class="fa fa-star"></i> Products</a>
                </span>
                <span class="tag is-link is-medium">
                  <a class='has-text-white' href="/cart"><i class="fa fa-shopping-cart"></i> Cart</a>
                </span>
              </div>
            </div>

            <div class="level-item">
              <div class="field has-addons">
                <p class="control">
                  <input class="input" type="text" placeholder="Find an item">
                </p>
                <p class="control">
                  <button class="button">
                    Search
                  </button>
                </p>
              </div>
            </div>

            <div class="navbar-end">
              <div class="tags has-addons">
                <span class="tag is-link is-medium">
                  <a class='has-text-white' href="/signin"> <b>Login</b> </a>
                </span>
                <span class="tag is-light is-medium">
                  <a href="/signup"> Sign up </a>
                </span>
              </div>
            </div>
          </div>
        </nav>

        <div class='card'>
          <div class='container'>
            <section class="card-content">
              <div class="columns">
                <div class="columns products">
                  ${renderedProducts}  
                </div>
              </div>
            </section>

          </div>
        </div>
      </body>
    `
  });
};
