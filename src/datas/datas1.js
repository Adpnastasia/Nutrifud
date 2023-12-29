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
    ingredients: [
      "Chicken",
      "Vegetable",
      "Salad Dressings",
      "Barbeque Sauce",
    ],
    content: content,
  },
  {
    id: 2,
    title: "Creamy Vegan Tomato and Cauliflower Bisque",
    description: "So Good",
    image:
      "https://i.pinimg.com/564x/ab/7c/97/ab7c978def53dab12dd788a3c4082bbe.jpg",
    time: "30 min",
    calories: "321 cal",
    image:
      "https://i.pinimg.com/564x/3d/61/a3/3d61a30ed5c599c52a5c5678c76ca808.jpg",
    ingredients: [
      "Tomato",
      "Cauliflower",
      "Broth",
      "Coconut milk",
    ],
    content: content,
  },
  {
    id: 3,
    title: "Healthy Toast",
    description: "Liked it",
    image:
      "https://i.pinimg.com/564x/e6/74/1e/e6741ea003494ca3bfc3e60622bf5e3a.jpg",
    time: "10 min",
    calories: "178 cal",
    image:
      "https://i.pinimg.com/564x/e6/74/1e/e6741ea003494ca3bfc3e60622bf5e3a.jpg",
    ingredients: [
      "Bread",
      "Egg",
      "Avocado",
      "Oregano",
    ],

    content: content,
  },
  {
    id: 4,
    title: "Healthy Pasta",
    description: "Nice nice",
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

    content: content,
  },
  {
    id: 5,
    title: "Protein packed Chicken and Avocado Macro bowl",

    description: "Very Good",
    image:
      "https://i.pinimg.com/564x/5c/30/b9/5c30b9dae570613a7a2af2b06aa79b88.jpg",

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

    content: content,
  },
  {
    id: 6,
    title: "Chicken Satay with Salad",
    description: "Awesomee",
    image:
      "https://i.pinimg.com/564x/e0/89/78/e089786326df1b9125cfcc553bd92ab7.jpg",
    time: "30 min",
    calories: "270 cal",
    image:
      "https://i.pinimg.com/564x/8b/47/67/8b4767a03b4f6fadb7ac02f307e9a7f1.jpg",
    ingredients: [
      "Chicken",
      "Vegetable",
      "Salad Dressings",
      "Barbeque Sauce",
    ],
    content: content,
  },
  {
    id: 7,
    title: "Creamy Vegan Tomato and Cauliflower Bisque",
    description: "my dad liked it",
    image:
      "https://i.pinimg.com/564x/ab/7c/97/ab7c978def53dab12dd788a3c4082bbe.jpg",
    time: "30 min",
    calories: "321 cal",
    image:
      "https://i.pinimg.com/564x/3d/61/a3/3d61a30ed5c599c52a5c5678c76ca808.jpg",
    ingredients: [
      "Tomato",
      "Cauliflower",
      "Broth",
      "Coconut milk",
    ],
    content: content,
  },
  {
    id: 8,
    title: "Healthy Toast",
    description: "i hope my friend try this, bcs it's just to good",
    image:
      "https://i.pinimg.com/564x/e6/74/1e/e6741ea003494ca3bfc3e60622bf5e3a.jpg",
    time: "10 min",
    calories: "178 cal",
    image:
      "https://i.pinimg.com/564x/e6/74/1e/e6741ea003494ca3bfc3e60622bf5e3a.jpg",
    ingredients: [
      "Bread",
      "Egg",
      "Avocado",
      "Oregano",
    ],
    content: content,
  },
  {
    id: 9,
    title: "Healthy Pasta",
    description: "My mom make this, instantly like it",
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
    content: content,
  },
  {
    id: 10,
    title: "Protein packed Chicken and Avocado Macro bowl",
    description: "Liked it so much",
    image:
      "https://i.pinimg.com/564x/5c/30/b9/5c30b9dae570613a7a2af2b06aa79b88.jpg",
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
    content: content,
  },
];

export default datas;
