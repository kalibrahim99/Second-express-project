# My-first-express-project
# My-First-Express-Project

A simple backend service built with **Express** and **TypeScript**.  
It serves a collection of books defined in `src/data.ts` (shaped by the interfaces in `src/types.ts`) and runs on port **3000** via `src/main.ts`.

---

## 🚀 Requirements

- **Node.js** ≥ 14  
- **npm** or **yarn**  
- **TypeScript** (installed as a dev dependency)

---

## 🛠️ Installation & Build

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd My-first-express-project

2. Install dependencies:

npm install
# or
yarn install


3. Compile TypeScript to JavaScript (output in dist/):

npx tsc




---

▶️ Running the Server

After building, start the server with Node.js:

node dist/main.js

You should see:

the server is open on port : 3000


---

📂 Project Structure

My-first-express-project/
├─ src/
│  ├─ types.ts       # Interface definitions (IBook, etc.)
│  ├─ data.ts        # Array of book objects (IBook[])
│  └─ main.ts        # Express app entrypoint
├─ tsconfig.json     # TypeScript configuration
├─ package.json      # Dependencies & scripts
└─ dist/             # Compiled JavaScript output


---

🔌 API Endpoints

1. Get all books or filter by genre

GET /books
GET /books?genre=<genre>

Without genre → returns all books.

With genre (e.g. Science, Fiction, Non-Fiction) → returns only books matching that genre.


Example:

curl "http://localhost:3000/books?genre=Science"

2. Get books by author name

GET /authors/:authorName/books

Path parameter authorName (URL-encoded as needed) → returns a list of books by that author.


Example:

curl "http://localhost:3000/authors/George%20Orwell/books"

3. Get a single book by ID

GET /books/:id

Path parameter id → returns the book with that ID or a 404 if not found.


Example:

curl "http://localhost:3000/books/3"


---

⚙️ Customization & Development

Data: Edit the books array in src/data.ts.

Types: Update or add interfaces in src/types.ts.

Routes: Modify or add app.get(...), app.post(...), etc. in src/main.ts.



---

🤝 Contributing

1. Open an issue to discuss your idea or bug.


2. Create a branch:

git checkout -b feature/your-feature-name


3. Make your changes and open a Pull Request with a clear description.




---

📝 License

Released under the MIT License.

