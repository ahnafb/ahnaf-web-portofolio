// Data buah yang dimiliki Andi
const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 6,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 7,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// 1. Buah apa saja yang dimiliki Andi? (fruitName)
function getFruitsList() {
  return fruits.map((fruit) => fruit.fruitName);
}

// 2. Jumlah wadah yang dibutuhkan dan buah di masing-masing wadah
function getContainers() {
  const containers = {};
  fruits.forEach((fruit) => {
    const containerType = fruit.fruitType;
    if (!containers[containerType]) {
      containers[containerType] = [];
    }
    containers[containerType].push(fruit.fruitName);
  });

  const containerCount = Object.keys(containers).length;
  return { containerCount, containers };
}

// 3. Total stock buah di masing-masing wadah
function getTotalStockPerContainer() {
  const stockPerContainer = {};
  fruits.forEach((fruit) => {
    const containerType = fruit.fruitType;
    if (!stockPerContainer[containerType]) {
      stockPerContainer[containerType] = 0;
    }
    stockPerContainer[containerType] += fruit.stock;
  });

  return stockPerContainer;
}

// 4. Mencari komentar terkait kasus di atas
function findComments() {
  return "Tidak ada komentar saat ini";
}

// Menampilkan hasil
console.log("1. Buah yang dimiliki Andi:", getFruitsList());
console.log(
  "2. Jumlah wadah dan buah di masing-masing wadah:",
  getContainers()
);
console.log(
  "3. Total stock buah di masing-masing wadah:",
  getTotalStockPerContainer()
);
console.log("4. Komentar terkait kasus:", findComments());
