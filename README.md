# Ayush Kumar - Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Dynamic Content**: Easy to update content through a single data file
- **Smooth Animations**: Scroll reveal animations for better UX
- **GitHub Ready**: Single HTML file that can be hosted on GitHub Pages

## 📁 Project Structure

```
my_portfolio_ayush-main/
├── portfolio.html          # Main HTML file (use this for GitHub hosting)
├── index.html             # Original HTML file
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   ├── data.js        # Portfolio data (UPDATE THIS FILE)
│   │   └── main.js        # Main JavaScript functionality
│   └── img/               # Images folder
├── sections/              # Individual section files (for development)
│   ├── header.html
│   ├── home.html
│   ├── about.html
│   ├── skills.html
│   ├── work.html
│   ├── contact.html
│   └── footer.html
└── README.md
```

## 🛠️ How to Update Your Portfolio

### Quick Updates (Recommended)
To update your portfolio content, simply edit the `assets/js/data.js` file. This file contains all your portfolio information:

```javascript
const portfolioData = {
    // Personal Information
    personal: {
        name: "Ayush Kumar",
        title: "Software Engineer",
        profileImage: "assets/img/perfil.png",
        aboutImage: "assets/img/about.jpg"
    },
    
    // About Section
    about: {
        subtitle: "I'am Ayush Kumar",
        description: "Your description here..."
    },
    
    // Skills Section
    skills: {
        subtitle: "Professional Skills",
        description: "Your skills description...",
        skillsList: [
            {
                name: "HTML5",
                percentage: 95,
                icon: "bx bxl-html5"
            }
            // Add more skills...
        ]
    },
    
    // Work/Projects Section
    work: {
        projects: [
            {
                image: "assets/img/project1.jpg",
                title: "Project Title",
                link: "https://project-link.com"
            }
            // Add more projects...
        ]
    },
    
    // Social Links
    social: {
        linkedin: "your-linkedin-url",
        instagram: "your-instagram-url",
        github: "your-github-url"
    },
    
    // Resume Link
    resume: "your-resume-url"
};
```

### What You Can Update:
- **Personal Information**: Name, title, profile images
- **About Section**: Description and subtitle
- **Skills**: Add/remove skills, change percentages, update icons
- **Projects**: Add new projects, update images and links
- **Social Links**: Update LinkedIn, Instagram, GitHub URLs
- **Resume Link**: Update your resume URL

## 🌐 Hosting on GitHub

1. **Use `portfolio.html`** as your main file
2. **Upload to GitHub** with the following structure:
   ```
   your-repo/
   ├── portfolio.html
   ├── assets/
   │   ├── css/
   │   ├── js/
   │   └── img/
   └── README.md
   ```
3. **Enable GitHub Pages** in your repository settings
4. **Set `portfolio.html` as your index** or rename it to `index.html`

## 🎨 Customization

### Adding New Skills
```javascript
{
    name: "React",
    percentage: 75,
    icon: "bx bxl-react"  // Use Boxicons classes
}
```

### Adding New Projects
```javascript
{
    image: "assets/img/new-project.jpg",
    title: "New Project",
    link: "https://project-url.com"
}
```

### Changing Icons
Visit [Boxicons](https://boxicons.com/) to find the perfect icon for your skills.

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Vanilla JS for functionality
- **Boxicons**: For beautiful icons
- **ScrollReveal**: For smooth animations

## 📞 Support

If you need help updating your portfolio or have questions, feel free to reach out!

---

**Note**: The `sections/` folder contains individual HTML files for each section. These are for development purposes. For production, use the single `portfolio.html` file.

