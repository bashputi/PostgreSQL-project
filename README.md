# Library Management System API
It is a backend API for a Library Management System
 that allows library staff and members to manage
  books, memberships, and borrowing activities. 
  The API will be structured around CRUD operations 
  for books, members, and borrow records, with 
  additional endpoints for borrowing and returning 
  books. You will use UUID for unique identification 
  in all tables.


[Project Live URL](https://postgressql-server-site-project.vercel.app/)

## Technology Stack & Packages
- **Backend**: Node.js, Express, Typescript
- **Database**: PostreSQL
- **Other Packages**: ( `Prisma` )

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/bashputi/PostgreSQL-project.git
cd PostgreSQL-project
```
```bash
npm install
```

### Set up environment variables:
- Create a .env file in the root directory.
- Add necessary environment variables as follows:
```bash
DATABASE_URL=your-database-url
```
### Run the applications:
```bash
npm run start
```
The server should be running at http:localhost:5000

## Key Features & Functionality
- Book: Create, get, update, and delete books.
- Member: Create, get, update, and delete members.
- Borrow: borrow a book, and overdue tracking.