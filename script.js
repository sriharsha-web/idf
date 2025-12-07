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

// Prevent form submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const modal = document.getElementById('versionModal');
        modal.classList.add('show');
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

// Auto-focus prevention to avoid keyboard popup
document.addEventListener('DOMContentLoaded', function() {
    // Prevent auto-focus on inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            // Allow focus but show modal if they try to interact
            setTimeout(() => {
                const modal = document.getElementById('versionModal');
                if (!modal.classList.contains('show')) {
                    // Modal will show when they try to login
                }
            }, 100);
        });
    });
});
