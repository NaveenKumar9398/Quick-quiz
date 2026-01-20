// Application State
const appState = {
    currentUser: null,
    currentQuiz: null,
    currentDifficulty: null,
    currentQuestionIndex: 0,
    answers: {},
    startTime: null,
    timerInterval: null,
    timeRemaining: 600, // 10 minutes in seconds
    reviewQuestions: []
};

// Quiz Data is loaded from quiz-data.js

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    checkAuthStatus();
});

function initializeApp() {
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        appState.currentUser = JSON.parse(savedUser);
        showPage('dashboardPage');
        updateWelcomeMessage();
    } else {
        showPage('loginPage');
    }
}

function setupEventListeners() {
    // Login/Register navigation
    document.getElementById('showRegister').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('registerPage');
    });

    document.getElementById('showLogin').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('loginPage');
    });

    // Forms
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('registerForm').addEventListener('submit', handleRegister);

    // Dashboard
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    document.getElementById('viewHistory').addEventListener('click', () => showPage('historyPage'));
    document.getElementById('backToDashboard').addEventListener('click', () => showPage('dashboardPage'));
    document.getElementById('helpBtn').addEventListener('click', () => showPage('helpPage'));
    document.getElementById('backToDashboardFromHelp').addEventListener('click', () => showPage('dashboardPage'));

    // Quiz buttons - handled dynamically
    setupCategoryButtons();

    // Quiz navigation
    document.getElementById('prevQuestion').addEventListener('click', () => navigateQuestion(-1));
    document.getElementById('nextQuestion').addEventListener('click', () => navigateQuestion(1));
    document.getElementById('reviewLater').addEventListener('click', markForReview);
    document.getElementById('submitQuiz').addEventListener('click', confirmSubmitQuiz);

    // Results
    document.getElementById('reviewAnswers').addEventListener('click', showReview);
    document.getElementById('newQuiz').addEventListener('click', () => showPage('dashboardPage'));
}

function setupCategoryButtons() {
    // This will be called when dashboard loads
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('select-difficulty') || e.target.closest('.select-difficulty')) {
            const btn = e.target.classList.contains('select-difficulty') ? e.target : e.target.closest('.select-difficulty');
            const category = btn.dataset.category;
            showDifficultyModal(category);
        } else if (e.target.classList.contains('difficulty-btn') || e.target.closest('.difficulty-btn')) {
            const btn = e.target.classList.contains('difficulty-btn') ? e.target : e.target.closest('.difficulty-btn');
            const modal = document.getElementById('difficultyModal');
            const category = modal.dataset.category;
            const difficulty = btn.dataset.difficulty;
            closeDifficultyModal();
            startQuiz(category, difficulty);
        }
    });
}

function showDifficultyModal(category) {
    const modal = document.getElementById('difficultyModal');
    modal.dataset.category = category;
    modal.style.display = 'flex';
}

function closeDifficultyModal() {
    document.getElementById('difficultyModal').style.display = 'none';
}

// Make closeDifficultyModal available globally
window.closeDifficultyModal = closeDifficultyModal;

function checkAuthStatus() {
    if (!appState.currentUser) {
        showPage('loginPage');
    }
}

// Page Management
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    // Load history when history page is shown
    if (pageId === 'historyPage') {
        loadHistory();
    }
    
    // Setup category buttons when dashboard loads
    if (pageId === 'dashboardPage') {
        renderCategories();
    }
}

