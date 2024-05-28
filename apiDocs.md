## MTG Tomb API Documentation

**_Base URI_**
https://MTGTombAPI.onrender.com/api

## How to use API

- [Algorithm for Recommendation](#algorithm-for-recommendation)
- [Algorithm for Theme Recommendation](#algorithm-for-theme-recommendation)
- [Top Commanders](#top-commanders)
- [Top Commanders for Each Theme](#top-commanders-for-each-theme)
- [Themes](#themes)
- [Precons](#precons)
- [Precons Releases](#precon-releases)
- [Decks](#decks)
- [Action Words](#action-words)

## Identify resources

Algorithm for Recommendations
Algorithm for Theme Recommendations
Top Commanders
Top Commanders for Each Theme
Themes
Precons
Decks
Action Words

## Model URIs

- /recommendation
- /theme/recommendation
- /topcoms
- /topcom/:name
- /themescom
- /themescom/:name
- /themes
- /theme/:name
- /precons
- /precons/:name
- /preconrelease
- /decks
- /decks?color=:color
- /decks?page=2&limit=20
- /decks/:id
- /actionwords
- /actionwords/:name
- /actionwords/letter/:name


## Algorithm for Recommendations

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/recommendation

#### Commander recommendations

**_The process :_**

- When a user wants to build a deck and have chosen a commander that commanders name is inserted and sent to the API.
- The API then needs to take that name and compare with the top commanders.
- Then take that commander and the first theme in the themes array of that commander compare that to the themes data in the db.
- From there take all the cards in that theme and sort them after creature, artifact, enchantment, instant and land.
- Then compare those cards and count how many decks they are in to get an estimate.
- Send back to the user at MTG Tomb.


**_The result :_**

https://MTGTombAPI.onrender.com/api/recommendation/%28MKM%29---Revenant-Recon.json

_Sorted in these types -_

```
    creatures: [cards...],
    artifacts: [cards...],
    enchantments: [cards...],
    instants: [cards...],
    sorceries: [cards...],
    planeswalkers: [cards...],
    lands: [cards...]
```

_Within the types -_ Sorted after count.

_Result example -_

```json
{
  "creatures": [
    {
      "name": "fynn, the fangbearer",
      "count": 64,
      "cardInfo": {
        "image_uris": {
          "small": "https://cards.scryfall.io/small/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.jpg?1695476886",
          "normal": "https://cards.scryfall.io/normal/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.jpg?1695476886",
          "large": "https://cards.scryfall.io/large/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.jpg?1695476886",
          "png": "https://cards.scryfall.io/png/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.png?1695476886",
          "art_crop": "https://cards.scryfall.io/art_crop/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.jpg?1695476886",
          "border_crop": "https://cards.scryfall.io/border_crop/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.jpg?1695476886"
        },
        "name": "Fynn, the Fangbearer",
        "id": "0fb05d34-05cb-4536-b7e6-2d526dc30a9f",
        "rarity": "rare",
        "cmc": 2,
        "type_line": "Legendary Creature — Human Warrior",
        "oracle_text": "Deathtouch\nWhenever a creature you control with deathtouch deals combat damage to a player, that player gets two poison counters. (A player with ten or more poison counters loses the game.)",
        "color_identity": ["G"],
        "keywords": ["Deathtouch"],
        "flavor_text": "\"As you wish.\"",
        "_id": "664ff24cb273651e0b34d380"
      }
    }
  ],
  "artifacts": [
    ...
  ]
}
```

## Algorithm for Theme Recommendations

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/theme/recommendation

#### Theme recommendations

**_The process :_**

- User already has chosen a commander and the previous algoritm is already made.
- This is for the theme buttons is the user wants other recommendations for his/hers commander.
- So same process as the algoritm before exept it skips getting the commander.
- Send theme in request and get same response as the previous algoritm.

_request body in form of json:_

```json
{
  "themeName": "The name of the chosen commanders themes goes here so for each theme do one of these."
}
```

_example_

```json
{
  "themeName": "infect"
},
{
  "themeName": "planeswalkers"
},
{
  "themeName": "phyrexians"
},
{
  "themeName": "+1/+1 counters"
},
{
  "themeName": "sagas"
}
```

So when request is made have is made under **themeName:** so that the API gets the right format.

**_The result structure :_**

_Sorted in these types -_

```
    creatures: [cards...],
    artifacts: [cards...],
    enchantments: [cards...],
    instants: [cards...],
    sorceries: [cards...],
    planeswalkers: [cards...],
    lands: [cards...]
```

_Within the types -_ Sorted after count.

_Result example -_

```json
{
  "creatures": [
    {
      "name": "fynn, the fangbearer",
      "count": 64,
      "cardInfo": {
        "image_uris": {
          "small": "https://cards.scryfall.io/small/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.jpg?1695476886",
          "normal": "https://cards.scryfall.io/normal/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.jpg?1695476886",
          "large": "https://cards.scryfall.io/large/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.jpg?1695476886",
          "png": "https://cards.scryfall.io/png/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.png?1695476886",
          "art_crop": "https://cards.scryfall.io/art_crop/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.jpg?1695476886",
          "border_crop": "https://cards.scryfall.io/border_crop/front/0/f/0fb05d34-05cb-4536-b7e6-2d526dc30a9f.jpg?1695476886"
        },
        "name": "Fynn, the Fangbearer",
        "id": "0fb05d34-05cb-4536-b7e6-2d526dc30a9f",
        "rarity": "rare",
        "cmc": 2,
        "type_line": "Legendary Creature — Human Warrior",
        "oracle_text": "Deathtouch\nWhenever a creature you control with deathtouch deals combat damage to a player, that player gets two poison counters. (A player with ten or more poison counters loses the game.)",
        "color_identity": ["G"],
        "keywords": ["Deathtouch"],
        "flavor_text": "\"As you wish.\"",
        "_id": "664ff24cb273651e0b34d380"
      }
    }
  ],
  "artifacts": [
    ...
  ]
}
```

## Top Commanders

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/topcoms

#### Top Commanders

**_The process :_**

- User want's to find a new commander to play
- User then goes to look att the top commanders to get some inspiration.
- Thats pretty much it for ALL Top Commanders.

They are devided in 3 objects in mongoDB. So there is 2000 commanders per object.

_Result example -_

```json
[
  {
    "_id": "6647d22ea8c3f65a9db76485",
    "batchName": "Top 0-2000 Commanders",
    "commanders": [
      {
        "name": "Atraxa, Praetors' Voice",
        "num_decks": 32292,
        "rank": 1,
        "themes": [
          "infect",
          "planeswalkers",
          "phyrexians",
          "+1/+1 counters",
          "sagas"
        ],
        "_id": "6647d22ea8c3f65a9db76486"
      },
      {
        "name": "The Ur-Dragon",
        "num_decks": 23899,
        "rank": 2,
        "themes": [
          "dragons",
          "shapeshifters",
          "treasure",
          "legends",
          "big mana"
        ],
        "_id": "6647d22ea8c3f65a9db76487"
      }
    ]
  }
]
```

#### One Top Commander

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/topcoms/:name

**_The process :_**

- User want's to find a new commander to play.
- User then goes to look att the top commanders to get some inspiration.
- Now the user wants to check one of the commanders.
- Thats pretty much it for Single Top Commanders.

_Result example -_

```json
{
  "name": "Atraxa, Praetors' Voice",
  "num_decks": 32292,
  "rank": 1,
  "themes": [
    "infect",
    "planeswalkers",
    "phyrexians",
    "+1/+1 counters",
    "sagas"
  ],
  "_id": "6647d22ea8c3f65a9db76486"
}
```

## Top Commanders for Each Theme

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/themescom

#### Top Commanders Theme

**_The process :_**

- User want's to find a new commander to play based on the theme the user would like to build a deck around.
- User then goes to look att the top commanders for each theme to get some inspiration.
- Thats pretty much it for ALL Top Commanders in themes.

_Result example -_

```json
[
  {
    "_id": "665481ba3d1828aa56766aad",
    "themes": [
      {
        "infect": [
          "Atraxa, Praetors' Voice",
          "Meren of Clan Nel Toth",
          "Atraxa, Grand Unifier",
          "Satoru Umezawa",
          "Sheoldred, the Apocalypse",
          "Marrow-Gnawer",
          "Fynn, the Fangbearer",
          "Jon Irenicus, Shattered One",
          "The Wise Mothman",
          "Etali, Primal Conqueror",
          "Elesh Norn, Mother of Machines",
          "Ezuri, Claw of Progress",
          "Ixhel, Scion of Atraxa",
          "Skullbriar, the Walking Grave",
          "Brimaz, Blight of Oreskos",
          "Yawgmoth, Thran Physician",
          "Saskia the Unyielding",
          "Toxrill, the Corrosive",
          "Falco Spara, Pactweaver",
          "Xenagos, God of Revels",
          "Hapatra, Vizier of Poisons",
          "Vishgraz, the Doomhive",
          "Karumonix, the Rat King",
          "Doran, the Siege Tower",
          "Kamiz, Obscura Oculus",
          "Vorinclex, Monstrous Raider",
          "Breena, the Demagogue",
          "Rafiq of the Many",
          "Cazur, Ruthless Stalker // Ukkima, Stalking Shadow",
          "Otrimi, the Ever-Playful",
          "Ezuri, Stalker of Spheres",
          "Volrath, the Shapestealer",
          "Glissa, the Traitor",
          "Xavier Sal, Infested Captain",
          "Halana and Alena, Partners",
          "Massacre Girl, Known Killer",
          "Jin-Gitaxias",
          "Ramses, Assassin Lord",
          "Willowdusk, Essence Seer",
          "The Scorpion God",
          "Mondrak, Glory Dominus",
          "Kros, Defense Contractor",
          "Mr. Orfeo, the Boulder",
          "Jin-Gitaxias, Progress Tyrant",
          "Yisan, the Wanderer Bard",
          "Gale, Waterdeep Prodigy // Scion of Halaster",
          "Perrie, the Pulverizer",
          "Tekuthal, Inquiry Dominus",
          "Elesh Norn",
          "Skithiryx, the Blight Dragon",
          "Glissa Sunslayer",
          "Elesh Norn, Grand Cenobite",
          "Bess, Soul Nourisher",
          "Tevesh Szat, Doom of Fools // Thrasios, Triton Hero",
          "Sivitri, Dragon Master",
          "Rigo, Streetwise Mentor",
          "The Most Dangerous Gamer",
          "Tetsuko Umezawa, Fugitive",
          "Skrelv, Defector Mite",
          "Brokkos, Apex of Forever",
          "Chevill, Bane of Monsters",
          "Venser, Corpse Puppet",
          "Rilsa Rael, Kingpin",
          "Ria Ivor, Bane of Bladehold",
          "Storvald, Frost Giant Jarl",
          "Varolz, the Scar-Striped",
          "General Marhault Elsdragon",
          "Glissa, Herald of Predation",
          "Vorinclex",
          "Kaseto, Orochi Archmage",
          "Zopandrel, Hunger Dominus",
          "Sheoldred, Whispering One",
          "Tanazir Quandrix",
          "Snapdax, Apex of the Hunt",
          "Gorm the Great // Virtus the Veiled",
          "Ertai, the Corrupted",
          "Subira, Tulzidi Caravanner",
          "Sun Quan, Lord of Wu",
          "Skeleton Ship",
          "Roalesk, Apex Hybrid",
          "Rona, Sheoldred's Faithful",
          "Sidar Kondo of Jamuraa // Tymna the Weaver",
          "Eutropia the Twice-Favored",
          "Jin-Gitaxias, Core Augur",
          "Krydle of Baldur's Gate",
          "Migloz, Maze Crusher",
          "Yargle, Glutton of Urborg",
          "Vorinclex, Voice of Hunger",
          "Temmet, Vizier of Naktamun",
          "Agent Frank Horrigan",
          "Arwen, Mortal Queen",
          "Vhati il-Dal",
          "Drana, Liberator of Malakir",
          "Ikra Shidiqi, the Usurper // Sidar Kondo of Jamuraa",
          "Saryth, the Viper's Fang",
          "Ambassador Blorpityblorpboop",
          "Dralnu, Lich Lord",
          "Vorosh, the Hunter",
          "Kydele, Chosen of Kruphix // Tevesh Szat, Doom of Fools",
          "Trostani, Three Whispers",
          "Sidar Kondo of Jamuraa // Silas Renn, Seeker Adept",
          "Kinzu of the Bleak Coven",
          "MacCready, Lamplight Mayor",
          "Melira, Sylvok Outcast",
          "Sidar Kondo of Jamuraa // Vial Smasher the Fierce",
          "Melira, the Living Cure",
          "Syr Faren, the Hengehammer",
          "Jeska, Thrice Reborn // Reyhan, Last of the Abzan",
          "Thriss, Nantuko Primus",
          "Jeska, Thrice Reborn // Sidar Kondo of Jamuraa",
          "Ikra Shidiqi, the Usurper // Toggo, Goblin Weaponsmith",
          "Alora, Merry Thief // Master Chef",
          "Reyhan, Last of the Abzan // Toggo, Goblin Weaponsmith"
        ]
      },
      { ... },
      { ... }
    ]
  }
]
```

#### One Theme with top Commanders

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/themescom/:name

**_The process :_**

- User want's to find a new commander to play based on the theme the user would like to build a deck around.
- User then goes to look att the top commanders for each theme to get some inspiration.
- Then the user can choose a theme to look at and get that themes top commanders.
- Thats pretty much it for ALL Top Commanders in themes.

_Result example -_

```json
{
  "phyrexians": [
    "Atraxa, Praetors' Voice",
    "Atraxa, Grand Unifier",
    "Omnath, Locus of All",
    "Sheoldred, the Apocalypse",
    "Jon Irenicus, Shattered One",
    "Elesh Norn, Mother of Machines",
    "Ixhel, Scion of Atraxa",
    "Brimaz, Blight of Oreskos",
    "Yawgmoth, Thran Physician",
    "Vishgraz, the Doomhive",
    "Vorinclex, Monstrous Raider",
    "Gix, Yawgmoth Praetor",
    "Otrimi, the Ever-Playful",
    "Ezuri, Stalker of Spheres",
    "Jin-Gitaxias",
    "Mondrak, Glory Dominus",
    "The Swarmlord",
    "Elesh Norn",
    "Skithiryx, the Blight Dragon",
    "Glissa Sunslayer",
    "Elesh Norn, Grand Cenobite",
    "Ishai, Ojutai Dragonspeaker // Reyhan, Last of the Abzan",
    "Skrelv, Defector Mite",
    "Brokkos, Apex of Forever",
    "Venser, Corpse Puppet",
    "Ria Ivor, Bane of Bladehold",
    "Sheoldred",
    "Glissa, Herald of Predation",
    "Vorinclex",
    "Zopandrel, Hunger Dominus",
    "Malcator, Purity Overseer",
    "Urabrask, Heretic Praetor",
    "Ertai, the Corrupted",
    "Migloz, Maze Crusher",
    "Urabrask the Hidden",
    "Agent Frank Horrigan",
    "Vhati il-Dal",
    "Sidar Kondo of Jamuraa // Silas Renn, Seeker Adept",
    "Melira, the Living Cure",
    "Tsabo Tavoc",
    "Prava of the Steel Legion // Reyhan, Last of the Abzan"
  ]
}
```

## Themes

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/themes

#### Top Commanders Theme

**_The process :_**

- User want's to look at what themes there are decks built apon.
- With this request the user will get every theme displayed with three of the cards in that theme.

_Result example -_

```json
[
  {
    "themeName": "+1_+1_counters",
    "firstThreeCards": [
      {
        "image_uris": {
          "small": "https://cards.scryfall.io/small/front/0/0/0000cd57-91fe-411f-b798-646e965eec37.jpg?1562549609",
          "normal": "https://cards.scryfall.io/normal/front/0/0/0000cd57-91fe-411f-b798-646e965eec37.jpg?1562549609",
          "large": "https://cards.scryfall.io/large/front/0/0/0000cd57-91fe-411f-b798-646e965eec37.jpg?1562549609",
          "png": "https://cards.scryfall.io/png/front/0/0/0000cd57-91fe-411f-b798-646e965eec37.png?1562549609",
          "art_crop": "https://cards.scryfall.io/art_crop/front/0/0/0000cd57-91fe-411f-b798-646e965eec37.jpg?1562549609",
          "border_crop": "https://cards.scryfall.io/border_crop/front/0/0/0000cd57-91fe-411f-b798-646e965eec37.jpg?1562549609"
        },
        "name": "Siren Lookout",
        "id": "0000cd57-91fe-411f-b798-646e965eec37",
        "rarity": "common",
        "cmc": 3,
        "type_line": "Creature — Siren Pirate",
        "oracle_text": "Flying\nWhen Siren Lookout enters the battlefield, it explores. (Reveal the top card of your library. Put that card into your hand if it's a land. Otherwise, put a +1/+1 counter on this creature, then put the card back or put it into your graveyard.)",
        "color_identity": ["U"],
        "keywords": ["Flying", "Explore"],
        "_id": "664ff214b273651e0b330138"
      },
      { ... },
      { ... }
    ]
  }
]
```

#### One Theme with all cards

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/theme/:name

**_The process :_**

- User want's to look at what themes there are decks built apon.
- With the earlier request the user will get every theme displayed with three of the cards in that theme.
- Then with this request the user will get to see all cards connected to that theme.

_Result example -_

```json
[
  {
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/0/0/000ac9e5-3c95-4e87-9424-109e2eea6b45.jpg?1572892902",
      "normal": "https://cards.scryfall.io/normal/front/0/0/000ac9e5-3c95-4e87-9424-109e2eea6b45.jpg?1572892902",
      "large": "https://cards.scryfall.io/large/front/0/0/000ac9e5-3c95-4e87-9424-109e2eea6b45.jpg?1572892902",
      "png": "https://cards.scryfall.io/png/front/0/0/000ac9e5-3c95-4e87-9424-109e2eea6b45.png?1572892902",
      "art_crop": "https://cards.scryfall.io/art_crop/front/0/0/000ac9e5-3c95-4e87-9424-109e2eea6b45.jpg?1572892902",
      "border_crop": "https://cards.scryfall.io/border_crop/front/0/0/000ac9e5-3c95-4e87-9424-109e2eea6b45.jpg?1572892902"
    },
    "name": "Blood Operative",
    "id": "000ac9e5-3c95-4e87-9424-109e2eea6b45",
    "rarity": "rare",
    "cmc": 3,
    "type_line": "Creature — Vampire Assassin",
    "oracle_text": "Lifelink\nWhen Blood Operative enters the battlefield, you may exile target card from a graveyard.\nWhenever you surveil, if Blood Operative is in your graveyard, you may pay 3 life. If you do, return Blood Operative to your hand.",
    "color_identity": ["B"],
    "keywords": ["Lifelink"],
    "_id": "664ff23db273651e0b345526"
  },
  { ... }
]
```

## Precons

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/precons

#### All Precons

**_The process :_**

- User want's to find a precon to see what cards are in it.
- This request will give back every single commander precon ever made.
- So the user can look around and see all the precons.

_Result example -_

```json
[
  {
    "2021": {
      "black": {
        "(C14)---Sworn-to-Darkness.json": [
          {
            "qty": 1,
            "name": "Bad Moon",
            "categories": ["Anthem"],
            "prices": {
              "ck": 2.49,
              "ckFoil": 0,
              "tcg": 1.55,
              "tcgFoil": 0,
              "mtgo": 0.27,
              "mtgoFoil": 0,
              "cm": 1.48,
              "cmFoil": 0
            },
            "set": "Commander 2014",
            "superTypes": [],
            "subTypes": [],
            "saltScore": 0.15,
            "cmc": 2
          },
          { ... },
          { ... }
        ]
      }
    }
  }
]
```

#### One Precon

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/precons/:name

**_The process :_**

- User want's to find a precon to see what cards are in it.
- Now the user wants to build a their deck and the deck they have in real life is built on a precon.
- With this request we can then give the user the opportunity to add the cards to their deck so they can just easily change the cards theved changed in real life.

_Result example -_

```json
{
  "name": "(MKM)---Revenant-Recon.json",
  "precon": [
    {
      "qty": 1,
      "name": "Case of the Shifting Visage",
      "categories": ["Enchantment"],
      "prices": {
        "ck": 0.49,
        "ckFoil": 0,
        "tcg": 0.31,
        "tcgFoil": 0,
        "mtgo": 18.01,
        "mtgoFoil": 0.1,
        "cm": 0.73,
        "cmFoil": 0
      },
      "set": "Murders at Karlov Manor Commander",
      "superTypes": [],
      "subTypes": ["Case"],
      "saltScore": null,
      "cmc": 3
    },
    { ... },
    { ... }
  ]
}
```

## Precon Releases

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/preconrelease

#### All Precon Releases

**_The process :_**

- User want's to know when a precon was released?
- Perfect here with this router you can get the full list of all the precons names and when they were released and in what set.

_Result example -_

```json
[
  {
    "year": "2009",
    "sets": {
      "TD0": {
        "title": "2009 Preconstructed Decks",
        "decks": [
          "Heavenly Inferno",
          "Mirror Mastery",
          "Counterpunch",
          "Devour for Power",
          "Political Puppets"
        ]
      }
    }
  },
  {
    "year": "2011",
    "sets": {
      "CMD": {
        "title": "2011 Preconstructed Decks",
        "decks": [
          "Heavenly Inferno",
          "Mirror Mastery",
          "Counterpunch",
          "Devour for Power",
          "Political Puppets"
        ]
      }
    }
  },
  { ... },
  { ... }
]
```

## Decks

- [All Decks](#all-decks)
- [All Decks filtered by mana color](#all-decks-filtered-by-mana-color)
- [All Decks next page as they are filtered](#all-decks-next-page-as-they-are-filtered)
- [One Deck](#one-deck)

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/decks

#### All Decks

**_The process :_**

- User want's to get some insperation for what type of deck they could build themselfs.
- That's when this request comes in with data of 1300 decks ready to be studied.

_Result example -_

```json
{
  "docs": [
    {
      "_id": "6647f41cee5c16f48649dfad",
      "deckName": "Deck 1",
      "color": "black",
      "__v": 0
    },
    {
      "_id": "6647f41dee5c16f48649e3aa",
      "deckName": "Deck 10",
      "color": "black",
      "__v": 0
    },
    {
      "_id": "6647f422ee5c16f4864a02ea",
      "deckName": "Deck 100",
      "color": "black-green",
      "__v": 0
    },
    {
      "_id": "6647f456ee5c16f4864b4e26",
      "deckName": "Deck 1000",
      "color": "white-blue-black-green",
      "__v": 0
    },
    {}
  ]
}
```

#### All Decks filtered by mana color

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/decks?color=black

**_The process :_**

- User want's to get some insperation for what type of deck they could build themselfs.
- Thats when this request comes in with data of 1300 decks ready to be studied.

- And here the user can filter out all other colors than the ones they are interested in.

**_Mana color types -_**

- black
- black-green
- black-red
- black-red-green
- blue
- blue-black
- blue-black-green
- blue-black-red
- blue-green
- blue-red
- blue-red-green
- colorless
- green
- red
- red-green
- white
- white-black
- white-black-green
- white-black-red
- white-black-red-green
- white-blue
- white-blue-black
- white-blue-black-green
- white-blue-black-red
- white-blue-black-red-green
- white-blue-green
- white-blue-red
- white-blue-red-green
- white-green
- white-red
- white-red-green

_Result example -_

https://MTGTombAPI.onrender.com/api/decks?color=blue-red

```json
{
  "docs": [
    {
      "_id": "6647f437ee5c16f4864a883c",
      "deckName": "Deck 459",
      "color": "blue-red",
      "__v": 0
    },
    {
      "_id": "6647f437ee5c16f4864a8886",
      "deckName": "Deck 460",
      "color": "blue-red",
      "__v": 0
    },
    {
      "_id": "6647f437ee5c16f4864a88e6",
      "deckName": "Deck 461",
      "color": "blue-red",
      "__v": 0
    },
    {
      "_id": "6647f437ee5c16f4864a894c",
      "deckName": "Deck 462",
      "color": "blue-red",
      "__v": 0
    },
    {
      "_id": "6647f437ee5c16f4864a8988",
      "deckName": "Deck 463",
      "color": "blue-red",
      "__v": 0
    },
    {}
  ]
}
```

#### All Decks next page as they are filtered

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/decks?color=blue-red&page=2&limit=20

**page=2 -** What page is next compared to what the user is on.
**limit=20 -** How many decks gets feched at a time.

**_The process :_**

- User want's to see more use this uri to be able to get the next page so each time the user presses next it updates the page number 1++.

_Result example -_

```json
{
  "docs": [
    {
      "_id": "6647f437ee5c16f4864a883c",
      "deckName": "Deck 459",
      "color": "blue-red",
      "__v": 0
    },
    {
      "_id": "6647f437ee5c16f4864a8886",
      "deckName": "Deck 460",
      "color": "blue-red",
      "__v": 0
    },
    {
      "_id": "6647f438ee5c16f4864a8e79",
      "deckName": "Deck 478",
      "color": "blue-red",
      "__v": 0
    }
  ],
  "totalDocs": 55,
  "limit": 20,
  "totalPages": 3,
  "page": 1,
  "pagingCounter": 1,
  "hasPrevPage": false,
  "hasNextPage": true,
  "prevPage": null,
  "nextPage": 2
}
```

#### One Deck

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/decks/:id

**_The process :_**

- User want's to get some insperation for what type of deck they could build themselfs.
- This request lets the user get a closer look of whats inside the each deck to see what kind of cards the deck has.

_Result example -_

https://MTGTombAPI.onrender.com/api/decks/6647f444ee5c16f4864add76

```json
{
  "_id": "6647f444ee5c16f4864add76",
  "deckName": "Deck 700",
  "color": "red-green",
  "cards": [
    {
      "qty": 1,
      "name": "Slagwoods Bridge",
      "categories": ["Land"],
      "prices": {
        "ck": 0.35,
        "ckFoil": 0.49,
        "tcg": 0.11,
        "tcgFoil": 0.13,
        "mtgo": 0.03,
        "mtgoFoil": 0.03,
        "cm": 0.11,
        "cmFoil": 0.22
      },
      "set": "Modern Horizons 2",
      "superTypes": [],
      "subTypes": [],
      "saltScore": 0.02,
      "cmc": 0,
      "_id": "6647f444ee5c16f4864add77"
    },
    { ... },
    { ... }
  ]
}
```

## Action Words

- [All Action Words](#all-action-words)
- [One Action Word](#one-action-word)
- [All Action Words for One Letter](#all-action-words-for-one-letter)
- [All Action Words sorted after letter](#all-the-action-words-sorted-by-letter)

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/actionwords

**| When puting filters on letters or searching for specifik word its case sensitive so it need to be capital letter in the beginning |**

#### All Action Words

**_The process :_**

- User want's to understand some of the action words that are used in the game.
- Then here's a request to help the user learn what the action words mean.

_Result example -_

```json
{
  "_id": "6655039a3d1828aa56766ab5",
  "A": {
    "Adapt": {
      "Rules": "Players may modify the characteristics of creatures they control, often by increasing their power, toughness, or abilities.",
      "Explanation": "Adaptation allows creatures to evolve and become stronger or more resilient, adapting to the challenges presented during the game."
    },
    "Activate": {
      "Rules": "Players may use the abilities of permanents they control, often by paying a cost specified in the ability's text.",
      "Explanation": "Activation involves utilizing the activated abilities of cards on the battlefield, enabling players to trigger various effects to advance their strategies."
    },
    "Abandon": {
      "Rules": "Players may choose to discard cards from their hand, often as a cost for certain spells or abilities.",
      "Explanation": "Abandoning involves relinquishing cards from one's hand, sacrificing potential plays in favor of other strategic considerations."
    },
    { ... }
  }
}
```

#### One Action Word

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/actionwords/:name

**_The process :_**

- User want's to understand some of the action words that are used in the game.
- Then here's a request to help the user learn what the action words mean.

_Result example -_

https://MTGTombAPI.onrender.com/api/actionwords/Untap

```json
{
  "name": "Untap",
  "Rules": "Players may rotate tapped cards on the battlefield back to their upright position, readying them to be used again during their next turn.",
  "Explanation": "Untapping involves resetting cards on the battlefield, freeing them from the effects of being tapped and allowing them to be used again in subsequent turns."
}
```

#### All Action Words for One Letter

**_URI for this request_**

**GET** - https://MTGTombAPI.onrender.com/api/actionwords/letter/:letter

**_The process :_**

- User want's to understand some of the action words that are used in the game.
- Then here's a request to help the user learn what the action words mean.

_Result example -_

https://MTGTombAPI.onrender.com/api/actionwords/letter/U

```json
{
  "Untap": {
    "Rules": "Players may rotate tapped cards on the battlefield back to their upright position, readying them to be used again during their next turn.",
    "Explanation": "Untapping involves resetting cards on the battlefield, freeing them from the effects of being tapped and allowing them to be used again in subsequent turns."
  }
}
```

### All the Action Words sorted by letter

| [A](#a) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [Z](#z) |

##### A

- Adapt
- Activate
- Abandon
- Amass
- Assemble

##### C

- Cast
- Clash
- Cloak
- Collect evidence
- Connive
- Counter
- Convert

##### D

- Destroy
- Detain
- Discover
- Discard
- Double

##### E

- Exchange
- Exert
- Exile

##### F

- Fateseal
- Fight
- Food
- Plot
- Populate
- Proliferate
- Play
- Protect

##### R

- Regenerate
- Reveal
- Role token

##### S

- Sacrifice
- Scry
- Set in motion
- Shuffle
- Support

##### T

- Tap
- Time Travel
- Transform
- Treasure

##### U

- Untap

##### V

- Venture into the dungeon
- Vote
- Vent

##### Z

- Zone

