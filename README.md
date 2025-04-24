# Personal Portfolio Website

This repository contains my personal portfolio website built with React, showcasing my skills, projects, and professional experience in embedded systems and IoT development.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablets, and mobile devices
- **Interactive UI**: Modern, clean interface with smooth animations and transitions
- **PDF Viewer**: Custom PDF viewer for resume with download capabilities
- **Project Showcase**: Gallery of projects with detailed descriptions and technology stacks
- **Contact Form**: Easy way for potential employers or collaborators to reach out
- **Skill Visualization**: Visual representation of technical skills with progress bars

## Technologies Used

- React.js
- Styled Components
- React Router
- React Icons
- CSS3 with modern features (Grid, Flexbox)

## Project Structure

```
react-portfolio/
├── public/              # Static files
│   ├── images/          # Project and other images
│   ├── pdf-viewer.html  # Custom PDF viewer page
│   ├── resume.pdf       # Downloadable resume
│   └── ...
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Main page components
│   │   ├── About.jsx    # About page with resume section
│   │   ├── Contact.jsx  # Contact page
│   │   ├── Home.jsx     # Landing page
│   │   └── Projects.jsx # Projects showcase
│   ├── assets/          # Additional assets
│   └── App.js           # Main application component
└── ...
```

## Setup and Running Locally

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd react-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Deployment

This portfolio is set up for deployment on GitHub Pages. To deploy:

1. Update the homepage in `package.json`:
   ```json
   "homepage": "https://<username>.github.io/<repo-name>"
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Customization

To use this template for your own portfolio:

1. Replace all personal information in the About.jsx, Projects.jsx, and other components
2. Update the profile image at `public/profile.JPG`
3. Replace resume at `public/resume.pdf`
4. Update project images in the `public/images/projects/` directory

## License

This project is open source and available under the [MIT License](LICENSE).
