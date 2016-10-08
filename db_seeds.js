use diseases;

db.dropDatabase();

db.disease.insert([
{
  name: "Dysentary"
}
]);

db.disease.find();