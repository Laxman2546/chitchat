<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Chit Chat - README</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      max-width: 900px;
      margin: 2rem auto;
      padding: 0 1rem;
      line-height: 1.6;
      background-color: #f9f9f9;
      color: #222;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 6px;
      font-size: 0.9rem;
      line-height: 1.4;
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
      background-color: #eee;
      padding: 0.15rem 0.3rem;
      border-radius: 3px;
    }
    hr {
      margin: 2rem 0;
      border: 0;
      border-top: 1px solid #ccc;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <h1>Chit Chat</h1>

  <h2>Overview</h2>
  <p><strong>Chit Chat</strong> is a simple, real-time chat application built using PHP, JavaScript, HTML, and CSS. It allows users to send and receive messages instantly in a chat room, making it ideal for quick and easy communication.</p>
  <p>This README will guide you through the setup, usage, and customization of the application.</p>

  <hr />

  <h2>Features</h2>
  <ul>
    <li>Real-time messaging</li>
    <li>User-friendly interface</li>
    <li>Automatic scrolling to the latest message</li>
    <li>Active status indication</li>
    <li>Easy integration and deployment</li>
  </ul>

  <hr />

  <h2>Prerequisites</h2>
  <ul>
    <li>Web server with PHP support (e.g., Apache, Nginx)</li>
    <li>MySQL or any compatible database</li>
    <li>Basic knowledge of HTML, CSS, JavaScript, and PHP</li>
  </ul>

  <hr />

  <h2>Installation</h2>
  <ol>
    <li>
      <strong>Clone the Repository:</strong>
      <pre><code>git clone https://github.com/Laxman2546/chitchat.git</code></pre>
    </li>
    <li>
      <strong>Set Up Database:</strong>
      <p>Create a new database and import the <code>chitchat.sql</code> file to set up the required tables. Use phpMyAdmin or the MySQL command line:</p>
      <pre><code>CREATE DATABASE chitchat;
USE chitchat;
SOURCE /path/to/chitchat.sql;</code></pre>
    </li>
    <li>
      <strong>Configure Database Connection:</strong>
      <p>Update the database connection details in <code>php/config.php</code> with your database credentials:</p>
      <pre><code>&lt;?php
$hostname = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "chitchat";

$conn = new mysqli($hostname, $username, $password, $dbname);
if ($conn-&gt;connect_error) {
    die("Connection failed: " . $conn-&gt;connect_error);
}
?&gt;
</code></pre>
    </li>
    <li>
      <strong>Start the Server:</strong>
      <p>Deploy the application on your web server.<br />
      If using a local server like XAMPP, place the project folder in the <code>htdocs</code> directory and start Apache and MySQL.</p>
    </li>
    <li>
      <strong>Access the Application:</strong>
      <p>Open your browser and navigate to the local URL, e.g., <code>http://localhost/chit-chat-php</code>.</p>
    </li>
  </ol>

  <hr />

  <h2>Usage</h2>
  <ul>
    <li><strong>Login/Register:</strong> Users need to create an account or log in to access the chat room.</li>
    <li><strong>Send Messages:</strong> Type your message and press Enter or click Send to send messages.</li>
    <li><strong>Receive Messages:</strong> Messages from other users appear in real-time.</li>
    <li><strong>Scroll Behavior:</strong> The chat box automatically scrolls to the latest message unless the user scrolls up to view older messages.</li>
  </ul>

  <hr />

  <h2>File Structure</h2>
  <pre><code>index.html            - Main entry point  
css/                  - Contains styling files  
  └─ style.css         - Main stylesheet  
js/                   - Contains JavaScript files  
  └─ main.js           - Frontend logic for chat interactions  
php/                  - Contains PHP backend files  
  ├─ config.php        - Database connection configuration  
  ├─ insert-chat.php   - Handles message insertion  
  └─ get-chat.php      - Fetches messages from the database  
chitchat.sql          - SQL file to set up database schema  
</code></pre>

  <hr />

  <h2>Customization</h2>
  <p>You can customize the application by modifying the HTML, CSS, and JavaScript files according to your needs:</p>
  <ul>
    <li><strong>Styling:</strong> Update <code>css/style.css</code> to change the look and feel.</li>
    <li><strong>Functionality:</strong> Modify <code>js/main.js</code> to add or adjust features.</li>
    <li><strong>Backend Logic:</strong> Update PHP files to change how messages are processed or stored.</li>
  </ul>

  <hr />

  <h2>Troubleshooting</h2>
  <ul>
    <li><strong>Database Connection Issues:</strong> Ensure your credentials in <code>php/config.php</code> are correct and the database server is running.</li>
    <li><strong>JavaScript Errors:</strong> Check the browser console for any errors and debug accordingly.</li>
    <li><strong>PHP Errors:</strong> Enable error reporting by adding these lines at the top of your PHP files during development:<br />
      <pre><code>ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);</code></pre>
    </li>
  </ul>

  <hr />

  <h2>License</h2>
  <p>This project is licensed under the MIT License. See the LICENSE file for deta</p>
