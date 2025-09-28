// --- Data: Enchantments and metadata ---
const ENCHANTMENTS = [
  // Weapons
  { id: "sharpness_v", name: "Sharpness V", category: "Weapon", level: "V",
    appliesTo: ["Sword","Axe"], use:["General melee damage."], incompat:["Smite","Bane of Arthropods"], notes:[] },
  { id: "smite_v", name: "Smite V", category: "Weapon", level: "V",
    appliesTo: ["Sword","Axe"], use:["Bonus vs undead."], incompat:["Sharpness","Bane of Arthropods"], notes:[] },
  // ... other weapon enchants ...
  { id: "loyalty_iii", name: "Loyalty III", category: "Weapon", level: "III",
    appliesTo: ["Trident"], use:["Trident returns after throw."], incompat:["Riptide"], notes:[] },

  // NEW mace enchantment
  { id: "density_v", name: "Density V", category: "Weapon", level: "V",
    appliesTo: ["Mace"], use:["Increases mace damage based on fall distance."], incompat:[], notes:["Signature mace enchant."] },

  // Tools
  { id: "efficiency_v", name: "Efficiency V", category: "Tool", level: "V",
    appliesTo:["Pickaxe","Axe","Shovel","Hoe"], use:["Mining speed."], incompat:[], notes:[] },
  // ... rest unchanged ...
  { id: "mending", name: "Mending", category: "Universal", level: "",
    appliesTo:["Most gear"], use:["XP repairs durability."], incompat:[], notes:[] },
];

// --- Render list ---
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

    // --- GIF + Title wrapper ---
    const titleWrap = document.createElement("div");
    titleWrap.style.display = "flex";
    titleWrap.style.alignItems = "center";

    const gif = document.createElement("img");
    gif.src = "https://64.media.tumblr.com/57c28db6330fafcb65de86917622ac8b/tumblr_mwy23dPbgM1rpm29co1_500.gif";
    gif.alt = "Minecraft enchantment gif";
    gif.className = "enchant-gif";

    const title = document.createElement("h4");
    title.className = "title";
    title.textContent = e.name;

    titleWrap.appendChild(gif);
    titleWrap.appendChild(title);

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

    right.appendChild(titleWrap);
    right.appendChild(meta);
    right.appendChild(level);
    right.appendChild(tags);

    card.appendChild(left);
    card.appendChild(right);

    card.addEventListener("click", (evt)=>{
      if(evt.target === checkbox) return;
      showInfo
