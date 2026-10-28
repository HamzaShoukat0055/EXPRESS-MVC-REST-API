# Express.js Modular MVC REST API (Week 6 Assignment)

- **Student Name:** Hamza Shoukat
- **Roll Number / ID:** SU92-BCSFM-F26-027
- **Subject:** Advanced Computer Programming

## Folder Structure (Pure Modular MVC — No Custom Middleware)
```text
express-mvc-rest-api/
├── data/
│   └── database.json              # Local JSON data storage
├── src/
│   ├── config/
│   │   └── db.js                  # Database read/write helper
│   ├── models/
│   │   ├── user.model.js          # User Model (/api/auth)
│   │   ├── category.model.js      # Category Model (/api/categories)
│   │   └── course.model.js        # Course Model (/api/courses)
│   ├── controllers/
│   │   ├── auth.controller.js     # Auth Controller (Register & Login)
│   │   ├── category.controller.js # Category CRUD Controller
│   │   └── course.controller.js   # Course CRUD Controller
│   └── routes/
│       ├── auth.routes.js         # /api/auth routes
│       ├── category.routes.js     # /api/categories routes
│       └── course.routes.js       # /api/courses routes
├── server.js                      # Main server entry point
├── test.http                      # VS Code REST Client / Postman test file
└── test_api.js                    # Automated test runner
```

## How to Run
1. Start the server:
   ```bash
   node server.js
   ```
2. Open `test.http` in VS Code and click **Send Request** above any case, or run:
   ```bash
   node test_api.js
   ```
