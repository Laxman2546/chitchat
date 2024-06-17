to check live website: https://chitchat.c1.is/
Chit Chat 
Overview
Chit Chat  is a simple, real-time chat application built using PHP, JavaScript, HTML, and CSS. It allows users to send and receive messages instantly in a chat room, making it ideal for quick and easy communication. This readme will guide you through the setup, usage, and customization of the application.

Features
Real-time messaging
User-friendly interface
Automatic scrolling to the latest message
Active status indication
Easy integration and deployment
Prerequisites
Web server with PHP support (e.g., Apache, Nginx)
MySQL or any compatible database
Basic knowledge of HTML, CSS, JavaScript, and PHP
Installation
Clone the Repository: Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/Laxman2546/chitchat.git
Set Up Database: Create a new database and import the chitchat.sql file to set up the required tables. You can do this via phpMyAdmin or using the MySQL command line:

sql
Copy code
CREATE DATABASE chitchat;
USE chitchat;
SOURCE /path/to/chitchat.sql;
Configure Database Connection: Update the database connection details in the php/config.php file with your database credentials:

php
Copy code
<?php
$hostname = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "chitchat";

$conn = new mysqli($hostname, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
Start the Server: Deploy the application on your web server. If using a local server like XAMPP, place the project folder in the htdocs directory and start Apache and MySQL.

Access the Application: Open your web browser and navigate to the application's URL (e.g., http://localhost/chit-chat-php).

Usage
Login/Register: Users need to register an account or log in with existing credentials to access the chat room.
Send Messages: Type a message in the input field and click the send button or press Enter to send it.
Receive Messages: Messages from other users will appear in the chat box in real-time.
Scroll Behavior: The chat box will automatically scroll to the latest message unless the user is actively scrolling up to view previous messages.
File Structure
index.html: Main entry point for the application.
css/: Contains the styling files.
style.css: Main stylesheet.
js/: Contains the JavaScript files.
main.js: Main JavaScript file for handling front-end interactions.
php/: Contains the PHP files.
config.php: Database connection configuration.
insert-chat.php: Handles message insertion into the database.
get-chat.php: Fetches messages from the database.
chitchat.sql: SQL file to set up the database schema.
Customization
You can customize the application by modifying the HTML, CSS, and JavaScript files according to your requirements. Some common customizations include:

Styling: Update style.css to change the look and feel of the chat application.
Functionality: Modify main.js to add new features or alter existing ones.
Backend Logic: Update PHP files to change how messages are processed and stored.
Troubleshooting
Database Connection Issues: Ensure that the database credentials in config.php are correct and that your database server is running.
JavaScript Errors: Check the browser console for any JavaScript errors and debug accordingly.
PHP Errors: Enable error reporting in PHP to see detailed error messages:
php
Copy code
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request with your improvements.

Contact
For any questions or support, please contact laxmannani960@gmail.com
Thank you for using Chit Chat PHP! We hope it serves your real-time communication needs effectively.
credits: coding nepal 
