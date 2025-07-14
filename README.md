# 🛡️ User Authentication API on EC2

A simple Node.js + Express backend API for user authentication, deployed on **AWS EC2** and connected to **AWS RDS (MySQL)** as the database.

---

## ✨ Features

- ✅ Register new users
- ✅ Get all registered users (for testing)
- 🔒 Passwords securely hashed using **bcrypt**
- 🔑 JWT ready (for future login protection)
- 📦 Clean project structure with routes, controllers, and DB config
- 🚀 Hosted on AWS EC2 and connected to AWS RDS (MySQL)

---

## 📁 Project Structure

<pre><code>```bash
user-auth-api-on-ec2/
├─ config/
│  └─ db.js                # MySQL connection pool
├─ controllers/
│  └─ authController.js    # Register & user list logic
├─ routes/
│  └─ authRoutes.js        # API endpoints
├─ .env                    # ✨ Do NOT commit – see .env.example
├─ .gitignore
├─ package.json
└─ server.js               # Entry point
```</code></pre>

🚀 API Endpoints
| Method | Endpoint           | Description              | Access       |
|--------|--------------------|--------------------------|--------------|
| POST   | `/api/register`    | Register a new user      | Public       |
| GET    | `/api/users`       | Get list of all users    | Public       |
| POST   | `/api/test `       | Test API route is working  | Public       |

🧠 Author

Built by Tirth Patel as a practice project for learning backend development, MySQL, and AWS cloud deployments.

<!-- ### 🆕 Update: July xx , 2025
- Added `middlewares/auth.js` for route protection.
- Added `/api/login` route in `authRoutes.js` and controller logic.
- Updated `.env` to include JWT_SECRET. -->

<!-- ## 🌍 Live Demo (Temporary)

The API is currently live and hosted on an AWS EC2 instance for testing/demo purposes: -->
