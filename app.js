// Import environment variables (only works in a local environment like Node.js)
const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN_HERE'; // fallback for user-provided token

// Helper function to make API requests
async function githubApiRequest(endpoint, method = 'GET', body = null) {
    const headers = {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
    };
    
    if (body) {
        headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(`https://api.github.com${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
    });
    
    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message || 'Something went wrong');
    }
    
    return await response.json();
}

// Upload a file to the repository
async function uploadFile(filePath, fileContent) {
    const fileBase64 = btoa(fileContent); // Convert file content to Base64
    const commitMessage = `Upload file ${filePath}`;
    
    const body = {
        message: commitMessage,
        content: fileBase64
    };
    
    return await githubApiRequest(`/repos/mandarwagh9/Cloud-Storage/contents/${filePath}`, 'PUT', body);
}

// Handle file upload
document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const path = document.getElementById('path').value || fileInput.files[0].name;
    const uploadStatus = document.getElementById('uploadStatus');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const statusMessage = document.getElementById('statusMessage');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = async function (event) {
            try {
                // Show loading animation
                uploadStatus.classList.remove('hidden');
                loadingSpinner.classList.remove('hidden');
                statusMessage.classList.add('hidden');

                const result = await uploadFile(path, event.target.result);

                // Hide loading and show success
                loadingSpinner.classList.add('hidden');
                statusMessage.classList.remove('hidden');
                statusMessage.textContent = `File uploaded successfully: ${result.content.path}`;
                statusMessage.classList.add('success');
                statusMessage.classList.remove('failure');

            } catch (error) {
                // Hide loading and show failure
                loadingSpinner.classList.add('hidden');
                statusMessage.classList.remove('hidden');
                statusMessage.textContent = `Upload failed: ${error.message}`;
                statusMessage.classList.add('failure');
                statusMessage.classList.remove('success');
            }
        };

        reader.readAsBinaryString(file);
    }
});
