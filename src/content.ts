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
    name: "Spring Market Salad",
    description: "Shaved asparagus, heirloom carrots, citrus vinaigrette, and toasted seeds.",
    image: saladBowl,
  },
  {
    name: "Heritage Grain Sandwich",
    description: "Warm sourdough, smoked beets, whipped ricotta, and micro herbs.",
    image: sandwichPlate,
  },
  {
    name: "Sunrise Buckwheat Tart",
    description: "Seasonal fruit compote, almond crumble, and vanilla creme fraiche.",
    image: pastryBoard,
  },
];

export const communityExperiences = [
  {
    title: "Seasonal Workshops",
    description: "Hands-on classes sharing fermentation, pastry, and preserve techniques with our chefs.",
    image: workshopsGathering,
  },
  {
    title: "Private Catering",
    description: "Custom plant-forward menus for celebrations, studios, and brand events across Dublin.",
    image: cateringExperience,
  },
  {
    title: "Farm Field Trips",
    description: "Guided visits to meet the growers behind our plates, complete with picnic spreads.",
    image: tillerTrip,
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
    title: "Local farmers first",
    description: "Partnering with small growers across Leinster to champion regenerative crops.",
  },
  {
    title: "Seasonal by design",
    description: "Menus that follow the harvest, cutting waste and keeping plates exciting year-round.",
  },
  {
    title: "Zero single-use",
    description: "Compostable packaging, refill stations, and responsible sourcing throughout our pantry.",
  },
];

export const operatingHours = [
  { day: "Mon-Fri", hours: "08:00-16:00" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

export const contactDetails = {
  address: "23 Frederick St S",
  locality: "Dublin, D02 KT21, Ireland",
  email: "hello@tillerandgrain.ie",
  phone: "+353 (0)1 555 3124",
};
