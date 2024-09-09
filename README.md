# Admin Panel

This is an Admin Panel built using Node.js, Express, and MongoDB. It allows administrators to manage projects and employees, while providing restricted access to managers. The managers can only assign/unassign employees to/from projects that have been assigned to them by the admin, among other limited permissions.

# Features

# Admin
Manage Projects: Full CRUD operations on projects.
Manage Employees: Full CRUD operations on employees.
Assign/Unassign Projects to Managers: Admins can assign multiple projects to each manager.
Full Control: Admins have full control over all resources.

# Manager
View Projects: Managers can view all projects but can only assign/unassign employees to projects assigned to them by the admin.
Restricted Access: Managers cannot update or delete projects.
Manage Employees in Projects: Managers can assign or unassign employees to the projects they manage.
View Employee Info: Managers can view employee details but cannot modify them.
Cannot View Admin Info: Managers do not have access to admin information.

# Tech Stack
Backend: Node.js, Express
Database: MongoDB
Template Engine: EJS
Session Handling: express-session
Form Parsing: body-parser
