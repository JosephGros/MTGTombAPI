const preconNameLookup: { [key: string]: string } = {
  // 2009 Precons
  "Enchantress Rubinia": "(TD0)---Enchantress-Rubinia.json",
  "Deathdancer Xira": "(TD0)---Deathdancer-Xira.json",
  // 2011 Precons
  "Heavenly Inferno": "(CMA)---Heavenly-Inferno.json",
  "Mirror Mastery": "(CMA)---Mirror-Mastery.json",
  "Counterpunch": "(CMA)---Counterpunch.json",
  "Devour for Power": "(CMA)---Devour-for-Power.json",
  "Political Puppets": "(CMA)---Political-Puppets.json",

  // 2013 Precons
  "Eternal Bargain": "(C13)---Eternal-Bargain.json",
  "Evasive Maneuvers": "(C13)---Evasive-Maneuvers.json",
  "Mind Seize": "(C13)---Mind-Seize.json",
  "Nature of the Beast": "(C13)---Nature-of-the-Beast.json",
  "Power Hungry": "(C13)---Power-Hungry.json",

  // 2014 Precons
  "Forged in Stone": "(C14)---Forged-in-Stone.json",
  "Peer Through Time": "(C14)---Peer-Through-Time.json",
  "Sworn to Darkness": "(C14)---Sworn-to-Darkness.json",
  "Built from Scratch": "(C14)---Built-from-Scratch.json",
  "Guided by Nature": "(C14)---Guided-by-Nature.json",

  // 2015 Precons
  "Call the Spirits": "(C15)---Call-the-Spirits.json",
  "Seize Control": "(C15)---Seize-Control.json",
  "Plunder the Graves": "(C15)---Plunder-the-Graves.json",
  "Wade into Battle": "(C15)---Wade-into-Battle.json",
  "Swell the Host": "(C15)---Swell-the-Host.json",

  // 2016 Precons
  "Invent Superiority": "(C16)---Invent-Superiority.json",
  "Stalwart Unity": "(C16)---Stalwart-Unity.json",
  "Open Hostility": "(C16)---Open-Hostility.json",
  "Entropic Uprising": "(C16)---Entropic-Uprising.json",
  "Breed Lethality": "(C16)---Breed-Lethality.json",

  // 2017 Precons
  "Draconic Domination": "(C17)---Draconic-Domination.json",
  "Feline Ferocity": "(C17)---Feline-Ferocity.json",
  "Vampiric Bloodlust": "(C17)---Vampiric-Bloodlust.json",
  "Arcane Wizardry": "(C17)---Arcane-Wizardry.json",

  // 2018 Precons
  "Adaptive Enchantment": "(C18)---Adaptive-Enchantment.json",
  "Nature's Vengeance": "(C18)---Nature's-Vengeance.json",
  "Subjective Reality": "(C18)---Subjective-Reality.json",
  "Exquisite Invention": "(C18)---Exquisite-Invention.json",

  // 2019 Precons
  "Merciless Rage": "(C19)---Merciless-Rage.json",
  "Mystic Intellect": "(C19)---Mystic-Intellect.json",
  "Primal Genesis": "(C19)---Primal-Genesis.json",
  "Faceless Menace": "(C19)---Faceless-Menace.json",

  // 2020 Precons
  "Reap the Tides": "(CMR)---Reap-the-Tides.json",
  "Arm for Battle": "(CMR)---Arm-for-Battle.json",
  "Symbiotic Swarm": "(C20)---Symbiotic-Swarm.json",
  "Arcane Maelstrom": "(C20)---Arcane-Maelstrom.json",
  "Ruthless Regiment": "(C20)---Ruthless-Regiment.json",
  "Enhanced Evolution": "(C20)---Enhanced-Evolution.json",
  "Timeless Wisdom": "(C20)---Timeless-Wisdom.json",

  // 2021 Precons
  "Aura of Courage": "(AFR)---Aura-of-Courage.json",
  "Dungeons of Death": "(AFR)---Dungeons-of-Death.json",
  "Draconic Rage": "(AFR)---Draconic-Rage.json",
  "Planar Portal": "(AFR)---Planar-Portal.json",
  "Lorehold Legacies": "(C21)---Lorehold-Legacies.json",
  "Prismari Performance": "(C21)---Prismari-Performance.json",
  "Quandrix Quandary": "(C21)---Quandrix-Quandary.json",
  "Silverquill Statement": "(C21)---Silverquill-Statement.json",
  "Witherbloom Witchcraft": "(C21)---Witherbloom-Witchcraft.json",
  "Spirit Squadron": "(VOW)---Spirit-Squadron.json",
  "Vampiric Bloodline": "(VOW)---Vampiric-Bloodline.json",
  "Coven Counters": "(MID)---Coven-Counters.json",
  "Undead Unleashed": "(MID)---Undead-Unleashed.json",

  // 2022 Precons
  "Party Time": "(CLB)---Party-Time.json",
  "Mind Flayarrrs": "(CLB)---Mind-Flayarrrs.json",
  "Draconic Dissent": "(CLB)---Draconic-Dissent.json",
  "Exit from Exile": "(CLB)---Exit-from-Exile.json",
  "Painbow": "(DMC)---Painbow.json",
  "Legends' Legacy": "(DMC)---Legends'-Legacy.json",
  "Buckle Up": "(NEO)---Buckle-Up.json",
  "Upgrades Unleashed": "(NEO)---Upgrades-Unleashed.json",
  "First Flight": "(SCB)---First-Flight.json",
  "Grave Danger": "(SCB)---Grave-Danger.json",
  "Chaos Incarnate": "(SCB)---Chaos-Incarnate.json",
  "Token Triumph": "(SCB)---Token-Triumph.json",
  "Draconic Destruction": "(SCB)---Draconic-Destruction.json",
  "Bedecked Brokers": "(SNC)---Bedecked-Brokers.json",
  "Cabaretti Cacophony": "(SNC)---Cabaretti-Cacophony.json",
  "Maestros Massacre": "(SNC)---Maestros-Massacre.json",
  "Obscura Operation": "(SNC)---Obscura-Operation.json",
  "Riveteers Rampage": "(SNC)---Riveteers-Rampage.json",
  "Mishra's Burnished Banner": "(BRC)---Mishra's-Burnished-Banner.json",
  "Urza's Iron Alliance": "(BRC)---Urza's-Iron-Alliance.json",
  "Forces of the Imperium": "(40K)---Forces-of-the-Imperium.json",
  "Necron Dynasties": "(40K)---Necron-Dynasties.json",
  "The Ruinous Powers": "(40K)---The-Ruinous-Powers.json",
  "Tyranid Swarm": "(40K)---Tyranid-Swarm.json",

  // 2023 Precons
  "Enduring Enchantments": "(CMM)---Enduring-Enchantments.json",
  "Planeswalker Party": "(CMM)---Planeswalker-Party.json",
  "Sliver Swarm": "(CMM)---Sliver-Swarm.json",
  "Eldrazi Unbound": "(CMM)---Eldrazi-Unbound.json",
  "Timey-Wimey": "(WHO)---Timey-Wimey.json",
  "Blast from the Past": "(WHO)---Blast-from-the-Past.json",
  "Paradox Power": "(WHO)---Paradox-Power.json",
  "Masters of Evil": "(WHO)---Masters-of-Evil.json",
  "Growing Threat": "(MOC)---Growing-Threat.json",
  "Cavalry Charge": "(MOC)---Cavalry-Charge.json",
  "Call for Backup": "(MOC)---Call-for-Backup.json",
  "Divine Convocation": "(MOC)---Divine-Convocation.json",
  "Rebellion Rising": "(ONC)---Rebellion-Rising.json",
  "Corrupting Influence": "(ONC)---Corrupting-Influence.json",
  "Elven Council": "(LTC)---Elven-Council.json",
  "Food and Fellowship": "(LTC)---Food-and-Fellowship.json",
  "Riders of Rohan": "(LTC)---Riders-of-Rohan.json",
  "The Hosts of Mordor": "(LTC)---The-Hosts-of-Mordor.json",
  "Cave of Temptation": "(LCC)---Cave-of-Temptation.json",
  "Eldritch Evolutions": "(LCC)---Eldritch-Evolutions.json",
  "Fae Dominion": "(WOC)---Fae-Dominion.json",
  "Virtue and Valor": "(WOC)---Virtue-and-Valor.json",

  // 2024 Precons
  "Deadly Disguise": "(MKC)---Deadly-Disguise.json",
  "Revenant Recon": "(MKC)---Revenant-Recon.json",
  "Deep Clue Sea": "(MKC)---Deep-Clue-Sea.json",
  "Blame Game": "(MKC)---Blame-Game.json",
  "Science!": "(PIP)---Science!.json",
  "Mutant Menace": "(PIP)---Mutant-Menace.json",
  "Hail, Caesar": "(PIP)---Hail,-Caesar.json",
  "Scrappy Survivors": "(PIP)---Scrappy-Survivors.json",
  "Most Wanted": "(OTC)---Most-Wanted.json",
  "Grand Larceny": "(OTC)---Grand-Larceny.json",
  "Quick Draw": "(OTC)---Quick-Draw.json",
  "Desert Bloom": "(OTC)---Desert-Bloom.json",
  "Catastrophe": "(SLD)---Catastrophe.json",
  "Feline Fury": "(SLD)---Feline-Fury.json",
  "Doggy Dilemma": "(SLD)---Doggy-Dilemma.json",
  "Paws and Effect": "(SLD)---Paws-and-Effect.json",
  "Graveyard Overdrive": "(MH3)---Graveyard-Overdrive.json",
  "Graveyard Overdrive Collector's Edition":
    "(MH3)---Graveyard-Overdrive-Collectors-Edition.json",
  "Tricky Terrain": "(MH3)---Tricky-Terrain.json",
  "Tricky Terrain Collector's Edition":
    "(MH3)---Tricky-Terrain-Collectors-Edition.json",
  "Creative Energy": "(MH3)---Creative-Energy.json",
  "Creative Energy Collector's Edition":
    "(MH3)---Creative-Energy-Collectors-Edition.json",
  "Eldrazi Incursion": "(MH3)---Eldrazi-Incursion.json",
  "Eldrazi Incursion Collector's Edition":
    "(MH3)---Eldrazi-Incursion-Collectors-Edition.json",
};

export default preconNameLookup;