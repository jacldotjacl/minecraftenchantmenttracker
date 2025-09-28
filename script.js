// --- Data: Enchantments and metadata ---
const ENCHANTMENTS = [
  // Weapons
  { id: "sharpness_v", name: "Sharpness V", category: "Weapon", level: "V",
    appliesTo: ["Sword","Axe"], use:["General melee damage."], incompat:["Smite","Bane of Arthropods"], notes:[] },
  { id: "smite_v", name: "Smite V", category: "Weapon", level: "V",
    appliesTo: ["Sword","Axe"], use:["Bonus vs undead."], incompat:["Sharpness","Bane of Arthropods"], notes:[] },
  { id: "looting_iii", name: "Looting III", category: "Weapon", level: "III",
    appliesTo: ["Sword"], use:["Increases mob drops."], incompat:[], notes:[] },
  { id: "fire_aspect_ii", name: "Fire Aspect II", category: "Weapon", level: "II",
    appliesTo: ["Sword"], use:["Ignites targets."], incompat:[], notes:[] },
  { id: "knockback_ii", name: "Knockback II", category: "Weapon", level: "II",
    appliesTo: ["Sword"], use:["Pushes enemies back."], incompat:[], notes:[] },
  { id: "power_v", name: "Power V", category: "Weapon", level: "V",
    appliesTo: ["Bow"], use:["Increases bow damage."], incompat:[], notes:[] },
  { id: "punch_ii", name: "Punch II", category: "Weapon", level: "II",
    appliesTo: ["Bow"], use:["Arrow knockback."], incompat:[], notes:[] },
  { id: "flame", name: "Flame", category: "Weapon", level: "",
    appliesTo: ["Bow"], use:["Arrows ignite targets."], incompat:[], notes:[] },
  { id: "quick_charge_iii", name: "Quick Charge III", category: "Weapon", level: "III",
    appliesTo: ["Crossbow"], use:["Faster reload."], incompat:[], notes:[] },
  { id: "piercing_iv", name: "Piercing IV", category: "Weapon", level: "IV",
    appliesTo: ["Crossbow"], use:["Arrows pierce entities."], incompat:["Multishot"], notes:[] },
  { id: "multishot", name: "Multishot", category: "Weapon", level: "",
    appliesTo: ["Crossbow"], use:["Fires 3 arrows."], incompat:["Piercing"], notes:[] },
  { id: "riptide_iii", name: "Riptide III", category: "Weapon", level: "III",
    appliesTo: ["Trident"], use:["Propels in water/rain."], incompat:["Loyalty","Channeling"], notes:[] },
  { id: "impaling_v", name: "Impaling V", category: "Weapon", level: "V",
    appliesTo: ["Trident"], use:["Bonus vs aquatic mobs."], incompat:[], notes:[] },
  { id: "loyalty_iii", name: "Loyalty III", category: "Weapon", level: "III",
    appliesTo: ["Trident"], use:["Trident returns."], incompat:["Riptide"], notes:[] },

  // NEW mace enchantment
  { id: "density_v", name: "Density V", category: "Weapon", level: "V",
    appliesTo: ["Mace"], use:["Increases mace damage based on fall distance."], incompat:[], notes:["Signature mace enchant."] },

  // Tools
  { id: "efficiency_v", name: "Efficiency V", category: "Tool", level: "V",
    appliesTo:["Pickaxe","Axe","Shovel","Hoe"], use:["Mining speed."], incompat:[], notes:[] },
  { id: "unbreaking_iii", name: "Unbreaking III", category: "Tool", level: "III",
    appliesTo:["All gear"], use:["Durability boost."], incompat:[], notes:[] },
  { id: "silk_touch", name: "Silk Touch", category: "Tool", level: "",
    appliesTo:["Pickaxe","Axe","Shovel","Hoe"], use:["Drops block itself."], incompat:["Fortune"], notes:[] },
  { id: "fortune_iii", name: "Fortune III", category: "Tool", level: "III",
    appliesTo:["Pickaxe","Axe","Shovel"], use:["Increases drops."], incompat:["Silk Touch"], notes:[] },

  // Armor
  { id: "protection_iv", name: "Protection IV", category: "Armor", level: "IV",
    appliesTo:["Helmet","Chestplate","Leggings","Boots"], use:["General damage reduction."], incompat:["Blast Protection","Fire Protection","Projectile Protection"], notes:[] },
  { id: "thorns_iii", name: "Thorns III", category: "Armor", level: "III",
    appliesTo:["Helmet","Chestplate","Leggings","Boots"], use:["Damages attackers."], incompat:[], notes:[] },
  { id: "respiration_iii", name: "Respiration III", category: "Armor", level: "III",
    appliesTo:["Helmet"], use:["Longer underwater breathing."], incompat:[], notes:[] },
  { id: "aqua_affinity", name: "Aqua Affinity", category: "Armor", level: "",
    appliesTo:["Helmet"], use:["Normal mining underwater."], incompat:[], notes:[] },
  { id: "feather_falling_iv", name: "Feather Falling IV", category: "Armor", level: "IV",
    appliesTo:["Boots"], use:["Reduces fall damage."], incompat:[], notes:[] },
  { id: "depth_strider_iii", name: "Depth Strider III", category: "Armor", level: "III",
    appliesTo:["Boots"], use:["Faster underwater movement."], incompat:[], notes:[] },

  // Utility
  { id: "lure_iii", name: "Lure III", category: "Utility", level: "III",
    appliesTo:["Fishing Rod"], use:["Faster bites."], incompat:[], notes:[] },
  { id: "luck_of_the_sea_iii", name: "Luck of the Sea III", category: "Utility", level: "III",
    appliesTo:["Fishing Rod"], use:["Better treasure chance."], incompat:[], notes:[] },

  // Universal
  { id: "mending", name: "Mending", category: "Universal", level: "",
    appliesTo:["Most gear"], use:["XP repairs durability."], incompat:[], notes:[] },
];

