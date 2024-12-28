// Define routes and their associated content
const routes = {
    "#home": `
    <header id="for-blur">
		<div class="header-area" id="header-area">
			<div class="logo-container">
				<img src="static/pics/fontbolt1.png" alt="CyberPong Logo" class="logo">
			</div>
			<div class="menu-container">
				<div class="red-color-area"></div>
				<ul class="menu-buttons">
					<li class="find-us-list" id="find-us-list">Find Us On ▼
                        <ul class="find-us-dropdown" id="find-us-dropdown">
                            <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                            <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
                            <li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
                        </ul>
                    </li>
					<li class="Language-list" id="Language-list">Language ▼
						<ul class="dropdown">
							<li><a href="#" data-lang="en">English</a></li>
							<li><a href="#" data-lang="ar">Arabic</a></li>
							<li><a href="#" data-lang="fr">French</a></li>
						</ul>
					</li>
					<a href="logout" class="signIn" id="signIn" >Log-out</a>
					
					<button id="play-button-top" class="play-button-top" >Play</button >
				</ul>
			</div>
		</div>
	</header>
	<section id="section">
		<div class="login-box" id="login-box">
			<div class="tab-head ">
				<div class="login-title active" id="login-title">
					<h2>Log-in</h2> 
				</div> 
				<div class="signup-title " id="signup-title">
					<h2>Sign-up</h2>
				</div>
			</div>
			<div class="tab-main" id="tab-main">
				<div class="tab-body login active"> 
					<h5>Enter your credentials</h5>
					<form class="tab-main-form">
						<input class="text-input" type="email" name="email" placeholder="Enter your email"><br>
						<input class="text-input" type="password" name="password" placeholder="Enter your password"><br>
						<div class="signup-buttons">
							<button class="intra-sign-up">Login</button>
							< href="/auth/login/" class="intra-sign-up long-text">Sign with intra42</>
						</div>
					</form>
				</div>
			</div>
			<div class="signup-body" id="signup-body"> 
				 <h5>Enter your details to sign up</h5>
				<form class="signup-form">
					<label for="email"></label><br>
					<input class="text-input" type="email" id="email" name="email" placeholder="Enter your email"><br><br>
					
					<label for="password"></label><br>
					<input class="text-input" type="password" id="password" name="password" placeholder="Enter your password"><br><br>
					
					<label for="retype-password"></label><br>
					<input class="text-input" type="password" id="retype-password" name="retype-password" placeholder="Retype your password"><br>
					<button>Sign-up</button>
				</form>
			</div>
		</div>

	<div class="find-us-area" id="find-us-area">
		<ul>
			<li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
			<li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
			<li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
		</ul>
	</div>
	</section>
	<main id="main-content">
		<div class="images-show-container" id="images-show-container">
			<div id="carouselExampleCaptions" class="carousel slide">
				<div class="carousel-indicators">
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
				  <div class="carousel-item active c-item">
					<img src="static/pics/3313953.jpg" class="d-block w-100 c-img" alt="...">
					<div class="carousel-caption d-none d-md-block alo">
					  <h1>Explore New Realms</h1>
					  <h2>With the different maps and skins, be sure to enjoy it ALL </h2>
					</div>
				  </div>
				  <div class="carousel-item c-item">
					<img src="static/pics/arcade2.png" class="d-block w-100 c-img" alt="...">
					<div class="carousel-caption d-none d-md-block alo">
					  <h1>Second slide label</h1>
					  <p>Some representative placeholder content for the second slide.</p>
					</div>
				  </div>
				  <div class="carousel-item c-item">
					<img src="static/pics/backzz.jpg" class="d-block w-100 c-img" alt="...">
					<div class="carousel-caption d-none d-md-block alo">
					  <h1>Third slide label</h1>
					  <p>Some representative placeholder content for the third slide.</p>
					</div>
				  </div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				  <span class="carousel-control-next-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Next</span>
				</button>
			  </div>
		</div>
		<div class="hero-section" id="hero-section">
			<div class="hero-area-1">
					<p id="hero-p">Become the greatest pong player, and rule 
					your world using neon power!!!</p>
			</div>
			<div class="hero-area-2">
				<p id="hero-p2">Ready to serve up some digital domination? 
					Our new online pong game is here! </p>
				<div class="play-area">
					<button id="play-button-bot" class="play-button">Play</button>
				</div>
			</div>
		</div>
	</main>`  ,
    "#profile":`
	<header id="for-blur">
		<div class="header-area">
			<div class="logo-container">
				<img src="static/pics/fontbolt1.png" alt="CyberPong Logo" class="logo">
			</div>
			<div class="menu-container">
				<div class="red-color-area"></div>
				<ul class="menu-buttons">
					<li class="find-us-list" id="find-us-list">Find Us On ▼
                        <ul class="find-us-dropdown" id="find-us-dropdown">
                            <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                            <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
                            <li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
                        </ul>
                    </li>
					<li class="Language-list" id="Language-list">Language ▼
						<ul class="dropdown">
							<li><a href="#" data-lang="en">English</a></li>
							<li><a href="#" data-lang="ar">Arabic</a></li>
							<li><a href="#" data-lang="fr">French</a></li>
						</ul>
					</li>
					<li class="signIn" id="signIn" >Sign-In</li >
					<button id="play-button-top" class="play-button-top" >Play</button >
				</ul>
			</div>
		</div>
	</header>
	<body class="profile-page">
		<div class="profile-container">
			<div class="left-panel">
				<div class="profile-picture-container">
					<img src="static/pics/mmokane.jpeg" alt="Profile Picture">
				</div>
				<div class="profile-username">USERNAME</div>
				<div class="stats-container">
					<h4 class="stats-title">Stats Overview</h4>
					<ul class="user-stats">
						<li><span class="key">Wins</span><span class="value">56</span></li>
						<li><span class="key">Loses</span><span class="value">12</span></li>
						<li><span class="key">Winrate</span><span class="value">82.4%</span></li>
						<li><span class="key">Win streak</span><span class="value">2</span></li>
						<li><span class="key">Tournaments won</span><span class="value">1</span></li>
					</ul>					
					<span class="space-between-statdivs"></span>
					<div class="charts">
						<div class="chart-container">
							<canvas id="winRateChart"></canvas>
							<p class="charts-p">Win Ratio</p>
						</div>
						<span class="charts-space"></span>
						<div class="chart-container">
							<canvas id="winLossChart"></canvas>
							<p class="charts-p">Win/Loss</p>
						</div>
					</div>
				</div>
			</div>

			<div class="center-panel">
				<h4 class="history-title">MATCH HISTORY</h4>
				<div class="match-history">
					<div class="match-card">
						<div class="win-loss-container">W</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="static/pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="static/pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
					<div class="match-card">
						<div class="win-loss-container">W</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="static/pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="static/pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
					<div class="match-card">
						<div class="win-loss-container">W</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="static/pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="static/pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
					<div class="match-card">
						<div class="win-loss-container">W</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="static/pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="static/pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
					<div class="match-card">
						<div class="win-loss-container">W</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="static/pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="static/pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
					<div class="match-card">
						<div class="win-loss-container">W</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="static/pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="static/pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="right-panel">
				<!-- <div class="game-history">RECENT GAMES</div>
				<div class="matches-cards">
					<div class="card">
						<div class="card-infos-cnt">
							<div class="left-box"></div>
							  <div class="right-box">
								<div class="box-item">Date and Time</div>
								<div class="box-item">Opponent Name</div>
								<div class="box-item">Game Mode</div>
							  </div>
						</div>
					</div>
				</div> -->
			</div>
		</div>`,
	"#landing": `
	<header id="for-blur">
		<div class="header-area" id="header-area">
			<div class="logo-container">
				<img src="../static/pics/fontbolt1.png" alt="CyberPong Logo" class="logo">
			</div>
			<div class="menu-container">
				<div class="red-color-area"></div>
				<ul class="menu-buttons">
					<li class="find-us-list" id="find-us-list">Find Us On ▼
                        <ul class="find-us-dropdown" id="find-us-dropdown">
                            <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                            <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
                            <li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
                        </ul>
                    </li>
					<li class="Language-list" id="Language-list">Language ▼
						<ul class="dropdown">
							<li><a href="#" data-lang="en">English</a></li>
							<li><a href="#" data-lang="ar">Arabic</a></li>
							<li><a href="#" data-lang="fr">French</a></li>
						</ul>
					</li>
					<li class="signIn" id="signIn" >Sign-In</li >
					<button id="play-button-top" class="play-button-top" >Play</button >
				</ul>
			</div>
		</div>
	</header>
	<section id="section">
		<div class="login-box" id="login-box">
			<div class="tab-head ">
				<div class="login-title active" id="login-title">
					<h2>Log-in</h2> 
				</div> 
				<div class="signup-title" id="signup-title">
					<h2>Sign-up</h2>
				</div>
			</div>
			<div class="tab-main" id="tab-main">
				<div class="tab-body login active"> 
					<h5>Enter your credentials</h5>
					<form class="tab-main-form">
						<input class="text-input" name="email" placeholder="Enter your email"><br>
						<input class="text-input" type="password" name="password" placeholder="Enter your password"><br>
						<div class="signup-buttons">
							<button class="intra-sign-up">Login</button>
							<button type="button" class="intra-sign-up long-text">
								<a class="verif-link" id="intra-login" href="/auth/login/">Sign with intra42</a>
							</button>
						</div>
					</form>
				</div>
			</div>
			<div class="signup-body" id="signup-body"> 
				 <h5>Enter your details to sign up</h5>
				<form class="signup-form">
				{% csrf_token %}
				{% for field in form %}
					<div class="form-group">
						<label for="{{ field.id_for_label }}">{{ field.label }}</label>
						{{ field }}
						{% if field.errors %}
							<div class="errorlist">
								{% for error in field.errors %}
									<p>{{ error }}</p>
								{% endfor %}
							</div>
						{% endif %}
					</div>
				{% endfor %}
				<button type="submit">Sign Up</button>
			</form>
			</div>
		</div>
	<div class="find-us-area" id="find-us-area">
		<ul>
			<li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
			<li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
			<li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
		</ul>
	</div>
	</section>
	<main id="main-content"></main>	
	`
};