function renderCategories() {
    const container = document.querySelector('.categories-grid');
    if (!container) return;
    
    const categories = [
        { 
            id: 'general', 
            name: 'General Knowledge', 
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', 
            desc: 'Test your general knowledge',
            color: '#6366f1'
        },
        { 
            id: 'science', 
            name: 'Science', 
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>', 
            desc: 'Explore scientific concepts',
            color: '#10b981'
        },
        { 
            id: 'history', 
            name: 'History', 
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 7v10"/><path d="M13 3v18"/><path d="M8 3v18"/></svg>', 
            desc: 'Journey through time',
            color: '#f59e0b'
        },
        { 
            id: 'technology', 
            name: 'Technology', 
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>', 
            desc: 'Tech and programming',
            color: '#8b5cf6'
        },
        { 
            id: 'javascript', 
            name: 'JavaScript', 
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>', 
            desc: 'Master JavaScript',
            color: '#fbbf24'
        },
        { 
            id: 'python', 
            name: 'Python', 
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M2 12h20"/></svg>', 
            desc: 'Python programming',
            color: '#3b82f6'
        },
        { 
            id: 'java', 
            name: 'Java', 
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>', 
            desc: 'Java development',
            color: '#ef4444'
        },
        { 
            id: 'cpp', 
            name: 'C++', 
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/><line x1="12" y1="2" x2="12" y2="6"/></svg>', 
            desc: 'C++ programming',
            color: '#06b6d4'
        }
    ];
    
    container.innerHTML = categories.map(cat => `
        <div class="category-card" data-category="${cat.id}">
            <div class="category-icon" style="--icon-color: ${cat.color}">
                ${cat.icon}
            </div>
            <h3>${cat.name}</h3>
            <p>${cat.desc}</p>
            <button class="btn btn-primary select-difficulty" data-category="${cat.id}">Select Difficulty</button>
        </div>
    `).join('');
}

