import { Heart, Sparkles, Calendar, Gift, Star, Music, Coffee, Film } from "lucide-react";

export const wheelOptions = [
  { 
    id: 1, 
    label: "Romantic Gestures", 
    icon: Heart,
    color: "bg-love-100",
    emoji: "🌹",
    description: "Sweet and thoughtful actions"
  },
  { 
    id: 2, 
    label: "Date Ideas", 
    icon: Calendar,
    color: "bg-love-200",
    emoji: "💑",
    description: "Fun and creative outings"
  },
  { 
    id: 3, 
    label: "Intimate Moments", 
    icon: Star,
    color: "bg-love-300",
    emoji: "💖",
    description: "Private, meaningful experiences"
  },
  { 
    id: 4, 
    label: "Surprises", 
    icon: Gift,
    color: "bg-love-400",
    emoji: "🎉",
    description: "Bold and adventurous ideas"
  },
  { 
    id: 5, 
    label: "Playful Fun", 
    icon: Music,
    color: "bg-love-500",
    emoji: "🎵",
    description: "Light-hearted activities"
  },
  { 
    id: 6, 
    label: "Cozy Time", 
    icon: Coffee,
    color: "bg-love-600",
    emoji: "☕",
    description: "Relaxing moments together"
  },
  { 
    id: 7, 
    label: "Adventure", 
    icon: Star,
    color: "bg-love-700",
    emoji: "🌟",
    description: "Exciting experiences"
  },
  { 
    id: 8, 
    label: "Movie Night", 
    icon: Film,
    color: "bg-love-800",
    emoji: "🎬",
    description: "Mood-based movie suggestions"
  },
] as const;

export const suggestions = {
  "Romantic Gestures": [
    "Write a heartfelt love letter expressing your deepest feelings",
    "Create a photo album of your favorite memories together",
    "Plan a surprise candlelit dinner at home",
  ],
  "Date Ideas": [
    "Go stargazing with hot chocolate and blankets",
    "Take a cooking class together",
    "Plan a sunset picnic at a scenic spot",
  ],
  "Intimate Moments": [
    "Create a couples bucket list together",
    "Have a deep conversation about your dreams and fears",
    "Share your favorite memories of your relationship",
  ],
  "Surprises": [
    "Plan a mystery weekend getaway",
    "Create a treasure hunt with romantic clues",
    "Recreate your first date",
  ],
  "Playful Fun": [
    "Have a private dance party",
    "Create art together",
    "Play your favorite childhood games",
  ],
  "Cozy Time": [
    "Build a blanket fort and watch movies",
    "Have a couples spa day at home",
    "Cook your favorite comfort food together",
  ],
  "Adventure": [
    "Try a new outdoor activity together",
    "Go on a spontaneous road trip",
    "Take a class to learn something new together",
  ],
  "Lucky Star": [
    "Create a time capsule of your love story",
    "Write and perform a song or poem for each other",
    "Start a couple's tradition that's uniquely yours",
  ],
  "Movie Night": [
    "Romantic Comedy: 'The Notebook' - A timeless love story perfect for cuddling. Challenge: Write love letters to each other during the movie! 💌",
    "Feel Good: 'Crazy Stupid Love' - A fun romantic comedy about finding true love. Challenge: Try recreating the iconic dance lift scene (safely)! 💃",
    "Adventure: 'Titanic' - An epic romance set against a historical backdrop. Challenge: Hold hands during the emotional scenes! 🚢",
    "Musical Romance: 'La La Land' - A dreamy musical about love and dreams. Challenge: Learn one of the dance numbers together! 🎭",
    "Classic Romance: 'Pride & Prejudice' - A beautiful period romance. Challenge: Speak in British accents for the rest of the evening! 👒",
    "Modern Romance: 'To All The Boys I've Loved Before' - Sweet teen romance. Challenge: Write secret admirer letters to each other! ✉️",
    "Emotional Journey: 'A Star Is Born' - A powerful love story. Challenge: Create a playlist of your favorite duets! 🎵",
    "Romantic Adventure: 'The Lost City' - Comedy and romance in one. Challenge: Plan your own treasure hunt date! 🗺️"
  ],
} as const;

export const movieDetails = {
  "The Notebook": {
    title: "The Notebook",
    year: 2004,
    duration: "2h 3m",
    genre: ["Romance", "Drama"],
    description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    streamingOn: ["Netflix", "Amazon Prime"],
    mood: "Romantic",
    trailerUrl: "https://www.youtube.com/watch?v=yDJIcYE32NU"
  },
  "Crazy Stupid Love": {
    title: "Crazy, Stupid, Love",
    year: 2011,
    duration: "1h 58m",
    genre: ["Comedy", "Romance"],
    description: "A middle-aged husband's life changes dramatically when his wife asks him for a divorce. He seeks to rediscover his manhood with the help of a newfound friend, Jacob, learning to pick up girls at bars.",
    streamingOn: ["HBO Max", "Amazon Prime"],
    mood: "Fun/Comedy",
    trailerUrl: "https://www.youtube.com/watch?v=aDLhjm-0rJQ"
  },
  "La La Land": {
    title: "La La Land",
    year: 2016,
    duration: "2h 8m",
    genre: ["Musical", "Romance", "Drama"],
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    streamingOn: ["Netflix", "Amazon Prime"],
    mood: "Emotional",
    trailerUrl: "https://www.youtube.com/watch?v=0pdqf4P9MB8"
  },
  "The Lost City": {
    title: "The Lost City",
    year: 2022,
    duration: "1h 52m",
    genre: ["Adventure", "Comedy", "Romance"],
    description: "A reclusive romance novelist on a book tour with her cover model gets swept up in a kidnapping attempt that lands them both in a cutthroat jungle adventure.",
    streamingOn: ["Paramount+", "Amazon Prime"],
    mood: "Adventurous",
    trailerUrl: "https://www.youtube.com/watch?v=nfKO9rYDmE8"
  }
} as const;

export const moodCategories = [
  {
    mood: "Romantic",
    emoji: "🎬",
    description: "Fall in love with these heartwarming romantic films",
    color: "bg-pink-100 text-pink-800"
  },
  {
    mood: "Fun/Comedy",
    emoji: "😂",
    description: "Laugh together with these light-hearted comedies",
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    mood: "Adventurous",
    emoji: "🧗‍♂️",
    description: "Embark on exciting journeys with these thrilling adventures",
    color: "bg-green-100 text-green-800"
  },
  {
    mood: "Emotional",
    emoji: "🎭",
    description: "Experience deep emotions with these moving stories",
    color: "bg-purple-100 text-purple-800"
  }
] as const;
