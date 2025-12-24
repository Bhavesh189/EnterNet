// Sidebar Logic
let bars = document.getElementById('bars');
let cross = document.getElementById('cross');
let mnav = document.querySelector('.mnav');

bars.addEventListener('click', () => {
    mnav.classList.add('active');
    bars.style.display = 'none';
    cross.style.display = 'block';
});

cross.addEventListener('click', () => {
    mnav.classList.remove('active');
    cross.style.display = 'none';
    bars.style.display = 'block';
});

// Remove Item Logic
const removeBtns = document.querySelectorAll('.btn-remove');
const historyList = document.querySelector('.history-list');
const emptyMsg = document.querySelector('.empty-msg');
const clearBtn = document.querySelector('.btn-clear');

// Single Item Delete
removeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Is button ka parent (.history-item) dhundo aur hata do
        this.parentElement.style.opacity = '0';
        setTimeout(() => {
            this.parentElement.remove();
            checkEmpty();
        }, 300);
    });
});

// Clear All Logic
clearBtn.addEventListener('click', () => {
    if(confirm("Are you sure you want to clear your watch history?")) {
        historyList.innerHTML = '';
        checkEmpty();
    }
});

// Check if list is empty
function checkEmpty() {
    if(historyList.children.length === 0) {
        emptyMsg.style.display = 'block';
        clearBtn.style.display = 'none';
    }
}