# Ledger-Helper

A client-management dashboard for accountants and tax consultants. Add clients, see them in one list, and keep their contact details and client type in one place.

## Features
- **Dashboard** with a sidebar to move between sections
- **Clients list** that loads every client from the API
- **Add client** form for name, email, phone number, address and client type
- **REST API** for creating, reading, updating and deleting clients

## Tech stack
| Part | Stack |
|---|---|
| Frontend (`/Frontend`) | Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS |
| Backend (`/Backend`) | Node.js, Express, MongoDB, Mongoose |

## API
Base path: `/api/taxfiling`

| Method | Route | Action |
|---|---|---|
| GET | `/` | List all clients |
| GET | `/:id` | Get one client |
| POST | `/` | Create a client |
| PATCH | `/:id` | Update a client |
| DELETE | `/:id` | Delete a client |

## Run locally
```bash
# Backend
cd Backend
npm install
# create .env with:
#   MONGO_URI=<your MongoDB connection string>
#   PORT=4000
npm run dev

# Frontend (new terminal)
cd Frontend
npm install
npm run dev   # http://localhost:3000
```

## Author
**Udit Yadav** · [GitHub](https://github.com/udit065) · [LinkedIn](https://www.linkedin.com/in/udit-yadav065)
