// Define routes and their associated content
const routes = {
    "#home": `
    <header id="for-blur">
		<div class="header-area" id="header-area">
			<div class="logo-container">
				<img src="./pics/fontbolt1.png" alt="CyberPong Logo" class="logo">
			</div>
			<div class="menu-container">
				<div class="red-color-area"></div>
				<ul class="menu-buttons">
				<button class="logOut" id="logOut" >LOG-OUT</button>
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
					<button id="profile-button" class="profile-button">PROFILE</button>
					<button id="play-button-top" class="play-button-top" >Play</button>
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
							<button type="button" class="intra-sign-up long-text">Sign with intra42</button>
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
					<img src="./pics/3313953.jpg" class="d-block w-100 c-img" alt="...">
					<div class="carousel-caption d-none d-md-block alo">
					  <h1>Explore New Realms</h1>
					  <h2>With the different maps and skins, be sure to enjoy it ALL </h2>
					</div>
				  </div>
				  <div class="carousel-item c-item">
					<img src="./pics/arcade2.png" class="d-block w-100 c-img" alt="...">
					<div class="carousel-caption d-none d-md-block alo">
					  <h1>Second slide label</h1>
					  <p>Some representative placeholder content for the second slide.</p>
					</div>
				  </div>
				  <div class="carousel-item c-item">
					<img src="./pics/backzz.jpg" class="d-block w-100 c-img" alt="...">
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
				<img src="./pics/fontbolt1.png" alt="CyberPong Logo" class="logo">
			</div>
			<div class="menu-container">
				<div class="red-color-area"></div>
				<ul class="menu-buttons">
				<button class="logOut" id="logOut" >LOG-OUT</button>
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
					<button id="home-button" class="home-button">HOME</button>
					<button id="play-button-top" class="play-button-top" >Play</button >
				</ul>
			</div>
		</div>
	</header>
	<body class="profile-page">
		<div class="profile-container">
			<div class="left-panel">
				<div class="profile-picture-container">
					<img src="./pics/mmokane.jpeg" alt="Profile Picture">
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
				<div class="scrollable-div">
					<div class="match-card">
						<div class="win-loss-container loss">L</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="./pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<p class="match-date">12/08/2024</p>
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="./pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
					<div class="match-card">
						<div class="win-loss-container win">W</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="./pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<p class="match-date">12/08/2024</p>
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="./pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
					<div class="match-card">
						<div class="win-loss-container loss">L</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="./pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<p class="match-date">12/08/2024</p>
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="./pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
					<div class="match-card">
						<div class="win-loss-container win">W</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="./pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<p class="match-date">12/08/2024</p>
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="./pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
					<div class="match-card">
						<div class="win-loss-container win">W</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="./pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<p class="match-date">12/08/2024</p>
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="./pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
					<div class="match-card">
						<div class="win-loss-container win">W</div>
						<div class="history-data-container">
							<div class="avatar-container">
								<img src="./pics/mmokane.jpeg" alt="Your Avatar" class="history-avatar user">
								<p class="avatar-username">Moskir</p>
							</div>
							<div class="vs-and-score">
								<p class="match-date">12/08/2024</p>
								<h3 class="vs">VS</h3>
								<p class="score">Score: 150</p>
							</div>
							<div class="avatar-container">
								<img src="./pics/ylarhris.jpeg" alt="Opponent's Avatar" class="history-avatar opponent">
								<p class="avatar-username">Veridis</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="right-panel">
				<h4 class="friends-title">Friends</h4>
				<div class="friends-list">
					<input type="text" id="friend-search" placeholder="Search for friends..." class="search-bar"/>
					<div class="friend-card">
						<img src="./pics/ylarhris.jpeg" alt="Friend Avatar" class="friend-avatar">
						<div class="friend-info">
							<p class="friend-name">Veridis</p>
							<p class="friend-status online">Online</p>
						</div>
						<button class="friend-action">Remove</button>
					</div>
					<div class="friend-card">
						<img src="./pics/mmokane.jpeg" alt="Friend Avatar" class="friend-avatar">
						<div class="friend-info">
							<p class="friend-name">Moskir</p>
							<p class="friend-status offline">Offline</p>
						</div>
						<button class="friend-action">Remove</button>
					</div>
					<div class="friend-card">
						<img src="./pics/mmokane.jpeg" alt="Friend Avatar" class="friend-avatar">
						<div class="friend-info">
							<p class="friend-name">Moskir</p>
							<p class="friend-status offline">Offline</p>
						</div>
						<button class="friend-action">Remove</button>
					</div>
					<div class="friend-card">
						<img src="./pics/mmokane.jpeg" alt="Friend Avatar" class="friend-avatar">
						<div class="friend-info">
							<p class="friend-name">Moskir</p>
							<p class="friend-status offline">Offline</p>
						</div>
						<button class="friend-action">Remove</button>
					</div>
					<div class="friend-card">
						<img src="./pics/mmokane.jpeg" alt="Friend Avatar" class="friend-avatar">
						<div class="friend-info">
							<p class="friend-name">Moskir</p>
							<p class="friend-status offline">Offline</p>
						</div>
						<button class="friend-action">Remove</button>
					</div>
					<div class="friend-card">
						<img src="./pics/mmokane.jpeg" alt="Friend Avatar" class="friend-avatar">
						<div class="friend-info">
							<p class="friend-name">Moskir</p>
							<p class="friend-status offline">Offline</p>
						</div>
						<button class="friend-action">Remove</button>
					</div>
					<div class="friend-card">
						<img src="./pics/mmokane.jpeg" alt="Friend Avatar" class="friend-avatar">
						<div class="friend-info">
							<p class="friend-name">Moskir</p>
							<p class="friend-status offline">Offline</p>
						</div>
						<button class="friend-action">Remove</button>
					</div>
					<div class="friend-card">
						<img src="./pics/mmokane.jpeg" alt="Friend Avatar" class="friend-avatar">
						<div class="friend-info">
							<p class="friend-name">Moskir</p>
							<p class="friend-status offline">Offline</p>
						</div>
						<button class="friend-action">Remove</button>
					</div>
					<div class="friend-card">
						<img src="./pics/mmokane.jpeg" alt="Friend Avatar" class="friend-avatar">
						<div class="friend-info">
							<p class="friend-name">Moskir</p>
							<p class="friend-status offline">Offline</p>
						</div>
						<button class="friend-action">Remove</button>
					</div>
				</div>				

				</div>
			</div>
		</div>
	</body>`,
	"#landing": `
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
						<input class="text-input" id="login-email" type="email" name="email" placeholder="Enter your email"><br>
						<input class="text-input" id="login-password" type="password" name="password" placeholder="Enter your password"><br>
						<h5 class="auth-err-msg" id="auth-err-msg" >Wrong email or password, please check again</h5>
						<div class="signup-buttons">
							<button type="submit" class="intra-sign-up" id="login-button">Login</button>
							<button class="intra-sign-up long-text">Sign with intra42</button>
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
	<main id="main-content"></main>	
	`
};

