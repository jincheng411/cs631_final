cs631_final/
├── .mvn/
│   └── maven-wrapper.properties
├── FE/                            # Frontend application for user interaction
│   ├── public/
│   │   ├── vite.svg 
│   ├── src/
│   │   ├── api/                   # Contains API service scripts (e.g., customerService.js)
│   │   ├── components/            # React or Vue components for UI
│   │   ├── assets/                 # contains react.svg file
│   │   ├── App.css               # CSS/SCSS files
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── eslint.config.js
│   ├── vite.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── mysql/                         # Database initialization and scripts
│   ├── create_table.sql           # Script for creating tables
│   ├── seed.sql                   # Script for seeding initial data
│   ├── validation.sql             # Additional SQL scripts for database integrity checks
│   └── README.md
├── src/                           # Backend Spring Boot application
│   ├── main/
│   │   ├── java/
│   │   │   └── com/njit/cs631/final_project/
│   │   │       ├── config/        # Application configuration (e.g., WebConfig)
│   │   │       ├── controller/    # RESTful API controllers
│   │   │       ├── dto/           # Data Transfer Objects (e.g., SalesDTO)
│   │   │       ├── entity/        # JPA Entities (e.g., Customer, Sales, Vehicle)
│   │   │       ├── repository/    # Repositories for database interaction
│   │   │       ├── service/       # Business logic layer
│   │   │       └── FinalProjectApplication.java # Main application entry point
│   │   └── resources/
│   │       ├── application.properties
├── docker-compose.yml             # Docker Compose file for managing services
├── .gitattributes
├── .gitignore
├── mvnw
├── mvnw.cmd
├── project_structure.md
├── pom.xml                        # Maven build file
└── README.md                      # Main project documentation
