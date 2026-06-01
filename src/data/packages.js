export const packages = [
  {
    id: "ind-1",
    type: "domestic",
    title: "Golden Triangle Glory",
    location: "Delhi, Agra, Jaipur",
    duration: "5 Days / 4 Nights",
    price: 25000,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    highlights: ["Taj Mahal Sunrise Visit", "Amber Fort Elephant Ride", "Delhi City Tour"],
    details: {
      transportation: "AC Innova/Sedan for all transfers and sightseeing",
      hotels: ["Taj Palace (Delhi)", "ITC Mughal (Agra)", "Rambagh Palace (Jaipur)"],
      itinerary: [
        { day: 1, title: "Arrival in Delhi", description: "Pickup from airport, check-in, and evening visit to India Gate." },
        { day: 2, title: "Delhi to Agra", description: "Morning drive to Agra. Visit Agra Fort and Mehtab Bagh." },
        { day: 3, title: "Agra to Jaipur", description: "Sunrise at Taj Mahal. Drive to Jaipur via Fatehpur Sikri." },
        { day: 4, title: "Jaipur Sightseeing", description: "Visit Amber Fort, City Palace, and Hawa Mahal." },
        { day: 5, title: "Departure", description: "Drive back to Delhi for onward journey." }
      ]
    }
  },
  {
    id: "ind-2",
    type: "domestic",
    title: "Kerala Backwaters Serenity",
    location: "Munnar, Thekkady, Alleppey",
    duration: "6 Days / 5 Nights",
    price: 32000,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    highlights: ["Munnar Tea Gardens", "Periyar Wildlife Safari", "Houseboat Stay"],
    details: {
      transportation: "Private AC SUV and Premium Houseboat",
      hotels: ["Windermere Estate (Munnar)", "Spice Village (Thekkady)", "Luxury Houseboat (Alleppey)"],
      itinerary: [
        { day: 1, title: "Cochin to Munnar", description: "Scenic drive to Munnar. Evening at leisure." },
        { day: 2, title: "Munnar Exploration", description: "Visit Eravikulam National Park and Tea Museum." },
        { day: 3, title: "Munnar to Thekkady", description: "Drive to Thekkady. Spice plantation tour." },
        { day: 4, title: "Wildlife Safari", description: "Early morning boat safari in Periyar Lake." },
        { day: 5, title: "Alleppey Houseboat", description: "Check into houseboat. Cruise through backwaters." },
        { day: 6, title: "Departure", description: "Disembark and drop at Cochin airport." }
      ]
    }
  },
  {
    id: "ind-3",
    type: "domestic",
    title: "Himalayan Retreat",
    location: "Shimla, Manali, Rohtang",
    duration: "7 Days / 6 Nights",
    price: 38000,
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
    highlights: ["Snow Activities in Rohtang", "Mall Road Shimla", "Solang Valley"],
    details: {
      transportation: "AC Volvo Bus and Private SUV for local sightseeing",
      hotels: ["Wildflower Hall (Shimla)", "Span Resort (Manali)"],
      itinerary: [
        { day: 1, title: "Delhi to Shimla", description: "Overnight journey to Shimla via AC Volvo." },
        { day: 2, title: "Shimla Local", description: "Check-in. Visit Mall Road and Christ Church." },
        { day: 3, title: "Kufri Excursion", description: "Day trip to Kufri for scenic views and horse riding." },
        { day: 4, title: "Shimla to Manali", description: "Drive to Manali enjoying the Kullu valley views." },
        { day: 5, title: "Rohtang Pass", description: "Full day excursion to Rohtang Pass." },
        { day: 6, title: "Solang Valley", description: "Adventure sports in Solang Valley. Evening departure." },
        { day: 7, title: "Arrival in Delhi", description: "Morning arrival in Delhi." }
      ]
    }
  },
  {
    id: "ind-4",
    type: "domestic",
    title: "Goa Beach Escapade",
    location: "North & South Goa",
    duration: "4 Days / 3 Nights",
    price: 21000,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    highlights: ["Baga Beach Nightlife", "Dudhsagar Waterfalls", "Old Goa Churches"],
    details: {
      transportation: "Airport Transfers and Private Cab for sightseeing",
      hotels: ["W Goa (Vagator)"],
      itinerary: [
        { day: 1, title: "Arrival in Goa", description: "Transfer to resort. Evening at Baga Beach." },
        { day: 2, title: "North Goa Tour", description: "Visit Fort Aguada, Anjuna, and Vagator beaches." },
        { day: 3, title: "South Goa & Churches", description: "Basilica of Bom Jesus and Colva Beach." },
        { day: 4, title: "Departure", description: "Transfer to Goa Airport." }
      ]
    }
  },
  {
    id: "int-1",
    type: "international",
    title: "Swiss Alpine Magic",
    location: "Zurich, Lucerne, Interlaken",
    duration: "7 Days / 6 Nights",
    price: 185000,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    highlights: ["Mt. Titlis Excursion", "Jungfraujoch Top of Europe", "Glacier Express"],
    details: {
      transportation: "Swiss Travel Pass (1st Class) for all trains and buses",
      hotels: ["Baur au Lac (Zurich)", "Hotel Schweizerhof (Lucerne)", "Victoria-Jungfrau (Interlaken)"],
      itinerary: [
        { day: 1, title: "Arrival in Zurich", description: "Welcome to Switzerland. Check-in and relax." },
        { day: 2, title: "Zurich City & Rhine Falls", description: "City tour followed by Europe's largest waterfall." },
        { day: 3, title: "Zurich to Lucerne", description: "Train to Lucerne. Evening Lake Lucerne cruise." },
        { day: 4, title: "Mt. Titlis", description: "Cable car ride to Mt. Titlis with Ice Flyer." },
        { day: 5, title: "Lucerne to Interlaken", description: "GoldenPass Line train journey." },
        { day: 6, title: "Jungfraujoch", description: "Excursion to the Top of Europe." },
        { day: 7, title: "Departure", description: "Train to Zurich airport for flight back." }
      ]
    }
  },
  {
    id: "int-2",
    type: "international",
    title: "Bali Tropical Escapade",
    location: "Ubud, Seminyak, Nusa Penida",
    duration: "6 Days / 5 Nights",
    price: 85000,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    highlights: ["Ubud Monkey Forest", "Tegallalang Rice Terrace", "Nusa Penida Island Tour"],
    details: {
      transportation: "Private AC Minivan and Speedboats",
      hotels: ["Viceroy Bali (Ubud)", "W Bali (Seminyak)"],
      itinerary: [
        { day: 1, title: "Arrival in Bali", description: "Transfer to Ubud resort. Traditional welcome dinner." },
        { day: 2, title: "Ubud Culture", description: "Visit Monkey Forest, Royal Palace, and Art Market." },
        { day: 3, title: "Rice Terraces & Swings", description: "Tegallalang terraces and famous Bali swing." },
        { day: 4, title: "Transfer to Seminyak", description: "Move to beach town. Sunset at Potato Head Club." },
        { day: 5, title: "Nusa Penida Day Trip", description: "Speedboat to island. Visit Kelingking Beach." },
        { day: 6, title: "Departure", description: "Morning at leisure. Transfer to Denpasar airport." }
      ]
    }
  },
  {
    id: "int-3",
    type: "international",
    title: "Dubai Desert Safari",
    location: "Dubai, Abu Dhabi",
    duration: "5 Days / 4 Nights",
    price: 65000,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    highlights: ["Burj Khalifa Level 124", "Premium Desert Safari", "Sheikh Zayed Mosque"],
    details: {
      transportation: "Private AC Sedan for all transfers",
      hotels: ["Atlantis The Palm (Dubai)", "Emirates Palace (Abu Dhabi)"],
      itinerary: [
        { day: 1, title: "Arrival in Dubai", description: "Transfer to hotel. Evening Marina Dhow Cruise." },
        { day: 2, title: "City Tour & Burj Khalifa", description: "Half day city tour. Evening at Burj Khalifa and Dubai Mall." },
        { day: 3, title: "Desert Safari", description: "Morning at leisure. Afternoon 4x4 dune bashing and BBQ dinner." },
        { day: 4, title: "Abu Dhabi Day Trip", description: "Visit Grand Mosque, Louvre, and Ferrari World." },
        { day: 5, title: "Departure", description: "Transfer to Dubai International Airport." }
      ]
    }
  },
  {
    id: "int-4",
    type: "international",
    title: "European Highlights",
    location: "Paris, Amsterdam, Rome",
    duration: "10 Days / 9 Nights",
    price: 245000,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
    highlights: ["Eiffel Tower Summit", "Amsterdam Canal Cruise", "Colosseum Tour"],
    details: {
      transportation: "Eurail Global Pass and Airport Transfers",
      hotels: ["Pullman Paris", "W Amsterdam", "Rome Cavalieri"],
      itinerary: [
        { day: 1, title: "Arrival in Paris", description: "Welcome to France. Evening Seine River cruise." },
        { day: 2, title: "Paris Sightseeing", description: "Eiffel Tower, Louvre Museum, and Champs-Élysées." },
        { day: 3, title: "Train to Amsterdam", description: "High-speed Thalys train to Amsterdam." },
        { day: 4, title: "Amsterdam Culture", description: "Canal cruise and Van Gogh Museum visit." },
        { day: 5, title: "Flight to Rome", description: "Morning flight to Italy. Evening walking tour." },
        { day: 6, title: "Vatican City", description: "Guided tour of Vatican Museums and St. Peter's Basilica." },
        { day: 7, title: "Ancient Rome", description: "Colosseum, Roman Forum, and Palatine Hill." },
        { day: 8, title: "Leisure Day", description: "Free day for shopping and exploring local cafes." },
        { day: 9, title: "Farewell Dinner", description: "Authentic Italian farewell dinner in Trastevere." },
        { day: 10, title: "Departure", description: "Transfer to Rome Fiumicino Airport." }
      ]
    }
  }
];
