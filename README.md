# express-project-10-status-code-demo-api

A learning API for observing common HTTP status codes in Express.js. The status endpoints return fixed examples; they do not authenticate users, create persistent records, or perform real data operations.

## Requirements and setup

Use Node.js 18 or later. Install dependencies:

```bash
npm install
```

Run with automatic restarts during development:

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

The API listens at `http://localhost:1198`. Requests are in [`api-test.rest`](./api-test.rest) for the VS Code REST Client.

## Endpoints

| Method | Path | Status | Demonstrates |
| --- | --- | --- | --- |
| `GET` | `/` | 200 | Successful request |
| `GET` | `/status/200` | 200 | Successful response |
| `POST` | `/status/201` | 201 | Created response |
| `GET` | `/status/400` | 400 | Bad request response |
| `GET` | `/status/401` | 401 | Authentication challenge response |
| `GET` | `/status/404` | 404 | Not found response |
| `GET` | `/status/500` | 500 | Internal server error response |

The `401` example includes a `WWW-Authenticate` header. Unknown paths return a JSON `404` response.

### Example: `POST /status/201`

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Created - New resource created successfully"
}
```

Each endpoint deliberately returns its example status. Use the routes to inspect the HTTP response code and JSON body in a REST client.

## Project structure

```text
express-project-10-status-code-demo-api/
├── src/
│   ├── controllers/
│   │   └── statusCode.controller.js
│   └── routes/
│       └── statusCode.route.js
├── .gitignore
├── api-test.rest
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

## Author and links

- GitHub: https://github.com/a2rp
- Portfolio: https://www.ashishranjan.net
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- CodePen: https://codepen.io/ash1198
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: ash.ranjan09@gmail.com
- Support: https://a2rp-donation-page.netlify.app/
- Buy Me a Coffee: https://buymeacoffee.com/ashishranjan
- Patreon: https://patreon.com/ashishranjan