// Function to render the current route
function renderRoute() {
    const app = document.getElementById("app"); // Root div for dynamic content
    const hash = window.location.hash || "#landing"; // Default to #landing if no hash is set
    const content = routes[hash]; // Get the content for the current hash
		
	// console.log(content);
    if (content) {
		// console.log("2")
		app.innerHTML = content;// Render the content
		// console.log(content);
    } else {
        app.innerHTML = `<h1>404 - Page Not Found</h1>`; // Handle unknown routes
    }

	// switch (hash){
	// 	case "#landing":
	// 			renderLandingPage;

	// console.log(hash + " this is the hash");
	switch (hash) {
        case "#landing":
            renderLandingPage();
            break;
        case "#home":
            renderHomePage();
            break;
        case "#profile":
            renderProfilePage();
            break;
        default:
            app.innerHTML = `<h1>404 - Page Not Found</h1>`; // Handle unknown routes
            break;
    }
	
}
	

	// console.log(hash);

	// if (window.location.hash === "#home"){
	// 	setupHomePage();
	// }

	// 	function setupHomePage()
	// 	{

	// 		window.location.hash = "#home";
	// 		const logOutBtn = document.getElementById('logOut');
	// 		logOutBtn.addEventListener('click', function() {
	// 			window.location.hash = "#landing";
	// 		});

	// 		function changeLanguage(lang) {
	// 			const dropdownLabel = document.querySelector('#Language-list');
	// 			dropdownLabel.childNodes[0].textContent = translations[lang].language + " ▼";
				
	// 			const logOutBtn = document.getElementById('logOut');
	// 			const findUsBtn = document.getElementById('find-us-list');	
	// 			const playBtn = document.getElementById('play-button-top');
	// 			const playBtn2 = document.getElementById('play-button-bot');
				
	// 			if (logOutBtn) logOutBtn.innerText = translations[lang].logout;
	// 			if (findUsBtn) findUsBtn.childNodes[0].textContent = translations[lang].findUs + " ▼";
	// 			if (playBtn) playBtn.innerText = translations[lang].play;
	// 			if (playBtn2) playBtn2.innerText = translations[lang].play;
			  
	// 			// Update carousel texts
	// 			const carouselItems = document.querySelectorAll('.carousel-item');
	// 			carouselItems.forEach((item, index) => {
	// 				const caption = item.querySelector('.carousel-caption');
	// 				if (caption) {
	// 					const h1 = caption.querySelector('h1');
	// 					const h2 = caption.querySelector('h2') || caption.querySelector('p') || caption.querySelector('h1'); // Handle different structures
	// 					if (index === 0) {
	// 						h1.innerText = translations[lang].explore;
	// 						h2.innerText = translations[lang].enjoy;
	// 					} else if (index === 1) {
	// 						h1.innerText = translations[lang].slide1;
	// 						h2.innerText = translations[lang].slide2;
	// 					} else if (index === 2) {
	// 						h1.innerText = translations[lang].slide3;
	// 						h2.innerText = translations[lang].slide4;
	// 					}
	// 				}
	// 			});
			  
	// 			// Update hero section
	// 			const heroArea1 = document.querySelector('#hero-p');
	// 			const heroArea2 = document.querySelector('#hero-p2');
	// 			const heroAreaPlayBtn = document.querySelector('#play-button-bot');
	// 			if (heroAreaPlayBtn) heroAreaPlayBtn.innerText = translations[lang].play;
	// 			if (heroArea1) heroArea1.innerText = translations[lang].become;
	// 			if (heroArea2) heroArea2.innerText = translations[lang].ready;
	// 		  }
			  
	// 		  // Listen for clicks on the language options
	// 		  document.querySelectorAll('.dropdown li a').forEach(item => {
	// 			item.addEventListener('click', event => {
	// 				event.preventDefault(); // Prevent default link behavior
	// 				const selectedLang = event.target.getAttribute('data-lang'); // Get selected language
	// 				changeLanguage(selectedLang); // Update the UI with the selected language
	// 			});
	// 		  });}



