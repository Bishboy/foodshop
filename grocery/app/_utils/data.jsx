import fruits from '../../assets/image/cherries.png'
import grain from '../../assets/image/flour.png'
import milk from '../../assets/image/milk.png'
import cabage from '../../assets/image/cabbage.png'
import grocery from '../../assets/image/groceries.png'
import icecream from '../../assets/image/ice-cream.png'
import turkey from '../../assets/image/turkey.png'
import slider1 from '../../assets/image/firstFood.jpg'
import slider2 from '../../assets/image/secondFood.jpg'
import slider3 from '../../assets/image/thirdFood.jpg'
import banana from '../../assets/image/banana.png'
import pineapple from '../../assets/image/pineapple-fruit.png'
import avocado from '../../assets/image/green-avocados-white-surface.png'
import soursop from '../../assets/image/soursop.png'
import stawberry from '../../assets/image/fresh-strawberries.png'
import chickenSalad from '../../assets/image/chickenBhamu.png'
import chickCocnut from '../../assets/image/chickencocnut.png'
import roastedChicken from '../../assets/image/roastedChicken.png'
import parmensa from '../../assets/image/parmensan.png'
import chickenBh from '../../assets/image/fried-shrimps-with-garlic-removebg-preview.png'
import soymilk from '../../assets/image/soymilk.png'
import oatmilk from '../../assets/image/oatmilk.png'
import frozen from '../../assets/image/frozen.png'
import greek from '../../assets/image/greek.png'
import croissant from '../../assets/image/Croissant_Sandwich.png'
import eggyolk from '../../assets/image/eggyolkPastry.png'
import fishchip from '../../assets/image/Fish_and_Chips.png'
import filopast from '../../assets/image/Filo_Pastry.png'
import beaver from '../../assets/image/Beaver_Tails.png'
import cinnamon from '../../assets/image/cinnamon_Bun.png'
import thaifish from '../../assets/image/Thai_Fish_Cakes.png'
import tunacasse from '../../assets/image/tuna_casserole.png'
import broccoli from '../../assets/image/Broccoli.png'
import spinanch from '../../assets/image/spinanch.png'
import garlic from '../../assets/image/garlic.png'
import cabbagee from '../../assets/image/myCabbage.png'
import sorghum from '../../assets/image/Sorghum.png'
import millet from '../../assets/image/millet.png'
import wheat from '../../assets/image/wheat.png'
import corn from '../../assets/image/corn.png'
import barley from '../../assets/image/Barley.png'
import fishtaco from '../../assets/image/Fish_Tacos.png'
import tubber from '../../assets/image/yam.png'




const foodList = [
  {
    id: 1,
    name: "Fruits",
    photo: fruits,
  },
  {
    id: 2,
    name: "Chicken",
    photo: turkey,
  },
  {
    id: 3,
    name: "Milk",
    photo: milk,
  },
  {
    id: 4,
    name: "Bakery",
    photo: grocery,
  },
  {
    id: 5,
    name: "Fish-dish",
    photo: icecream,
  },
  {
    id: 6,
    name: "Vegetable",
    photo: cabage,
  },
  {
    id: 7,
    name: "Grain",
    photo: grain,
  },
  {
    id: 8,
    name: "Tubber",
    photo: tubber,
  },
];

const sliderList = [
  {
    id: 1,
    photo: slider1,
  },
  {
    id: 2,
    photo: slider2,
  },
  {
    id: 3,
    photo: slider3,
  },
];

