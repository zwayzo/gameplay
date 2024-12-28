import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import Ball from '../game/js/Ball.js';
import Padlle from '../game/js/Padlle.js';
import AiController from '../game/js/AiController.js';
import lights from '../game/js/lights.js';


document.addEventListener("DOMContentLoaded", () => {
	renderRoute();
});

window.addEventListener("hashchange", renderRoute);

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
	"#profile": `
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
						<li><span class="key" id="wins-user-state">Wins</span><span class="value"></span></li>
						<li><span class="key" id="loses-user-state">Loses</span><span class="value"></span></li>
						<li><span class="key" id="winrate-user-state">Winrate</span><span class="value"></span></li>
						<li><span class="key" id="winstreak-user-state">Win streak</span><span class="value"></span></li>
						<li><span class="key" id="tn-wons">Tournaments won</span><span class="value"></span></li>
					</ul>					
					<span class="space-between-statdivs"></span>
					<div class="charts">
						<div class="chart-container">
							<canvas class="profile-canva" id="winRateChart"></canvas>
							<p class="charts-p">Win Ratio</p>
						</div>
						<span class="charts-space"></span>
						<div class="chart-container">
							<canvas class="profile-canva" id="winLossChart"></canvas>
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
						<input class="text-input" id="login-username" type="username" name="username" placeholder="Enter your username"><br>
						<input class="text-input" id="login-password" type="password" name="password" placeholder="Enter your password"><br>
						<h5 class="auth-err-msg" id="auth-err-msg" ></h5>
						<div class="signup-buttons">
							<button type="submit" class="intra-sign-up" id="login-button">Login</button>
							<button class="intra-sign-up long-text" id="sign-with-intra">Sign with intra42</button>
						</div>
					</form>
				</div>
			</div>
			<div class="signup-body" id="signup-body"> 
				 <h5>Enter your details to sign up</h5>
				<form class="signup-form">
					<label for="email"></label><br>
					<input class="text-input" type="email" id="signup-email" name="email" placeholder="Enter your email"><br><br>

					<label for="username"></label><br>
					<input class="text-input" type="username" id="signup-username" name="username" placeholder="Enter your username"><br><br>
					
					<label for="password"></label><br>
					<input class="text-input" type="password" id="signup-password" name="password" placeholder="Enter your password"><br><br>
					
					<label for="retype-password"></label><br>
					<input class="text-input" type="password" id="retype-password" name="retype-password" placeholder="Retype your password"><br>
					<h5 class="auth-err-msg" id="err-msg"></h5>
					<button id="signup-btn" type="submit" >Sign-up</button>	
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
	
	`,
	"#game":
		`<body class="game-body">
		<div class="game-area" id="game-area">
		<canvas id="game-canva" class="threejs"></canvas>'</div>
	</body>`
};

// Function to render the current route
function renderRoute() {
	const app = document.getElementById("app"); // Root div for dynamic content
	const hash = window.location.hash || "#landing"; // Default to #landing if no hash is set
	const content = routes[hash]; // Get the content for the current hash

	console.log("HASH: :", hash);
	if (content) {
		app.innerHTML = content;// Render the content
	} else {
		app.innerHTML = `<h1>404 - Page Not Found</h1>`; // Handle unknown routes
	}
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
		case "#game":
			console.log("111");
			renderGamePage();
			break;
		default:
			app.innerHTML = `<h1>4034 - Page Not Found</h1>`; // Handle unknown routes
			break;
	}

}