// Function to render the current route
function renderRoute() {
    const app = document.getElementById("app"); // Root div for dynamic content
    const hash = window.location.hash || "#landing"; // Default to #landing if no hash is set
    const content = routes[hash]; // Get the content for the current hash
		
    if (content) {
		app.innerHTML = content; // Render the content
		// console.log(content);
    } else {
        app.innerHTML = `<h1>404 - Page Not Found</h1>`; // Handle unknown routes
    }

	// const alo = document.getElementById('signIn');
	// console.log(alo);

	// document.addEventListener('DOMContentLoaded', function() {
		
	console.log(hash);
	if (hash == "#landing")
		{
			const signInBtn = document.getElementById('signIn');
			const loginPopup = document.getElementById('login-box');
			const loginArea = document.getElementById('tab-main');
			const signUpArea = document.getElementById('signup-body');
			const mainContent = document.getElementById('main-content');
			const loginTitle = document.getElementById('login-title');
			const signupTitle = document.getElementById('signup-title');
			const headerArea = document.getElementById('header-area');
			


			
		
			console.log("ZAP");
			mainContent.classList.add('blur');
			headerArea.classList.add('blur');
			loginPopup.style.display = 'block';
			loginArea.style.display = 'flex'; // Corrected to style.display
			signUpArea.style.display = 'none';
			loginTitle.classList.add('active');
			signupTitle.classList.remove('active');
			loginPopup.style.height = '470px';


			function showLogin() {
				loginArea.style.display = 'flex'; // Corrected to style.display
				signUpArea.style.display = 'none';
				loginTitle.classList.add('active');
				signupTitle.classList.remove('active');
				loginPopup.style.height = '470px';
			}
		  
			// Function to show signup form and hide login form
			function showSignup() {
				loginArea.style.display = 'none';
				signUpArea.style.display = 'flex';
				signupTitle.classList.add('active');
				loginTitle.classList.remove('active');
				loginPopup.style.height = '550px';
			}
		  
			loginTitle.addEventListener('click', showLogin);
			signupTitle.addEventListener('click', showSignup);


		}

		if (hash == "#home")
		{
			const signInBtn = document.getElementById('signIn');
			const loginPopup = document.getElementById('login-box');
			const loginArea = document.getElementById('tab-main');
			const signUpArea = document.getElementById('signup-body');
			const mainContent = document.getElementById('main-content');
			const loginTitle = document.getElementById('login-title');
			const signupTitle = document.getElementById('signup-title');
			const headerArea = document.getElementById("header-area");
		
		
			signInBtn.addEventListener('click', function (){
				mainContent.classList.add('blur');
				loginPopup.style.display = 'block';
				headerArea.classList.add('blur');
				loginArea.style.display = 'flex'; // Corrected to style.display
				signUpArea.style.display = 'none';
				loginTitle.classList.add('active');
				signupTitle.classList.remove('active');
				loginPopup.style.height = '470px';
			})

		document.addEventListener('click', function(event) {
			if (loginPopup.style.display === 'block' && !loginPopup.contains(event.target) && event.target !== signInBtn) {
				hideLoginPopup();
			}
		});
	  
		document.addEventListener('keydown', function(event) {
			if (event.key === 'Escape' && loginPopup.style.display === 'block') {
				hideLoginPopup();
			}
		});

			function hideLoginPopup() {
				mainContent.classList.remove('blur');
				loginPopup.style.display = 'none';
				loginArea.style.display = 'none'; // Corrected to style.display
				signUpArea.style.display = 'none';
				loginTitle.classList.remove('active');
				signupTitle.classList.remove('active');
				headerArea.classList.remove('blur');
				// loginPopup.style.height = '470px';
			}


			function showLogin() {
				loginArea.style.display = 'flex'; // Corrected to style.display
				signUpArea.style.display = 'none';
				loginTitle.classList.add('active');
				signupTitle.classList.remove('active');
				loginPopup.style.height = '470px';
			}
		  
			// Function to show signup form and hide login form
			function showSignup() {
				loginArea.style.display = 'none';
				signUpArea.style.display = 'flex';
				signupTitle.classList.add('active');
				loginTitle.classList.remove('active');
				loginPopup.style.height = '550px';
			}
		  
			loginTitle.addEventListener('click', showLogin);
			signupTitle.addEventListener('click', showSignup);

			console.log("im at home , we cant set the functions now ");
		}
}



