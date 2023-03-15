const mockData = [
  {
    slug: "paris",
    sectionTitle: "Paris, France",
    heroImage: "https://res.cloudinary.com/dj1hgp0do/image/upload/v1678854927/paris-hero_iwtark.png",
    name: "Paris",
    title: "Discover Paris: The City of Love",
    description:
      "Paris is the capital city of France and one of the most popular tourist destinations in the world. Known for its beautiful architecture, romantic atmosphere, and world-class museums, Paris is a must-visit for any traveler.",
    images: [
      {
        url: "https://example.com/paris/eiffel-tower.jpg",
        alt: "The Eiffel Tower in Paris",
        caption: "The Eiffel Tower is one of the most famous landmarks in Paris",
      },
      {
        url: "https://example.com/paris/louvre-museum.jpg",
        alt: "The Louvre Museum in Paris",
        caption: "The Louvre Museum is home to some of the world's most famous artworks",
      },
    ],
    details: {
      population: "2.2 million",
      language: "French",
      currency: "Euro (EUR)",
      time_zone: "Central European Time (UTC+1)",
    },
  },
  {
    slug: "tokyo",
    sectionTitle: "Tokyo, Japan",
    heroImage: "https://res.cloudinary.com/dj1hgp0do/image/upload/v1678854920/tokyo-hero_hn4lhb.png",
    name: "Tokyo",
    title: "Explore Tokyo: The City of Contrasts",
    description:
      "Tokyo is the capital city of Japan and one of the most vibrant cities in the world. Known for its modern skyscrapers, ancient temples, and delicious food, Tokyo is a fascinating destination for any traveler.",
    images: [
      {
        url: "https://example.com/tokyo/skytree-tower.jpg",
        alt: "The Tokyo Skytree Tower in Tokyo",
        caption: "The Tokyo Skytree Tower is one of the tallest buildings in the world",
      },
      {
        url: "https://example.com/tokyo/sushi.jpg",
        alt: "Sushi in Tokyo",
        caption: "Tokyo is known for its delicious sushi and other Japanese cuisine",
      },
    ],
    details: {
      population: "13.5 million",
      language: "Japanese",
      currency: "Japanese Yen (JPY)",
      time_zone: "Japan Standard Time (UTC+9)",
    },
  },
]

export function getAllDestination() {
  return mockData
}

export function getAllSlugs() {
  let slugs = []
  getAllDestination().map((p) => slugs.push(`/destination/${p.slug}`))
  return slugs
}

export function getDestinationData(slug) {
  let destination = null
  getAllDestination().map((p) => {
    if (p.slug === slug) {
      destination = p
      return
    }
  })
  return destination
}
