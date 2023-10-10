//JS
const postButton = document.getElementById('post-button');
const postContent = document.getElementById('post-content');
const userLogo = document.getElementById('user-logo');
const userOptions = document.getElementById('user-options');
const fileInput = document.getElementById('file-input');
const timeline = document.getElementById('timeline');

postButton.addEventListener('click', () => {
    const content = postContent.value;
    const file = fileInput.files[0]; // Get the selected file
    if (content.trim() !== '' || file) {
        createPost(content, file);
        postContent.value = '';
        fileInput.value = ''; // Reset the file input
    }
});

function createPost(content, file) {
    const post = document.createElement('div');
    post.className = 'post';
    post.innerText = content;

    if (file) {
        const filePreview = document.createElement('img');
        filePreview.src = URL.createObjectURL(file);
        filePreview.className = 'file-preview';
        post.appendChild(filePreview);
    }

    timeline.appendChild(post);
}

// Keep user options open until the user clicks somewhere on the page
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!userLogo.contains(target) && !userOptions.contains(target)) {
        userOptions.style.display = 'none';
    } else if (userLogo.contains(target)) {
        userOptions.style.display = 'block';
    }
});

// Navigate to another page when selecting an option
userOptions.addEventListener('click', (event) => {
    const selectedOption = event.target.textContent.toLowerCase();
    if (selectedOption === 'profile') {
        window.location.href = 'profile.html'; // Replace with the actual profile page URL
    } else if (selectedOption === 'logout') {
        window.location.href = 'logout.html'; // Replace with the actual logout page URL
    }
});

// Toggle user options display when clicking on the logo
userLogo.addEventListener('click', () => {
    userOptions.style.display = userOptions.style.display === 'block' ? 'none' : 'block';
});