// Set up the hashchange event listener

// Initialize the app
window.addEventListener("hashchange", renderRoute);

document.addEventListener("DOMContentLoaded", () => {
	console.log('1');
	renderRoute(); 
});


function renderLandingPage() {
	
	const signInBtn = document.getElementById('signIn');
	const loginPopup = document.getElementById('login-box');
	const loginArea = document.getElementById('tab-main');
	const signUpArea = document.getElementById('signup-body');
	const mainContent = document.getElementById('main-content');
	const loginTitle = document.getElementById('login-title');
	const signupTitle = document.getElementById('signup-title');
	const headerArea = document.getElementById("header-area");


	console.log("ZAP");
	mainContent.classList.add('blur');
	// headerArea.classList.add('blur');
	loginPopup.style.display = 'block';
	loginArea.style.display = 'flex'; // Corrected to style.display
	signUpArea.style.display = 'none';
	loginTitle.classList.add('active');
	signupTitle.classList.remove('active');
	loginPopup.style.height = '500px';


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
	
	const loginBtn = document.getElementById('login-button');
	loginBtn.addEventListener('click', function(e) {
		e.preventDefault();

		const userEmail = document.getElementById('login-email').value;
		const userPass = document.getElementById('login-password').value;
		const errMsg = document.getElementById('auth-err-msg');

		// console.log(userName, userPass);

		fetch('data/user.json')
			.then(Response => Response.json())
			.then(users => {
				const user = users.find(u => u.email === userEmail);

				if (!user) {
					errMsg.style.display = 'flex';
				}
				else if (user.password === userPass){
					renderHomePage();
					// window.location.hash = "#home";
					console.log("test");
					setupHomePage();
				}
					// store the token in here
				else 
					errMsg.style.display = 'flex';
				
			})
			
		})
}

