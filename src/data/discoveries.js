// Discovery entries. kind: real = established science, mixed = real science with simplified in-game scale/layout.
// All text still needs a citation check against NASA sources in Stage 9 (see DEVELOPMENT_STATUS.md).
export const SOURCE_NOTE = 'General planetary science; NASA citation check due in Stage 9';
const E = (world, category, title, body, kind = 'real') => ({ world, category, title, body, kind });
export const DISCOVERIES = {
  'moon.gravity': E('moon', 'Planetary objects', 'Low gravity', 'The Moon\u2019s surface gravity is about 1.62 m/s\u00b2, roughly one sixth of Earth\u2019s. That is why your jumps here carry so far.'),
  'moon.regolith': E('moon', 'Geological formations', 'Regolith', 'The Moon is covered in regolith: loose dust and rock fragments broken up by billions of years of impacts. With no wind or water to smooth it, the grains stay sharp and abrasive.'),
  'moon.craters': E('moon', 'Geological formations', 'Impact craters', 'Most lunar craters were made by impacts. With no air, wind or running water to erode them, many survive for billions of years. Crater counts and sizes here are generated.', 'mixed'),
  'moon.earth': E('moon', 'Planetary exploration', 'Earth in the lunar sky', 'The Moon is tidally locked, so from the near side Earth stays in nearly the same patch of sky and is never visible from the far side. Near-side dishes point at Earth.'),
  'moon.solar': E('moon', 'Solar energy', 'Solar power on the Moon', 'With no atmosphere, sunlight reaches the surface unfiltered, but a lunar night lasts about two weeks, so a base needs energy storage or another source.'),
  'moon.ice': E('moon', 'Water and ice', 'Lunar water ice', 'Water ice has been detected in some permanently shadowed craters near the lunar poles, where sunlight never warms the ground. Ice deposit locations here are generated, not mapped.', 'mixed'),
  'moon.rover': E('moon', 'Planetary exploration', 'Lunar rovers', 'Apollo 15, 16 and 17 crews drove Lunar Roving Vehicles on the Moon. The rover here is a simplified model, not a replica.', 'mixed'),
  'moon.outpost': E('moon', 'Radiation', 'Surface habitats', 'A lunar habitat must hold air pressure and shield its crew from radiation and micrometeoroids. Covering modules with regolith is one proposed approach. The layout here is simplified.', 'mixed'),
  'moon.sample.basalt': E('moon', 'Geological formations', 'Basalt', 'The dark lunar maria are ancient lava plains made of basalt. Returned samples show they erupted billions of years ago.'),
  'moon.sample.anorthosite': E('moon', 'Geological formations', 'Anorthosite', 'The bright lunar highlands are rich in anorthosite, a pale rock. It supports the idea that the early Moon had a deep magma ocean.'),
  'moon.sample.glass': E('moon', 'Geological formations', 'Impact glass', 'Impacts melt rock, which cools quickly into glass beads and fragments found mixed into lunar soil.'),
  'mars.gravity': E('mars', 'Planetary objects', 'Martian gravity', 'Mars has a surface gravity of about 3.71 m/s\u00b2, around 38% of Earth\u2019s. You jump higher than on Earth but not as high as on the Moon.'),
  'mars.dust': E('mars', 'Atmospheric science', 'Red dust', 'Mars looks red because its dust is rich in iron oxide, the same family of compounds as rust.'),
  'mars.atmosphere': E('mars', 'Atmospheric science', 'A thin atmosphere', 'The Martian atmosphere is mostly carbon dioxide, and surface pressure is less than one percent of Earth\u2019s. It is too thin to breathe and gives little protection from radiation.'),
  'mars.dunes': E('mars', 'Geological formations', 'Wind-shaped dunes', 'Wind moves sand into dunes and ripples on Mars, and orbiters have watched some change over time. Dune placement and size here are generated, not mapped from real sites.', 'mixed'),
  'mars.craters': E('mars', 'Geological formations', 'Craters on Mars', 'Impacts have cratered Mars, but wind, dust and past geologic activity have eroded or buried many of them. The craters here are procedurally generated.', 'mixed'),
  'mars.solar': E('mars', 'Solar energy', 'Solar power on Mars', 'Sunlight at Mars is only about 43% as strong as at Earth, and dust settling on panels cuts output further. Wind has sometimes cleaned the panels of real rovers.'),
  'mars.comms': E('mars', 'Planetary exploration', 'Delayed communication', 'Radio signals take roughly 3 to 22 minutes one way between Mars and Earth depending on their positions, so crews cannot rely on live control from home.'),
  'mars.ice': E('mars', 'Water and ice', 'Subsurface water ice', 'Water ice lies close to the Martian surface at mid and high latitudes. NASA\u2019s Phoenix lander exposed ice just under the soil in 2008. Deposit locations here are generated, not mapped.', 'mixed'),
  'mars.storm': E('mars', 'Atmospheric science', 'Dust storms', 'Mars has dust storms that can last weeks, and some grow to cover the whole planet. They block sunlight, which can starve solar-powered landers. The storm timing in the game is simplified.', 'mixed'),
  'mars.rover': E('mars', 'Planetary exploration', 'Mars rovers', 'NASA has landed the rovers Sojourner, Spirit, Opportunity, Curiosity and Perseverance on Mars. The rover here is a simplified model.', 'mixed'),
  'mars.outpost': E('mars', 'Radiation', 'Surface habitats', 'A Mars habitat needs pressure, temperature control and radiation shielding because the thin air offers little protection. The layout here is simplified.', 'mixed'),
  'mars.sample.basalt': E('mars', 'Geological formations', 'Volcanic basalt', 'Much of the Martian crust is basalt, a volcanic rock. Mars also has the largest volcanoes known in the solar system.'),
  'mars.sample.hematite': E('mars', 'Geological formations', 'Hematite', 'Hematite is an iron oxide. NASA\u2019s Opportunity rover found hematite-rich spherules nicknamed blueberries, evidence that liquid water once soaked the rock there.'),
  'mars.sample.sulfate': E('mars', 'Water and ice', 'Sulfate salts', 'Sulfate minerals form when salty water evaporates, so rovers use them to trace where water once was.'),
};
// Which discovery each in-world object unlocks.
export const UNLOCKS = {
  moon: { crater: 'moon.craters', solar: 'moon.solar', habitat: 'moon.outpost', dish: 'moon.earth', rover: 'moon.rover', terminal: ['moon.regolith'], gravity: 'moon.gravity' },
  mars: { crater: 'mars.craters', solar: 'mars.solar', habitat: 'mars.outpost', dish: 'mars.comms', rover: 'mars.rover', terminal: ['mars.atmosphere', 'mars.dust'], dunes: 'mars.dunes', gravity: 'mars.gravity' },
};
export const SAMPLE_TYPES = {
  moon: [{ key: 'basalt', label: 'Basalt fragment', color: 0x5fa8ff }, { key: 'anorthosite', label: 'Anorthosite chip', color: 0xe8f0ff }, { key: 'glass', label: 'Impact glass bead', color: 0x7dffb0 }],
  mars: [{ key: 'basalt', label: 'Basalt fragment', color: 0xffa24c }, { key: 'hematite', label: 'Hematite spherule', color: 0xff5c5c }, { key: 'sulfate', label: 'Sulfate crust', color: 0xf4e8c8 }],
};
