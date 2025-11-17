// Shared Components for BadReason.com
// This file contains reusable navigation, footer, and meta components

const BadReasonComponents = {
  // Generate SEO-optimized meta tags
  generateMetaTags(config) {
    const defaults = {
      title: 'BadReason.com – Logical Fallacies & Critical Thinking',
      description: 'Learn to identify and avoid logical fallacies. Comprehensive fallacy library, interactive games, and critical thinking resources.',
      keywords: 'logical fallacies, critical thinking, reasoning, argumentation, fallacy examples, bad reasoning, debate, logic',
      url: 'https://badreason.com',
      image: 'https://badreason.com/og-image.jpg',
      type: 'website',
      author: 'BadReason.com',
      twitterCard: 'summary_large_image'
    };

    const meta = { ...defaults, ...config };

    return `
    <!-- Primary Meta Tags -->
    <meta name="title" content="${meta.title}">
    <meta name="description" content="${meta.description}">
    <meta name="keywords" content="${meta.keywords}">
    <meta name="author" content="${meta.author}">
    <meta name="robots" content="index, follow">
    <meta name="language" content="English">
    <meta name="revisit-after" content="7 days">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${meta.type}">
    <meta property="og:url" content="${meta.url}">
    <meta property="og:title" content="${meta.title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:image" content="${meta.image}">
    <meta property="og:site_name" content="BadReason.com">

    <!-- Twitter -->
    <meta property="twitter:card" content="${meta.twitterCard}">
    <meta property="twitter:url" content="${meta.url}">
    <meta property="twitter:title" content="${meta.title}">
    <meta property="twitter:description" content="${meta.description}">
    <meta property="twitter:image" content="${meta.image}">

    <!-- Mobile Optimization -->
    <meta name="theme-color" content="#7D9D9C">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="BadReason">
    `;
  },

  // Generate structured data for schema.org
  generateStructuredData(type, data) {
    const schemas = {
      website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BadReason.com",
        "url": "https://badreason.com",
        "description": "Educational resource for learning about logical fallacies and improving critical thinking skills",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://badreason.com/fallacies.html?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BadReason.com",
        "url": "https://badreason.com",
        "logo": "https://badreason.com/favicon.ico",
        "description": "Educational resource for learning about logical fallacies",
        "sameAs": []
      },
      breadcrumb: (items) => ({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      }),
      faq: (questions) => ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(q => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      }),
      educationalContent: (title, description) => ({
        "@context": "https://schema.org",
        "@type": "LearningResource",
        "name": title,
        "description": description,
        "educationalLevel": "Beginner to Advanced",
        "learningResourceType": "Interactive Tutorial",
        "author": {
          "@type": "Organization",
          "name": "BadReason.com"
        }
      })
    };

    if (type === 'breadcrumb' || type === 'faq') {
      return JSON.stringify(schemas[type](data), null, 2);
    }

    return JSON.stringify(schemas[type] || schemas.website, null, 2);
  },

  // Generate navigation HTML
  generateNavigation(activePage = '') {
    const navItems = [
      { href: 'index.html', text: 'Home', page: 'home' },
      { href: 'fallacies.html', text: 'Fallacy Library', page: 'fallacies' },
      { href: 'game.html', text: 'Fallacy Detective', page: 'game' },
      { href: 'about.html', text: 'About', page: 'about' }
    ];

    const navLinks = navItems.map(item =>
      `<li><a href="${item.href}" ${item.page === activePage ? 'class="active"' : ''}>${item.text}</a></li>`
    ).join('\n        ');

    return `
  <!-- Navigation -->
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="container nav-content">
      <a href="index.html" class="logo" aria-label="BadReason.com Home">BadReason.com</a>
      <button class="mobile-menu-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
      <ul class="nav-links" role="menubar">
        ${navLinks}
      </ul>
    </div>
  </nav>
  <div class="nav-overlay" aria-hidden="true"></div>`;
  },

  // Generate breadcrumb navigation
  generateBreadcrumb(items) {
    const breadcrumbItems = items.map((item, index) => {
      const isLast = index === items.length - 1;
      return `
        <li class="breadcrumb-item${isLast ? ' active' : ''}" ${isLast ? 'aria-current="page"' : ''}>
          ${isLast ? item.name : `<a href="${item.url}">${item.name}</a>`}
        </li>`;
    }).join('');

    return `
  <nav aria-label="Breadcrumb" class="breadcrumb-nav">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>${breadcrumbItems}
    </ol>
  </nav>`;
  },

  // Generate footer HTML
  generateFooter() {
    return `
  <!-- Footer -->
  <footer class="footer" role="contentinfo">
    <div class="container footer-content">
      <div class="footer-section">
        <h3>Quick Links</h3>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="index.html">Home</a>
          <a href="fallacies.html">Fallacy Library</a>
          <a href="game.html">Fallacy Detective</a>
          <a href="about.html">About</a>
        </nav>
      </div>

      <div class="footer-section">
        <h3>Learn More</h3>
        <ul class="footer-links">
          <li><a href="#what-are-fallacies">What Are Logical Fallacies?</a></li>
          <li><a href="#critical-thinking">Critical Thinking Resources</a></li>
          <li><a href="game.html">Practice with Games</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Resources</h3>
        <ul class="footer-links">
          <li><a href="/sitemap.xml">Sitemap</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Use</a></li>
        </ul>
      </div>

      <div class="did-you-know" id="did-you-know" role="complementary" aria-label="Fun fact">
        <!-- JS will inject rotating facts here -->
      </div>

      <div class="footer-bottom">
        <div class="copyright">&copy; 2025 BadReason.com. All rights reserved.</div>
        <div class="footer-tagline">Empowering critical thinking, one fallacy at a time.</div>
      </div>
    </div>
  </footer>`;
  },

  // Initialize common functionality
  initCommonFeatures() {
    // Setup mobile menu
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    if (menuToggle && navLinks && navOverlay) {
      const toggleMenu = () => {
        const isActive = navLinks.classList.toggle('active');
        navOverlay.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isActive);

        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
        }
      };

      menuToggle.addEventListener('click', toggleMenu);
      navOverlay.addEventListener('click', toggleMenu);

      // Close menu when clicking a link
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          if (navLinks.classList.contains('active')) {
            toggleMenu();
          }
        });
      });

      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
          toggleMenu();
        }
      });
    }

    // Setup "Did you know?" facts
    this.initDidYouKnow();
  },

  // Initialize rotating facts in footer
  initDidYouKnow() {
    const didYouKnowContainer = document.getElementById('did-you-know');
    if (!didYouKnowContainer) return;

    const funFacts = [
      "The term 'straw man' comes from the idea of setting up a straw man that's easy to knock down, similar to misrepresenting someone's argument to make it easier to attack.",
      "Ad hominem is Latin for 'to the person' and has been used as a logical fallacy since at least the 16th century.",
      "The 'bandwagon fallacy' gets its name from the phrase 'jump on the bandwagon,' which originated in 19th-century American politics.",
      "The 'red herring' fallacy is named after the practice of using strong-smelling fish to throw hunting dogs off a trail.",
      "The 'appeal to authority' was first described by Aristotle in his work 'Rhetoric' over 2,300 years ago.",
      "The 'false dilemma' is also known as the 'either/or' or 'black and white' fallacy.",
      "The 'slippery slope' argument is only fallacious when the predicted outcome isn't necessarily likely to occur.",
      "The 'hasty generalization' is sometimes called 'jumping to conclusions' or 'insufficient sample' fallacy.",
      "The 'post hoc' fallacy gets its name from the Latin phrase 'post hoc, ergo propter hoc,' meaning 'after this, therefore because of this.'",
      "The 'begging the question' fallacy is also known as 'circular reasoning' or 'petitio principii' in Latin."
    ];

    const displayRandomFact = () => {
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      const fact = funFacts[randomIndex];

      didYouKnowContainer.innerHTML = `
        <div class="fact-content">
          <strong>Did you know?</strong> ${fact}
        </div>
      `;
    };

    displayRandomFact();

    // Change fact every 15 seconds
    setInterval(displayRandomFact, 15000);
  }
};

// Auto-initialize on DOM load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    BadReasonComponents.initCommonFeatures();
  });
}
