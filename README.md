# Digbijaya Dhal — React Portfolio

A responsive React + Vite + Tailwind CSS portfolio inspired by the reference screenshots, customized with Digbijaya's education, skills, projects, and contact details.

## Technology stack

- React.js
- Tailwind CSS 3
- Vite
- Lucide React icons

Tailwind is configured in `tailwind.config.js` and `postcss.config.js`. The portfolio combines Tailwind utility classes with custom CSS for its detailed reference-inspired styling.

## Run locally

1. Install Node.js (LTS).
2. Extract this ZIP and open the folder in VS Code.
3. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL shown by Vite (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

The production website is generated in the `dist` folder.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Add your resume PDF

The Resume buttons are already wired to `/resume.pdf`.

Place your actual PDF file at:

`public/resume.pdf`

Then rebuild/redeploy. Do not leave a placeholder file there.

## Personal details to verify

- Email: d.bijayadhal@gmail.com
- GitHub: https://github.com/digbijayadhal/
- LinkedIn: https://www.linkedin.com/in/digbijaya-dhal/
- HRMS demo: https://hrms-frontend-ivory-chi.vercel.app/
- Product Management System demo: https://pmsa-servlet-app-6e6e.onrender.com/

The contact form opens the visitor's default email application; it does not send messages through a backend service.
