# Trade Hub

A modern, responsive e-commerce website for Trade Hub, featuring a variety of products, a shopping cart, and a beautiful custom footer. Built with HTML, CSS, and JavaScript.

## Project Structure

```
Tradehub/
  ├── src/
  │   ├── html/         # All HTML pages (index.html, about.html, shop.html, etc.)
  │   ├── css/          # Stylesheets (style.css, auth.css)
  │   └── js/           # JavaScript files (app.js, products.js, login.js)
  ├── img/              # Images and assets
  ├── favicon.svg       # Favicon
  └── README.md         # Project documentation
```

## How to Run Locally

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd Tradehub
   ```
2. Open `src/html/index.html` in your browser.

## Deploying to Vercel

This project is a static site and can be deployed easily to [Vercel](https://vercel.com/):

1. **Install Vercel CLI (optional):**
   ```sh
   npm install -g vercel
   ```
2. **Deploy:**
   - Push your code to a GitHub/GitLab/Bitbucket repository.
   - Go to [vercel.com/import](https://vercel.com/import) and import your repository.
   - When prompted for the root directory, set it to `src/html` so that `index.html` is the entry point.
   - For static assets (images, CSS, JS), Vercel will serve them as long as they are referenced with the correct relative paths (e.g., `/img/IMAGES/footlogo.png`, `../css/style.css`, etc.).
   - No build step is required.

**Note:** If you want to serve the site from the project root, move the contents of `src/html` to the root and update asset paths accordingly.

## Features
- Responsive design
- Product catalog and details
- Shopping cart
- Contact and about pages
- Modern custom footer on every page

## License
MIT
