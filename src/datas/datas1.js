const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra. Duis malesuada mattis tortor, ac ultrices elit euismod a.\n\nSuspendisse tincidunt eleifend volutpat. Phasellus vehicula sapien eu aliquam dignissim. Duis diam lorem, porta id nisi a, interdum rutrum quam. Suspendisse tincidunt euismod nunc. Etiam interdum, sem tincidunt sodales dignissim, orci ligula hendrerit dolor, ac suscipit neque eros sit amet magna. Sed gravida porttitor justo in venenatis. Maecenas dolor odio, semper eu velit pharetra, euismod placerat lectus. Curabitur nec aliquam mi. Aliquam suscipit iaculis vestibulum. Integer nibh ante, dignissim sed convallis eget, elementum ut nunc. Fusce non pharetra enim. Etiam ut justo est. Morbi commodo bibendum lorem a condimentum. Nulla ut magna tempor neque fringilla auctor. Ut aliquam ipsum urna, sodales ultricies ipsum pulvinar ac.\n\nNullam ultrices egestas dapibus. Vivamus sodales, nisl vel lobortis vestibulum, elit libero venenatis mauris, ut efficitur augue turpis ac lorem. Duis eu hendrerit ligula. Mauris auctor, purus ut ornare condimentum, ligula nisi egestas erat, eu fermentum libero massa tincidunt turpis. Suspendisse porta luctus elit eu pellentesque. Vivamus feugiat pellentesque hendrerit. Duis eu vulputate urna, quis bibendum nulla.\n\nPhasellus et faucibus elit, mollis accumsan arcu. Fusce scelerisque orci purus, vel scelerisque nisl viverra vitae. Nulla non lectus in lacus mollis consequat. Aenean consequat luctus tristique. Nunc imperdiet condimentum cursus. Praesent vel fermentum est, id pulvinar est. Nunc dolor velit, commodo non vehicula at, tincidunt lobortis mauris. Curabitur laoreet ipsum ut erat interdum ornare.";

