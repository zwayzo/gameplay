const username = document.getElementById("username");
const userAvatar = document.getElementById("avatar");
const wins = document.getElementById("wins");
const loses = document.getElementById("loses");
const winRate = document.getElementById("winrate");
const winStreak = document.getElementById("winstreak");
const tournamentsWon = document.getElementById("tournamentsWon");
const winLossCtx = document.getElementById('winLossChart').getContext('2d');
const winRateCtx = document.getElementById('winRateChart').getContext('2d');
const loadingFriends = document.getElementById("loadingFriends");
const loadingHistory = document.getElementById("loadingHistory");

async function fetchData() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        renderProfile(data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

function renderProfile(data) {
    
    // user stats
    username.textContent = data.user.username;
    userAvatar.src = data.user.avatar;
    wins.textContent = data.user.wins;
    loses.textContent = data.user.loses;
    winRate.textContent = data.user.winrate;
    winStreak.textContent = data.user.winstreak;
    tournamentsWon.textContent = data.user.tournamentsWon;

    // tooltip for long usernames
    if (username.textContent.length >= 20) {
        username.setAttribute('title', data.user.username);
        username.setAttribute('data-bs-placement', "bottom");
        new bootstrap.Tooltip(username);
    }


    // rendering win/lose chart
    const winLossChart = new Chart(winLossCtx, {
        type: 'doughnut',
        data: {
        datasets: [{
            data: [wins.textContent, loses.textContent],
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

            const winText = `${wins.textContent}W`;
            const lossText = `${loses.textContent}L`;

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

    // rendering winrate chart
    const winRateChart = new Chart(winRateCtx, {
        type: 'doughnut',
        data: {
        datasets: [{
            data: [winRate.textContent, 100 - winRate.textContent],
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
            ctx.fillText(`${winRate.textContent}%`, width / 2, chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2);
            ctx.restore();
            }
        }]
    });
    
    // Helper function to measure text width
    function getTextWidth(text, font) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = font;
        return context.measureText(text).width;
    }

    // render friends list
    const friendsContainer = document.getElementById("friends-list");
    let friendsCardsHtml = '';

    loadingFriends.style.display = "none";
    if (data.friends.length === 0) {
        document.getElementById("no-friends").style.display = "block";
    }

    const maxTextWidth = 70;
    const font = '16px Tomorrow, sans-serif';

    data.friends.forEach(friend => {
        const friendName = friend.name;
        const friendTooltip = getTextWidth(friendName, font) > maxTextWidth ? `data-bs-toggle="tooltip" title="${friendName}"` : '';

        friendsCardsHtml += `
            <div class="friend-card">
                <img src="${friend.avatar}" alt="${friend.name}" class="friend-avatar">
                <div class="friend-info">
                    <p class="friend-name" data-bs-placement="bottom" ${friendTooltip} tabindex="0">${friendName}</p>
                    <p class="friend-status online">${friend.status}</p>
                </div>
                <button class="friend-action">Remove</button>
            </div>`;
    });
    friendsContainer.innerHTML += friendsCardsHtml;

    // render match history
    loadingHistory.style.display = "none";
    if (data.history.length === 0) {
        document.getElementById("no-history").style.display = "block";
    } 
    const historyContainer = document.getElementById("match-history");
    let matchCardsHtml = '';

    data.history.forEach(match => {
        const userUsername = data.user.username;
        const opponentUsername = match.opponentUsername;
    
        const userTooltip = getTextWidth(userUsername, '12.8px Tomorrow, sans-serif') > 55 ? `data-bs-toggle="tooltip" title="${userUsername}"` : '';
        const opponentTooltip = getTextWidth(opponentUsername, 12.8) > 55 ? `data-bs-toggle="tooltip" title="${opponentUsername}"` : '';
    
        matchCardsHtml += `
            <div class="match-card">
                <div class="win-loss-container ${match.result === 'win' ? 'win' : 'loss'}">
                    ${match.result === 'win' ? 'W' : 'L'}
                </div>
                <div class="history-data-container">
                    <div class="avatar-container">
                        <img src="${data.user.avatar}" alt="Your Avatar" class="history-avatar user">
                        <p class="avatar-username" data-bs-placement="bottom" ${userTooltip} tabindex="0">${userUsername}</p>
                    </div>
                    <div class="vs-and-score">
                        <p class="match-date">${match.date}</p>
                        <h3 class="vs">VS</h3>
                        <p class="score">Score: ${match.score}</p>
                    </div>
                    <div class="avatar-container">
                        <img src="${match.opponentAvatar}" alt="Opponent's Avatar" class="history-avatar opponent">
                        <p class="avatar-username" data-bs-placement="bottom" ${opponentTooltip} tabindex="0">${opponentUsername}</p>
                    </div>
                </div>
            </div>`;
    });
    
    historyContainer.innerHTML += matchCardsHtml;
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (tooltipElement) {
        new bootstrap.Tooltip(tooltipElement);
    });
}

const friendRequestsBtn = document.getElementById('friend-requests-btn');
const friendRequestsDropdown = document.getElementById('friend-requests-dropdown');

friendRequestsBtn.addEventListener('click', () => {
    friendRequestsDropdown.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});