// function initializeEventListeners() {

// 	document.addEventListener('DOMContentLoaded', function() {
// 		const signInBtn = document.getElementById('signIn');
// 		const loginPopup = document.getElementById('login-box');
// 		const loginArea = document.getElementById('tab-main');
// 		const signUpArea = document.getElementById('signup-body');
// 		const mainContent = document.getElementById('main-content');
// 		const loginTitle = document.getElementById('login-title');
// 		const signupTitle = document.getElementById('signup-title');
	  
// 		console.log(signInBtn.innerText);
	  
// 		signInBtn.addEventListener('click', function() {
// 			mainContent.classList.add('blur');
// 			loginPopup.style.display = 'block';
// 			showLogin();
// 		});
	  
// 		function hideLoginPopup() {
// 			loginPopup.style.display = 'none';
// 			mainContent.classList.remove('blur');
// 		}
	  
// 		// Event listener for clicks outside the login popup
// 		document.addEventListener('click', function(event) {
// 			if (loginPopup.style.display === 'block' && !loginPopup.contains(event.target) && event.target !== signInBtn) {
// 				hideLoginPopup();
// 			}
// 		});
	  
// 		// Optional: Close the popup when pressing the Escape key
// 		document.addEventListener('keydown', function(event) {
// 			if (event.key === 'Escape' && loginPopup.style.display === 'block') {
// 				hideLoginPopup();
// 			}
// 		});
	  
