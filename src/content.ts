import bakeryHome from "./assets/BakeryHome-1.jpg";
import cateringExperience from "./assets/Catering.jpg";
import dailyMenuSalad from "./assets/Daily-Menu-Salad.jpg";
import galleryLayerEleven from "./assets/Layer-11-3.jpg";
import galleryLayerTwo from "./assets/Layer-2-1-scaled.jpg";
import galleryLayerSeven from "./assets/Layer-7-1-scaled.jpg";
import saladBowl from "./assets/Layer-9-3.jpg";
import sandwichPlate from "./assets/Layer-8-2.jpg";
import pastryBoard from "./assets/Layer-5-1-scaled.jpg";
import tillerTrip from "./assets/TillerTrip-Pic-1.jpg";
import workshopsGathering from "./assets/Workshops.jpg";

export const menuHighlights = [
  {
    name: "Cumin Roast Irish Squash",
    description:
      "Homemade spiced labneh, pickled squash, and toasted seeds highlighted on the daily salad table. Allergens: Dairy.",
    image: saladBowl,
  },
  {
    name: "Roasted Goatsbridge Sea Trout",
    description:
      "Sustainable Seafood Ireland catch served with pickled rhubarb for a bright, seasonal fish plate. Allergens: Fish.",
    image: sandwichPlate,
  },
  {
    name: "Spiced Lamb Kofta",
    description:
      "JJ Young & Sons lamb with mint and cucumber yoghurt - a warming option alongside vibrant vegetarian salads. Allergens: Dairy.",
    image: pastryBoard,
  },
];

export const communityExperiences = [
  {
    title: "Catering Gatherings",
    description:
      "Celebration menus designed for up to 50 guests with seasonal salads, breads, and vibrant mains.",
    image: cateringExperience,
  },
  {
    title: "Tiller + Trip Boxes",
    description:
      "Ready-to-pack feasts for two, four, or six people (€80/€160/€240) with 48 hours' notice.",
    image: tillerTrip,
  },
  {
    title: "Workshops & Events",
    description:
      "Hands-on classes are paused, but register your interest to hear when fermentation and baking sessions return.",
    image: workshopsGathering,
  },
];

export const galleryShowcase = [
  {
    label: "Morning pastry counter",
    image: bakeryHome,
  },
  {
    label: "Daily harvest salad",
    image: dailyMenuSalad,
  },
  {
    label: "Sun-drenched dining room",
    image: galleryLayerTwo,
  },
  {
    label: "Golden hour plating",
    image: galleryLayerSeven,
  },
  {
    label: "Latte art at golden hour",
    image: galleryLayerEleven,
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
