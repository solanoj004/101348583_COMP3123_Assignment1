# COMP3123 Assignment 1

## How to utilize the API requests

#### Creating a new user - Send a POST request
#### http://localhost:3000/api/v1/user/signup
{
    "username": "johndoe",
    "email": "johndoe@example.com",
    "password": "password123"
}

#### Logging in with user - Send a POST request
#### http://localhost:3000/api/v1/user/login
{
    "email": "johndoe@example.com",
    "password": "password123"
}

#### Adding in a new employee - Send a POST request
#### http://localhost:3000/api/v1/emp/employees
{
    "first_name": "Alice",
    "last_name": "Johnson",
    "email": "alice.johnson@example.com",
    "position": "Designer",
    "salary": 85000,
    "date_of_joining": "2023-08-10T00:00:00.000Z",
    "department": "Design"
}

#### Get all employees - Send a GET request
#### http://localhost:3000/api/v1/emp/employees

#### Get an employee by ID - Send a Get request
#### http://localhost:3000/api/v1/emp/employees/{id}

#### Update an employee by ID - Send a PUT request
#### http://localhost:3000/api/v1/emp/employees/{id}
{
    "position":"Senior Designer",
    "salary": 95000
}

#### Delete an employee by ID - Send a DELETE request
#### Query parameters
#### http://localhost:3000/api/v1/emp/employees?eid={id}
