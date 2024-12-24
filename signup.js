document.addEventListener('DOMContentLoaded', function() {
    // Check if user-signup form exists on the page
    const userForm = document.getElementById('userSignupForm');
    if (userForm) {
        userForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const location = document.getElementById('location').value;

            fetch('/signup-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, location }),
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => console.error('Error:', error));
        });
    }

    // Check if maid-signup form exists on the page
    const maidForm = document.getElementById('maidSignupForm');
    if (maidForm) {
        maidForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('maidName').value;
            const experience = document.getElementById('experience').value;
            const workType = document.getElementById('workType').value;
            const contact = document.getElementById('contact').value;
            const location = document.getElementById('maidLocation').value;

            fetch('/signup-maid', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, experience, workType, contact, location }),
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => console.error('Error:', error));
        });
    }
});