// 		// Function to show login form and hide signup form
// 		function showLogin() {
// 			loginArea.style.display = 'flex'; // Corrected to style.display
// 			signUpArea.style.display = 'none';
// 			loginTitle.classList.add('active');
// 			signupTitle.classList.remove('active');
// 			loginPopup.style.height = '470px';
// 		}
	  
// 		// Function to show signup form and hide login form
// 		function showSignup() {
// 			loginArea.style.display = 'none';
// 			signUpArea.style.display = 'flex';
// 			signupTitle.classList.add('active');
// 			loginTitle.classList.remove('active');
// 			loginPopup.style.height = '550px';
// 		}
	  
// 		loginTitle.addEventListener('click', showLogin);
// 		signupTitle.addEventListener('click', showSignup);
	  
	  
// 	  });
// }

// Set up the hashchange event listener
window.addEventListener("hashchange", renderRoute);

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
    renderRoute(); // Render the initial route
    // Add navigation buttons
    // const app = document.getElementById("app");
    // app.insertAdjacentHTML(
    //     "afterbegin",
    //     `<nav>
    //         <button onclick="window.location.hash = '#home'">Home</button>
    //         <button onclick="window.location.hash = '#profile'">Profile</button>
    //     </nav>`
    // );
});

// const translations = {
// 	en: {
// 		login: "Login",
// 		username: "Username",
// 		password: "Password",
// 		incorrect: "Incorrect username or password, try again please!",
// 		findUs: "Find Us On",
// 		profile: "Profile",
// 		play: "Play",
// 		language: "Language",
// 		explore: "Explore New Realms",
// 		enjoy: "With the different maps and skins, be sure to enjoy it ALL",
// 		slide1: "Second slide label",
// 		slide2: "Some representative placeholder content for the second slide.",
// 		slide3: "Third slide label",
// 		slide4: "Some representative placeholder content for the third slide.",
// 		become: "Become the greatest pong player, and rule your world using neon power!!!",
// 		ready: "Ready to serve up some digital domination? Our new online pong game is here!"
// 	},
// 	ar: {
// 		login: "تسجيل الدخول",
// 		username: "اسم المستخدم",
// 		password: "كلمة المرور",
// 		incorrect: "اسم المستخدم أو كلمة المرور غير صحيحين، حاول مرة أخرى من فضلك!",
// 		findUs: "اعثر علينا على",
// 		profile: "الملف الشخصي",
// 		play: "العب",
// 		language: "اللغة",
// 		explore: "استكشاف عوالم جديدة",
// 		enjoy: "مع الخرائط والأشكال المختلفة، تأكد من الاستمتاع بكل شيء",
// 		slide1: "تسمية الشريحة الثانية",
// 		slide2: "بعض المحتوى التمثيلي النائب للشريحة الثانية.",
// 		slide3: "تسمية الشريحة الثالثة",
// 		slide4: "بعض المحتوى التمثيلي النائب للشريحة الثالثة.",
// 		become: "كن أعظم لاعب بونج، واحكم عالمك باستخدام الطاقة النيونية!!!",
// 		ready: "مستعد لتقديم بعض الهيمنة الرقمية؟ لعبتنا الجديدة على الإنترنت بونج هنا!"
// 	},
// 	fr: {
// 		login: "Connexion",
// 		username: "Nom d'utilisateur",
// 		password: "Mot de passe",
// 		incorrect: "Nom d'utilisateur ou mot de passe incorrect, veuillez réessayer!",
// 		findUs: "Trouvez-nous sur",
// 		profile: "Profil",
// 		play: "Jouer",
// 		language: "Langue",
// 		explore: "Explorez de nouveaux royaumes",
// 		enjoy: "Avec les différentes cartes et skins, assurez-vous de tout apprécier",
// 		slide1: "Étiquette de la deuxième diapositive",
// 		slide2: "Quelques contenus de remplacement représentatifs pour la deuxième diapositive.",
// 		slide3: "Étiquette de la troisième diapositive",
// 		slide4: "Quelques contenus de remplacement représentatifs pour la troisième diapositive.",
// 		become: "Devenez le plus grand joueur de pong et régnez sur votre monde en utilisant la puissance du néon!!!",
// 		ready: "Prêt à servir une domination numérique? Notre nouveau jeu de pong en ligne est là!"
// 	}
//   };
  
  
//   function changeLanguage(lang) {
// 	const dropdownLabel = document.querySelector('#Language-list');
// 	dropdownLabel.childNodes[0].textContent = translations[lang].language + " ▼";
  
