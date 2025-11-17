// Comprehensive Fallacy Repository
// This serves as the central data source for all fallacies

const fallacyRepository = {
  categories: ['Informal', 'Logical', 'Formal', 'Rhetorical'],

  fallacies: [
    {
      id: 'straw-man',
      name: 'Straw Man',
      category: 'Informal',
      difficulty: 'medium',
      summary: 'Misrepresenting someone\'s argument to make it easier to attack.',
      definition: 'A straw man fallacy occurs when someone takes another person\'s argument or point, distorts it or exaggerates it in some kind of extreme way, and then attacks the extreme distortion, as if that is really the claim the first person is making.',
      example: 'Person A: We should give more funding to schools. Person B: So you think we should waste money on frivolous programs instead of fixing roads? That\'s irresponsible!',
      tips: 'Look for exaggerations or distortions of the original argument. Ask yourself: Is this really what the person said?',
      commonIn: ['Politics', 'Debates', 'Social Media']
    },
    {
      id: 'ad-hominem',
      name: 'Ad Hominem',
      category: 'Informal',
      difficulty: 'easy',
      summary: 'Attacking the person instead of the argument.',
      definition: 'An ad hominem argument is a personal attack against the source of an argument, rather than against the argument itself. It occurs when someone attacks the person making the argument rather than the argument itself.',
      example: 'You can\'t trust John\'s opinion on climate change because he\'s not a scientist.',
      tips: 'Focus on the argument itself, not the person making it. Credentials matter, but they don\'t automatically make an argument valid or invalid.',
      commonIn: ['Politics', 'Online Discussions', 'Debates']
    },
    {
      id: 'false-dilemma',
      name: 'False Dilemma',
      category: 'Logical',
      difficulty: 'medium',
      summary: 'Presenting two options as the only possibilities when more exist.',
      definition: 'A false dilemma presents a situation with only two possible outcomes, when in reality there are more options available. It forces an either/or choice when in fact there is a range of possibilities.',
      example: 'You\'re either with us, or you\'re against us.',
      tips: 'Look for middle ground or alternative options. Real-world situations rarely have only two choices.',
      commonIn: ['Politics', 'Marketing', 'Debates']
    },
    {
      id: 'appeal-to-authority',
      name: 'Appeal to Authority',
      category: 'Informal',
      difficulty: 'medium',
      summary: 'Using an authority figure as evidence when they are not a reliable source.',
      definition: 'An appeal to authority is an argument from the fact that a person judged to be an authority affirms a proposition to the claim that the proposition is true.',
      example: 'A famous actor says this diet pill works, so it must be effective.',
      tips: 'Consider whether the authority is actually an expert in the relevant field. Expertise in one area doesn\'t transfer to all areas.',
      commonIn: ['Advertising', 'Social Media', 'Marketing']
    },
    {
      id: 'slippery-slope',
      name: 'Slippery Slope',
      category: 'Informal',
      difficulty: 'medium',
      summary: 'Arguing that a small first step leads to a chain of events with significant impact.',
      definition: 'A slippery slope argument suggests that a relatively small first step leads to a chain of related events culminating in some significant impact, much like an object given a small push over the edge of a slope sliding all the way to the bottom.',
      example: 'If we allow students to redo this test, soon they\'ll want to redo every assignment, and the entire education system will collapse!',
      tips: 'Look for unsupported assumptions about cause and effect. Each step in the chain needs to be proven, not just assumed.',
      commonIn: ['Politics', 'Parenting', 'Policy Debates']
    },
    {
      id: 'appeal-to-emotion',
      name: 'Appeal to Emotion',
      category: 'Informal',
      difficulty: 'easy',
      summary: 'Manipulating emotions instead of using valid reasoning.',
      definition: 'An appeal to emotion is a logical fallacy that manipulates people\'s emotions to strengthen support for the conclusion of an unsound argument.',
      example: 'If you don\'t donate to this charity, innocent children will suffer!',
      tips: 'Separate the emotional content from the logical argument. Strong emotions don\'t make an argument logically sound.',
      commonIn: ['Advertising', 'Politics', 'Fundraising']
    },
    {
      id: 'hasty-generalization',
      name: 'Hasty Generalization',
      category: 'Informal',
      difficulty: 'easy',
      summary: 'Drawing broad conclusions from limited evidence.',
      definition: 'A hasty generalization is a conclusion based on a sample that is too small or not representative of the larger population.',
      example: 'I met two rude people from that city, so everyone there must be rude.',
      tips: 'Check the sample size and representativeness. Anecdotal evidence is not enough for broad conclusions.',
      commonIn: ['Everyday Life', 'Social Media', 'Stereotyping']
    },
    {
      id: 'post-hoc',
      name: 'Post Hoc Ergo Propter Hoc',
      category: 'Logical',
      difficulty: 'medium',
      summary: 'Assuming that because B comes after A, A caused B.',
      definition: 'Post hoc ergo propter hoc (Latin: "after this, therefore because of this") is a logical fallacy that states "Since event Y followed event X, event Y must have been caused by event X."',
      example: 'I wore my lucky socks and we won the game, so my socks caused the win.',
      tips: 'Correlation does not imply causation. Look for actual causal mechanisms, not just temporal sequence.',
      commonIn: ['Sports', 'Superstitions', 'Politics']
    },
    {
      id: 'red-herring',
      name: 'Red Herring',
      category: 'Informal',
      difficulty: 'medium',
      summary: 'Introducing irrelevant material to distract from the issue.',
      definition: 'A red herring is something that misleads or distracts from a relevant or important question by introducing an irrelevant topic.',
      example: 'Why worry about the environment when there are people starving in the world?',
      tips: 'Stay focused on the original topic. Ask if the new information is truly relevant to the discussion.',
      commonIn: ['Debates', 'Politics', 'Arguments']
    },
    {
      id: 'begging-the-question',
      name: 'Begging the Question',
      category: 'Logical',
      difficulty: 'hard',
      summary: 'A circular argument where the conclusion is assumed in the premise.',
      definition: 'Begging the question is a logical fallacy in which the conclusion of an argument is implicitly or explicitly assumed in one of the premises.',
      example: 'Reading is fundamental because it\'s essential.',
      tips: 'Look for circular reasoning where the premise requires the conclusion to be true.',
      commonIn: ['Philosophical Debates', 'Religious Arguments']
    },
    {
      id: 'bandwagon',
      name: 'Bandwagon Fallacy',
      category: 'Informal',
      difficulty: 'easy',
      summary: 'Arguing something is true because many people believe it.',
      definition: 'The bandwagon fallacy is based on the assumption that the majority opinion is always valid or that something is true because most people believe it.',
      example: 'Everyone is buying this product, so it must be good.',
      tips: 'Popularity doesn\'t equal correctness. Truth is not determined by a vote.',
      commonIn: ['Marketing', 'Social Trends', 'Peer Pressure']
    },
    {
      id: 'tu-quoque',
      name: 'Tu Quoque',
      category: 'Informal',
      difficulty: 'medium',
      summary: 'Dismissing criticism by pointing out the critic\'s hypocrisy.',
      definition: 'Tu quoque (Latin for "you also") is an informal fallacy that attempts to discredit an opponent\'s position by charging hypocrisy without directly refuting or disproving the argument.',
      example: 'You say I shouldn\'t smoke, but you used to smoke too!',
      tips: 'Hypocrisy doesn\'t invalidate an argument. Focus on the argument\'s merit, not the speaker\'s past.',
      commonIn: ['Arguments', 'Politics', 'Parenting']
    },
    {
      id: 'genetic',
      name: 'Genetic Fallacy',
      category: 'Informal',
      difficulty: 'medium',
      summary: 'Judging something based on its origin rather than its merit.',
      definition: 'The genetic fallacy is committed when an argument is either devalued or defended solely because of its origins, rather than its content.',
      example: 'That idea came from a bad source, so it must be wrong.',
      tips: 'Evaluate ideas on their own merit, regardless of their source or origin.',
      commonIn: ['Academia', 'Politics', 'Debates']
    },
    {
      id: 'personal-incredulity',
      name: 'Personal Incredulity',
      category: 'Informal',
      difficulty: 'easy',
      summary: 'Claiming something is false because you can\'t understand it.',
      definition: 'The fallacy of personal incredulity occurs when someone finds something difficult to understand or believe, and concludes that it therefore cannot be true.',
      example: 'I can\'t imagine how evolution could create something so complex, so it must be false.',
      tips: 'Your inability to understand something doesn\'t make it false. Seek more information.',
      commonIn: ['Science Denial', 'Conspiracy Theories']
    },
    {
      id: 'non-sequitur',
      name: 'Non Sequitur',
      category: 'Formal',
      difficulty: 'medium',
      summary: 'A conclusion that doesn\'t logically follow from the premises.',
      definition: 'Non sequitur (Latin for "it does not follow") is a conversational and literary device in which a statement is made that does not logically follow the previous statement.',
      example: 'He\'s a good basketball player, so he must be good at math too.',
      tips: 'Check if the conclusion actually follows from the premises. Look for logical connections.',
      commonIn: ['Everyday Reasoning', 'Arguments']
    },
    {
      id: 'poisoning-the-well',
      name: 'Poisoning the Well',
      category: 'Informal',
      difficulty: 'medium',
      summary: 'Presenting negative information about someone before they speak.',
      definition: 'Poisoning the well is a preemptive ad hominem attack that attempts to discredit someone\'s argument before they make it by presenting negative information about them.',
      example: 'Before you hear from the next speaker—who is known for dishonesty—let me say...',
      tips: 'Be aware of attempts to bias you against a speaker before hearing their argument.',
      commonIn: ['Politics', 'Debates', 'Media']
    }
  ],

  // Game scenarios - realistic arguments containing fallacies
  gameScenarios: [
    {
      argument: "You want to raise taxes? Well, you didn't pay your parking ticket on time last year, so you have no room to talk about financial responsibility!",
      fallacy: 'tu-quoque',
      context: 'Political debate',
      difficulty: 'medium'
    },
    {
      argument: "9 out of 10 celebrities use this skincare product. You should too!",
      fallacy: 'bandwagon',
      context: 'Advertisement',
      difficulty: 'easy'
    },
    {
      argument: "My opponent wants to increase funding for public parks. So they think we should waste millions on grass while our economy crumbles?",
      fallacy: 'straw-man',
      context: 'Political campaign',
      difficulty: 'medium'
    },
    {
      argument: "Dr. Smith is a renowned physicist, so when he says this diet will make you lose weight, you should listen!",
      fallacy: 'appeal-to-authority',
      context: 'Health advice',
      difficulty: 'medium'
    },
    {
      argument: "If we allow this minor regulation, soon the government will control every aspect of our lives!",
      fallacy: 'slippery-slope',
      context: 'Political debate',
      difficulty: 'medium'
    },
    {
      argument: "How can you criticize my driving? You got a speeding ticket once!",
      fallacy: 'tu-quoque',
      context: 'Personal argument',
      difficulty: 'easy'
    },
    {
      argument: "Everyone knows that organic food is healthier. Millions of people can't be wrong!",
      fallacy: 'bandwagon',
      context: 'Health discussion',
      difficulty: 'easy'
    },
    {
      argument: "Think of the children! If you don't support this policy, children will suffer!",
      fallacy: 'appeal-to-emotion',
      context: 'Political campaign',
      difficulty: 'easy'
    },
    {
      argument: "I met two lawyers who were dishonest, so all lawyers must be dishonest.",
      fallacy: 'hasty-generalization',
      context: 'Social conversation',
      difficulty: 'easy'
    },
    {
      argument: "I started taking these vitamins and a week later I felt better, so the vitamins definitely work!",
      fallacy: 'post-hoc',
      context: 'Health discussion',
      difficulty: 'medium'
    },
    {
      argument: "Why should we worry about climate change when there are homeless people who need help?",
      fallacy: 'red-herring',
      context: 'Social debate',
      difficulty: 'medium'
    },
    {
      argument: "This book is terrible because it was written by someone with no formal education.",
      fallacy: 'genetic',
      context: 'Book review',
      difficulty: 'medium'
    },
    {
      argument: "I can't understand quantum physics, so it must be nonsense made up by scientists.",
      fallacy: 'personal-incredulity',
      context: 'Science discussion',
      difficulty: 'easy'
    },
    {
      argument: "He's great at singing, so he'll probably be excellent at running the company.",
      fallacy: 'non-sequitur',
      context: 'Business discussion',
      difficulty: 'medium'
    },
    {
      argument: "Either we cut all social programs or the economy will collapse. There's no middle ground.",
      fallacy: 'false-dilemma',
      context: 'Economic policy debate',
      difficulty: 'medium'
    },
    {
      argument: "Before you hear what this person has to say, you should know they were fired from their last job for incompetence.",
      fallacy: 'poisoning-the-well',
      context: 'Workplace meeting',
      difficulty: 'medium'
    },
    {
      argument: "You say smoking is bad, but you used to smoke in college. Your argument is invalid!",
      fallacy: 'ad-hominem',
      context: 'Health discussion',
      difficulty: 'easy'
    },
    {
      argument: "This medicine must work because the doctor said it's effective.",
      fallacy: 'appeal-to-authority',
      context: 'Medical advice',
      difficulty: 'easy'
    },
    {
      argument: "We need this law because it's necessary for our safety.",
      fallacy: 'begging-the-question',
      context: 'Political debate',
      difficulty: 'hard'
    },
    {
      argument: "Everyone's switching to electric cars. You should too, before you're the only one left!",
      fallacy: 'bandwagon',
      context: 'Consumer decision',
      difficulty: 'easy'
    }
  ],

  // Helper methods
  getFallacyById(id) {
    return this.fallacies.find(f => f.id === id);
  },

  getFallaciesByCategory(category) {
    return this.fallacies.filter(f => f.category === category);
  },

  getFallaciesByDifficulty(difficulty) {
    return this.fallacies.filter(f => f.difficulty === difficulty);
  },

  getRandomFallacy() {
    return this.fallacies[Math.floor(Math.random() * this.fallacies.length)];
  },

  getRandomScenario() {
    return this.gameScenarios[Math.floor(Math.random() * this.gameScenarios.length)];
  },

  getScenariosByDifficulty(difficulty) {
    return this.gameScenarios.filter(s => s.difficulty === difficulty);
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = fallacyRepository;
}
