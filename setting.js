// Sidebar Logic (Mobile)
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

// Settings Save Logic (Fake Alert)
const saveBtn = document.querySelector('.btn-save');

saveBtn.addEventListener('click', () => {
    // Button text change animation
    saveBtn.innerText = "Saving...";
    saveBtn.style.opacity = "0.7";
    
    setTimeout(() => {
        alert("Settings Saved Successfully!");
        saveBtn.innerText = "Save Changes";
        saveBtn.style.opacity = "1";
    }, 1000);
});