// 	// Update header elements
// 	// document.querySelector('#username').placeholder = translations[lang].username;
// 	// document.querySelector('#password').placeholder = translations[lang].password;
// 	document.querySelector('.find-us-button').innerText = translations[lang].findUs;
// 	// document.querySelector('#submit-button').innerText = translations[lang].login;
// 	// document.querySelector('.wrong-input-err').innerText = translations[lang].incorrect;
// 	document.querySelector('.signIn').innerText = translations[lang].profile;
// 	document.querySelector('.play-button-top').innerText = translations[lang].play;
  
// 	// Update carousel texts
// 	const carouselItems = document.querySelectorAll('.carousel-item');
// 	carouselItems.forEach((item, index) => {
// 		const caption = item.querySelector('.carousel-caption');
// 		if (caption) {
// 			const h1 = caption.querySelector('h1');
// 			const h2 = caption.querySelector('h2') || caption.querySelector('p') || caption.querySelector('h1'); // Handle different structures
// 			if (index === 0) {
// 				h1.innerText = translations[lang].explore;
// 				h2.innerText = translations[lang].enjoy;
// 			} else if (index === 1) {
// 				h1.innerText = translations[lang].slide1;
// 				h2.innerText = translations[lang].slide2;
// 			} else if (index === 2) {
// 				h1.innerText = translations[lang].slide3;
// 				h2.innerText = translations[lang].slide4;
// 			}
// 		}
// 	});
  
