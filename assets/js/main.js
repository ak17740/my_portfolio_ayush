// Populate data from portfolioData
function populateData() {
    // Header
    document.getElementById('nav-logo').textContent = portfolioData.personal.name;
    
    // Home section
    document.getElementById('home-name').textContent = portfolioData.personal.name;
    document.getElementById('home-title').textContent = portfolioData.personal.title;
    document.getElementById('profile-image').href = portfolioData.personal.profileImage;
    document.getElementById('resume-link').href = portfolioData.resume;
    
    // Social links
    document.getElementById('linkedin-link').href = portfolioData.social.linkedin;
    document.getElementById('instagram-link').href = portfolioData.social.instagram;
    document.getElementById('github-link').href = portfolioData.social.github;
    
    // About section
    document.getElementById('about-image').src = portfolioData.personal.aboutImage;
    document.getElementById('about-description').textContent = portfolioData.about.description;
    
    // Skills section
    document.getElementById('skills-subtitle').textContent = portfolioData.skills.subtitle;
    document.getElementById('skills-description').textContent = portfolioData.skills.description;
    
    // Generate skills HTML
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = portfolioData.skills.skillsList.map(skill => `
        <div class="skills__group">
            <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 class="skills__name">${skill.name}</h3>
                    <span class="skills__level">${skill.percentage}%</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Experience section
    document.getElementById('experience-subtitle').textContent = portfolioData.experience.subtitle;
    document.getElementById('experience-description').textContent = portfolioData.experience.description;
    
    // Generate experience HTML
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = portfolioData.experience.experiences.map(exp => `
        <div class="experience__content">
            <div class="experience__data">
                <div class="experience__header">
                    <div class="experience__icon">
                        <i class="${exp.icon}"></i>
                    </div>
                    <div class="experience__info">
                        <h3 class="experience__title">${exp.title}</h3>
                        <p class="experience__company">${exp.company}</p>
                        <p class="experience__period">${exp.period}</p>
                    </div>
                </div>
                <p class="experience__description">${exp.description}</p>
                <div class="experience__technologies">
                    ${exp.technologies.map(tech => `<span class="experience__tech">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Education section
    document.getElementById('education-subtitle').textContent = portfolioData.education.subtitle;
    document.getElementById('education-description').textContent = portfolioData.education.description;
    
    // Generate education HTML
    const educationList = document.getElementById('education-list');
    educationList.innerHTML = portfolioData.education.education.map(edu => `
        <div class="education__content">
            <div class="education__data">
                <div class="education__header">
                    <div class="education__icon">
                        <i class="${edu.icon}"></i>
                    </div>
                    <div class="education__info">
                        <h3 class="education__degree">${edu.degree}</h3>
                        <p class="education__institution">${edu.institution}</p>
                        <p class="education__period">${edu.period}</p>
                    </div>
                </div>
                <p class="education__description">${edu.description}</p>
                <p class="education__gpa">GPA: ${edu.gpa}</p>
            </div>
        </div>
    `).join('');
    
    // Work section
    const workProjects = document.getElementById('work-projects');
    workProjects.innerHTML = portfolioData.work.projects.map(project => `
        <div class="work__item">
            <a href="${project.link}" class="work__img">
                <img src="${project.image}" alt="${project.title}" />
            </a>
            <div class="work__info">
                <h3 class="work__title">${project.title}</h3>
                <p class="work__description">${project.description}</p>
                <div class="work__technologies">
                    ${project.technologies.map(tech => `<span class="work__tech">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Footer
    document.getElementById('footer-name').textContent = portfolioData.personal.name;
    document.getElementById('footer-linkedin').href = portfolioData.social.linkedin;
    document.getElementById('footer-instagram').href = portfolioData.social.instagram;
    document.getElementById('footer-github').href = portfolioData.social.github;
}

// Initialize app functionality
function initializeApp() {
    /*===== MENU SHOW =====*/ 
    const showMenu = (toggleId, navId) =>{
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show-menu')
            })
        }
    }
    showMenu('nav-toggle','nav-menu')

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('section[id]')

    const scrollActive = () =>{
        const scrollDown = window.scrollY

      sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }                                                    
        })
    }
    window.addEventListener('scroll', scrollActive)

    /*===== CHANGE BACKGROUND HEADER =====*/
    function scrollHeader(){
        const nav = document.getElementById('header')
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    /*===== SHOW SCROLL UP =====*/
    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)

    /*===== SCROLL REVEAL ANIMATION =====*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    //     reset: true
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
    sr.reveal('.home__social-icon',{ interval: 200}); 
    sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
    sr.reveal('.experience__data, .education__data',{interval: 200}); 
}

// Start the application
document.addEventListener('DOMContentLoaded', function() {
    populateData();
    initializeApp();
}); 
