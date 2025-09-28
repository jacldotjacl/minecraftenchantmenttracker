// --- Data: Enchantments and metadata ---
// Displayed levels match the user's checklist. Additional metadata helps the info panel.
const ENCHANTMENTS = [
  // Weapons
  { id: "sharpness_v", name: "Sharpness V", category: "Weapon", level: "V",
    appliesTo: ["Sword","Axe"],
    use: ["General melee damage across all mobs."],
    incompat: ["Smite", "Bane of Arthropods"],
    notes: ["Best all-rounder for combat. Axes benefit too but swing slower."] },

  { id: "smite_v", name: "Smite V", category: "Weapon", level: "V",
    appliesTo: ["Sword","Axe"],
    use: ["Bonus damage to undead (skeletons, zombies, wither)."],
    incompat: ["Sharpness", "Bane of Arthropods"],
    notes: ["Top pick for Wither or undead-heavy farms."] },

  { id: "looting_iii", name: "Looting III", category: "Weapon", level: "III",
    appliesTo: ["Sword"],
    use: ["Increases mob drop quantity and rare drop chance."],
    incompat: [],
    notes: ["Ideal for resource farms and rare drop hunting."] },

  { id: "fire_aspect_ii", name: "Fire Aspect II", category: "Weapon", level: "II",
    appliesTo: ["Sword"],
    use: ["Ignites targets, adds burn damage; can auto-cook meat (Java)."],
    incompat: [],
    notes: ["Can aggro neutral mobs; avoid in some farms."] },

  { id: "knockback_ii", name: "Knockback II", category: "Weapon", level: "II",
    appliesTo: ["Sword"],
    use: ["Pushes enemies back further per hit."],
    incompat: [],
    notes: ["Great for safety; can be annoying in tight spaces."] },

  { id: "power_v", name: "Power V", category: "Weapon", level: "V",
    appliesTo: ["Bow"],
    use: ["Majorly increases bow damage."],
    incompat: [],
    notes: ["Core bow DPS enchant."] },

  { id: "punch_ii", name: "Punch II", category: "Weapon", level: "II",
    appliesTo: ["Bow"],
    use: ["Increases arrow knockback."],
    incompat: [],
    notes: ["Helpful for keeping distance; can reduce follow-up hits."] },

  { id: "flame", name: "Flame", category: "Weapon", level: "",
    appliesTo: ["Bow"],
    use: ["Sets targets on fire with arrows."],
    incompat: [],
    notes: ["Less useful in rain; can ignite terrain accidentally."] },

  { id: "quick_charge_iii", name: "Quick Charge III", category: "Weapon", level: "III",
    appliesTo: ["Crossbow"],
    use: ["Reduces crossbow reload time."],
    incompat: [],
    notes: ["Top QoL for crossbow builds."] },

  { id: "piercing_iv", name: "Piercing IV", category: "Weapon", level: "IV",
    appliesTo: ["Crossbow"],
    use: ["Arrows pierce multiple entities and shields."],
    incompat: ["Multishot"],
    notes: ["Great for mob lines or shielded foes."] },

  { id: "multishot", name: "Multishot", category: "Weapon", level: "",
    appliesTo: ["Crossbow"],
    use: ["Fires three arrows per shot at no extra cost."],
    incompat: ["Piercing"],
    notes: ["Pairs nicely with Quick Charge; watch durability."] },

  { id: "riptide_iii", name: "Riptide III", category: "Weapon", level: "III",
    appliesTo: ["Trident"],
    use: ["Launches you forward when thrown in water or rain."],
    incompat: ["Loyalty", "Channeling"],
    notes: ["Movement-focused; excellent for oceans and rain travel."] },

  { id: "impaling_v", name: "Impaling V", category: "Weapon", level: "V",
    appliesTo: ["Trident"],
    use: ["Bonus damage to aquatic mobs (edition-dependent behavior)."],
    incompat: [],
    notes: ["Shines in ocean biomes and guardians temples."] },

  { id: "loyalty_iii", name: "Loyalty III", category: "Weapon", level: "III",
    appliesTo: ["Trident"],
    use: ["Trident returns after throwing."],
    incompat: ["Riptide"],
    notes: ["Pairs well with Channeling; long-range playstyle."] },

  // Tools
  { id: "efficiency_v", name: "Efficiency V", category: "Tool", level: "V",
    appliesTo: ["Pickaxe","Axe","Shovel","Hoe"],
    use: ["Greatly increases mining speed."],
    incompat: [],
    notes: ["Core for late-game tools; watch block insta-mine thresholds."] },

  { id: "unbreaking_iii", name: "Unbreaking III", category: "Tool", level: "III",
    appliesTo: ["All tools","Weapons","Armor"],
    use: ["Reduces durability consumption on use."],
    incompat: [],
    notes: ["Huge durability gain; near-universal pick."] },

  { id: "silk_touch", name: "Silk Touch", category: "Tool", level: "",
    appliesTo: ["Pickaxe","Axe","Shovel","Hoe"],
    use: ["Drops blocks themselves (e.g., ore blocks, glass)."],
    incompat: ["Fortune"],
    notes: ["Keep a dedicated Silk tool separate from Fortune."] },

  { id: "fortune_iii", name: "Fortune III", category: "Tool", level: "III",
    appliesTo: ["Pickaxe","Axe","Shovel"],
    use: ["Increases drop counts from certain blocks (ores, crops)."],
    incompat: ["Silk Touch"],
    notes: ["Your go-to for resource runs, especially diamonds."] },

  // Armor
  { id: "protection_iv", name: "Protection IV", category: "Armor", level: "IV",
    appliesTo: ["Helmet","Chestplate","Leggings","Boots"],
    use: ["General damage reduction."],
    incompat: ["Blast Protection","Fire Protection","Projectile Protection"],
    notes: ["Best all-round defense in most scenarios."] },

  { id: "thorns_iii", name: "Thorns III", category: "Armor", level: "III",
    appliesTo: ["Helmet","Chestplate","Leggings","Boots"],
    use: ["Damages attackers on contact."],
    incompat: [],
    notes: ["Increases durability drain; use sparingly for utility sets."] },

  { id: "respiration_iii", name: "Respiration III", category: "Armor", level: "III",
    appliesTo: ["Helmet"],
    use: ["Extends underwater breathing time and improves vision."],
    incompat: [],
    notes: ["Essential for ocean/ancient city water work."] },

  { id: "aqua_affinity", name: "Aqua Affinity", category: "Armor", level: "",
    appliesTo: ["Helmet"],
    use: ["Removes mining speed penalty underwater."],
    incompat: [],
    notes: ["Pairs with Respiration for underwater projects."] },

  { id: "feather_falling_iv", name: "Feather Falling IV", category: "Armor", level: "IV",
    appliesTo: ["Boots"],
    use: ["Reduces fall damage."],
    incompat: [],
    notes: ["Mandatory for Elytra users and high builds."] },

  { id: "depth_strider_iii", name: "Depth Strider III", category: "Armor", level: "III",
    appliesTo: ["Boots"],
    use: ["Increases movement speed underwater."],
    incompat: [],
    notes: ["Alternative/companion to Frost Walker depending on playstyle."] },

  // Utility
  { id: "lure_iii", name: "Lure III", category: "Utility", level: "III",
    appliesTo: ["Fishing Rod"],
    use: ["Decreases time to get a bite."],
    incompat: [],
    notes: ["Great for bulk fish/treasure farming."] },

  { id: "luck_of_the_sea_iii", name: "Luck of the Sea III", category: "Utility", level: "III",
    appliesTo: ["Fishing Rod"],
    use: ["Improves treasure chance; reduces junk when fishing."],
    incompat: [],
    notes: ["Best for enchanted books/treasures via fishing."] },

  // Universal
  { id: "mending", name: "Mending", category: "Universal", level: "",
    appliesTo: ["Most gear"],
    use: ["Converts XP orbs to durability repair on equipped/held items."],
    incompat: [],
    notes: ["Competes with XP for player leveling; manage gear slots while repairing."] },
];

