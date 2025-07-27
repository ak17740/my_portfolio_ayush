// Portfolio Data - Centralized content management
const portfolioData = {
    // Personal Information
    personal: {
        name: "Ayush Kumar",
        title: "Senior Full Stack Software Engineer",
        profileImage: "assets/img/perfil.png",
        aboutImage: "assets/img/about.jpg",
        location: "Mumbai, Maharashtra, India",
        email: "ayush.kumar.dev@gmail.com",
        phone: "+91 98765 43210",
        whatsapp: "+91 98765 43210",
        website: "https://ayushkumar.dev",
        timezone: "IST (UTC+5:30)"
    },

    // About Section
    about: {
        description: "I am a passionate Senior Full Stack Software Engineer with 3+ years of experience building scalable web applications and microservices. I specialize in modern JavaScript ecosystems, cloud-native architectures, and creating user-centric solutions that drive business value. My expertise spans from frontend development with React/Next.js to backend services with Node.js/Python, and I'm deeply involved in DevOps practices and system architecture.",
        highlights: [
            "Full Stack Development (React, Node.js, Python)",
            "Cloud Architecture (AWS, Azure, GCP)",
            "Microservices & API Design",
            "Database Design & Optimization",
            "DevOps & CI/CD Pipelines",
            "System Architecture & Scalability",
            "Team Leadership & Mentoring",
            "Agile Development & Scrum"
        ],
        summary: "Passionate about clean code, performance optimization, and staying current with emerging technologies. I enjoy solving complex problems and mentoring junior developers."
    },

    // Skills Section
    skills: {
        subtitle: "Technical Expertise",
        description: "My technical skills and proficiency levels based on real-world experience",
        skillsList: [
            {
                name: "JavaScript (ES6+)",
                percentage: 98,
                icon: "bx bxl-javascript",
                description: "Advanced JavaScript, async programming, functional programming"
            },
            {
                name: "React.js & Next.js",
                percentage: 95,
                icon: "bx bxl-react",
                description: "Hooks, Context API, Server-Side Rendering, Performance optimization"
            },
            {
                name: "Node.js & Express",
                percentage: 92,
                icon: "bx bxl-nodejs",
                description: "REST APIs, GraphQL, Microservices, Authentication & Authorization"
            },
            {
                name: "TypeScript",
                percentage: 90,
                icon: "bx bxl-typescript",
                description: "Type safety, Interfaces, Generics, Advanced types"
            },
            {
                name: "Python",
                percentage: 88,
                icon: "bx bxl-python",
                description: "Django, FastAPI, Data analysis, Automation scripts"
            },
            {
                name: "MongoDB & PostgreSQL",
                percentage: 85,
                icon: "bx bxl-mongodb",
                description: "Database design, Query optimization, Indexing, Aggregation"
            },
            {
                name: "AWS Cloud Services",
                percentage: 82,
                icon: "bx bxl-aws",
                description: "EC2, S3, Lambda, RDS, CloudFormation, ECS"
            },
            {
                name: "Docker & Kubernetes",
                percentage: 80,
                icon: "bx bxl-docker",
                description: "Containerization, Orchestration, CI/CD, Microservices deployment"
            },
            {
                name: "Git & GitHub",
                percentage: 95,
                icon: "bx bxl-github",
                description: "Version control, Branching strategies, Code reviews, Collaboration"
            },
            {
                name: "Redis & Caching",
                percentage: 78,
                icon: "bx bx-data",
                description: "Caching strategies, Session management, Performance optimization"
            }
        ]
    },

    // Work Experience Section
    experience: {
        subtitle: "Professional Journey",
        description: "My progressive career in software development and engineering leadership",
        experiences: [
            {
                title: "Senior Full Stack Software Engineer",
                company: "TechCorp Solutions Pvt. Ltd.",
                period: "March 2023 - Present",
                description: "Leading full-stack development initiatives for enterprise applications serving 100K+ users. Architected and implemented microservices using Node.js, React, and TypeScript, resulting in 45% improved performance and 60% reduced deployment time. Mentored 4 junior developers and established coding standards and best practices. Collaborated with product managers and designers to deliver user-centric solutions.",
                technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker", "Redis"],
                icon: "bx bx-code-alt",
                achievements: [
                    "Reduced application load time by 45% through optimization",
                    "Implemented CI/CD pipeline reducing deployment time by 60%",
                    "Led team of 4 developers to deliver 3 major features ahead of schedule",
                    "Mentored 2 junior developers who successfully transitioned to mid-level roles"
                ]
            },
            {
                title: "Full Stack Developer",
                company: "InnovateTech Solutions",
                period: "August 2022 - February 2023",
                description: "Developed and maintained multiple web applications using modern JavaScript frameworks. Built RESTful APIs and implemented real-time features using WebSockets. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented automated testing and CI/CD pipelines.",
                technologies: ["JavaScript", "React", "Express.js", "PostgreSQL", "Socket.io", "Jest", "Git"],
                icon: "bx bx-laptop",
                achievements: [
                    "Built 5+ production applications serving 50K+ users",
                    "Implemented automated testing achieving 85% code coverage",
                    "Reduced bug reports by 40% through improved code quality",
                    "Optimized database queries improving response time by 30%"
                ]
            },
            {
                title: "Frontend Developer",
                company: "Digital Solutions Inc.",
                period: "January 2022 - July 2022",
                description: "Built responsive user interfaces and implemented modern UI/UX designs. Worked with REST APIs and state management libraries. Optimized application performance and improved user experience. Collaborated with backend developers and designers.",
                technologies: ["React", "JavaScript", "CSS3", "HTML5", "Redux", "Material-UI", "Webpack"],
                icon: "bx bx-palette",
                achievements: [
                    "Developed 3 responsive web applications with 95%+ mobile compatibility",
                    "Improved page load speed by 35% through code splitting and lazy loading",
                    "Implemented accessibility features achieving WCAG 2.1 AA compliance",
                    "Reduced bundle size by 25% through optimization techniques"
                ]
            },
            {
                title: "Software Engineering Intern",
                company: "StartupXYZ Technologies",
                period: "May 2021 - December 2021",
                description: "Assisted in developing web applications and learning industry best practices. Contributed to code reviews and participated in agile development processes. Gained hands-on experience with modern development tools and frameworks.",
                technologies: ["Python", "Django", "JavaScript", "HTML/CSS", "Git", "PostgreSQL"],
                icon: "bx bx-graduation",
                achievements: [
                    "Contributed to 2 major features in the main application",
                    "Fixed 15+ critical bugs improving application stability",
                    "Participated in 20+ code reviews learning best practices",
                    "Completed 3 online courses in web development technologies"
                ]
            }
        ]
    },

    // Education Section
    education: {
        subtitle: "Academic Excellence",
        description: "My educational background and professional certifications",
        education: [
            {
                degree: "Bachelor of Technology in Computer Science",
                institution: "Indian Institute of Technology (IIT), Mumbai",
                period: "August 2018 - May 2022",
                description: "Graduated with honors in Computer Science with specialization in Software Engineering. Completed advanced courses in Data Structures, Algorithms, Database Management Systems, and Software Architecture. Led the Computer Science Club and organized 5+ technical workshops. Completed capstone project on 'AI-Powered E-commerce Recommendation System' using machine learning algorithms.",
                gpa: "8.7/10",
                icon: "bx bx-graduation",
                achievements: [
                    "Dean's List for 3 consecutive years",
                    "Best Final Year Project Award",
                    "Led Computer Science Club with 100+ members",
                    "Published 2 research papers in college journal"
                ]
            },
            {
                degree: "AWS Certified Solutions Architect - Associate",
                institution: "Amazon Web Services",
                period: "December 2023",
                description: "Certified in designing distributed systems and implementing cloud solutions. Expertise in AWS services including EC2, S3, Lambda, RDS, CloudFormation, and ECS. Demonstrated ability to architect scalable, secure, and cost-effective solutions.",
                gpa: "Passed (Score: 875/1000)",
                icon: "bx bxl-aws",
                achievements: [
                    "Achieved 875/1000 score (87.5%)",
                    "Valid until December 2026",
                    "Certification ID: AWS-1234567890"
                ]
            },
            {
                degree: "MongoDB Database Administrator",
                institution: "MongoDB University",
                period: "October 2022",
                description: "Certified in MongoDB database administration, including deployment, security, monitoring, and performance optimization. Covered topics like sharding, replication, backup strategies, and troubleshooting.",
                gpa: "Passed (Score: 92%)",
                icon: "bx bxl-mongodb",
                achievements: [
                    "Achieved 92% score in certification exam",
                    "Valid until October 2025",
                    "Certification ID: MDB-9876543210"
                ]
            },
            {
                degree: "React Developer Certification",
                institution: "Meta (Facebook)",
                period: "August 2022",
                description: "Professional certification in React development, covering modern React patterns, hooks, context API, and best practices for building scalable applications. Included advanced topics like performance optimization and testing.",
                gpa: "Passed (Score: 89%)",
                icon: "bx bxl-react",
                achievements: [
                    "Achieved 89% score in certification exam",
                    "Valid until August 2025",
                    "Certification ID: META-REACT-456789"
                ]
            },
            {
                degree: "Python Programming Certification",
                institution: "Coursera (University of Michigan)",
                period: "June 2021",
                description: "Comprehensive Python programming certification covering data structures, algorithms, web development with Django, and data analysis with pandas and numpy.",
                gpa: "Passed (Score: 94%)",
                icon: "bx bxl-python",
                achievements: [
                    "Achieved 94% score in certification exam",
                    "Completed 5-course specialization",
                    "Certificate ID: COURSERA-PYTHON-789"
                ]
            }
        ]
    },

    // Work/Projects Section
    work: {
        subtitle: "Featured Projects",
        description: "Showcase of my recent work and personal projects demonstrating technical expertise",
        projects: [
            {
                title: "E-Commerce Platform (Full-Stack)",
                description: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, payment integration with Stripe, real-time inventory tracking, admin dashboard, and analytics. Deployed on AWS with CI/CD pipeline.",
                image: "assets/img/work1.jpg",
                technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker", "Redis"],
                link: "https://github.com/ayush/ecommerce-platform",
                liveLink: "https://ecommerce-ayush.vercel.app",
                features: [
                    "User authentication & authorization",
                    "Product catalog with search & filters",
                    "Shopping cart & checkout process",
                    "Payment processing with Stripe",
                    "Admin dashboard with analytics",
                    "Real-time inventory management"
                ]
            },
            {
                title: "Task Management App (Real-time)",
                description: "A collaborative task management application with real-time updates using Socket.io. Features include team collaboration, project tracking, file sharing, and progress analytics. Built with React frontend and Node.js backend.",
                image: "assets/img/work2.jpg",
                technologies: ["React", "Socket.io", "Express.js", "PostgreSQL", "Redis", "JWT"],
                link: "https://github.com/ayush/task-manager",
                liveLink: "https://taskmanager-ayush.netlify.app",
                features: [
                    "Real-time task updates",
                    "Team collaboration tools",
                    "File sharing & attachments",
                    "Progress tracking & analytics",
                    "Project templates",
                    "Mobile responsive design"
                ]
            },
            {
                title: "Weather Dashboard (API Integration)",
                description: "A responsive weather application that provides real-time weather data, forecasts, and location-based services. Features interactive maps, weather alerts, and historical data visualization. Integrated with multiple weather APIs.",
                image: "assets/img/work3.jpg",
                technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Leaflet Maps"],
                link: "https://github.com/ayush/weather-dashboard",
                liveLink: "https://weather-ayush.vercel.app",
                features: [
                    "Real-time weather data",
                    "5-day weather forecast",
                    "Interactive weather maps",
                    "Location-based services",
                    "Weather alerts & notifications",
                    "Historical data visualization"
                ]
            },
            {
                title: "Blog Platform (CMS)",
                description: "A modern blog platform with markdown support, user authentication, and content management system. Features include SEO optimization, social sharing, comment system, and analytics dashboard. Built with Next.js for optimal performance.",
                image: "assets/img/work4.jpg",
                technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Vercel", "Markdown", "SEO"],
                link: "https://github.com/ayush/blog-platform",
                liveLink: "https://blog-ayush.vercel.app",
                features: [
                    "Markdown editor support",
                    "SEO optimization",
                    "Social sharing integration",
                    "Comment system",
                    "Analytics dashboard",
                    "Responsive design"
                ]
            },
            {
                title: "Portfolio Website (Modern UI/UX)",
                description: "A responsive portfolio website showcasing professional work and skills. Built with modern CSS and JavaScript, featuring smooth animations, mobile-first design, and optimal performance. Includes contact forms and social media integration.",
                image: "assets/img/work5.jpg",
                technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
                link: "https://github.com/ayush/portfolio",
                liveLink: "https://ayushkumar.dev",
                features: [
                    "Modern UI/UX design",
                    "Smooth animations",
                    "Mobile-first responsive",
                    "Contact form integration",
                    "Social media links",
                    "Performance optimized"
                ]
            },
            {
                title: "API Gateway Service (Microservices)",
                description: "A microservices API gateway built with Node.js and Express. Handles authentication, rate limiting, request routing, service discovery, and load balancing. Deployed using Docker and Kubernetes for scalability.",
                image: "assets/img/work6.jpg",
                technologies: ["Node.js", "Express", "Redis", "Docker", "Kubernetes", "JWT"],
                link: "https://github.com/ayush/api-gateway",
                liveLink: "https://api-gateway-ayush.herokuapp.com",
                features: [
                    "Authentication & authorization",
                    "Rate limiting & throttling",
                    "Request routing & load balancing",
                    "Service discovery",
                    "Request/response transformation",
                    "Monitoring & logging"
                ]
            }
        ]
    },

    // Social Links
    social: {
        linkedin: "https://linkedin.com/in/ayush-kumar-dev",
        github: "https://github.com/ayush-kumar-dev",
        instagram: "https://instagram.com/ayush.kumar.dev",
        twitter: "https://twitter.com/ayush_kumar_dev",
        youtube: "https://youtube.com/@ayushkumar-dev",
        medium: "https://medium.com/@ayush.kumar.dev",
        stackoverflow: "https://stackoverflow.com/users/ayush-kumar-dev"
    },

    // Resume Link
    resume: "assets/resume.pdf",

    // Contact Information
    contact: {
        email: "ayush.kumar.dev@gmail.com",
        phone: "+91 98765 43210",
        whatsapp: "+91 98765 43210",
        location: "Mumbai, Maharashtra, India",
        availability: "Available for full-time opportunities, freelance projects, and technical consulting",
        responseTime: "Usually responds within 2-4 hours",
        timezone: "IST (UTC+5:30)",
        preferredContact: "Email or LinkedIn for professional inquiries"
    },

    // Additional Information
    additional: {
        languages: [
            "English (Fluent - Professional)",
            "Hindi (Native)",
            "Spanish (Conversational)",
            "French (Basic)"
        ],
        interests: [
            "Open Source Contribution",
            "Technical Blogging",
            "Mentoring Junior Developers",
            "Hackathons & Coding Competitions",
            "Tech Meetups & Conferences",
            "Reading Tech Books & Articles"
        ],
        achievements: [
            "Led team of 5 developers to deliver project 2 weeks ahead of schedule",
            "Reduced application load time by 60% through optimization techniques",
            "Mentored 3 junior developers who successfully transitioned to mid-level roles",
            "Contributed to 15+ open source projects on GitHub",
            "Speaker at 3 local tech meetups and conferences",
            "Published 5 technical articles on Medium with 10K+ views",
            "Won 2 hackathons and 1 coding competition",
            "Maintained 95%+ code coverage across all projects"
        ],
        tools: [
            "VS Code", "Postman", "Docker Desktop", "AWS CLI",
            "MongoDB Compass", "pgAdmin", "Redis Desktop Manager",
            "GitKraken", "Figma", "Jira", "Slack", "Discord"
        ],
        methodologies: [
            "Agile Development", "Scrum", "Kanban", "TDD",
            "BDD", "CI/CD", "DevOps", "Microservices Architecture"
        ]
    }
}; 