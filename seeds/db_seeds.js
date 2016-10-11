load('./smallPoxSeeds.js');
load('./tuberculosisSeeds.js');
load('./zikaSeeds.js');
load('./hivSeeds.js');
load('./zombieSeeds.js');

print(hivSeeds);

use diseases;

db.dropDatabase();

db.disease.insert([
  smallPoxSeeds,
  tuberculosisSeeds,
  zikaSeeds,
  hivSeeds,
  zombieSeeds        
]);