const datas = [
  {
    id: 1,
    title: "Chicken Satay with Salad",
    description: "So gooood",
    time: "30 min",
    calories: "270 cal",
    image:
      "https://i.pinimg.com/564x/8b/47/67/8b4767a03b4f6fadb7ac02f307e9a7f1.jpg",
    ingredients: ["Chicken", "Vegetable", "Salad Dressings", "Barbeque Sauce",],
    kategori: ["Low Fat", "Low Carbs", "High Protein"],
    content: content,
  },
  {
    id: 2,
    title: "Creamy Vegan Tomato and Cauliflower Bisque",
    description: "So Good",
    image: "https://i.pinimg.com/564x/ab/7c/97/ab7c978def53dab12dd788a3c4082bbe.jpg",
    time: "30 min",
    calories: "321 cal",
    ingredients: ["Tomato", "Cauliflower", "Broth", "Coconut milk",],
    kategori: ["Low Carbs", "Vegan", "Healthy Fats"],
    content: content,
  },
  {
    id: 3,
    title: "Healthy Toast",
    description: "Liked it",
    image: "https://i.pinimg.com/564x/e6/74/1e/e6741ea003494ca3bfc3e60622bf5e3a.jpg",
    time: "10 min",
    calories: "178 cal",
<<<<<<< HEAD
    ingredients: ["Bread", "Egg", "Avocado", "Oregano",],
    kategori: ["Breakfast", "Vegan", "Healthy Fats"],
=======
    image:
      "https://i.pinimg.com/564x/e6/74/1e/e6741ea003494ca3bfc3e60622bf5e3a.jpg",
    ingredients: [
      "Bread",
      "Egg",
      "Avocado",
      "Oregano",
    ],
>>>>>>> 960547831f5f849a763f520e43551364adaf33c0
    content: content,
  },
  {
    id: 4,
    title: "Healthy Pasta",
    description: "Nice nice",
<<<<<<< HEAD
    image: "https://i.pinimg.com/564x/6a/b3/e8/6ab3e82ec375d04ee02c0f3db7439c51.jpg",
    time: "15 min",
    calories: "221 cal",
    ingredients: ["Pasta", "Mushroom", "Onion", "White Sauce",],
    kategori: ["Breakfast", "Vegan"],
=======
    image:
      "https://i.pinimg.com/564x/6a/b3/e8/6ab3e82ec375d04ee02c0f3db7439c51.jpg",
    time: "15 min",
    calories: "221 cal",
    image:
      "https://i.pinimg.com/564x/6a/b3/e8/6ab3e82ec375d04ee02c0f3db7439c51.jpg",
    ingredients: [
      "Pasta",
      "Mushroom",
      "Onion",
      "White Sauce",
    ],
>>>>>>> 960547831f5f849a763f520e43551364adaf33c0
    content: content,
  },
  {
    id: 5,
    title: "Protein packed Chicken and Avocado Macro bowl",
    description: "Very Good",
<<<<<<< HEAD
    image: "https://i.pinimg.com/564x/5c/30/b9/5c30b9dae570613a7a2af2b06aa79b88.jpg",
    time: "20 min",
    calories: "315 cal",
    ingredients: ["Chicken", "Avocado", "Broth", "Salad",],
    kategori: ["High Protein", "Dinner", "Healthy Fats"],
=======
    image:
      "https://i.pinimg.com/564x/5c/30/b9/5c30b9dae570613a7a2af2b06aa79b88.jpg",
    description: "Very Good",
    time: "20 min",
    calories: "315 cal",
    image:
      "https://i.pinimg.com/564x/ab/7c/97/ab7c978def53dab12dd788a3c4082bbe.jpg",
    ingredients: [
      "Chicken",
      "Avocado",
      "Broth",
      "Salad",
    ],
>>>>>>> 960547831f5f849a763f520e43551364adaf33c0
    content: content,
  },
  {
    id: 6,
    title: "Quinoa Salad with Roasted Vegetables",
    description: "A healthy and delicious quinoa salad.",
    time: "25 min",
    calories: "250 cal",
    image: "https://cdn.pixabay.com/photo/2020/07/12/09/15/quinoa-5396618_1280.jpg",
    ingredients: ["Quinoa", "Tomatoes", "Cucumbers", "Olive Oil"],
    kategori: ["Vegan", "Low Fat", "Lunch", "High Fiber"],
    content: content,
  },
  {
    id: 7,
    title: "Blueberry Oatmeal Breakfast",
    description: "A nutritious and tasty breakfast option.",
    time: "15 min",
    calories: "180 cal",
    image: "https://cdn.pixabay.com/photo/2014/11/14/20/20/blueberries-531209_1280.jpg",
    ingredients: ["Oats", "Blueberries", "Almond Milk", "Honey"],
    kategori: ["Breakfast", "Low Fat", "High Fiber"],
    content: content,
  },
  {
    id: 8,
    title: "Vegetarian Stuffed Bell Peppers",
    description: "Delicious and healthy stuffed bell peppers.",
    time: "40 min",
    calories: "280 cal",
    image: "https://images.pexels.com/photos/1438540/pexels-photo-1438540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ingredients: ["Bell Peppers", "Quinoa", "Black Beans", "Cheese"],
    kategori: ["Vegan", "High Fiber", "Dinner", "Low Carbs"],
    content: content,
  },
  {
    id: 9,
    title: "Salmon and Asparagus Foil Packets",
    description: "A quick and healthy dinner option.",
    time: "25 min",
    calories: "300 cal",
    image: "https://images.pexels.com/photos/16729168/pexels-photo-16729168/free-photo-of-salmon-with-tomatoes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ingredients: ["Salmon fillets", "Asparagus", "Lemon", "Garlic"],
    kategori: ["High Protein", "Dinner", "Healthy Fats"],
    content: content,
  },
  {
    id: 10,
    title: "Mango Avocado Salsa Chicken",
    description: "A flavorful and tropical twist to your chicken dinner.",
    time: "30 min",
    calories: "280 cal",
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Chicken breasts", "Mango", "Avocado", "Red Onion"],
    kategori: ["Low Carb", "Dinner", "Healthy Fats"],
    content: content,
  },
  {
    id: 11,
    title: "Spinach and Feta Stuffed Chicken Breast",
    description: "A delicious and protein-packed meal.",
    time: "35 min",
    calories: "320 cal",
    image: "https://images.unsplash.com/photo-1543340842-7b049d42a0ef?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Chicken breasts", "Spinach", "Feta cheese", "Garlic"],
    kategori: ["High Protein", "Low Carb", "Dinner"],
    content: content,
  },
  {
    id: 12,
    title: "Caprese Quinoa Salad",
    description: "A refreshing and nutritious salad with a Caprese twist.",
    time: "20 min",
    calories: "250 cal",
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Quinoa", "Tomatoes", "Mozzarella", "Basil"],
    kategori: ["Vegetarian", "Low Fat", "Lunch", "High Fiber"],
    content: content,
  },
  {
    id: 13,
    title: "Sweet Potato and Chickpea Curry",
    description: "A hearty and flavorful vegetarian curry.",
    time: "40 min",
    calories: "290 cal",
    image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ingredients: ["Sweet potatoes", "Chickpeas", "Coconut milk", "Curry spices"],
    kategori: ["Vegetarian", "Dinner", "High Fiber", "lunch"],
    content: content,
  },
  {
    id: 14,
    title: "Greek Yogurt Parfait with Berries",
    description: "A healthy and delicious breakfast or snack option.",
    time: "10 min",
    calories: "200 cal",
    image: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Greek yogurt", "Berries", "Granola", "Honey"],
    kategori: ["Breakfast", "Low Fat", "High Protein"],
    content: content,
  },
  {
    id: 15,
    title: "Pesto Zucchini Noodles",
    description: "A low-carb and flavorful alternative to pasta.",
    time: "15 min",
    calories: "180 cal",
    image: "https://images.unsplash.com/photo-1645775372267-c0299feab469?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Zucchini", "Pesto sauce", "Cherry tomatoes", "Parmesan"],
    kategori: ["Low Carb", "Vegetarian", "Healthy Fats"],
    content: content,
  },
  {
    id: 16,
    title: "Cilantro Lime Shrimp Tacos",
    description: "A fresh and zesty taco recipe with cilantro lime shrimp.",
    time: "20 min",
    calories: "250 cal",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGltZSUyMHNocmltcHxlbnwwfHwwfHx8MA%3D%3D",
    ingredients: ["Shrimp", "Corn tortillas", "Cilantro", "Lime"],
    kategori: ["Low Carb", "Dinner", "High Protein", "lunch"],
    content: content,
  },
  {
    id: 17,
    title: "Vegetable Stir-Fry with Tofu",
    description: "A quick and healthy stir-fry loaded with veggies and tofu.",
    time: "25 min",
    calories: "230 cal",
    image: "https://images.unsplash.com/photo-1544519685-86ccb2dab444?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Tofu", "Broccoli", "Bell peppers", "Soy sauce"],
    kategori: ["Vegan", "Low Carb", "High Protein", "lunch"],
    content: content,
  },
  {
    id: 18,
    title: "Chocolate Avocado Smoothie",
    description: "A creamy and indulgent smoothie with a healthy twist.",
    time: "10 min",
    calories: "220 cal",
    image: "https://images.unsplash.com/photo-1541519890052-6a762bb1e481?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Avocado", "Banana", "Cocoa powder", "Almond milk"],
    kategori: ["Breakfast", "Vegan", "Healthy Fats"],
    content: content,
  },
  {
    id: 19,
    title: "Spaghetti Aglio e Olio",
    description: "A classic Italian pasta dish with garlic and olive oil.",
    time: "20 min",
    calories: "290 cal",
    image: "https://images.unsplash.com/photo-1627042633145-b780d842ba45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Spaghetti", "Garlic", "Olive oil", "Red pepper flakes"],
    kategori: ["Vegetarian", "Dinner", "Low Carb", "lunch"],
    content: content,
  },
  {
    id: 20,
    title: "Crispy Baked Parmesan Chicken",
    description: "Juicy and tender chicken with a crispy Parmesan crust.",
    time: "35 min",
    calories: "320 cal",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Chicken thighs", "Parmesan cheese", "Breadcrumbs", "Italian seasoning"],
    kategori: ["High Protein", "Dinner"],
    content: content,
  },
  {
    id: 21,
    title: "Mushroom and Spinach Stuffed Portobello Mushrooms",
    description: "A delicious vegetarian dish with earthy flavors.",
    time: "30 min",
    calories: "250 cal",
    image: "https://images.unsplash.com/photo-1464196290972-3c085498b4d7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Portobello mushrooms", "Mushrooms", "Spinach", "Feta cheese"],
    kategori: ["Vegetarian", "Low Carb", "Dinner"],
    content: content,
  },
  {
    id: 22,
    title: "Honey Mustard Glazed Salmon",
    description: "Sweet and tangy glazed salmon fillets.",
    time: "25 min",
    calories: "300 cal",
    image: "https://images.unsplash.com/photo-1679941167941-0751af32fe15?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Salmon fillets", "Honey", "Dijon mustard", "Lemon"],
    kategori: ["High Protein", "Dinner", "Healthy Fats"],
    content: content,
  },
  {
    id: 23,
    title: "Cauliflower Crust Margherita Pizza",
    description: "A low-carb and gluten-free alternative to traditional pizza.",
    time: "30 min",
    calories: "280 cal",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Cauliflower", "Mozzarella cheese", "Tomatoes", "Basil"],
    kategori: ["Vegetarian", "Low Carb", "Dinner"],
    content: content,
  },
  {
    id: 24,
    title: "Teriyaki Tofu Stir-Fry",
    description: "A flavorful and vegan stir-fry with teriyaki-glazed tofu.",
    time: "25 min",
    calories: "230 cal",
    image: "https://images.unsplash.com/photo-1546069901-5ec6a79120b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVyaXlha2klMjB0b2Z1fGVufDB8fDB8fHww",
    ingredients: ["Tofu", "Broccoli", "Carrots", "Teriyaki sauce"],
    kategori: ["Vegan", "Low Carb", "High Protein"],
    content: content,
  },
  {
    id: 25,
    title: "Chickpea and Vegetable Curry",
    description: "A hearty and nutritious vegetarian curry with chickpeas.",
    time: "35 min",
    calories: "290 cal",
    image: "https://images.unsplash.com/photo-1613478881925-3543125016fa?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Chickpeas", "Mixed vegetables", "Coconut milk", "Curry spices"],
    kategori: ["Vegetarian", "Dinner", "High Fiber"],
    content: content,
  },
  {
    id: 26,
    title: "Caprese Grilled Cheese Sandwich",
    description: "A gourmet twist to the classic grilled cheese sandwich.",
    time: "15 min",
    calories: "220 cal",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Bread", "Mozzarella cheese", "Tomatoes", "Basil"],
    kategori: ["Vegetarian", "Lunch"],
    content: content,
  },
  {
    id: 27,
    title: "Pineapple Shrimp Fried Rice",
    description: "A tropical and savory fried rice with juicy shrimp.",
    time: "30 min",
    calories: "310 cal",
    image: "https://images.unsplash.com/photo-1632660373393-c83bf5413d16?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Shrimp", "Pineapple", "Rice", "Vegetables"],
    kategori: ["Dinner", "High Protein", "lunch"],
    content: content,
  },
  {
    id: 28,
    title: "Black Bean and Corn Salad",
    description: "A refreshing and protein-packed salad with black beans and corn.",
    time: "20 min",
    calories: "200 cal",
    image: "https://images.unsplash.com/photo-1468777675496-5782faaea55b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Black beans", "Corn", "Bell peppers", "Cilantro"],
    kategori: ["Vegetarian", "Vegan", "Lunch", "High Protein"],
    content: content,
  },
  {
    id: 29,
    title: "Sesame Ginger Tofu Skewers",
    description: "Flavorful and vegan skewers with sesame ginger marinade.",
    time: "25 min",
    calories: "240 cal",
    image: "https://plus.unsplash.com/premium_photo-1669150847070-fe678a7bf64d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Tofu", "Sesame ginger marinade", "Bell peppers", "Red onion"],
    kategori: ["Vegan", "High Protein", "Dinner"],
    content: content,
  },
  {
    id: 30,
    title: "Raspberry Almond Chia Pudding",
    description: "A healthy and delicious chia pudding with raspberry and almond flavors.",
    time: "15 min",
    calories: "180 cal",
    image: "https://images.unsplash.com/photo-1589113705076-ff28f41a2b8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Chia seeds", "Almond milk", "Raspberries", "Almonds"],
    kategori: ["Breakfast", "Vegan", "High Fiber"],
    content: content,
  },
];

<<<<<<< HEAD
export default datas;
=======
export default datas;

>>>>>>> 960547831f5f849a763f520e43551364adaf33c0
