// Fallacy data - in a real app, this would come from an API or database
const fallacies = [
  {
    id: 'straw-man',
    name: 'Straw Man',
    summary: 'Misrepresenting someone\'s argument to make it easier to attack.',
    category: 'Informal',
    example: 'Person A: We should give more funding to schools. Person B: So you think we should waste money on frivolous programs instead of fixing roads?',
    definition: 'A straw man fallacy occurs when someone takes another person\'s argument or point, distorts it or exaggerates it in some kind of extreme way, and then attacks the extreme distortion, as if that is really the claim the first person is making.'
  },
  {
    id: 'ad-hominem',
    name: 'Ad Hominem',
    summary: 'Attacking the person instead of the argument.',
    category: 'Informal',
    example: 'You can\'t trust John\'s opinion on climate change because he\'s not a scientist.',
    definition: 'An ad hominem argument is a personal attack against the source of an argument, rather than against the argument itself. It occurs when someone attacks the person making the argument rather than the argument itself.'
  },
  {
    id: 'false-dilemma',
    name: 'False Dilemma',
    summary: 'Presenting two alternative states as the only possibilities, when in fact more possibilities exist.',
    category: 'Logical',
    example: 'You\'re either with us, or you\'re against us.',
    definition: 'A false dilemma presents a situation with only two possible outcomes, when in reality there are more options available. It forces an either/or choice when in fact there is a range of possibilities.'
  },
  {
    id: 'appeal-to-authority',
    name: 'Appeal to Authority',
    summary: 'Using an authority figure as evidence when they are not a reliable source.',
    category: 'Informal',
    example: 'A famous actor says this diet pill works, so it must be effective.',
    definition: 'An appeal to authority is an argument from the fact that a person judged to be an authority affirms a proposition to the claim that the proposition is true.'
  },
  {
    id: 'slippery-slope',
    name: 'Slippery Slope',
    summary: 'Arguing that a relatively small first step leads to a chain of related events culminating in some significant impact.',
    category: 'Informal',
    example: 'If we allow students to redo this test, soon they\'ll want to redo every assignment, and the entire education system will collapse!',
    definition: 'A slippery slope argument suggests that a relatively small first step leads to a chain of related events culminating in some significant impact, much like an object given a small push over the edge of a slope sliding all the way to the bottom.'
  }
];

// Fun facts about logical fallacies
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

// DOM Elements
const fallacyDayContainer = document.getElementById('fallacy-day');
const didYouKnowContainer = document.getElementById('did-you-know');

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  displayFallacyOfTheDay();
  displayRandomFact();
  
});

// Display a random fallacy as Fallacy of the Day
function displayFallacyOfTheDay() {
  if (!fallacyDayContainer) return;
  
  // Get a random fallacy
  const randomIndex = Math.floor(Math.random() * fallacies.length);
  const fallacy = fallacies[randomIndex];
  
  // Create the HTML
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const html = `
    <div class="container">
      <h2 class="section-title">Fallacy of the Day: ${today}</h2>
      <div class="fallacy-card">
        <h3>${fallacy.name}</h3>
        <p>${fallacy.summary}</p>
        <div class="fallacy-example">
          <strong>Example:</strong> ${fallacy.example}
        </div>
        <a href="fallacy-${fallacy.id}.html" class="cta-btn cta-btn-small">Learn More</a>
      </div>
    </div>
  `;
  
  fallacyDayContainer.innerHTML = html;
  
  // Add animation class after a short delay
  setTimeout(() => {
    const card = fallacyDayContainer.querySelector('.fallacy-card');
    if (card) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  }, 100);
}

// Display a random fun fact in the footer
function displayRandomFact() {
  if (!didYouKnowContainer) return;
  
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  const fact = funFacts[randomIndex];
  
  const html = `
    <div class="fact-content">
      <strong>Did you know?</strong> ${fact}
    </div>
  `;
  
  didYouKnowContainer.innerHTML = html;
  
  // Change fact every 10 seconds
  setInterval(() => {
    displayRandomFact();
  }, 10000);
}



// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Account for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('animated');
    }
  });
};

// Initialize scroll animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
