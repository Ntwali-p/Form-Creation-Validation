async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        
        // Clear loading message
        dataContainer.innerHTML = '';
        
        // Create list element
        const userList = document.createElement('ul');
        
        // Populate list with user names
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append list to container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);