function renderGamePage() {
	window.location.hash = "#game";
	let socket = new WebSocket('ws://localhost:8000/ws/socket-server/');
	socket.onopen = function(e){
		console.log('connection established11');
		socket.send(JSON.stringify({
			action: 'join',
			message: 'player joined',
		}))
	};
	socket.onmessage = function(event){
		const data = JSON.parse(event.data);

		if (data.type === "waiting") {
            console.log(data.message);
            // Display a waiting message
            // const gameArea = document.getElementById("game-area");
            // gameArea.innerHTML = `<p>${data.message}</p>`;
        } else if (data.type === "start_game") {
            console.log("staaaaaaaaart!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            // Remove waiting message and initialize the game
			console.log()
            setupGamePage();
        }
	}
	const gameArea = document.getElementById("game-area");

	// When the WebSocket connection is opened
	
	// When a message is received from the server
	// socket.onmessage = function (e) {
		// 	const data = JSON.parse(e.data);
	// 	console.log('Received from server:', data);
	// };

	// Handle WebSocket errors
	// const loc = window.location.hash;
	// const socket = new WebSocket("ws://localhost:8000/ws/game/");
	

	// gameArea.innerHTML = '<canvas id="game-canva" class="threejs"></canvas>';
	// console.log(gameArea.innerHTML + "   test");
	// setupGamePage(socket);
}

function clearScene(scene) {
	while (scene.children.length > 0) {
		// Remove the last child from the scene
		scene.remove(scene.children[scene.children.length - 1]);
	}
}

function setupGamePage(socket) {
	// socket.onopen = function (e) {
	// 	console.log('Connection established');
	
	// 	// Send a simple message to the server
	// 	socket.send(JSON.stringify({
	// 		action: 'send_message',  // Action type
	// 		message: 'Hello, server!'  // Message content
	// 	}));
	// };
	// socket.onmessage = function (event) {
	// 	const data = JSON.parse(event.data);
	// 	if (data.type === "game_state")
	// 		{
	// 			if(data.state.type === "paddle")
	// 			{
	// 				if (data.state.player === "player1" )
	// 					// console.log("++++++",data.state.player.position.x);
	// 					console.log("***1     ", data.state.position.x)
	// 					console.log("***2     ", playerPadlle1.mesh.position.x)
	// 					playerPadlle1.mesh.position.set(data.state.position.x, data.state.position.y, data.state.position.z)
	// 					console.log("***2     ", playerPadlle1.mesh.position.x)
	// 			}
	// 			console.log("--",data.state.type)
	// 			// console.log(data);
	// 		}	
	// 	// if (data.type === "ball") {
	// 	// 	// Update ball position and velocity
	// 	// 	ball.mesh.position.set(data.position.x, data.position.y, data.position.z);
	// 	// } else if (data.type === "paddle") {
	// 	// 	// Update paddle positions based on the received data
	// 	// 	if (data.player === "player1") {
	// 	// 		playerPadlle1.mesh.position.set(data.position.x, data.position.y, data.position.z); // Update player 1's paddle
	// 	// 	} else if (data.player === "player2") {
	// 	// 		playerPadlle2.mesh.position.set(data.position.x, data.position.y, data.position.z);; // Update player 2's paddle
	// 	// 	}
	// 	// }
	// };
	socket.onerror = function (e) {
		console.error('WebSocket error:', e);
	};

	// When the WebSocket connection is closed
	socket.onclose = function (e) {
		console.log('Connection closed:', e);
	};
	const params = {
		planeColor: 0x1044e0,
		scoreColor: 0xf5bd02,
		fogColor: 0x87ceeb,
		fogNear: 90,
		fogFar: 120,
		boundarieColor: 0xaf002a,
		paddleColor: 0xaf002a,
		ballColor: 0xf5bd02,
	};
	// gui.addColor(params, 'planeColor').name("plane color").onChange((val)=>{
	// 	planMaterial.color.set(val)
	// })

	// gui.addColor(params, 'boundarieColor').name("boundaries Color").onChange((val)=>{
	// 	boundMaterial.color.set(val)
	// })

	// gui.addColor(params, 'ballColor').name("ball color").onChange((val)=>{
	// 	ball.material.color.set(val)
	// })

	// gui.addColor(params, 'paddleColor').name("paddle color").onChange((val)=>{
	// 	playerPadlle1.material.color.set(val);
	// 	playerPadlle2.material.color.set(val);
	// })

	// gui.addColor(params, 'fogColor').name("fog color").onChange((val)=>{
	// 	scene.background.set(val);
	// 	scene.fog.color.set(val);
	// })

	// gui.add(params, 'fogNear', 0, 100, 1).name('Near').onChange((val)=>{
	// 	scene.fog.near = val;
	// })

	// * initialize Scene
	const scene = new THREE.Scene();
	scene.background = new THREE.Color(params.fogColor);
	scene.fog = new THREE.Fog(params.fogColor, params.fogNear, params.fogFar);
	scene.add(...lights);
	let player1ScoreMesh,
		player2ScoreMesh,
		loadedFont,
		playerPadlle1,
		playerPadlle2,
		ball;

	// const FONT_PARAMS = {
	// 	size: 3,
	// 	depth: 0.1,
	// 	curveSegments: 10,
	// 	bevelEnabled: true,
	// 	bevelThickness: 0.1,
	// 	bevelSize: 0.02,
	// 	bevelOffset: 0,
	// 	bevelSegments: 1
	// }

	const FONT_PARAMS = {
		size: 1.5, // Smaller font size
		depth: 0.000005, // Reduced depth
		curveSegments: 8, // Lower curve segments for performance
		bevelEnabled: true, // Keep bevels for aesthetics
		bevelThickness: 0.00005, // Reduced bevel thickness
		bevelSize: 0.01, // Smaller bevel size
		bevelOffset: 0,
		bevelSegments: 1, // Minimal bevel segments
	};

	// * applying the sc ore
	const score = {
		player1: 0,
		player2: 0,
	};

	// * Fonts loader
	const fontLoader = new FontLoader();
	fontLoader.load(
		"https://cdn.jsdelivr.net/npm/three@0.152.0/examples/fonts/helvetiker_bold.typeface.json",
		function (font) {
			loadedFont = font;
			const geometry = new TextGeometry("0", {
				font: font,
				...FONT_PARAMS,
			});
			// console.log("sizw   ", geometry.getSize())
			geometry.scale(2, 2, 0.01);
			geometry.center();
			player1ScoreMesh = new THREE.Mesh(
				geometry,
				new THREE.MeshStandardMaterial({
					color: params.scoreColor,
				})
			);
			player2ScoreMesh = player1ScoreMesh.clone();
			player1ScoreMesh.position.set(
				player1ScoreMesh.position.x,
				player1ScoreMesh.position.y,
				boundaries.y
			);
			player2ScoreMesh.position.set(
				player2ScoreMesh.position.x,
				player2ScoreMesh.position.y,
				-boundaries.y
			);

			player1ScoreMesh.castShadow = true;
			player2ScoreMesh.castShadow = true;

			scene.add(player1ScoreMesh, player2ScoreMesh);
		}
	);

	function getScoreGeometry(score) {
		const geometry = new TextGeometry(`${score}`, {
			font: loadedFont,
			...FONT_PARAMS,
		});
		// console.log("geometry", geometry);
		geometry.scale(2, 2, 0.01);
		geometry.center();
		return geometry;
	}

	// * Keys
	const keys = {
		a: {
			pressed: false,
		},
		d: {
			pressed: false,
		},
		rightArrow: {
			pressed: false,
		},
		leftArrow: {
			pressed: false,
		},
	};
	// * add the object to the scene
	const material = new THREE.MeshNormalMaterial();
	const geometry = new THREE.BoxGeometry(1, 1, 1);

	const mesh = new THREE.Mesh(geometry, material);
	// scene.add(mesh);

	const boundaries = new THREE.Vector2(18, 20);
	const planMaterial = new THREE.MeshStandardMaterial({
		color: params.planeColor,
		// wireframe: true,
		// transparent: true,
		// opacity: 0.1,
	});
	const planGeometry = new THREE.PlaneGeometry(
		boundaries.x * 20,
		boundaries.y * 20,
		boundaries.x * 20,
		boundaries.y * 20
	);
	planGeometry.rotateX(-Math.PI * 0.5);
	const plan = new THREE.Mesh(planGeometry, planMaterial);
	plan.position.y = -1.5;
	plan.receiveShadow = true;
	scene.add(plan);

	playerPadlle2 = new Padlle(
		scene,
		new THREE.Vector3(0, 0, -16),
		boundaries,
		"player2"
	);
	playerPadlle1 = new Padlle(
		scene,
		new THREE.Vector3(0, 0, 16),
		boundaries,
		"player1"
	);
	ball = new Ball(scene, boundaries, [playerPadlle2, playerPadlle1]);
	ball.material.color.set(0xaf002a);
	playerPadlle1.material.color.set(0xaf002a);
	ball.addEventListener("goal", (e) => {
		// console.log('goal ', e.message);
		// console.log("hellloooo", e.message);
		score[e.message] += 1;
		console.log("WQWDWQDW", score[e.message]);

		const geometry = getScoreGeometry(score[e.message]);
		const mesh = e.message === "player1" ? player1ScoreMesh : player2ScoreMesh;

		mesh.geometry = geometry;
		// console.log(mesh.geometry);

		mesh.geometry.getAttribute("position").needsUpdate = true;
		// console.log("hada howa score", score.player1);
	});

	const boundGeometry = new RoundedBoxGeometry(1, 2, boundaries.y * 2, 5, 0.5);
	const boundMaterial = new THREE.MeshStandardMaterial({
		color: params.boundarieColor,
	});
	const leftbound = new THREE.Mesh(boundGeometry, boundMaterial);
	leftbound.position.x = -boundaries.x - 0.5;
	const rightbound = leftbound.clone();
	rightbound.position.x = boundaries.x + 0.5;
	leftbound.castShadow = true;
	rightbound.castShadow = true;
	rightbound.receiveShadow = true;
	scene.add(leftbound, rightbound);

	// * initialize Camera
	const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	camera.position.set(0, 52, 0);

	// * initialize render
	const canvas = document.getElementById("game-canva");
	if (!canvas) console.log("EROOR AT CANVA");
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
		antialias: true,
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.shadowMap.enabled = true;
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1.2;
	renderer.shadowMap.type = THREE.VSMShadowMap;

	// * initialize controls
	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true;
	// controls.autoRotate = true;

	// * for resizing screen
	window.addEventListener("resize", () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	});

	const parentEl = document.getElementById("game-area");

	window.addEventListener("keydown", (event) => {
		// if (event.code === "ArrowRight" || event.code === "ArrowLeft" || event.code === "ArrowUp" || event.code === "ArrowDown") {
		// 	event.preventDefault(); // Prevent scrolling
		// }
		// console.log(event.code);
		switch (event.code) {
			case "KeyD": // Correct case for moving right
				keys.d.pressed = true;
				// controls.enabled = false;
				break;
			case "KeyA": // Correct case for moving left
				keys.a.pressed = true;
				// controls.enabled = false;
				break;
			case "KeyL":
				keys.rightArrow.pressed = true;
				// controls.enabled = false;
				break;
			case "KeyJ":
				keys.leftArrow.pressed = true;
				// controls.enabled = false;
				break;
		}
	});

	window.addEventListener("keyup", (event) => {
		switch (event.code) {
			case "KeyA":
				keys.a.pressed = false;
				break;
			case "KeyD": // Correct case for releasing right key
				keys.d.pressed = false;
				break;
			case "KeyL":
				keys.rightArrow.pressed = false;
				break;
			case "KeyJ":
				keys.leftArrow.pressed = false;
				break;
		}
	});

	// * this clock
	const clock = new THREE.Clock();
	// let prevTime = 0;
	// console.log(canvas);

	const controller = new AiController(playerPadlle2, ball);
	//   console.log(playerPadlle1.playeId);
	console.log(scene);
	// console.log(window.devicePixelRatio);
	function animate() {
		const animateframe = requestAnimationFrame(animate);
		const deltaTime = clock.getDelta();
		const dt = deltaTime / 10;
		for (let i = 0; i < 10; i++) {
			playerPadlle1.move(keys.d.pressed, keys.a.pressed, socket);
			ball.update(dt, socket);
			//   controller.update(dt);
			playerPadlle2.move(keys.rightArrow.pressed, keys.leftArrow.pressed, socket);
		}
		//*this is for pc as player
		controls.update();
		//   playerPadlle2.setX(ball.mesh.position.x);
		renderer.render(scene, camera);

		if (score.player1 === 5 || score.player2 === 5) {
			const winner = score.player1 === 5 ? "Player 1" : "Player 2";
			const loser = score.player1 === 5 ? "Player 2" : "Player 1";
			cancelAnimationFrame(animateframe);
			clearScene(scene);
			//   setTimeout(() => {
			//     window.location.href = '/'; // Change this to your home page URL
			// }, 5000);
			displayGameResult(winner, loser);
			console.log("game over");
		}
		//   window.requestAnimationFrame(animate);
	}
	//
	animate();
}

