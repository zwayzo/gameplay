// LANGUAGES-DATA-STRUCTER //

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
        ready: "Ready to serve up some digital domination? Our new online pong game is here!"
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
        ready: "مستعد لتقديم بعض الهيمنة الرقمية؟ لعبتنا الجديدة على الإنترنت بونج هنا!"
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
        ready: "Prêt à servir une domination numérique? Notre nouveau jeu de pong en ligne est là!"
    }
};


function changeLanguage(lang) {
    const dropdownLabel = document.querySelector('#Language-list');
    dropdownLabel.childNodes[0].textContent = translations[lang].language + " ▼";

    // Update header elements
    document.querySelector('#username').placeholder = translations[lang].username;
    document.querySelector('#password').placeholder = translations[lang].password;
    document.querySelector('.find-us-button').innerText = translations[lang].findUs;
    document.querySelector('#submit-button').innerText = translations[lang].login;
    document.querySelector('.wrong-input-err').innerText = translations[lang].incorrect;
    document.querySelector('.signIn').innerText = translations[lang].profile;
    document.querySelector('.play-button-top').innerText = translations[lang].play;

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
});


// HEADER-ELEMENTS 

document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.getElementById('signIn');
    const loginPopup = document.getElementById('login-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const mainContent = document.getElementById('main-content');

    signInBtn.addEventListener('click', function () {
        mainContent.classList.add('blur'); // Add blur effect to the main content
        loginPopup.style.display = 'flex'; // Show the login popup
    });

    closePopupBtn.addEventListener('click', function () {
        loginPopup.style.display = 'none'; // Hide the login popup
        mainContent.classList.remove('blur'); // Remove blur effect from the main content
    });

    const form = document.getElementById('login-form'); // Corrected form element selection
    const wrongInput = document.getElementById('wrong-input-err');
    const userName = 'Moskir';
    const passW = '123';

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const passWordInput = document.getElementById('password').value;
        const userNameInput = document.getElementById('username').value;
        if (userName !== userNameInput || passWordInput !== passW) {
            wrongInput.style.display = 'flex'; // Show error message
        } else {
            wrongInput.style.display = 'none'; // Hide error message if login is correct
            signInBtn.innerText = 'Profile'; // Change sign-in button text to 'Profile'
            loginPopup.style.display = 'none';
            mainContent.classList.remove('blur');
        }
        
        
    });

    const findUsOnBtn = document.querySelector('#find-us-button');
    // console.log(findUsOnBtn.innerText);
    const findUsArea = document.querySelector('#find-us-area');
    var i = 0;
    findUsOnBtn.addEventListener('click', function(event) {
        if (i == 0){
            findUsArea.style.display = 'flex';
            i = 1;
            findUsArea.classList.toggle('show');
            event.stopPropagation();
        }
        else {
            findUsArea.style.display = 'none';   
            i = 0;
        }
    });
        
    
});



// SPA-COMPONENTS //

function ProfileComponents() {
    return `<body class="profile-page">
		<div class="profile-container">
			<div class="left-panel">
				<div class="profile-picture-container">
					<img src="./pics/obelhaj.jpeg" alt="Profile Picture">
				</div>
				<div class="profile-username">USERNAME</div>
				<div class="stats-container"></div>
			</div>
			<div class="center-panel"></div>
			<div class="right-panel">
				<div class="game-history">RECENT GAMES</div>
				<div class="matches-cards">
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
				</div>
			</div>
		</div>
	</body>`;
}



















