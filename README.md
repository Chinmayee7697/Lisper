# Lisper Project
Lisper is a web application that anonymously shares random secrets sourced from an API. This project is built using EJS for templating, JavaScript for server-side logic, Node.js for the backend, and CSS for styling. The application leverages a REST API to retrieve and display secrets in an anonymous manner.

Website is live on [https://lisper.onrender.com/](https://lisper.onrender.com/).

## Features
- **Random Secrets**: Fetches random secrets from a third-party API.
- **Anonymous Sharing**: Users can anonymously share their secrets without revealing their identity.
- **Responsive Design**: The application is designed to be responsive and accessible on various devices.

## Technologies Used
- **EJS**: Templating engine for generating HTML markup with JavaScript.
- **JavaScript**: Used for server-side logic and handling client-side interactions.
- **Node.js**: JavaScript runtime for server-side development.
- **CSS**: Styling for an aesthetically pleasing and user-friendly interface.
- **REST API**: Communicates with a [third-party API](https://secrets-api.appbrewery.com/) to retrieve random secrets.

## Deployment
The application is deployed on Render. You can access it at [https://lisper.onrender.com/](https://lisper.onrender.com/).

## Acknowledgments
Thanks to [API Provider](https://secrets-api.appbrewery.com/) for supplying the random secrets.

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Chinmayee7697/Lisper.git
    ```

2. **Install Dependencies:**

    ```bash
    cd Lisper
    npm install
    ```

3. **Start the Server:**

    ```bash
    npm start
    ```

    or you can also run

   ```bash
   nodemon app.js
   ```

    The application will be accessible at [http://localhost:3000](http://localhost:3000) by default.

5. **Access the Application:**

    Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to interact with the locally running instance of Lisper.

Now you have the project up and running locally! Feel free to explore.

