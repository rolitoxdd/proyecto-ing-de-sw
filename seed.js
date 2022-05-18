const prisma = require('./utils/prisma.js');
const testData = require('./testData');

let products = {
  data: testData
};
(async () => {
  await prisma.products.createMany(products);
})();
