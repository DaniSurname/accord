// Make sure to replace empty values (e.g. null) with null

let scents = [
  {
    accord: "Aldehyde",
    about: "Clean, soapy, fatty, bubbly, nose tickly",
    composition:
      "Used to enhance other scents, range from soapy to metallic, waxy to starchy and green to citrus",
    emoji: "🥂",
  },
  {
    accord: "Amber",
    about: "Warm, rich, powdery, sweet",
    composition:
      "Sweetened woody/spicy/musky, made using vanilla, patchouli, labdanum, styrax, benzoin",
    emoji: "🥃",
  },
  {
    accord: "Aquatic",
    about: "Clean, beachy, water",
    composition: "Marine notes like algae, seaweed, salt",
    emoji: "🌊",
  },
  {
    accord: "Chypre",
    about: "Woody, earthy, musky",
    composition:
      "Citrus top notes, floral middle notes, mossy-animalic base notes e.g. oakmoss and patchouli",
    emoji: "🌲",
  },
  {
    accord: "Citrus",
    about: "Crisp, clean, refreshing",
    composition: "Lime, lemon, tangerine and mandarin",
    emoji: "🍋",
  },
  {
    accord: "Floral",
    about: "Flowery (either powdery or green)",
    composition: "Flowers, commonly roses, jasmine, orange blossoms etc.",
    emoji: "🌸",
  },
  {
    accord: "Fresh",
    about: "Crisp, clean",
    composition: "Can be a mix of green, acquatic, citus and aromatic notes",
    emoji: "🫧",
  },
  {
    accord: "Fruity",
    about: "Deeper sweet, jammy",
    composition: "Fruits, can vary in quality and pairing",
    emoji: "🍓",
  },
  {
    accord: "Gourmand",
    about: "Sweet, sharp, dessert foods",
    composition: "Sweet foods like chocolate, honey, vanilla, caramel, almonds",
    emoji: "🧁",
  },
  {
    accord: "Green",
    about: "Foliage, herby, vegetal",
    composition: "Leaves like violet leaf, herbs, florals, galbanum",
    emoji: "🌿",
  },
  {
    accord: "Smoky",
    about: "Bold, sharp, like burning wood",
    composition:
      "Burning wood or incense, birch, oud, incense, resins like labdanum and opoponax",
    emoji: "🔥",
  },
  {
    accord: "Spicy",
    about: "Sultry, musky, nose tickly, can be warm or cool",
    composition: "Spices, with amber, musk, and animalic base notes",
    emoji: "🌶️",
  },
  {
    accord: "Woody",
    about: "Timber, warm, musky or fresh",
    composition: "Woods, oak moss, citrus, patchouli, bergamont",
    emoji: "🪵",
  },
  {
    accord: "Animalic",
    about: "Bodily, sweat, indolic, dirt",
    composition: "Bodily smells, whether animal or human",
    emoji: "🦁",
  },
  {
    accord: "Synthetic",
    about: "Rubber, medical, plastic",
    composition:
      "Either intentionally non-natural note, or those that smell 'unrealistic'",
    emoji: "🧪",
  },
];

let brands = [
  {
    brand: "Penhaligon's",
    type: "Fragrance House",
    link: "https://www.penhaligons.com/uk/en/",
  },
  {
    brand: "Angela Flanders",
    type: "Fragrance House",
    link: "https://angelaflanders-perfumer.com/",
  },
  {
    brand: "Etat Libre d'Orange",
    type: "Fragrance House",
    link: "https://www.etatlibredorange.com/",
  },
  {
    brand: "Commodity Fragrances",
    type: "Niche Fragrance House",
    link: "https://commodityfragrances.co.uk/",
  },
  {
    brand: "Chanel",
    type: "Fashion House",
    link: "https://www.chanel.com/gb/fragrance/",
  },
  {
    brand: "Dior",
    type: "Fashion House",
    link: "https://www.dior.com/en_gb/beauty",
  },
  {
    brand: "Jean Paul Gaultier",
    type: "Fashion House",
    link: "https://www.jeanpaulgaultier.com/us/en/fragrances",
  },
  {
    brand: "Prada",
    type: "Fashion House",
    link: "https://www.prada.com/gb/en/beauty-and-fragrances/fragrances/womens-fragrances/c/10573EU",
  },
  {
    brand: "Yves Saint Laurent",
    type: "Fashion House",
    link: "https://www.yslbeauty.co.uk/fragrance",
  },
  {
    brand: "The Essence Vault",
    type: "Designer Copies",
    link: "https://www.theessencevault.co.uk/",
  },
  {
    brand: "Lush",
    type: "Assorted Brand",
    link: null,
  },
  {
    brand: "Next",
    type: "Assorted Brand",
    link: "https://www.next.co.uk/shop/department-beauty-category-fragrances-0",
  },
  {
    brand: "The Body Shop",
    type: "Assorted Brand",
    link: "https://www.thebodyshop.com/en-gb/fragrance/h/h00005",
  },
  {
    brand: "DKNY",
    type: "Fashion House",
    link: null,
  },
  {
    brand: "Jennifer Lopez",
    type: "Celebrity",
    link: null,
  },
  {
    brand: "Burberry",
    type: "Fashion House",
    link: null,
  },
  {
    brand: "Jimmy Choo",
    type: "Fashion House",
    link: null,
  },
  {
    brand: "Mugler",
    type: "Fashion House",
    link: null,
  },
  {
    brand: "Ariana Grande",
    type: "Celebrity",
    link: null,
  },
  {
    brand: "Christina Aguilera",
    type: "Celebrity",
    link: null,
  },
  {
    brand: "Tom Ford",
    type: "Fashion House",
    link: null,
  },
  {
    brand: "Xerjoff",
    type: "Niche Fragrance House",
    link: null,
  },
  {
    brand: "L'Artisan Parfumeur",
    type: "Niche Fragrance House",
    link: null,
  },
  {
    brand: "Liberty",
    type: "Assorted Brand",
    link: null,
  },
  {
    brand: "Own Fragrance",
    type: "Homemade fragrances",
    link: null,
  },
  {
    brand: "Kylie Jenner",
    type: "Celebrity",
    link: null,
  },
  {
    brand: "Discothèque Fragrances",
    type: "Niche Fragrance House",
    link: "https://discothequefragrances.com/",
  },
  {
    brand: "d'Annam",
    type: "Niche Fragrance House",
    link: "https://uk.dannam.co/",
  },
];
