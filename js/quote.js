// Array of zodiac sign quotes
const quotes = [
    "Your determination and ambition will lead you to success.",
    "Embrace your creativity and let it guide you on your path.",
    "Your strong intuition will help you make wise decisions.",
    "Allow yourself to adapt to change and embrace new opportunities.",
    "Your caring nature brings positivity and harmony to those around you.",
    "Trust in your instincts, they will never lead you astray.",
    "Your perseverance will lead you to overcome any challenges.",
    "Embrace your independence and explore new horizons.",
    "Your optimism and positive mindset will attract abundance.",
    "Harness your inner strength and conquer your fears.",
    "Your attention to detail will bring excellence in everything you do.",
    "Seek balance in all aspects of your life to find inner peace.",
    "Be bold, be brave, be yourself. You are a natural-born leader.",
    "Stay grounded, remain determined, and watch your dreams blossom.",
    "Embrace your dual nature, for it allows you to see the world from different perspectives.",
    "Your emotions are your strength. Let them guide you towards nurturing and compassion.",
    "Radiate your inner light, embrace your uniqueness, and let your confidence roar.",
    "Attention to detail and organization are your allies on the path to perfection.",
    "Harmony and balance are your guiding principles. Seek peace within and in your relationships.",
    "Unleash your intensity, embrace transformation, and rise from the ashes stronger than ever.",
    "Expand your horizons, chase adventure, and let your free spirit soar.",
    "Your ambition knows no bounds. Climb the mountain of success with perseverance.",
    "Embrace your individuality, think outside the box, and let your ideas change the world.",
    "Dive into the depths of your imagination, for there lie the secrets to your creativity and compassion.",
  ];
  
  // Function to generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").textContent = quote;
  }
  
  // Add event listener to the generate button
  document.getElementById("generateButton").addEventListener("click", generateQuote);
  