const allList = [
  {
    id: 1,
    name: "banana",
    category: "Fruits",
    description:
      "Packed with natural energy, bananas are the perfect on-the-go snack! Rich in potassium, vitamins, and fiber, they fuel your day with wholesome nutrition. Enjoy their sweet taste and creamy texture in smoothies, breakfast bowls, or just peel and eat for a quick, healthy treat!",
    image: banana,
    cost: 500,
    quantity: 4,
  },
  {
    id: 2,
    name: "pineapple",
    category: "Fruits",
    description:
      "Brighten your day with the tropical taste of pineapple! Bursting with juicy sweetness and a tangy twist, pineapples are rich in vitamin C, antioxidants, and digestive enzymes. Perfect for snacking, adding to salads, or blending into refreshing drinks, this golden fruit brings a taste of paradise to every bite!",
    image: pineapple,
    cost: 980,
    quantity: 10,
  },
  {
    id: 3,
    name: "Chicken salad",
    category: "Chicken",
    description:
      "Chicken salad is any salad with chicken as a main ingredient. Other common ingredients include mayonnaise, hard-boiled egg, celery, onion, pepper, pickles and a variety of mustards.",
    image: chickenSalad,
    cost: 1200,
    quantity: 5,
  },

  {
    id: 4,
    name: "Chicken parmesan",
    category: "Chicken",
    description:
      "Chicken parmesan or chicken parmigiana is a dish that consists of breaded chicken breast covered in tomato sauce and mozzarella, Parmesan, or provolone. Ham or bacon is sometimes added.",
    image: parmensa,
    cost: 1000,
    quantity: 2,
  },
  {
    id: 5,
    name: "roosted Chicken",
    category: "Chicken",
    description:
      "Roast chicken is chicken prepared as food by roasting whether in a home kitchen, over a fire, or with a rotisserie.",
    image: roastedChicken,
    cost: 480,
    quantity: 12,
  },
  {
    id: 6,
    name: "Chicken Bhuna",
    category: "Chicken",
    description:
      "Indian dishes like Butter Chicken, Chicken Biryani, Chicken korma, Vindaloo need no introduction as all of these are world popular.",
    image: chickenBh,
    cost: 700,
    quantity: 9,
  },
  {
    id: 7,
    name: "Coconut chicken curry",
    category: "Chicken",
    description:
      "Coconut Chicken Curry. This bold, fragrant curry is made with coconut milk to keep things on the lighter side.",
    image: chickCocnut,
    cost: 904,
    quantity: 5,
  },
  {
    id: 8,
    name: "Avocado pea",
    category: "Fruits",
    description:
      "Creamy, rich, and packed with heart-healthy fats, the avocado pear is the perfect addition to your daily diet. Whether sliced on toast, blended into smoothies, or enjoyed in a salad, its velvety texture and subtle flavor make it a versatile superfood that supports wellness and enhances any meal.",
    image: avocado,
    cost: 200,
    quantity: 12,
  },
  {
    id: 9,
    name: "Strawberries",
    category: "Fruits",
    description:
      "Bright, juicy, and bursting with sweetness, strawberries are a delightful treat that bring a taste of summer to your plate year-round. Rich in antioxidants and vitamin C, these vibrant red berries are perfect for snacking, desserts, and adding a fresh twist to your favorite dishes.",
    image: stawberry,
    cost: 300,
    quantity: 28,
  },
  {
    id: 10,
    name: "Soursop",
    category: "Fruits",
    description:
      " Experience the exotic flavor of soursop, a tropical fruit known for its unique blend of sweet and tangy notes. With a creamy texture and a flavor profile reminiscent of pineapple and citrus, soursop is not only delicious but also packed with vitamins and antioxidants that support immune health and vitality.",
    image: soursop,
    cost: 300,
    quantity: 4,
  },
  {
    id: 11,
    name: "Greek yogurt",
    category: "Milk",
    description:
      " Rich, tangy, and luxuriously creamy, Greek yogurt is a versatile powerhouse packed with protein and probiotics. Whether enjoyed on its own, in smoothies, or as a base for sauces and dressings, this thick yogurt delivers a satisfying taste and texture that supports digestive health and keeps you feeling full longer.",
    image: greek,
    cost: 1200,
    quantity: 7,
  },
  {
    id: 12,
    name: "Frozen yogurt",
    category: "Milk",
    description:
      " reat yourself to the refreshing, guilt-free pleasure of frozen yogurt. Light, creamy, and customizable with your favorite toppings, this delightful dessert offers the perfect balance of sweet indulgence and healthy living. It's a fun, flavorful way to cool down and satisfy your sweet tooth without the extra calories.",
    image: frozen,
    cost: 120,
    quantity: 6,
  },
  {
    id: 13,
    name: "oat milk",
    category: "Milk",
    description:
      " Smooth, creamy, and naturally sweet, oat milk is the perfect plant-based alternative for your favorite beverages and recipes. Made from whole oats, this dairy-free option is rich in fiber and heart-healthy beta-glucans, offering a deliciously versatile way to enjoy lattes, cereals, and baking with a sustainable, earth-friendly twist.",
    image: oatmilk,
    cost: 309,
    quantity: 9,
  },
  {
    id: 14,
    name: "soy milk",
    category: "Milk",
    description:
      "Rich in protein and naturally lactose-free, soy milk is a nourishing and versatile dairy alternative that fits seamlessly into any lifestyle. With its smooth texture and subtle flavor, soy milk is ideal for drinking, cooking, or adding to coffee, providing a nutritious boost that's packed with essential vitamins and minerals.",
    image: soymilk,
    cost: 549,
    quantity: 6,
  },
  {
    id: 15,
    name: "Croissants",
    category: "Bakery",
    description:
      "A croissant is a French pastry made from puff pastry in a crescent shape. It is a buttery, flaky, viennoiserie pastry inspired by the shape of the Austrian kipferl, but using the French yeast-leavened laminated dough. Croissants are named for their historical crescent shape.",
    image: croissant,
    cost: 480,
    quantity: 12,
  },
  {
    id: 16,
    name: "Filo pastry",
    category: "Bakery",
    description:
      " Filo is a very thin unleavened dough used for making pastries such as baklava and börek in Middle Eastern and Balkan cuisines. Filo-based pastries are made by layering many sheets of filo brushed with oil or butter; the pastry is then baked.",
    image: filopast,
    cost: 320,
    quantity: 2,
  },
  {
    id: 17,
    name: " Beaver Tail",
    category: "Bakery",
    description:
      " A fried dough pastry, individually hand stretched to resemble a beaver's tail then covered in different toppings including cinnamon and sugar, fruit jams, chocolate, peanut butter, butter and garlic, and M&Ms. In some parts of Canada, it is also called an Elephant Ear",
    image: beaver,
    cost: 760,
    quantity: 3,
  },
  {
    id: 18,
    name: "Cinnamon Bun",
    category: "Bakery",
    description:
      " A cinnamon roll consists of a rolled sheet of yeast-leavened dough onto which a cinnamon and sugar mixture (and raisins or other ingredients in some cases) is sprinkled over a thin coat of butter. The deep fried version is cinnamon roll or cinnamon bun doughnut. Its main ingredients are flour, cinnamon, sugar, and butter, which provide a robust and sweet flavor.",
    image: cinnamon,
    cost: 360,
    quantity: 10,
  },
  {
    id: 19,
    name: " Egg yolk pastry",
    category: "Bakery",
    description:
      " A traditional Taiwanese mooncake, in which the filling is made of salted duck egg yolk and red bean paste. Egg yolk pastries use naturally fermented salted egg yolks marinated in red soil with grape seed oil, and they are made with many layers.",
    image: eggyolk,
    cost: 430,
    quantity: 9,
  },
  {
    id: 20,
    name: "fish and chips",
    category: "Fish-dish",
    description:
      " Fish and chips is a hot dish consisting of fried fish in batter, served with chips. The dish originated in England, where these two components had been introduced from separate immigrant cultures; it is not known who combined them.",
    image: fishchip,
    cost: 1270,
    quantity: 7,
  },
  {
    id: 21,
    name: "Thai fish cakes",
    category: "Fish-dish",
    description:
      " Simple fish cakes. One of our most popular recipes on olive, these crispy fish cakes are both versatile and easy to rustle up.",
    image: thaifish,
    cost: 790,
    quantity: 9,
  },

  {
    id: 22,
    name: "Fish tacos",
    category: "Fish-dish",
    description:
      " Tilapia Fish Tacos. Tilapia fish tacos are cool, creamy, and crunchy. The fish is blackened in the oven, then served with tangy Baja sauce and crisp cabbage",
    image: fishtaco,
    cost: 2000,
    quantity: 2,
  },
  {
    id: 23,
    name: "Tuna casserole",
    category: "Fish-dish",
    description:
      "Tuna casserole is a casserole primarily made with pasta or rice and canned tuna, with peas sometimes added. The dish is often topped with potato chips, corn flakes, breadcrumbs or canned fried onions.",
    image: tunacasse,
    cost: 2300,
    quantity: 13,
  },
  {
    id: 24,
    name: "Broccoli",
    category: "Vegetable",
    description:
      "TBroccoli is an edible green plant in the cabbage family whose large flowering head, stalk and small associated leaves are eaten as a vegetable. .",
    image: broccoli,
    cost: 510,
    quantity: 11,
  },
  {
    id: 25,
    name: "Spinach",
    category: "Vegetable",
    description:
      " Spinach is a leafy green vegetable and a great source of calcium, vitamins, iron, and antioxidants.",
    image: spinanch,
    cost: 200,
    quantity: 5,
  },
  {
    id: 26,
    name: "Garlic",
    category: "Vegetable",
    description:
      " Garlic is a species of bulbous flowering plant in the genus Allium. Its close relatives include the onion, shallot, leek, chive, Welsh onion, and Chinese onion",
    image: garlic,
    cost: 160,
    quantity: 20,
  },
  {
    id: 27,
    name: "Cabbage",
    category: "Vegetable",
    description:
      " Cabbage is highly nutritious vegetable. Cabbages are rich in vitamin C, fiber, and vitamin K. They may help with heart and digestive health.",
    image: cabbagee,
    cost: 200,
    quantity: 8,
  },
  {
    id: 28,
    name: "Barley",
    category: "Grain",
    description:
      " Nutty, chewy, and loaded with fiber, barley is a nutritious grain that brings a rich texture and earthy flavor to soups, stews, and salads. High in vitamins, minerals, and beta-glucans, barley supports heart health and offers a satisfying, hearty base for a wide variety of dishes.",
    image: barley,
    cost: 480,
    quantity: 12,
  },
  {
    id: 29,
    name: "Sorghum",
    category: "Grain",
    description:
      " Discover the ancient grain that's naturally gluten-free and packed with nutrients—sorghum. With its mild, earthy flavor and chewy texture, sorghum is perfect for salads, soups, and as a rice alternative. High in fiber, protein, and antioxidants, this resilient grain supports digestive health and adds a wholesome twist to any meal",
    image: sorghum,
    cost: 230,
    quantity: 4,
  },
  {
    id: 30,
    name: "Wheat",
    category: "Grain",
    description:
      "Wheat is a versatile grain that's a cornerstone of global cuisine, offering a hearty and nutritious base for breads, pastas, and baked goods. Rich in fiber, vitamins, and minerals, wheat provides lasting energy and a satisfying bite, making it an essential ingredient for a balanced diet.",
    image: wheat,
    cost: 270,
    quantity: 10,
  },
  {
    id: 31,
    name: "Millet",
    category: "Grain",
    description:
      "Light, nutty, and naturally gluten-free, millet is an ancient grain that's perfect for those seeking a nutritious alternative to traditional grains. High in protein, fiber, and essential minerals, millet is easy to cook and can be used in everything from porridge to pilafs, delivering a satisfying texture and a subtle flavor.",
    image: millet,
    cost: 300,
    quantity: 15,
  },
  {
    id: 32,
    name: "Corn",
    category: "Grain",
    description:
      "Golden, sweet, and versatile, corn is a staple grain that adds a burst of flavor and nutrition to every meal. Whether enjoyed on the cob, in salads, or ground into flour for baking, corn is rich in fiber and essential nutrients, making it a delicious and wholesome choice for any dish.",
    image: corn,
    cost: 470,
    quantity: 7,
  },
];