function renderHomePage() {

	window.location.hash = "#home";
	setupHomePage();
}

function renderProfilePage() {
	window.location.hash = "#profile";
	setupProfilePage();
}

function setupHomePage() {
	
			// console.log("home");
			// window.location.hash = "#home";
			const logOutBtn = document.getElementById('logOut');
			console.log(logOutBtn);
			if (logOutBtn){
				logOutBtn.addEventListener('click', function(){
					window.location.hash = "#landing";
				});
			}
			
			const profileBtn = document.getElementById('profile-button');
			if (profileBtn){
				profileBtn.addEventListener('click', function(){
					window.location.hash = "#profile";
				})
			}


			function changeLanguage(lang) {
				const dropdownLabel = document.querySelector('#Language-list');
				dropdownLabel.childNodes[0].textContent = translations[lang].language + " ▼";
				
				const logOutBtn = document.getElementById('logOut');
				const findUsBtn = document.getElementById('find-us-list');	
				const playBtn = document.getElementById('play-button-top');
				const playBtn2 = document.getElementById('play-button-bot');
				
				if (logOutBtn) logOutBtn.innerText = translations[lang].logout;
				if (findUsBtn) findUsBtn.childNodes[0].textContent = translations[lang].findUs + " ▼";
				if (playBtn) playBtn.innerText = translations[lang].play;
				if (playBtn2) playBtn2.innerText = translations[lang].play;
			  
				// Update carousel texts
				const carouselItems = document.querySelectorAll('.carousel-item');
				carouselItems.forEach((item, index) => {
					const caption = item.querySelector('.carousel-caption');
					if (caption) {
						const h1 = caption.querySelector('h1');
						const h2 = caption.querySelector('h2') || caption.querySelector('p') || caption.querySelector('h1'); // Handle different structures
						if (index === 0) {
							h1.innerText = translations[lang].explore;
							h2.innerText = translations[lang].enjoy;
						} else if (index === 1) {
							h1.innerText = translations[lang].slide1;
							h2.innerText = translations[lang].slide2;
						} else if (index === 2) {
							h1.innerText = translations[lang].slide3;
							h2.innerText = translations[lang].slide4;
						}
					}
				});
			  
				// Update hero section
				const heroArea1 = document.querySelector('#hero-p');
				const heroArea2 = document.querySelector('#hero-p2');
				const heroAreaPlayBtn = document.querySelector('#play-button-bot');
				if (heroAreaPlayBtn) heroAreaPlayBtn.innerText = translations[lang].play;
				if (heroArea1) heroArea1.innerText = translations[lang].become;
				if (heroArea2) heroArea2.innerText = translations[lang].ready;
			  }
			  
			  // Listen for clicks on the language options
			 	document.querySelectorAll('.dropdown li a').forEach(item => {
				item.addEventListener('click', event => {
					event.preventDefault(); // Prevent default link behavior
					const selectedLang = event.target.getAttribute('data-lang'); // Get selected language
					changeLanguage(selectedLang); // Update the UI with the selected language
				});

				}
			);
}

 function setupProfilePage(){
	const logOutBtn = document.getElementById('logOut');
	// console.log(logOutBtn);
	if (logOutBtn){
		logOutBtn.addEventListener('click', function(){
			window.location.hash = "#landing";
		});
	}

	const homeBtn = document.getElementById('home-button');
	if (homeBtn){
		homeBtn.addEventListener('click', function(){
			window.location.hash = "#home";
		})
	}

	document.querySelectorAll('.dropdown li a').forEach(item => {
		item.addEventListener('click', event => {
			event.preventDefault(); // Prevent default link behavior
			const selectedLang = event.target.getAttribute('data-lang'); // Get selected language
			changeLanguage(selectedLang); // Update the UI with the selected language
	});
	}
	)
	function changeLanguage(lang) {
		const dropdownLabel = document.querySelector('#Language-list');
		dropdownLabel.childNodes[0].textContent = translations[lang].language + " ▼";
		
		const logOutBtn = document.getElementById('logOut');
		const findUsBtn = document.getElementById('find-us-list');	
		const playBtn = document.getElementById('play-button-top');
		const playBtn2 = document.getElementById('play-button-bot');
		
		if (logOutBtn) logOutBtn.innerText = translations[lang].logout;
		if (findUsBtn) findUsBtn.childNodes[0].textContent = translations[lang].findUs + " ▼";
		if (playBtn) playBtn.innerText = translations[lang].play;
		if (playBtn2) playBtn2.innerText = translations[lang].play;
	  
		// Update carousel texts
		const carouselItems = document.querySelectorAll('.carousel-item');
		carouselItems.forEach((item, index) => {
			const caption = item.querySelector('.carousel-caption');
			if (caption) {
				const h1 = caption.querySelector('h1');
				const h2 = caption.querySelector('h2') || caption.querySelector('p') || caption.querySelector('h1'); // Handle different structures
				if (index === 0) {
					h1.innerText = translations[lang].explore;
					h2.innerText = translations[lang].enjoy;
				} else if (index === 1) {
					h1.innerText = translations[lang].slide1;
					h2.innerText = translations[lang].slide2;
				} else if (index === 2) {
					h1.innerText = translations[lang].slide3;
					h2.innerText = translations[lang].slide4;
				}
			}
		});
	  
		// Update hero section
		const heroArea1 = document.querySelector('#hero-p');
		const heroArea2 = document.querySelector('#hero-p2');
		const heroAreaPlayBtn = document.querySelector('#play-button-bot');
		if (heroAreaPlayBtn) heroAreaPlayBtn.innerText = translations[lang].play;
		if (heroArea1) heroArea1.innerText = translations[lang].become;
		if (heroArea2) heroArea2.innerText = translations[lang].ready;
	  }

const winLossCtx = document.getElementById('winLossChart').getContext('2d');
const winLossChart = new Chart(winLossCtx, {
  type: 'doughnut',
  data: {
  datasets: [{
    data: [56, 12],  // replace with real stats
    backgroundColor: ['#48D1CC', '#DC143C'],
    borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    cutout: '80%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  },
  plugins: [{
    id: 'winLossText',
    beforeDraw(chart) {
      const {width, height, chartArea} = chart;
      const ctx = chart.ctx;

      const winText = '56W';
      const lossText = '12L';

      ctx.save();
      ctx.font = `bold 15px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Calculate the position to center the text inside the doughnut
      const x = width / 2;
      const y = chartArea.top + (chartArea.bottom - chartArea.top) / 2;

      ctx.fillStyle = '#48D1CC';
      ctx.fillText(winText, x - 16, y);

      ctx.fillStyle = '#DC143C';
      ctx.fillText(lossText, x + 16, y);

      ctx.restore();
    }
  }]
});


const winRateCtx = document.getElementById('winRateChart').getContext('2d');
const wins = 56;
const losses = 12;
const totalGames = wins + losses;
const winRate = ((wins / totalGames) * 100).toFixed(1);

const winRateChart = new Chart(winRateCtx, {
  type: 'doughnut',
  data: {
    datasets: [{
    data: [winRate, 100 - winRate],
    backgroundColor: ['#0096FF', '#1a1a1a'],
    borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    cutout: '80%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  },
  plugins: [{
    id: 'winRateText',
    beforeDraw(chart) {
      const {width} = chart;
      const ctx = chart.ctx;

      ctx.save();
      ctx.font = 'bold 15px Arial';
      ctx.fillStyle = '#D3D3D3';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${winRate}%`, width / 2, chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2);
      ctx.restore();
    }
  }]
})}


const translations = {
	en: {
	login: "Login",
	username: "Username",
	password: "Password",
		incorrect: "Incorrect username or password, try again please!",
		findUs: "Find Us On",
		profile: "Profile",
		play: "Play",
		language: "Language",
		explore: "Explore New Realms",
		enjoy: "With the different maps and skins, be sure to enjoy it ALL",
		slide1: "Second slide label",
		slide2: "Some representative placeholder content for the second slide.",
		slide3: "Third slide label",
		slide4: "Some representative placeholder content for the third slide.",
		become: "Become the greatest pong player, and rule your world using neon power!!!",
		ready: "Ready to serve up some digital domination? Our new online pong game is here!",
		logout: "LOG_OUT"
	},
	ar: {
		login: "تسجيل الدخول",
		username: "اسم المستخدم",
		password: "كلمة المرور",
		incorrect: "اسم المستخدم أو كلمة المرور غير صحيحين، حاول مرة أخرى من فضلك!",
		findUs: "اعثر علينا على",
		profile: "الملف الشخصي",
		play: "العب",
		language: "اللغة",
		explore: "استكشاف عوالم جديدة",
		enjoy: "مع الخرائط والأشكال المختلفة، تأكد من الاستمتاع بكل شيء",
		slide1: "تسمية الشريحة الثانية",
		slide2: "بعض المحتوى التمثيلي النائب للشريحة الثانية.",
		slide3: "تسمية الشريحة الثالثة",
		slide4: "بعض المحتوى التمثيلي النائب للشريحة الثالثة.",
		become: "كن أعظم لاعب بونج، واحكم عالمك باستخدام الطاقة النيونية!!!",
		ready: "مستعد لتقديم بعض الهيمنة الرقمية؟ لعبتنا الجديدة على الإنترنت بونج هنا!",
 		logout: "تسجيل الخروج"
	},
	fr: {
		login: "Connexion",
		username: "Nom d'utilisateur",
		password: "Mot de passe",
		incorrect: "Nom d'utilisateur ou mot de passe incorrect, veuillez réessayer!",
		findUs: "Trouvez-nous sur",
		profile: "Profil",
		play: "Jouer",
		language: "Langue",
		explore: "Explorez de nouveaux royaumes",
		enjoy: "Avec les différentes cartes et skins, assurez-vous de tout apprécier",
		slide1: "Étiquette de la deuxième diapositive",
		slide2: "Quelques contenus de remplacement représentatifs pour la deuxième diapositive.",
		slide3: "Étiquette de la troisième diapositive",
		slide4: "Quelques contenus de remplacement représentatifs pour la troisième diapositive.",
		become: "Devenez le plus grand joueur de pong et régnez sur votre monde en utilisant la puissance du néon!!!",
		ready: "Prêt à servir une domination numérique? Notre nouveau jeu de pong en ligne est là!",
		logout: "Déconnexion"
	}
};
