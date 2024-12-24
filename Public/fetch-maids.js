async function loadMaidProfiles() {
    try {
        const response = await fetch('http://localhost:3000/get-maids'); // Fetch data from the API
        const maids = await response.json();
        console.log(maids[0])
        const container = document.getElementById('maid-cards');
        // container.innerHTML = ''; // Clear any existing content

        maids.forEach(maid => {
            // Create a card for each maid
            const card = document.createElement('div');
            card.classList.add('profilex-card');

            card.innerHTML = `
                <h3>${maid.name}</h3>
                <p><strong>Email:</strong> ${maid.email}</p>
                <p><strong>Experience:</strong> ${maid.experience} years</p>
                <p><strong>Services:</strong> ${maid.services}</p>
                <p><strong>Location:</strong> ${maid.location}</p>
                <p><strong>Contact:</strong> ${maid.contact}</p>
            `;

            container.appendChild(card); // Append the card to the container
        });
    } catch (error) {
        console.error('Error fetching maid profiles:', error);
    }
}

// Call the function to load profiles when the page loads
loadMaidProfiles();