const productList = [
  {
    id: 1,
    name: "Sorghum",
    category: "Grain",
    description:
      " Discover the ancient grain that's naturally gluten-free and packed with nutrients—sorghum. With its mild, earthy flavor and chewy texture, sorghum is perfect for salads, soups, and as a rice alternative. High in fiber, protein, and antioxidants, this resilient grain supports digestive health and adds a wholesome twist to any meal",
    image: sorghum,
    cost: 230,
    selling: 200,
    quantity: 4,
  },
  {
    id: 2,
    name: "Cabbage",
    category: "Vegetable",
    description:
      " Cabbage is highly nutritious vegetable. Cabbages are rich in vitamin C, fiber, and vitamin K. They may help with heart and digestive health.",
    image: cabbagee,
    cost: 200,
    selling:180,
    quantity: 8,
  },
  {
    id: 3,
    name: "Tuna casserole",
    category: "Fish-dish",
    description:
      "Tuna casserole is a casserole primarily made with pasta or rice and canned tuna, with peas sometimes added. The dish is often topped with potato chips, corn flakes, breadcrumbs or canned fried onions.",
    image: tunacasse,
    cost: 2300,
    quantity: 13,
  },
  {
    id: 4,
    name: " Egg yolk pastry",
    category: "Bakery",
    description:
      " A traditional Taiwanese mooncake, in which the filling is made of salted duck egg yolk and red bean paste. Egg yolk pastries use naturally fermented salted egg yolks marinated in red soil with grape seed oil, and they are made with many layers.",
    image: eggyolk,
    cost: 430,
    quantity: 9,
  },
  {
    id: 5,
    name: "soy milk",
    category: "Milk",
    description:
      "Rich in protein and naturally lactose-free, soy milk is a nourishing and versatile dairy alternative that fits seamlessly into any lifestyle. With its smooth texture and subtle flavor, soy milk is ideal for drinking, cooking, or adding to coffee, providing a nutritious boost that's packed with essential vitamins and minerals.",
    image: soymilk,
    cost: 549,
    selling:480,
    quantity: 6,
  },
  {
    id: 6,
    name: "banana",
    category: "Fruit",
    description:
      "Packed with natural energy, bananas are the perfect on-the-go snack! Rich in potassium, vitamins, and fiber, they fuel your day with wholesome nutrition. Enjoy their sweet taste and creamy texture in smoothies, breakfast bowls, or just peel and eat for a quick, healthy treat!",
    image: banana,
    cost: 500,
    quantity: 4,
  },
  {
    id: 7,
    name: "Chicken Bhuna",
    category: "Chicken",
    description:
      "Indian dishes like Butter Chicken, Chicken Biryani, Chicken korma, Vindaloo need no introduction as all of these are world popular.",
    image: chickenBh,
    cost: 700,
    quantity: 9,
  },
  {
    id: 15,
    name: "Croissants",
    category: "Bakery",
    description:
      "A croissant is a French pastry made from puff pastry in a crescent shape. It is a buttery, flaky, viennoiserie pastry inspired by the shape of the Austrian kipferl, but using the French yeast-leavened laminated dough. Croissants are named for their historical crescent shape.",
    image: croissant,
    cost: 480,
    selling: 400,
    quantity: 12,
  },
]; 

export { foodList, productList, allList, sliderList}