// --- State and helpers ---
const STORAGE_KEY = "mc_enchant_tracker_v1";
function loadState(){ try{ return JSON.parse(localStorage.getItem(STORAGE_KEY))||{}; }catch(e){ return {}; } }
function saveState(state){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
let state = loadState();

const CATEGORIES = ["Weapon","Tool","Armor","Utility","Universal"];

// --- DOM references ---
const listEl = document.getElementById("enchantmentList");
const infoTitle = document.getElementById("infoTitle");
const infoSubtitle = document.getElementById("infoSubtitle");
const infoDetails = document.getElementById("infoDetails");
const dName = document.getElementById("dName");
const dCategory = document.getElementById("dCategory");
const dLevel = document.getElementById("dLevel");
const dItems = document.getElementById("dItems");
const dUse = document.getElementById("dUse");
const dIncompat = document.getElementById("dIncompat");
const dNotes = document.getElementById("dNotes");
const progressCount = document.getElementById("progressCount");
const totalCount = document.getElementById("totalCount");
const progressFill = document.getElementById("progressFill");
const searchInput = document.getElementById("search");
const categoryFilters = document.getElementById("categoryFilters");
const markAllBtn = document.getElementById("markAll");
const clearAllBtn = document.getElementById("clearAll");
const exportBtn = document.getElementById("exportData");
const importBtn = document.getElementById("importData");
const importFile = document.getElementById("importFile");

// --- Filters ---
const activeFilters = new Set(CATEGORIES);
function renderFilters(){
  categoryFilters.innerHTML = "";
  CATEGORIES.forEach(cat=>{
    const chip = document.createElement("div");
    chip.className = "filter-chip active";
    chip.textContent = cat;
    chip.addEventListener("click", ()=>{
      if(activeFilters.has(cat)){ activeFilters.delete(cat); chip.classList.remove("active"); }
      else{ activeFilters.add(cat); chip.classList.add("active"); }
      renderList();
