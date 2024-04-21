<%@ page import="java.sql.*" %>
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page language="java" %>
<html>
<head>
    <title>Display Students Information</title>
</head>
<body>
    <h2>Students Information</h2>
    <%
        try {
            // Load the JDBC driver
            Class.forName("com.mysql.jdbc.Driver");
            
            // Establish a connection
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/students_db", "username", "password");
            
            // Execute SQL query
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students_info");
            
            // Display the results
            out.println("<table border='1'>");
            out.println("<tr><th>Student ID</th><th>Name</th><th>Class</th><th>Division</th><th>City</th></tr>");
            while (rs.next()) {
                out.println("<tr>");
                out.println("<td>" + rs.getInt("stud_id") + "</td>");
                out.println("<td>" + rs.getString("stud_name") + "</td>");
                out.println("<td>" + rs.getString("class") + "</td>");
                out.println("<td>" + rs.getString("division") + "</td>");
                out.println("<td>" + rs.getString("city") + "</td>");
                out.println("</tr>");
            }
            out.println("</table>");
            
            // Close the connection
            conn.close();
        } catch (Exception e) {
            out.println("Error: " + e.getMessage());
        }
    %>
</body>
</html>
