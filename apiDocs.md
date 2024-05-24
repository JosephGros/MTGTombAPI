# API Documentation

### What is needed in the API

- [ ] Routes
    - [ ] Precons
    - [ ] Release list for precons
    - [ ] Decks
    - [ ] Themes
    - [ ] Top Commanders
    - [ ] Top Commanders in Themes
    - [ ] Theme commander synergy
    - [x] Algoritm
    - [x] Theme Algoritm


## MTG Tomb API Documentation


***Base URI***
https://MTGTombAPI.onrender.com/api

## Order
- [Algorithm for Recommendation](#algorithm-for-recommendation)
- [Algorithm for Theme Recommendation](#algorithm-for-theme-recommendation)
- [Themes](#themes)
- [Precons](#precons)
- [Decks](#decks)
- [Top Commanders](#top-commanders)
- [Top Commanders for Each Theme](#top-commanders-for-each-theme)

## Identify resources

Algorithm for Recommendations
Algorithm for Theme Recommendations
Themes
Precons
Decks
Top Commanders
Top Commanders for Each Theme

## Model URIs

- /recommendation
- /theme/recommendation
- /themes
- /themes/{id}
- /precons
- /precons/{id}
- /decks
- /decks/{id}
- /commanders/top
- /commanders/top/{theme}

## Algorithm for Recommendations

***URI for this request***

https://MTGTombAPI.onrender.com/api/recommendation

#### Commander recommendations

***The process :***

- When a user wants to build a deck and have chosen a commander that commanders name is inserted and sent to the API.
- The API then needs to take that name and compare with the top commanders.
- Then take that commander and the first theme in the themes array of that commander compare that to the themes data in the db.
- From there take all the cards in that theme and sort them after creature, artifact, enchantment, instant and land.
- Then compare those cards and count how many decks they are in to get an estimate.
- Send back to the user at MTG Tomb.

*request body in form of json:*

```json 
{
  "commanderName": "The name of the chosen commander goes here"
}
```


*example*
```json 
{
  "commanderName": "Atraxa, Praetors' Voice"
}
```

So when request is made have is made under **commanderName:** so that the API gets the right format.

***The result :***

*Sorted in these types -* ```creatures: [],
      artifacts: [],
      enchantments: [],
      instants: [],
      sorceries: [],
      planeswalkers: [],
      lands: []```

*Within the types -* Sorted after count.

*Result example -*

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


## Algorithm for Recommendations


***URI for this request***

https://MTGTombAPI.onrender.com/api/theme/recommendation

#### Commander recommendations

***The process :***

- User already has chosen a commander and the previous algoritm is already made. 
- This is for the theme buttons is the user wants other recommendations for his/hers commander. 
- So same process as the algoritm before exept it skips getting the commander.
- Send theme in request and get same response as the previous algoritm.

*request body in form of json:*

```json 
{
  "themeName": "The name of the chosen commanders themes goes here so for each theme do one of these."
}
```

*example*

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

***The result structure :***

*Sorted in these types -* 
```
    creatures: [cards...],
    artifacts: [cards...],
    enchantments: [cards...],
    instants: [cards...],
    sorceries: [cards...],
    planeswalkers: [cards...],
    lands: [cards...]
```

*Within the types -* Sorted after count.

*Result example -*

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