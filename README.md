# GitHub-as-CloudStorage

This project leverages GitHub as a cloud storage solution, allowing users to upload files directly to a GitHub repository via a sleek web interface. By using GitHub’s API, this project makes it easy to manage files within a repository without ever touching a command line.

## Features
- **GitHub as Cloud Storage**: Upload files directly to a GitHub repository as if it were cloud storage.
- **Custom File Paths**: Option to specify a custom path in the repository for uploaded files.
- **Loading and Status Feedback**: Displays a loading spinner during the upload process and shows success or failure messages after the upload is complete.
- **No Account Required**: No login required, just a GitHub token to authenticate.

## Prerequisites
- A GitHub account.
- A GitHub repository to store your files.
- A GitHub personal access token with `repo` permissions.

## Setup Instructions

### 1. Clone the Repository
Start by cloning this repository to your local machine:
```bash
git clone https://github.com/yourusername/github-as-cloudstorage.git
cd github-as-cloudstorage
```

### 2. Generate a GitHub Token
To interact with the GitHub API, you need a personal access token:
1. Go to [GitHub Personal Access Tokens](https://github.com/settings/tokens).
2. Click **Generate new token**.
3. Name your token (e.g., "CloudStorage Token").
4. Select the `repo` scope to enable uploading and managing files in your repository.
5. Generate and copy the token.

### 3. Open the Project
1. Open `index.html` in your preferred web browser.
2. You will be prompted to enter your GitHub token for authentication. **The token is not stored**, it is used only during the session.
3. Once authenticated, you can proceed to upload files.

### 4. Upload Files to GitHub
- Select a file from your local system.
- Optionally, specify a file path in your GitHub repository where the file will be stored. If no path is provided, the file will be uploaded with its original name.
- Click **Upload** to initiate the process.
- A spinner will appear while the file is being uploaded. Once done, a success or failure message will be displayed.

## Project Structure
Here’s how the project is organized:
```
/github-as-cloudstorage
├── index.html    # Main webpage where file uploads happen
├── app.js        # Handles the file upload logic and GitHub API interaction
├── styles.css    # Styling for the user interface
└── README.md     # This file
```

## How It Works
1. **GitHub Token Authentication**: The user enters their GitHub personal access token, which is required to upload files via the GitHub API.
2. **File Upload**: The selected file is converted to Base64 format and uploaded to the specified repository.
3. **Real-Time Feedback**: A loading spinner is shown during the upload process, and a success or failure message is displayed when the upload completes.
4. **No Data Storage**: No sensitive information (like the GitHub token) is stored within the project code.

## Using GitHub as Cloud Storage
- This project treats GitHub as a cloud storage service by using the GitHub repository as a location for storing uploaded files.
- **Why GitHub**? GitHub provides a free platform with generous storage for public repositories, making it a suitable choice for lightweight cloud storage needs.

## Security Considerations
- **Token Security**: Your GitHub token is never stored. It is only used during the session and must be manually inputted each time the project is run.
- **Repository Permissions**: Ensure the repository you upload to has the correct permissions to accept files (i.e., you must have write access).

## Limitations
- **File Size**: GitHub imposes limits on file sizes depending on your account and repository type. Ensure your files comply with these restrictions.
- **Rate Limits**: GitHub’s API has rate limits, especially for free accounts, so be mindful of excessive requests.

## License
This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.