// --- State and helpers ---
const STORAGE_KEY = "mc_enchant_tracker_v1";

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){
    return {};
  }
}
function saveState(state){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState(); // { id: true/false }

const CATEGORIES = ["Weapon","Tool","Armor","Utility","Universal"];

// --- DOM references ---
const listEl = document.getElementById("enchantmentList");
const infoPanel = document.getElementById("infoPanel");
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

// --- Build category filter chips ---
const activeFilters = new Set(CATEGORIES); // start with all visible
function renderFilters(){
  categoryFilters.innerHTML = "";
  CATEGORIES.forEach(cat=>{
    const chip = document.createElement("div");
    chip.className = "filter-chip active";
    chip.textContent = cat;
    chip.dataset.cat = cat;
    chip.addEventListener("click", ()=>{
      if(activeFilters.has(cat)){
        activeFilters.delete(cat);
        chip.classList.remove("active");
      }else{
        activeFilters.add(cat);
        chip.classList.add("active");
      }
      renderList();
    });
    categoryFilters.appendChild(chip);
  });
}
renderFilters();

// --- Render list ---
function matchesSearch(enchant, term){
  if(!term) return true;
  const t = term.toLowerCase();
  const hay = [
    enchant.name, enchant.category,
    enchant.level, ...(enchant.appliesTo||[]),
    ...(enchant.use||[]), ...(enchant.notes||[]),
    ...(enchant.incompat||[])
  ].join(" ").toLowerCase();
  return hay.includes(t);
}

function renderList(){
  const term = searchInput.value.trim();
  const filtered = ENCHANTMENTS.filter(e=>activeFilters.has(e.category))
                               .filter(e=>matchesSearch(e, term));
  listEl.innerHTML = "";
  filtered.forEach(e=>{
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = e.id;

    const left = document.createElement("div");
    left.className = "card-left";

    const checkWrap = document.createElement("label");
    checkWrap.className = "check-wrap";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.checked = !!state[e.id];
    checkbox.addEventListener("change", ()=>{
      state[e.id] = checkbox.checked;
      saveState(state);
      updateProgress();
    });
    const chkText = document.createElement("span");
    chkText.textContent = "Acquired";
    chkText.className = "category";
    checkWrap.appendChild(checkbox);
    checkWrap.appendChild(chkText);

    left.appendChild(checkWrap);

    const right = document.createElement("div");
    right.style.flex = "1";

    const title = document.createElement("h4");
    title.className = "title";
    title.textContent = e.name;

    const meta = document.createElement("div");
    meta.className = "category";
    meta.textContent = e.category;

    const level = document.createElement("div");
    level.className = "level";
    level.textContent = e.level ? `Level: ${e.level}` : "Level: —";

    const tags = document.createElement("div");
    tags.className = "tags";
    (e.appliesTo || []).forEach(t=>{
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = t;
      tags.appendChild(tag);
    });

    right.appendChild(title);
    right.appendChild(meta);
    right.appendChild(level);
    right.appendChild(tags);

    card.appendChild(left);
    card.appendChild(right);

    card.addEventListener("click", (evt)=>{
      // Avoid toggling checkbox twice when clicking on it
      if(evt.target === checkbox) return;
      showInfo(e);
    });

    listEl.appendChild(card);
  });

  totalCount.textContent = ENCHANTMENTS.length.toString();
  updateProgress();
}
renderList();

// --- Info panel ---
function showInfo(e){
  infoTitle.textContent = e.name;
  infoSubtitle.style.display = "none";
  infoDetails.style.display = "block";

  dName.textContent = e.name;
  dCategory.textContent = e.category;
  dLevel.textContent = e.level || "—";

  dItems.innerHTML = "";
  (e.appliesTo || []).forEach(i=>{
    const li = document.createElement("li");
    li.textContent = i;
    dItems.appendChild(li);
  });

  dUse.innerHTML = "";
  (e.use || []).forEach(u=>{
    const li = document.createElement("li");
    li.textContent = u;
    dUse.appendChild(li);
  });

  dIncompat.innerHTML = "";
  (e.incompat || []).forEach(ic=>{
    const li = document.createElement("li");
    li.textContent = ic;
    dIncompat.appendChild(li);
  });
  if((e.incompat || []).length === 0){
    const li = document.createElement("li");
    li.textContent = "None";
    dIncompat.appendChild(li);
  }

  dNotes.innerHTML = "";
  (e.notes || []).forEach(n=>{
    const li = document.createElement("li");
    li.textContent = n;
    dNotes.appendChild(li);
  });
  if((e.notes || []).length === 0){
    const li = document.createElement("li");
    li.textContent = "—";
    dNotes.appendChild(li);
  }
}

// --- Progress ---
function updateProgress(){
  const acquired = ENCHANTMENTS.reduce((acc,e)=>acc + (state[e.id] ? 1 : 0), 0);
  progressCount.textContent = acquired.toString();
  const pct = ENCHANTMENTS.length ? Math.round(acquired * 100 / ENCHANTMENTS.length) : 0;
  progressFill.style.width = `${pct}%`;
}

// --- Search ---
searchInput.addEventListener("input", renderList);

// --- Quick actions ---
markAllBtn.addEventListener("click", ()=>{
  ENCHANTMENTS.forEach(e=> state[e.id] = true );
  saveState(state);
  renderList();
});
clearAllBtn.addEventListener("click", ()=>{
  ENCHANTMENTS.forEach(e=> state[e.id] = false );
  saveState(state);
  renderList();
});

exportBtn.addEventListener("click", ()=>{
  const blob = new Blob([JSON.stringify(state,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "enchantments-tracker.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

importBtn.addEventListener("click", ()=>{
  importFile.click();
});
importFile.addEventListener("change", ()=>{
  const file = importFile.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const data = JSON.parse(reader.result);
      // Only accept known IDs to avoid pollution
      const next = {};
      ENCHANTMENTS.forEach(e=>{
        next[e.id] = !!data[e.id];
      });
      state = next;
      saveState(state);
      renderList();
    }catch(e){
      alert("Invalid file. Please select a valid exported JSON.");
    }
    importFile.value = "";
  };
  reader.readAsText(file);
});
