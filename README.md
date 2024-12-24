# Maid Hiring Website :
https://drive.google.com/drive/u/0/search?q=sharedwith:public%20parent:1dJXAdYWAebt0Nk0-bFbxCgZLbB_KUxVP

## Project Overview - 
This project is a web application designed to help users find and hire maids for household work. The platform allows maids to register by filling out a detailed form, and users can browse profiles of maids to find the right fit for their needs.

## Key Features -
*Maid Registration:
Maids can sign up by providing personal details, work experience, services offered, location, and contact information.
*User-friendly UI:
The homepage showcases maid profiles as attractive profile cards.
*Database Management:
Data for users and maids is stored and managed using MongoDB.
*Real-Time Data Fetching:
The backend fetches and displays maid profiles dynamically.
*Location-based Search (Future Enhancement):
Users can filter maids based on their location for better accessibility.

## Technologies Used
*Frontend-
HTML: For structuring the web pages.
CSS: For styling and creating a visually appealing UI.
JavaScript: For interactive features and API calls.
*Backend-
Node.js: For building the server-side logic.
Express.js: For creating APIs and routing.
*Database-
MongoDB: For storing maid and user details.
*Middleware-
Body-parser: For parsing form data.
CORS: To enable cross-origin requests.

## Setup Instructions
1. Clone the Repository

**bash**
git clone <repository-url>  

2. Navigate to the Project Directory

**bash**
cd maid-hiring-website  

3. Install Dependencies

**bash**
npm install  

4. Start MongoDB
Ensure MongoDB is installed and running on localhost:27017. Use the following command:

**bash**
mongod  

5. Run the Server
Start the backend server:

**bash**
node server.js  

6. Access the Website
Open your browser and go to:

**arduino**
http://localhost:3000  

## API ENDPOINTS
(Endpoint - /submit-form), (Method - POST),(Description- Saves maid registration data to the database.)
(Endpoint- /get-maids), (Method- GET), (Description- Fetches all maid profiles from the databse.)

## Future Enhancements
1. Add a user login and registration system.
2. Enable location-based filtering for maid profiles.
3. Include ratings and reviews for maids.
4. Implement a booking system.

## Contributors
Sai Upadhyay

## License
This project is licensed under the MIT License.

## Acknowledgments
Special thanks to all resources and tutorials that guided the development of this project.
