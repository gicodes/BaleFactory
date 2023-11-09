module.exports = ({ content }) => {
	return `
	  <!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Bale Factory</title>
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
				<link href="/css/main.css" rel="stylesheet">
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
			</head>
		
			<body>
				<nav class="navbar container" role="navigation" aria-label="main navigation">
					<div class="navbar-menu is-active">
			
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
			
			<hr/>
			
			<div>
				${content}
			</div>

			<section class="hero is-fullheight">


				
					<div class="hero-body">
						
						<div class="container has-text-centered">
							This website is obsolete and is being used as a placehoder to sample site, past project or portfolio 
						</div>
					</div>

						<nav class="level container social is-size-4">
							<div class="level-item has-text-centered">
								<div>
									<a href="https://github.com/gicodes"><i class="fab fa-github"></i></a>
								</div>
							</div>
									<hr/>
								<br/>	
							<div class="level-item has-text-centered">
								<div>
									<a href="/"><i class="fab fa-facebook"></i></a>
								</div>
							</div>
										
							<div class="level-item has-text-centered">
								<div>
									<a href="https://linkedin.com/in/gideon-iduma-5311445a"><i class="fab fa-linkedin"></i></a>
								</div>
							</div>
										
							<div class="level-item has-text-centered">
								<div>
									<a href="/"><i class="fab fa-dribbble"></i></a>
								</div>
							</div>
										
							<div class="level-item has-text-centered">
								<div>
									<a href="https://twitter.com/pappichino"><i class="fab fa-twitter"></i></a>
								</div>
							</div>
						</nav>

					<div class="hero-footer">
						<div class="notification is-link">
							<div class="is-size-7 has-text-centered">
								For more information or inquiry, contact the owner of this website. If you are the owner of this website, ensure to regularly update your projects.
							</div>
						</div>
					</div>
				</section>
			</body>
	  </html>
	`;
};