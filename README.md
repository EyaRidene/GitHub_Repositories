# GitHub Profile and Repository Viewer

This project is a React application that allows users to view GitHub profiles and repositories. Users can search for GitHub users, view their profiles, and explore their repositories with various filters and sorting options.
The project is well-documented to facilitate understanding and development.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [GitHub API](#GitHubAPI)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#components)
- [Future Improvements](#FutureImprovements)

## Features

- **Profile View:** Displays user profile information, including avatar, name, bio, location, public repositories, followers, and links to email and LinkedIn.
- **Repository List:** Lists repositories with features like filtering by language and type, sorting by stars or name, and pagination.
- **Search Functionality:** Allows users to search for GitHub users and fetch their profile and repository data.
- **Interactive UI:** Users can star/unstar repositories and view the update time of repositories.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EyaRidene/GitHub_Repositories

   ```

2. **Navigate to the project directory:**

   ```bash
   cd GitHub_Repositories

   ```

3. **Install dependencies:**

   ```bash
   npm install

   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

## GitHub API

The application uses the official GitHub API to fetch repository data for the specified user.

## Usage

- **Search for a GitHub user:** Enter a GitHub username in the search bar and click "Search".
- **View Profile:** The user's profile information will be displayed, including their avatar, bio, location, and links.
- **Explore Repositories:** The list of repositories will be shown with filtering and sorting options. Use the filters to narrow down the list and the pagination controls to navigate through pages.

## Components

- **Header:** Contains the search bar and navigation links.
- **SearchBar:** Provides an input field for searching GitHub users.
- **Profile:** Displays user profile information.
- **RepositoryList:** Manages the display of repositories, including filters and sorting.
- **RepositoryItem:** Shows details of a single repository with an option to star/unstar.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
    git checkout -b feature/your-feature
   ```

3. Make your changes and commit:

   ```bash
   git commit -am 'Add new feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/your-feature
   ```

5. Create a new Pull Request.

## Future Improvements:

- **Autocomplete and Suggestions:** Implement an autocomplete feature to suggest GitHub usernames as users type in the search bar. This can improve user experience by providing instant feedback and reducing search errors.
- **DSearch History:** Store and display recent searches to allow users to quickly access previous searches or suggest related usernames.
- **Responsive Design:** Ensure the application is fully responsive across all devices and screen sizes. This includes improving mobile views and accessibility
