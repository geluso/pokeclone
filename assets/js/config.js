var LARGE_POKEMON = false;
var WELCOME_TEXT = 'Welcome to Poke Seattle! Please don\'t tell Facebook we\'re using their trademark "Poke" phrase.'
var NUM_DIGLETS = 10;
var INITIAL_ZOOM = 10;
var HORZ_BOUNDS = .25;
var VERT_BOUNDS = .12;
var CENTER = [47.6418751, -122.3479289];

var CIRCLE_SIZE = 100;
var NEAR_SPREAD = 100 / 100 / 800;

var STARTER_POKEMON = [
    ["1", "Bulbasaur"],
    ["4", "Charmander"],
    ["7", "Squirtle"],
    ["25", "Pikachu"]
];

var EASY_POKEMON =[
  ["12", "Weedle"],
  ["9", "Caterpie"],
  ["129", "Magikarp"],
  ["13", "Kakuna"],
  ["10", "Metapod"],
  ["40", "Zubat"],
  ["15", "Pidgey"],
  ["18", "Rattata"],
  ["20", "Spearow"],
  ["49", "Diglett"],
  ["38", "Jigglypuff"],
  ["45", "Paras"],
  ["22", "Ekans"],
  ["51", "Meowth"],
  ["116", "Horsea"],
  ["36", "Vulpix"],
  ["74", "Geodude"],
  ["59", "Poliwag"],
  ["69", "Bellsprout"],
  ["147", "Dratini"],
  ["26", "Sandshrew"],
  ["47", "Venonat"],
  ["55", "Mankey"],
  ["90", "Shellder"],
  ["66", "Machop"],
  ["3", "Charmander"],
  ["132", "Ditto"],
  ["62", "Abra"],
];
// 12 Weedle 195
// 9 Caterpie 195
// 129 Magikarp 200
// 13 Kakuna 205
// 10 Metapod 205
// 40 Zubat 245
// 15 Pidgey 251
// 18 Rattata 253
// 20 Spearow 262
// 49 Diglett 265
// 38 Jigglypuff 270
// 45 Paras 285
// 22 Ekans 288
// 51 Meowth 290
// 116 Horsea 295
// 36 Vulpix 299
// 74 Geodude 300
// 59 Poliwag 300
// 69 Bellsprout 300
// 147 Dratini 300
// 26 Sandshrew 300
// 47 Venonat 305
// 55 Mankey 305
// 90 Shellder 305
// 66 Machop 305
// 3 Charmander 309
// 132 Ditto 288
// 62 Abra 310