// 	// Update hero section
// 	const heroArea1 = document.querySelector('#hero-p');
// 	const heroArea2 = document.querySelector('#hero-p2');
// 	const heroAreaPlayBtn = document.querySelector('#play-button-bot');
// 	if (heroAreaPlayBtn) heroAreaPlayBtn.innerText = translations[lang].play;
// 	if (heroArea1) heroArea1.innerText = translations[lang].become;
// 	if (heroArea2) heroArea2.innerText = translations[lang].ready;
//   }
  
//   // Listen for clicks on the language options
//   document.querySelectorAll('.dropdown li a').forEach(item => {
// 	item.addEventListener('click', event => {
// 		event.preventDefault(); // Prevent default link behavior
// 		const selectedLang = event.target.getAttribute('data-lang'); // Get selected language
// 		changeLanguage(selectedLang); // Update the UI with the selected language
// 	});
//   });
  
  
//   // HEADER-ELEMENTS 
  
//   document.addEventListener('DOMContentLoaded', function() {
// 	const signInBtn = document.getElementById('signIn');
// 	const loginPopup = document.getElementById('login-box');
// 	const loginArea = document.getElementById('tab-main');
// 	const signUpArea = document.getElementById('signup-body');
// 	const mainContent = document.getElementById('main-content');
// 	const loginTitle = document.getElementById('login-title');
// 	const signupTitle = document.getElementById('signup-title');
  
// 	signInBtn.addEventListener('click', function() {
// 		mainContent.classList.add('blur');
// 		loginPopup.style.display = 'block';
// 		showLogin();
// 	});
  
// 	function hideLoginPopup() {
// 		loginPopup.style.display = 'none';
// 		mainContent.classList.remove('blur');
// 	}
  
// 	// Event listener for clicks outside the login popup
// 	document.addEventListener('click', function(event) {
// 		if (loginPopup.style.display === 'block' && !loginPopup.contains(event.target) && event.target !== signInBtn) {
// 			hideLoginPopup();
// 		}
// 	});
  
// 	// Optional: Close the popup when pressing the Escape key
// 	document.addEventListener('keydown', function(event) {
// 		if (event.key === 'Escape' && loginPopup.style.display === 'block') {
// 			hideLoginPopup();
// 		}
// 	});
  
// 	// Function to show login form and hide signup form
// 	function showLogin() {
// 		loginArea.style.display = 'flex'; // Corrected to style.display
// 		signUpArea.style.display = 'none';
// 		loginTitle.classList.add('active');
// 		signupTitle.classList.remove('active');
// 		loginPopup.style.height = '470px';
// 	}
  
// 	// Function to show signup form and hide login form
// 	function showSignup() {
// 		loginArea.style.display = 'none';
// 		signUpArea.style.display = 'flex';
// 		signupTitle.classList.add('active');
// 		loginTitle.classList.remove('active');
// 		loginPopup.style.height = '550px';
// 	}
  
// 	loginTitle.addEventListener('click', showLogin);
// 	signupTitle.addEventListener('click', showSignup);
  
  
// 	// const findUsArea = document.getElementById('find-us-list');
// 	// const findUsDrop = document.getElementById('find-us-dropdown')
  
// 	// findUsArea.addEventListener('hover', function() {
// 	//     findUsDrop.style.display = 'block';
// 	// })
//   });