function displayGameResult(winner, loser) {
	const resultDisplay = document.createElement('div');
	resultDisplay.innerText = `${winner} wins! ${loser} loses!`;
	resultDisplay.style.position = 'absolute';
	resultDisplay.style.top = '50%';
	resultDisplay.style.left = '50%';
	resultDisplay.style.transform = 'translate(-50%, -50%)';
	resultDisplay.style.fontSize = '2em';
	resultDisplay.style.color = 'white';
	document.body.appendChild(resultDisplay);

	// Redirect to home page after 5 seconds
	setTimeout(() => {
		window.location.href = '/'; // Change this to your home page URL
	}, 5000); // 5000 milliseconds = 5 seconds
}

function renderLandingPage() {
	setupLandingPage();
}

function setupLandingPage() {

	const signInBtn = document.getElementById('signIn');
	const loginPopup = document.getElementById('login-box');
	const loginArea = document.getElementById('tab-main');
	const signUpArea = document.getElementById('signup-body');
	const mainContent = document.getElementById('main-content');
	const loginTitle = document.getElementById('login-title');
	const signupTitle = document.getElementById('signup-title');
	const headerArea = document.getElementById("header-area");

	mainContent.classList.add('blur');
	loginPopup.style.display = 'block';
	loginArea.style.display = 'flex'; // Corrected to style.display
	signUpArea.style.display = 'none';
	loginTitle.classList.add('active');
	signupTitle.classList.remove('active');
	loginPopup.style.height = '500px';

	function showLogin() {
		loginArea.style.display = 'flex';
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
		loginPopup.style.height = '650px';
	}

	loginTitle.addEventListener('click', showLogin);
	signupTitle.addEventListener('click', showSignup);


	const signUpBtn = document.getElementById('signup-btn');

	signUpBtn.addEventListener('click', async function (e) {

		e.preventDefault();

		const email = document.getElementById('signup-email').value;
		const pass = document.getElementById('signup-password').value;
		const userName = document.getElementById('signup-username').value;
		const retypePass = document.getElementById('retype-password').value;
		const errMsg = document.getElementById('err-msg');

		console.log(errMsg);


		if (pass != retypePass) {
			alert('password does not match');// change this to show in the css
			return;
		}
		console.log("email", email, "pass", pass, "username", userName);

		const signUpData = {
			email: email,
			password: pass,
			username: userName,
		};

		try {
			const response = await fetch('http://localhost:8000/api/register/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(signUpData),
			});

			if (response.ok) {
				const result = await response.json();
				console.log(result);
				const token = result.token;
				localStorage.setItem('token', token);
				renderHomePage();
				// render the login page.
			}
			else {
				const error = await response.json();
				console.log('server responses: ', error);

				for (const [field, message] of Object.entries(error)) {
					errMsg.innerText = `${field}: ${message.join(', ')}`;
					// console.log(errMsg.innerText);
					errMsg.style.display = 'flex';
				}
			}
		}
		catch (err) {
		}
	})


	const loginBtn = document.getElementById('login-button');
	// const errMsglog = document.getElementById('auth-err-msg');

	loginBtn.addEventListener('click', async function (e) {
		e.preventDefault();

		const userName = document.getElementById('login-username').value;
		const userPass = document.getElementById('login-password').value;
		const errMsg = document.getElementById('auth-err-msg');

		if (userName.lenght === 0 || userPass.length === 0) {
			errMsg.innerText = 'empty username or password!'
			errMsg.style.display = 'block';
		}
		else {
			const loginData = {
				username: userName,
				password: userPass,
			};

			console.log(userName, userPass);
			try {
				const response = await fetch('http://localhost:8000/api/login/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(loginData)
				});

				if (response.ok) {
					const result = await response.json();
					renderHomePage();
				}
				else {
					const error = await response.json();
					let errorMessage = error.detail;

					errMsg.innerText = errorMessage;
					errMsg.style.display = 'block';
				}
			}
			catch (err) {
				// alert('Anss error occurred while registering.');
				// console.error('Network Error:', err); // Log the error
			}
		}
	})
}

