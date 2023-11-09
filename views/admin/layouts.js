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
				<div class="bulma-center-mixin-parent">

				<div class="container">
					${content}
				</div>
				
				<section class="hero">
					<div class="hero-body">
						
						<div class="container has-text-centered">
							This website is obsolete and can be used as a sample site, past project or portfolio 
						</div>

						<br/>

						<footer class="container">
							<div class="notification is-primary">
							<nav class="level social is-size-4">
								<div class="level-item has-text-centered"><a href="https://github.com/gicodes"><i class="fab fa-github"></i></a></div>
											
								<div class="level-item has-text-centered"><a href="/"><i class="fab fa-facebook"></i></a></div>
											
								<div class="level-item has-text-centered"><a href="https://linkedin.com/in/gideon-iduma-5311445a"><i class="fab fa-linkedin"></i></a></div>
											
								<div class="level-item has-text-centered"><a href="/"><i class="fab fa-dribbble"></i></a></div>
											
								<div class="level-item has-text-centered"><a href="https://twitter.com/pappichino"><i class="fab fa-twitter"></i></a></div>
							</nav>
							</div>
						</footer>
					</div>
				</section>
			</body>
	  </html>
	`;
};