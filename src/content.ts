import bakeryPastriesImage from "./assets/almond-croissants-with-nuts-and-glaze.jpg";
import cateringBanquetImage from "./assets/restaurant-food-spread-overhead-view.jpg";
import saladPrepImage from "./assets/hand-seasoning-fresh-salad-close-up.jpg";
import celebrationCakesImage from "./assets/chocolate-drip-cakes-buttercream-rosettes.jpg";
import chocolateTorteImage from "./assets/chocolate-cake-sliced-dried-flower-decoration.jpg";
import decoratedCakeImage from "./assets/decorated-cake-dried-apples-flowers-rosemary.jpg";
import grainBowlsImage from "./assets/assorted-vegetarian-grain-bowls-roasted-vegetables.jpg";
import seaTroutImage from "./assets/poached-trout-grain-bowl-roasted-vegetables.jpg";
import charredBeefImage from "./assets/beef-tenderloin-lentils-roasted-vegetables.jpg";
import lemonMeringueImage from "./assets/lemon-meringue-tart-slice-torched-topping.jpg";
import canapeDisplayImage from "./assets/scallop-canapes-on-radicchio-with-caviar.jpg";

export const menuHighlights = [
  {
    name: "Cumin Roast Irish Squash",
    description:
      "Homemade spiced labneh, pickled squash, and toasted seeds highlighted on the daily salad table. Allergens: Dairy.",
    image: grainBowlsImage,
  },
  {
    name: "Roasted Goatsbridge Sea Trout",
    description:
      "Sustainable Seafood Ireland catch served with pickled rhubarb for a bright, seasonal fish plate. Allergens: Fish.",
    image: seaTroutImage,
  },
  {
    name: "Spiced Lamb Kofta",
    description:
      "JJ Young & Sons lamb with mint and cucumber yoghurt - a warming option alongside vibrant vegetarian salads. Allergens: Dairy.",
    image: charredBeefImage,
  },
];

export const communityExperiences = [
  {
    title: "Catering Gatherings",
    description:
      "Celebration menus designed for up to 50 guests with seasonal salads, breads, and vibrant mains.",
    image: canapeDisplayImage,
  },
  {
    title: "Tiller + Trip Boxes",
    description:
      "Ready-to-pack feasts for two, four, or six people (€80/€160/€240) with 48 hours' notice.",
    image: lemonMeringueImage,
  },
  {
    title: "Workshops & Events",
    description:
      "Hands-on classes are paused, but register your interest to hear when fermentation and baking sessions return.",
    image: decoratedCakeImage,
  },
];

export const galleryShowcase = [
  {
    label: "Morning pastry counter",
    image: bakeryPastriesImage,
  },
  {
    label: "Finishing a seasonal salad",
    image: saladPrepImage,
  },
  {
    label: "Catering spread ready to serve",
    image: cateringBanquetImage,
  },
  {
    label: "Slicing our signature chocolate torte",
    image: chocolateTorteImage,
  },
  {
    label: "Celebration cakes with buttercream detail",
    image: celebrationCakesImage,
  },
];

export const sustainabilityHighlights = [
  {
    title: "Vegetables from Irish farms",
    description: "Airfield Farm and Sean Hussey & Sons keep our salad table stocked with seasonal produce.",
  },
  {
    title: "Trusted meat & fish",
    description: "We work with JJ Young & Sons for free-range meats and Sustainable Seafood Ireland for daily catch.",
  },
  {
    title: "Artisan pantry partners",
    description: "Specialty goods arrive from Lilliput Stores and other Dublin makers who share our values.",
  },
];

export const operatingHours = [
  { day: "Monday - Friday", hours: "08:00 - 16:00" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

export const contactDetails = {
  address: "23 Frederick St S",
  locality: "Dublin, D02 KT21, Ireland",
  email: "hello@tillerandgrain.ie",
  cateringEmail: "catering@tillerandgrain.ie",
};