// Authentication
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showToast('Please enter both email and password!', 'error');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email.toLowerCase() === email && u.password === password);

    if (user) {
        appState.currentUser = { email: user.email, name: user.name };
        localStorage.setItem('currentUser', JSON.stringify(appState.currentUser));
        showToast('Login successful! Welcome back!', 'success');
        showPage('dashboardPage');
        updateWelcomeMessage();
        document.getElementById('loginForm').reset();
    } else {
        showToast('Invalid email or password! Please check your credentials.', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim().toLowerCase();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate name
    if (name.length < 2) {
        showToast('Please enter your full name!', 'error');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address!', 'error');
        return;
    }

    // Check for common demo/test emails
    const restrictedEmails = ['demo@', 'test@', 'admin@', 'guest@', 'user@'];
    if (restrictedEmails.some(restricted => email.startsWith(restricted))) {
        showToast('Please use your own personal email address!', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showToast('Passwords do not match!', 'error');
        return;
    }

    if (password.length < 6) {
        showToast('Password must be at least 6 characters!', 'error');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email.toLowerCase() === email)) {
        showToast('This email is already registered! Please sign in instead.', 'error');
        setTimeout(() => {
            showPage('loginPage');
        }, 2000);
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    appState.currentUser = { email, name };
    localStorage.setItem('currentUser', JSON.stringify(appState.currentUser));
    
    showToast('Account created successfully! Welcome!', 'success');
    showPage('dashboardPage');
    updateWelcomeMessage();
    document.getElementById('registerForm').reset();
}

function handleLogout() {
    appState.currentUser = null;
    localStorage.removeItem('currentUser');
    showToast('Logged out successfully!', 'success');
    showPage('loginPage');
}

function updateWelcomeMessage() {
    if (appState.currentUser) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${appState.currentUser.name}!`;
    }
}

// Quiz Functions
function startQuiz(category, difficulty) {
    appState.currentQuiz = category;
    appState.currentDifficulty = difficulty;
    appState.currentQuestionIndex = 0;
    appState.answers = {};
    appState.reviewQuestions = [];
    appState.timeRemaining = 600; // 10 minutes
    appState.startTime = Date.now();

    loadQuestion();
    startTimer();
    showPage('quizPage');
    
    updateQuizHeader(category, difficulty);
    generateQuestionIndicators();
}

function updateQuizHeader(category, difficulty) {
    const categoryNames = {
        general: 'General Knowledge',
        science: 'Science',
        history: 'History',
        technology: 'Technology',
        javascript: 'JavaScript',
        python: 'Python',
        java: 'Java',
        cpp: 'C++'
    };
    const difficultyNames = {
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard'
    };
    const categoryName = categoryNames[category] || category;
    const difficultyName = difficultyNames[difficulty] || difficulty;
    document.getElementById('quizCategory').textContent = `${categoryName} - ${difficultyName}`;
}

function loadQuestion() {
    const questions = quizData[appState.currentQuiz][appState.currentDifficulty];
    const question = questions[appState.currentQuestionIndex];
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('quizQuestionNumber').textContent = 
        `Question ${appState.currentQuestionIndex + 1} of ${questions.length}`;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (appState.answers[appState.currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionDiv);
    });

    updateNavigationButtons();
    updateQuestionIndicators();
}

function selectOption(optionIndex) {
    appState.answers[appState.currentQuestionIndex] = optionIndex;
    
    // Remove review mark if answered
    const reviewIndex = appState.reviewQuestions.indexOf(appState.currentQuestionIndex);
    if (reviewIndex > -1) {
        appState.reviewQuestions.splice(reviewIndex, 1);
    }

    loadQuestion();
}

function navigateQuestion(direction) {
    const questions = quizData[appState.currentQuiz][appState.currentDifficulty];
    const newIndex = appState.currentQuestionIndex + direction;
    
    if (newIndex >= 0 && newIndex < questions.length) {
        appState.currentQuestionIndex = newIndex;
        loadQuestion();
    }
}

function markForReview() {
    if (!appState.reviewQuestions.includes(appState.currentQuestionIndex)) {
        appState.reviewQuestions.push(appState.currentQuestionIndex);
        showToast('Question marked for review', 'success');
    } else {
        appState.reviewQuestions = appState.reviewQuestions.filter(
            q => q !== appState.currentQuestionIndex
        );
        showToast('Review mark removed', 'success');
    }
    updateQuestionIndicators();
}

function updateNavigationButtons() {
    const questions = quizData[appState.currentQuiz][appState.currentDifficulty];
    document.getElementById('prevQuestion').disabled = appState.currentQuestionIndex === 0;
    document.getElementById('nextQuestion').disabled = 
        appState.currentQuestionIndex === questions.length - 1;
}

function generateQuestionIndicators() {
    const questions = quizData[appState.currentQuiz][appState.currentDifficulty];
    const container = document.getElementById('questionIndicators');
    container.innerHTML = '';

    questions.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        indicator.textContent = index + 1;
        indicator.addEventListener('click', () => {
            appState.currentQuestionIndex = index;
            loadQuestion();
        });
        container.appendChild(indicator);
    });
}

function updateQuestionIndicators() {
    const questions = quizData[appState.currentQuiz][appState.currentDifficulty];
    const indicators = document.querySelectorAll('.indicator');
    
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('current', 'answered', 'review');
        
        if (index === appState.currentQuestionIndex) {
            indicator.classList.add('current');
        }
        
        if (appState.answers[index] !== undefined) {
            indicator.classList.add('answered');
        }
        
        if (appState.reviewQuestions.includes(index)) {
            indicator.classList.add('review');
        }
    });
}

// Timer Functions
function startTimer() {
    if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
    }

    updateTimerDisplay();
    
    appState.timerInterval = setInterval(() => {
        appState.timeRemaining--;
        updateTimerDisplay();

        if (appState.timeRemaining <= 0) {
            clearInterval(appState.timerInterval);
            showToast('Time is up!', 'warning');
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(appState.timeRemaining / 60);
    const seconds = appState.timeRemaining % 60;
    const timerValue = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById('timerValue').textContent = timerValue;
    
    const timerElement = document.querySelector('.timer');
    timerElement.classList.remove('warning', 'danger');
    
    if (appState.timeRemaining <= 60) {
        timerElement.classList.add('danger');
    } else if (appState.timeRemaining <= 180) {
        timerElement.classList.add('warning');
    }
}

function stopTimer() {
    if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
        appState.timerInterval = null;
    }
}

// Quiz Submission
function confirmSubmitQuiz() {
    const questions = quizData[appState.currentQuiz][appState.currentDifficulty];
    const unanswered = questions.length - Object.keys(appState.answers).length;
    const reviewCount = appState.reviewQuestions.length;
    
    let message = 'Are you sure you want to submit the quiz?';
    if (unanswered > 0 || reviewCount > 0) {
        message += `\n\n- ${unanswered} unanswered question(s)`;
        if (reviewCount > 0) {
            message += `\n- ${reviewCount} question(s) marked for review`;
        }
    }
    
    if (confirm(message)) {
        submitQuiz();
    }
}

function submitQuiz() {
    stopTimer();
    
    const questions = quizData[appState.currentQuiz][appState.currentDifficulty];
    let correct = 0;
    let incorrect = 0;
    
    questions.forEach((question, index) => {
        if (appState.answers[index] === question.correct) {
            correct++;
        } else if (appState.answers[index] !== undefined) {
            incorrect++;
        }
    });
    
    const total = questions.length;
    const score = Math.round((correct / total) * 100);
    const timeTaken = Math.floor((Date.now() - appState.startTime) / 1000);
    
    // Save score history
    saveScoreHistory(appState.currentQuiz, appState.currentDifficulty, score, correct, incorrect, total, timeTaken);
    
    // Display results
    displayResults(score, correct, incorrect, total, timeTaken);
    showPage('resultsPage');
}

function displayResults(score, correct, incorrect, total, timeTaken) {
    document.getElementById('scorePercentage').textContent = `${score}%`;
    document.getElementById('totalQuestions').textContent = total;
    document.getElementById('correctAnswers').textContent = correct;
    document.getElementById('incorrectAnswers').textContent = incorrect;
    
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Update score circle
    const circle = document.getElementById('scoreCircle');
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (score / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    // Results message
    let message = '';
    if (score >= 90) {
        message = 'Outstanding! You\'re a quiz master!';
    } else if (score >= 70) {
        message = 'Great job! Well done!';
    } else if (score >= 50) {
        message = 'Good effort! Keep practicing!';
    } else {
        message = 'Keep learning! You can do better!';
    }
    document.getElementById('resultsMessage').textContent = message;
}

function saveScoreHistory(category, difficulty, score, correct, incorrect, total, timeTaken) {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    const categoryNames = {
        general: 'General Knowledge',
        science: 'Science',
        history: 'History',
        technology: 'Technology',
        javascript: 'JavaScript',
        python: 'Python',
        java: 'Java',
        cpp: 'C++'
    };
    const difficultyNames = {
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard'
    };
    
    history.unshift({
        category: categoryNames[category] || category,
        difficulty: difficultyNames[difficulty] || difficulty,
        score,
        correct,
        incorrect,
        total,
        timeTaken,
        date: new Date().toISOString()
    });
    
    // Keep only last 50 scores
    if (history.length > 50) {
        history.splice(50);
    }
    
    localStorage.setItem('quizHistory', JSON.stringify(history));
}

// Review Functions
function showReview() {
    const reviewSection = document.getElementById('reviewSection');
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    
    const questions = quizData[appState.currentQuiz][appState.currentDifficulty];
    
    questions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const userAnswer = appState.answers[index];
        const isCorrect = userAnswer === question.correct;
        
        reviewItem.innerHTML = `
            <h4>Question ${index + 1}: ${question.question}</h4>
            <div class="review-options">
                ${question.options.map((option, optIndex) => {
                    let classes = 'review-option';
                    if (optIndex === userAnswer) {
                        classes += ' user-answer';
                    }
                    if (optIndex === question.correct) {
                        classes += ' correct-answer';
                    } else if (optIndex === userAnswer && !isCorrect) {
                        classes += ' incorrect-answer';
                    }
                    return `<div class="${classes}">${option} ${optIndex === question.correct ? '✓' : ''}</div>`;
                }).join('')}
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
    
    reviewSection.style.display = 'block';
    reviewSection.scrollIntoView({ behavior: 'smooth' });
}

// History Functions
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    const container = document.getElementById('historyContainer');
    
    if (history.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No quiz history yet. Start taking quizzes to see your scores!</p>';
        return;
    }
    
    container.innerHTML = '';
    
    history.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const date = new Date(item.date);
        const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const minutes = Math.floor(item.timeTaken / 60);
        const seconds = item.timeTaken % 60;
        const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        historyItem.innerHTML = `
            <div class="history-info">
                <h3>${item.category}${item.difficulty ? ' - ' + item.difficulty : ''}</h3>
                <p>${dateStr} • ${item.correct}/${item.total} correct • ${timeStr}</p>
            </div>
            <div class="history-score">${item.score}%</div>
        `;
        
        container.appendChild(historyItem);
    });
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Setup FAQ toggles after initial load
    setTimeout(() => {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.faq-question')) {
                const faqItem = e.target.closest('.faq-item');
                const isActive = faqItem.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            }
        });
    }, 100);
});
