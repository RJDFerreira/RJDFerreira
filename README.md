# Personal Website Project

This project is a personal website and blog built with [Next.js](https://nextjs.org/), styled with [Tailwind CSS](https://tailwindcss.com/), and containerized with [Docker](https://www.docker.com/).

## 📂 Project Structure

Here is a tree view of the main files and directories to help you understand how the project is organized.

```
RJDFerreira/
├── app/                        # Main application logic (App Router)
│   ├── blog/                   # Blog functionality
│   │   └── [slug]/             # Dynamic route for individual blog posts
│   ├── content.ts              # Homepage text content (editable)
│   ├── globals.css             # Global CSS styles (Tailwind imports)
│   ├── layout.tsx              # Main Root Layout (HTML structure, Fonts, Providers)
│   └── page.tsx                # Home Page content
├── components/                 # Reusable UI components
│   ├── Avatar.tsx              # Avatar component with image
│   ├── Footer.tsx              # Website footer
│   └── Navbar.tsx              # Navigation bar
├── content/                    # Markdown content for the blog
│   └── blog/                   # Blog post files (.mdx)
├── lib/                        # Utility functions
│   └── posts.ts                # Logic to read and process markdown files
├── public/                     # Static assets (images, icons)
│   └── avatar.png              # Your profile picture
├── Dockerfile                  # Docker image build instructions
├── docker-compose.yml          # Docker Compose configuration to run the app
├── next.config.js              # Next.js configuration settings
└── tailwind.config.ts          # Tailwind CSS configuration
```

### Key Directories Explained
- **`app/`**: This is where the routing happens. In Next.js App Router, folders define routes. `app/page.tsx` is the home route `/`, and `app/blog/page.tsx` is `/blog`.
- **`app/content.ts`**: Contains all the text for the homepage. Edit this file to change the "About" text and other bio information without touching the code.
- **`components/`**: Small, reusable pieces of code like the Navbar or Footer. Keeps the pages clean.
- **`content/`**: Your actual blog posts live here as Markdown files. This separates your writing from the code.
- **`lib/`**: Helpers that do the heavy lifting, like reading the markdown files from the `content` folder.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (if running locally without Docker)
- **Docker** and **Docker Compose** (recommended)

### Option 1: Running with Docker (Recommended)
This is the cleanest way to run the project as it ensures you have the exact environment needed.

1.  **Build and Start the Container**:
    ```bash
    docker-compose up -d --build
    ```
    The `-d` flag runs it in the background (detached mode).

2.  **Access the Website**:
    Open your browser and visit [http://localhost:3000](http://localhost:3000).

3.  **Stop the Container**:
    ```bash
    docker-compose down
    ```

### Option 2: Running Locally (Development)
If you want to edit code and see changes instantly.

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open in Browser**:
    Visit [http://localhost:3000](http://localhost:3000).

## 📝 How to Edit Content

### Homepage Text
To change the bio, "About" section, or "Technical contributions", open:
`app/content.ts`

Modify the text inside the quotes. The changes will reflect immediately if you are running the development server.

### Blog Posts
To add or edit blog posts, look in:
`content/blog/`

Files are written in MDX (Markdown). You can create new `.mdx` files here to add new posts.

## 🛠️ Tech Stack
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Content**: MDX (Markdown with JSX)
- **Icons**: Lucide React
- **Deployment**: Dockerized for portability

---
*Created with ❤️ for RJDFerreira*
