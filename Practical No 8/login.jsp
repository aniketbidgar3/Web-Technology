<!-- login.jsp -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <form id="loginForm" action="loginAction" method="post">
            <input type="text" name="name" id="name" placeholder="Name">
            <input type="text" name="mobile" id="mobile" placeholder="Mobile Number">
            <input type="email" name="email" id="email" placeholder="Email ID">
            <button type="submit" onclick="validateForm()">Login</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
