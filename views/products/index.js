const layout = require('../products/prodIndex');

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
      <section>
        <div class="container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <div class="has-text-centered">
                  <p class="title">Featured Items</p><br/>
                </div>
                <div>
                  <a href="/">
                    <p class="subtitle">Click here to read more on Bale Factory</p>
                  </a>
                </div>
                <div class="columns products">
                  ${renderedProducts}  
                </div>
              </div>
            </div>
            <div class="column "></div>
          </div>
        </div>
      </section>
    `
  });
};
