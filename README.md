# express-project-10-status-code-demo-api

A simple Express.js backend project that demonstrates different HTTP status codes with clear examples.

## Project Goal

This project helps in understanding how HTTP status codes work in real APIs.

It focuses on:

- returning proper HTTP status codes
- structuring backend with controllers and routes
- building a clean Express.js API
- testing APIs using REST Client

## Tech Stack

- Node.js
- Express.js
- Nodemon

## Project Structure

```
express-project-10-status-code-demo-api
│
├─ src
│  ├─ controllers
│  │  └─ statusCode.controller.js
│  │
│  └─ routes
│     └─ statusCode.route.js
│
├─ index.js
├─ api-test.rest
├─ .gitignore
├─ package.json
└─ README.md
```

## Installation

Clone the repository

```bash
git clone https://github.com/a2rp/express-project-10-status-code-demo-api.git
cd express-project-10-status-code-demo-api
```

Install dependencies

```bash
npm install
```

## Run the Project

Development mode (with nodemon)

```bash
npm run dev
```

Production mode

```bash
npm start
```

Server runs at:

```
http://localhost:1198
```

## API Endpoints

### Home

```
GET /
```

### Status Code Examples

```
GET /status/200
GET /status/201
GET /status/400
GET /status/401
GET /status/404
GET /status/500
```

## Example Response

```json
{
    "success": true,
    "statusCode": 200,
    "message": "OK - Request completed successfully"
}
```

## Learning Outcome

By building this project, you learn:

- what HTTP status codes mean
- when to use different status codes
- how to structure Express backend
- how to separate routes and controllers
- how to test APIs

## Author

Ashish Ranjan

Follow me

- GitHub: https://github.com/a2rp
- Portfolio: https://www.ashishranjan.net
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
