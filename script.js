// Update time display
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}`;
}

// Update time every minute
updateTime();
setInterval(updateTime, 60000);

// Password toggle functionality
const passwordToggle = document.querySelector('.password-toggle');
const passwordInput = document.getElementById('password');

if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            passwordToggle.textContent = '👁️';
        }
    });
}

// Phone number input formatting
const phoneInput = document.getElementById('phoneNumber');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        // Only allow numbers
        this.value = this.value.replace(/[^0-9]/g, '');
    });
}

// Modal is always visible and cannot be closed
// Prevent any interaction with background content
document.getElementById('versionModal').addEventListener('click', function(e) {
    // Prevent closing by clicking outside - modal is fixed
    e.stopPropagation();
});

// Prevent modal content clicks from bubbling
document.querySelector('.modal-content').addEventListener('click', function(e) {
    e.stopPropagation();
});

// Attempt login - modal is already showing
function attemptLogin() {
    // Modal is always visible, no action needed
    return false;
}

// Prevent all link clicks
document.querySelectorAll('a, .login-btn').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
});

// Prevent navigation clicks
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
});

// Detect if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Add mobile-specific classes
if (isMobileDevice()) {
    document.body.classList.add('mobile-device');
}

// Handle orientation change
window.addEventListener('orientationchange', function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 100);
});

// Prevent zoom on double tap
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