function renderHomePage() {
	window.location.hash = "#home";
	setupHomePage();
}

function setupHomePage() {

	const playTopBtn = document.getElementById("play-button-top");

	playTopBtn.addEventListener('click', function (e) {
		e.preventDefault();

		renderGamePage();

	});

	const logOutBtn = document.getElementById('logOut');
	if (logOutBtn) {
		logOutBtn.addEventListener('click', function () {
			// add remove token in here
			window.location.hash = "#landing";
		});
	}

	const profileBtn = document.getElementById('profile-button');
	if (profileBtn) {
		profileBtn.addEventListener('click', function () {
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

function renderProfilePage() {
	setupProfilePage();
}


function setupProfilePage() {

	function headerButtons() {
		const logOutBtn = document.getElementById('logOut');

		if (logOutBtn) {
			logOutBtn.addEventListener('click', function () {
				// add remove token in here 
				window.location.hash = "#landing";
			});
		}

		const homeBtn = document.getElementById('home-button');
		if (homeBtn) {
			homeBtn.addEventListener('click', function () {
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
	}

	headerButtons();

	let profileStatesData = {};

	const profileStates = async () => {

		const token = localStorage.getItem('token');
		console.log("TOK: ", token)
		try {
			const response = await fetch('http://127.0.0.1:8000/api/profile/', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Token ${token}`,
				}
			});

			if (response.ok) {
				profileStatesData = await response.json();
				updateLeftPanel(profileStatesData);
				console.log("RES OF PROFILE: ", profileStatesData);
			}
			else {
				const error = await response.json();
				console.log('ERROR: ', error);
			}

		}
		catch {

		}
	}

	profileStates();

	function updateLeftPanel(profileStatesData) {


		// update the stats overview 
		function statesUpdate() {
			const userWins = document.querySelector('#wins-user-state + .value');
			const userLoses = document.querySelector('#loses-user-state + .value');
			const userWinrate = document.querySelector('#winrate-user-state + .value');
			const userWinStreak = document.querySelector('#winstreak-user-state + .value');
			const wonTournaments = document.querySelector('#tn-wons + .value');
			const gamesPlaye = profileStatesData.user_stats.games_played;
			const gamesW = profileStatesData.user_stats.games_won;
			const Winrate = ((gamesW / gamesPlaye) * 100).toFixed(1);
			// ((gamesWon / gamesPlayed) * 100).toFixed(1);


			userWins.innerHTML = profileStatesData.user_stats.games_won;
			userLoses.innerHTML = profileStatesData.user_stats.games_won - profileStatesData.user_stats.games_played;
			userWinStreak.innerHTML = profileStatesData.user_stats.win_streak;
			wonTournaments.innerHTML = profileStatesData.user_stats.tournaments_won;
			userWinrate.innerHTML = Winrate;
		}
		statesUpdate();
		// updating the charts
		function updateTheCharts() {


			// const gamesWon = profileStatesData.user_stats.games_won;
			// const gamesPlayed = profileStatesData.user_stats.games_player;

			const gamesWon = 10;
			const gamesPlayed = 40;
			const gamesLost = gamesPlayed - gamesWon;
			console.log("GAME: ", gamesWon);

			const winLossCtx = document.getElementById('winLossChart').getContext('2d');
			const winLossChart = new Chart(winLossCtx, {
				type: 'doughnut',
				data: {
					datasets: [{
						data: [gamesWon, gamesLost],  // replace with real stats
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
						const { width, height, chartArea } = chart;
						const ctx = chart.ctx;

						const winText = gamesWon;
						const lossText = gamesPlayed - gamesWon;
						// console.log("LOSSL : ", lossText)

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
			const winRate = ((gamesWon / gamesPlayed) * 100).toFixed(1);

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
						const { width } = chart;
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
			});
		}

		updateTheCharts();
	}

}


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