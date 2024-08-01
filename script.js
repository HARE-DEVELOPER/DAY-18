document.addEventListener('DOMContentLoaded', function() {
    const userDataDiv = document.getElementById('userData');
    const fetchButton = document.getElementById('fetchButton');
  
    fetchButton.addEventListener('click', fetchUserData);
  
    function fetchUserData() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          const user = data.results[0];
          userDataDiv.innerHTML = `
            <div class="user">
              <img src="${user.picture.large}" alt="User Picture">
              <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
            </div>
          `;
        })
        .catch(error => {
          userDataDiv.innerHTML = '<p>An error occurred while fetching user data.</p>';
          console.error('Error fetching user data:', error);
        });
    }
  });
  