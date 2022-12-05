'use strict';
// /** @type {import('sequelize-cli').Migration} */

// {
//   productId: ,
//   userId: , //
//   rating: ,
//   title: "",
//   description: "",
// },


const demoReviews = [
  /********************** 1. Personal Care **********************/
  // ✅ 1. toothpaste
  {
    productId: 1,
    userId: 68, // Yibo
    rating: 5,
    title: "Right size",
    description: "Just what wanted, right size and price",
  },
  // ✅ 5. solution
  {
    productId: 5,
    userId: 29, // David Nash
    rating: 1,
    title: "This solution is the devil.",
    description: "I purchased a small bottle of ths for a weekend trip. The trip ended up being ruined because after soaking my contacts in this solution friday night i could barely see the rest of the weekend. I wouldn't wish this solution on my worst enemy.",
  },
  // ✅ 6. softlips
  {
    productId: 6,
    userId: 25, // Sherry
    rating: 5,
    title: "Great product!",
    description: "I bought this a month ago and it's been amazing. It smells good, adds the right amount of shine. It moisturizes and keeps my lips soft. It's easy to take one with you everywhere",
  },
  // ✅ 9. cotton
  {
    productId: 9,
    userId: 25, // Sherry
    rating: 5,
    title: "Good quality cotton balls",
    description: "Nice and good quality cotton",
  },
  // ✅ 10. tissue
  {
    productId: 10,
    userId: 15, // Jojo
    rating: 4,
    title: "I like the product and buy it when I need tissues.",
    description: "Opened a box of 124 2-ply tissues and the box only had two tissues in it. I bought a package of 3 and it was the middle box. Thought you should know.",
  },
  {
    productId: 10,
    userId: 19, // Sam
    rating: 5,
    title: "Puffs",
    description: "My favorite when allergy season is here but cost to much!",
  },
  // ✅ 11. ibuprofen
  {
    productId: 11,
    userId: 1, // Demo
    rating: 5,
    title: "our go to pain relief",
    description: "Aleve is our brand we have been using for years. Aches and pains? Stiff back? Kids giving you a headache? Two of these and you are good as new for hours. Product has not changed since we started taking. Love the easy open bottle.",
  },

  /********************** 2. Home **********************/
  // ✅ 13. gloves
  {
    productId: 13,
    userId: 66, // Moran
    rating: 4,
    title: "Just Ok",
    description: "These are just ok. They tend to thin and tear after about 3 weeks",
  },
  // ✅ 14. mrs. meyers
  {
    productId: 14,
    userId: 66, // Moran
    rating: 5,
    title: "Delicious Scent",
    description: "Earthy smelling, one of my fave scents… and I buy them all. Effective at cleaning. Love the bottle size and the sprayer is always even and drip less and perfect.",
  },
  // ✅ 17. woollite
  {
    productId: 17,
    userId: 63, // Jason Kong
    rating: 5,
    title: "Amazing",
    description: "This is great on black clothes. It doesn’t fade.",
  },
  {
    productId: 17,
    userId: 66, // Moran
    rating: 4,
    title: "Good soap but pricy",
    description: "Like everything but the price",
  },
  {
    productId: 17,
    userId: 8, // Brad S
    rating: 5,
    title: "Woolite - needs no introduction!",
    description: "This is the only detergent for dark delicates I use (and the White bottle for light delicates). Woolite is the best - hands down for keeping fabrics looking new and gently washing away soil. The scent is pleasant and not overpowering.",
  },
  // ✅ 18. hangers
  {
    productId: 18,
    userId: 12, // Peter
    rating: 5,
    title: "Smart looking",
    description: "I think when all the hangers are the same you get instant neatness. These hangers are simple and sleek looking. I’ve transition almost all my clothes to them. I did try another brand and the hang and hook detached. These have been sturdy and reliable.",
  },
  // ✅ 19. towels
  {
    productId: 19,
    userId: 63, // Jason Kong
    rating: 3,
    title: "Okay material",
    description: "Cheap price, quality is okay. Good if you just need some new towels on a budget they’re not very soft but you get what you pay for",
  },
  // ✅ 21. steamer
  {
    productId: 21,
    userId: 21, // Olivia
    rating: 5,
    title: "Portable and Reliable",
    description: "This is one of the best steamers that I’ve owned. It takes the wrinkles out of my clothes and it is extremely easy to transport.",
  },
  /********************** 3. Kitchen & Dining **********************/
  // ✅ 27. wine glasses
  {
    productId: 27,
    userId: 27, // Whit
    rating: 5,
    title: "Nice lottke glass",
    description: "Great price, fun to drink my sparkling water out of",
  },
  {
    productId: 27,
    userId: 61, // Eliza
    rating: 5,
    title: "Wine glasses",
    description: "Loved them. Perfect small Casual wine glasses at a great price.",
  },
  {
    productId: 27,
    userId: 67, // Yasha
    rating: 5,
    title: "Cute stemless glasses",
    description: "I got the stackable stemless glasses. They are super cute and stack well in cabinets! They are not perfectly even, but they are great quality for the price paid. Also love that they are dishwasher safe.",
  },
  {
    productId: 27,
    userId: 15, // Jojo
    rating: 2,
    title: "Dare not drop it",
    description: "Shatters into large and small chunks.",
  },
  // ✅ 28. knives
  {
    productId: 28,
    userId: 39, // David Rogers
    rating: 5,
    title: "No issues!",
    description: "Works great, best basic set I've ever gotten.",
  },
  // ✅ 29. grilling
  {
    productId: 29,
    userId: 39, // David Rogers
    rating: 5,
    title: "Very Good",
    description: "Very happy with this set. It is large as others have mentioned but for those with bigger hands it is perfect for turning steaks with the strong tongs as well as the very sturdy spatula for other items. Easy clean up also.",
  },
  {
    productId: 29,
    userId: 8, // Brad S
    rating: 4,
    title: "Would be great scaled down a bit ...",
    description: "I love OXO utensils, but the size of this set is overkill (unusable) for my small hands and Weber Smokey Joe grill.",
  },
  // ✅ 30. compostable baking sheet
  {
    productId: 30,
    userId: 39, // David Rogers
    rating: 5,
    title: "Non stick natural",
    description: "It works well, no need to use oil doesn't stick. Easy clean up. Natural parchment. They changed the box, now easier too cut the parchment.",
  },
  {
    productId: 30,
    userId: 18, // Ari
    rating: 5,
    title: "Parchment paper",
    description: "I like the earth friendly quality",
  },
  // ✅ 34. toaster oven
  {
    productId: 34,
    userId: 5, // Geoffrey
    rating: 5,
    title: "Nice",
    description: "Nice design. Easy to use and clean",
  },
  // ✅ 35. cookware
  {
    productId: 35,
    userId: 61, // Eliza
    rating: 5,
    title: "Good Quality",
    description: "Deep skillets. Good heat distribution. Nice selection of sizes in the set.",
  },
  /********************** 4. Grocery **********************/
  // ✅ 37. eggs
  {
    productId: 37,
    userId: 22, // Nate
    rating: 5,
    title: "Some leaking do check the carton!",
    description: "Good quality for an even better price! Less than $2 is hard to beat. You do have to check each carton to ensure there aren’t cracks though.",
  },
  // ✅ 38. bread
  {
    productId: 38,
    userId: 22, // Nate
    rating: 1,
    title: "PERSERVATIVE NATION!",
    description: "This bread has an insane amount of additives. People wonder why everyone is walking around with health issues, do better!",
  },
  {
    productId: 38,
    userId: 38, // Drew
    rating: 1,
    title: "Not sourdough",
    description: "Is this a joke? Not sourdough, same dish sponge consistency as most store bought breads... Sticking to HEB one, the only real bread I'm able to find",
  },
  // ✅ 39. rice
  {
    productId: 39,
    userId: 24, // Alex Pezzati
    rating: 5,
    title: "Good Product",
    description: "This is good value and great product. We buy bags when it is available.",
  },
  // ✅ 40. butter
  {
    productId: 40,
    userId: 38, // Drew
    rating: 5,
    title: "Best better; the only one I use",
    description: "The only butter I use for everything! Can’t tell how many times I have bought this.",
  },
  {
    productId: 40,
    userId: 4, // Shane
    rating: 5,
    title: "Best butter",
    description: "Such good butter!! Nice, rich, and salty.",
  },
  // ✅ 41. sriracha
  {
    productId: 41,
    userId: 47, // John C
    rating: 5,
    title: "Sriracha is awesome",
    description: "Yeah man, Sriracha is awesome and this is the best Sriracha",
  },
  // ✅ 42. Nutella
  {
    productId: 42,
    userId: 1, // Demo
    rating: 5,
    title: "I can’t live without this",
    description: "Omg this is so good. The texture is rich and thick and so creamy. You can put it on toast use as a filling for cake put on fruit it goes well with so much. I would recommend this to everyone.",
  },
  // ✅ 43. Ritter Sport
  {
    productId: 43,
    userId: 15, // Jojo
    rating: 5,
    title: "Go to treat",
    description: "One of my favorite sweet treats. The chocolate is delicious and the whole hazelnuts. So moreish. And cost is at least $1 cheaper at target than any grocery stores.",
  },
  {
    productId: 43,
    userId: 19, // Sam
    rating: 5,
    title: "One of my favorite",
    description: "Been having these for years and like the taste and hazelnuts in them. One of my best chocolates out there. The price has gone up but glad the taste is still the best.",
  },
  // ✅ 44. Ice cream
  {
    productId: 44,
    userId: 7, // Dan Purcell
    rating: 5,
    title: "The GOAT",
    description: "The GOAT. The Tom Brady of ice creams.",
  },
  {
    productId: 44,
    userId: 27, // Whit
    rating: 5,
    title: "The best ice cream",
    description: "I had never had a better ice cream than this one! This is the best flavor from the best brand! The cone pieces along with the chocolate and caramel create a PERFECT flavor explosion. Absolutely love it!",
  },
  {
    productId: 44,
    userId: 34, // Anthony Lovern
    rating: 5,
    title: "Delicious",
    description: "This is my favorite flower, I like the taste, the ingredients and nutrients, it is delicious and enjoyable, you can try and check this out.",
  },
  // ✅ 45. donuts
  {
    productId: 45,
    userId: 9, // Hector
    rating: 5,
    title: "A fluffy delight",
    description: "It was so soft and not too sugary",
  },
  // ✅ 46. orange juice
  {
    productId: 46,
    userId: 22, // Nate
    rating: 5,
    title: "Best OJ",
    description: "Best Orange 🍊 Juice",
  },
  {
    productId: 46,
    userId: 50, // Brennon
    rating: 5,
    title: "Best OJ",
    description: "It’s the best no pulp orange juice in the game!",
  },
  {
    productId: 46,
    userId: 68, // Yibo
    rating: 5,
    title: "Simply OJ",
    description: "I love this juice, especially the flavor",
  },
  {
    productId: 46,
    userId: 19, // Sam
    rating: 5,
    title: "So good",
    description: "Who doesn’t love a good no pulp OJ , ehh!?! Lol delicious",
  },
  // ✅ 47. soymilk
  {
    productId: 47,
    userId: 68, // Yibo
    rating: 5,
    title: "classic",
    description: "there is something about classic silk soy milk and tazo chia tea mix together that I am beyond addicted to. the flavors balance each other so well. i wish i could still find soy ice cream another fav of mine but now theyre all coconut milk.",
  },
  {
    productId: 47,
    userId: 18, // Ari
    rating: 5,
    title: "Great, just don't get close to freezing",
    description: "Smooth and consistent taste and great quality. My 2 year old and I both are very picking and love regular milk but we love this milk on occasion as we try to incorporate more plant based foods in our diets. Product gets weird clumps if it freezes.",
  },
  // ✅ 48. wine
  {
    productId: 48,
    userId: 42, // Tiffany
    rating: 4,
    title: "Nice",
    description: "A lighter or medium red this is bursting with berry flavors. It goes down very smoothly. It’s pretty good for California wine but I honestly think you can find better for cheaper. Many love this one though!",
  },
  {
    productId: 48,
    userId: 45, // Gary
    rating: 5,
    title: "Small bottle!",
    description: "The bottle is small This is what I get for not reading the ounces either way I’m gonna drink it and it’s delicious but just warning others this is a mini bottle not a full size for you guys probably already knew lol",
  },
  {
    productId: 48,
    userId: 59, // Cindy
    rating: 4,
    title: "It is smooth to",
    description: "It is smooth to drink and has subtle notes of berries. Compared to other Pinot Noirs, I think there are better ones to choose from, but at this price point I think this is a good option. If you are new to wine, this bottle is a great Noir to start with.",
  },
  {
    productId: 48,
    userId: 60, // David Burch
    rating: 5,
    title: "Out go to standard",
    description: "Out go to standard Pinot Noir! Usually pretty affordable. All the flavors and notes you expect from a Pinot Noir",
  },
  {
    productId: 48,
    userId: 61, // Eliza
    rating: 5,
    title: "Delicious, Refreshing, and 10/10",
    description: "I am a fan of Kim Crawford’s Sauvignon Blanc! It’s fresh and crisp. Perfect for a summer day. Pairs well with everything. Cheers!",
  },
  {
    productId: 48,
    userId: 62, // James
    rating: 5,
    title: "Hands down, best Pinot!!!",
    description: "Having a bad day? Meiomi. Having a good day? Meiomi. Need a you day? Meiomi. Each and every time. I am obsessed with this wine. Have gotten all my friends hooked on it as well!",
  },
  {
    productId: 48,
    userId: 66, // Moran
    rating: 1,
    title: "So overplayed",
    description: "This wine isn't it. It's quality has gone down and is now just a mass produced grape juice with zero quality.",
  },
  {
    productId: 48,
    userId: 67, // Yasha
    rating: 5,
    title: "My favorite",
    description: "Never met anyone that doesn’t like this wine. Even for beginners!",
  },
  {
    productId: 48,
    userId: 11, // Cameron
    rating: 2,
    title: "Smooth but yuck",
    description: "It has a smooth finish, but something about the taste is awful to me.",
  },
  /********************** 5. Electronics **********************/
  // ✅ 49. tv
  {
    productId: 49,
    userId: 22, // Nate
    rating: 5,
    title: "Great colors",
    description: "I bought it last month and we are happy with the TV we bought",
  },
  {
    productId: 49,
    userId: 28, // Daniel Flores
    rating: 5,
    title: "Great colors and clarity",
    description: "I replaced my old 55 inch with this 0LED and the colors and definition is outstanding.",
  },
  {
    productId: 49,
    userId: 33, // Ryan Schneider
    rating: 5,
    title: "Fabulous",
    description: "Recently upgraded from a 6yr old 65 LG OLED to a C2 77. It does appear in 6yrs the improvement in technology has made a difference for the good. I had been contemplating this for the better part of the year and I am glad I finally pulled the trigger.",
  },
  {
    productId: 49,
    userId: 58, // Christo
    rating: 5,
    title: "Great purchase!",
    description: "I purchased this tv 3 weeks ago and I'm very pleased with the features and the picture quality. Would recommend it if you are looking for a great tv.",
  },
  {
    productId: 49,
    userId: 5, // Geoffrey
    rating: 5,
    title: "Great tv",
    description: "Best decision I made in a while, nice upgrade from my Samsung, great price at Costco, really enjoy watching my movies and sports on this",
  },
  {
    productId: 49,
    userId: 7, // Dan Purcell
    rating: 5,
    title: "Great tv all around",
    description: "Have had this tv for about two weeks with no issues. Picture is clear and colors are vibrant. Sound is good even without external speakers",
  },
  {
    productId: 49,
    userId: 13, // Braxton
    rating: 5,
    title: "Gorgeous picture!",
    description: "The picture quality is stunning on this tv , so much better than we anticipated. We did our research, read reviews etc and it is so much better than the descriptions. You feel like you are with the actors, or at least could reach out and touch them.",
  },
  {
    productId: 49,
    userId: 16, // Nick
    rating: 5,
    title: "Movie Theater Experience in a Small Room",
    description: "I recently bought this TV a few weeks ago and have loved it ever since. Every movie, shows and games that my family and I have watched has been nothing but extraordinary.",
  },
  {
    productId: 49,
    userId: 57, // Chris P
    rating: 5,
    title: "great TV",
    description: "I bought this Tv 3 weeks ago. It was easy to set up and I do not consider myself to be tech savvy.the LG allows you to pick preset contrast and tone for movies ,gaming, sports etc. It will even suggest which one to switch too. the picture is excellent!",
  },
  // ✅ 50. ipad
  {
    productId: 50,
    userId: 26, // Rawaha
    rating: 5,
    title: "Awesome with a few exceptions",
    description: "I absolutely love the size of this ipad. The only downfall is if you’re on a Zoom call the battery will die quickly. I learned to put it in low power mode. Also you need wireless headphones in order use it privately in public.",
  },
  {
    productId: 50,
    userId: 28, // Daniel Flores
    rating: 5,
    title: "Awesomeness",
    description: 'I totally love it.!! “Style, Weight, Color” And Retina Display and Functions.!! Awesomeness .!!',
  },
  {
    productId: 50,
    userId: 29, // David Nash
    rating: 4,
    title: "Great product",
    description: "Love it. Only issue I had was the instructions from ATT. They said it was already activated and to follow the directions on the IPAD. You have to call att for them to activate it. It does not come already activated.",
  },
  {
    productId: 50,
    userId: 32, // Cesar
    rating: 5,
    title: "New Purchase",
    description: "I have enjoyed every minute using my new iPad. It is everything I have been needing for sometime.",
  },
  {
    productId: 50,
    userId: 33, // Ryan Schneider
    rating: 5,
    title: "Very pleased with this item.",
    description: "****Cool ***** Much sleeker than previous ipad",
  },
  {
    productId: 50,
    userId: 57, // Chris P
    rating: 5,
    title: "Love it",
    description: "Love it a lot a lot a lot",
  },
  {
    productId: 50,
    userId: 58, // Christo
    rating: 5,
    title: "Upgraded ipad",
    description: "I love how the camera recognizes the face it will move to find your face",
  },
  {
    productId: 50,
    userId: 68, // Yibo
    rating: 5,
    title: "GREAT PRODUCT. FAST SHIPPING",
    description: "Love this iPad. It’s so easy to use and has a very posh look and feel",
  },
  {
    productId: 50,
    userId: 2, // Bill
    rating: 5,
    title: "Love it.",
    description: "The new iPad Pro is just what my daughter needed.",
  },
  {
    productId: 50,
    userId: 11, // Cameron
    rating: 5,
    title: "Apple is solid",
    description: "Love the new iPad maybe I should have gotten the bigger screen.",
  },
  // ✅ 51. airpods
  {
    productId: 51,
    userId: 21, // Olivia
    rating: 5,
    title: "Love everything but the fit",
    description: "I love the noise canceling and the design kinda hard to fit in ear",
  },
  {
    productId: 51,
    userId: 41, // Jair
    rating: 5,
    title: "Worth it",
    description: "The best ones so far and as cool new features",
  },
  {
    productId: 51,
    userId: 46, // Jake M
    rating: 5,
    title: "Must buy",
    description: "Lost my first generation pros and bought these. These are phenomenal headphones and the clarity of the headphones has truly enhanced from the 1st generation AirPods Pro’s",
  },
  {
    productId: 51,
    userId: 56, // Adam
    rating: 5,
    title: "Very good",
    description: "was able to pick it up same day right after school for cheaper price than apple store. work like a charm",
  },
  {
    productId: 51,
    userId: 57, // Chris P
    rating: 5,
    title: "Great Buy",
    description: "Loving the ANC and transparency modes so far, battery life is great and sound quality is top tier. Defined would recommend, 10/10!",
  },
  {
    productId: 51,
    userId: 63, // Jason Kong
    rating: 5,
    title: "Amazing earbuds",
    description: "Wow! Amazing noise cancellation! Amazing stereo! I have had apple earbuds before but they were nothing compared to these!!",
  },
  {
    productId: 51,
    userId: 68, // Yibo
    rating: 5,
    title: "Happy with my choice",
    description: "Great sound and the fit is better. I love the ability to adjust the volume from the pods Target made price worth it",
  },
  {
    productId: 51,
    userId: 98, // Alex Auch
    rating: 5,
    title: "Apple Airpods Pro Gen 2 - nothing can compare to sound quality!",
    description: "Title speaks for itself. Has to be one of the best if not 'the best' out there in the market today. Apple did a good job this time. Excellent sound quality! There's absolutely nothing I can think of that's negative. Best money spent no doubt!",
  },
  {
    productId: 51,
    userId: 4, // Shane
    rating: 5,
    title: "Very cool",
    description: "These are the best headphones",
  },
  {
    productId: 51,
    userId: 9, // Hector
    rating: 5,
    title: "Sound quality amazing!",
    description: "Sound quality amazing! I had Power Beats before and I loved them because the battery lasted 15 hours and these definitely don’t last as long (about half the time) but the quality of the sounds is unbeatable.",
  },
  {
    productId: 51,
    userId: 10, // Cody
    rating: 5,
    title: "Worth it",
    description: "The noise canceling is beyond impressive. This is my first pair of apple AirPods and I’m ecstatic about them!",
  },
  // ✅ 52. homepod mini
  {
    productId: 52,
    userId: 8, // Brad S
    rating: 5,
    title: "Amazing product",
    description: "For those who say “Hur Hur. It needs PlUgGeD in Fer PoWeR”, they need to go back to elementary school to learn that power is needed to make anything work and needs to be plugged into some sort of power source. This is a great product.",
  },
  {
    productId: 52,
    userId: 23, // Daniel Chin
    rating: 5,
    title: "Best smart speaker",
    description: "If you have Apple products (iPhone, iPad, Mac, etc) this little speaker is a no brainer! Excellent sound quality! Small, but mighty!! I already had one and purchased 2 more! Excited to try the intercom feature! The new blue color is very pretty!",
  },
  {
    productId: 52,
    userId: 38, // Drew
    rating: 5,
    title: "10/10 recommend!",
    description: "I love it! the sound quality is amazing!",
  },
  {
    productId: 52,
    userId: 49, // Thenu
    rating: 5,
    title: "Love",
    description: "Great sound and seamlessly pairs with all Apple devices. The small size makes it easy to move around. Only reason for 4 stars is that it needs to be plugged in",
  },
  {
    productId: 52,
    userId: 57, // Chris P
    rating: 5,
    title: "Fantastic!",
    description: "Fantastic speaker in a very small package. Fills my bedroom with sound and only takes up a tiny space.",
  },
  // ✅ 57. webcam
  {
    productId: 57,
    userId: 16, // Nick
    rating: 4,
    title: "Worked for 3 years!",
    description: "I've had this webcam for over 3 years and it has worked well! The only issue is that now it only shows a white screen. I've tried the troubleshooting tips found on Logitech's website and taken it apart but no luck in fixing it.",
  },
  {
    productId: 57,
    userId: 34, // Anthony Lovern
    rating: 5,
    title: "Good Picture",
    description: "Good quality picture for an inexpensive camera",
  },
  {
    productId: 57,
    userId: 57, // Chris P
    rating: 5,
    title: "Adequate and Effective",
    description: "I am new to technology and my son advised me that this would be effective tool to use to meet clients. Very user friendly.",
  },
  // ✅ 59. lights
  {
    productId: 59,
    userId: 35, // Franco
    rating: 4,
    title: "Lots of options!",
    description: "Love that this strip gives you the option to cut it and make it exactly the length that you need it to be! My only wish is that it was a little more flexible for making a turn so that I could have wrapped it a little better around my TV stand.",
  },
  {
    productId: 59,
    userId: 37, // David DeHerrera
    rating: 5,
    title: "Great for larger TVs",
    description: "I was gifted this to try out and I am in love. Our TV is 87 inches and we needed more strip lights and this set the effect over the edge. EVeryone that comes into my house is amazing as its the first thing they say.",
  },
  {
    productId: 59,
    userId: 45, // Gary
    rating: 5,
    title: "Out with the old, in with the Hue!",
    description: "I had a ton of cheap LED strip lights from low-grade brands and I finally upgraded to these lights and I couldn't be happier. The color options are endless and installation was super easy. The lights feel secure and definitely worth the splurge.",
  },
  {
    productId: 59,
    userId: 47, // John C
    rating: 5,
    title: "Great light strips!",
    description: "I love that these lightstrips are so easy to install! The app is easy to use as well and offers so many pretty color options. I used these under my kitchen cabinets and they transform my whole kitchen!",
  },
  {
    productId: 59,
    userId: 57, // Chris P
    rating: 1,
    title: "Bad adhesive strip - too expensive",
    description: "If your wall isn’t completely smooth the adhesive will not stick. Had to return it because it just came undone over and over again.",
  },
  // ✅ 60. robovac
  {
    productId: 60,
    userId: 45, // Gary
    rating: 5,
    title: "Great deal and big help!",
    description: "Such a great robovac for dust and debris esp for a big house with two little ones and a lot of things in the way. Every day I empty it out and it's had gathered up a full carton.",
  },
  {
    productId: 60,
    userId: 57, // Chris P
    rating: 5,
    title: "WOW!! Love my Eufy!!",
    description: "Easy app setup. Shared settings with another phone easily. Ran on max suction for at least 45 min. Picked up plenty of dog hair and other debris, dust and dirt. Really was surprised at how well it cleaned.",
  },

  /********************** 6. Video Games **********************/
  // ✅ 61. xbox
  {
    productId: 61,
    userId: 16, // Nick
    rating: 4,
    title: "Very good petite console",
    description: "This is a console that focus’s on peak performance and I enjoy that. It also packs a punch in the form of the high level graphics and the durability of the console solid 8/10",
  },
  {
    productId: 61,
    userId: 22, // Nate
    rating: 5,
    title: "Fun",
    description: "I have so much fun with it every day I recommend this",
  },
  {
    productId: 61,
    userId: 57, // Chris P
    rating: 5,
    title: "XBOX XBOX XBOX",
    description: "XBOX IS GREAT, NO COMPARING",
  },
  // ✅ 62. PS5
  {
    productId: 62,
    userId: 17, // Andrew Fava
    rating: 5,
    title: "Step in the right direction",
    description: "Absolutely love this console this is a huge step up from me jumping from ps4 pro. No more fan noise, no more long loading times, a wayyyyy faster UI. This in every way possible is truly a next gen console. I was so lucky to be able to get the final ps5.",
  },
  {
    productId: 62,
    userId: 35, // Franco
    rating: 5,
    title: "Ps5",
    description: "It is very smooth and defiantly worth the price",
  },
  {
    productId: 62,
    userId: 36, // Kevin B
    rating: 5,
    title: "2 years later",
    description: "Was finally able to get my hands on one this weekend woke up early Saturday morning went on target and they had one in stock put my pick up order in and was surprised I got it love it",
  },
  {
    productId: 62,
    userId: 57, // Chris P
    rating: 5,
    title: "PlayStation 5",
    description: "Everything is perfect with the PS5. Quick download and load speed. Plays games without any issues. Plenty of memory space.",
  },
  // ✅ 63. meta quest
  {
    productId: 63,
    userId: 28, // Daniel Flores
    rating: 5,
    title: "Hardware is fine",
    description: "I have a Rift S and just bought the Quest 2. I love the cordless thing but some changes to the software side would be nice. With the Rift S I can roam around in my VR home environment but with the Quest 2 I can only stand in one place.",
  },
  {
    productId: 63,
    userId: 30, // John Lee
    rating: 5,
    title: "Overly Surprised",
    description: "I owned the first Oculus (SDK) and years later got a Valve Index. I purchased the Quest for my kid and set it up for him. I am really surprised on the hardware, the tracking, the comfort, the roomscale drawing/layout, the battery, and over all product.",
  },
  {
    productId: 63,
    userId: 36, // Kevin B
    rating: 2,
    title: "Review after using Meta Quest a couple of months",
    description: "It's heavy, not comfortable with glasses, dizzy, not enough contents. The contents are selling but not satisfied when purchased. I didn't buy this for gaming.",
  },
  // ✅ 67. keyboard
  {
    productId: 67,
    userId: 20, // Tanner
    rating: 5,
    title: "Best decent Gaming Keyboard",
    description: "I really enjoy the green switches, sounds great, and surprisingly it comes with PBT keycaps, Amazing quality",
  },
  {
    productId: 67,
    userId: 24, // Alex Pezzati
    rating: 5,
    title: "Good keyboard",
    description: "This keyboard is comfortable to use. The keys make a loud clicking sound when you press them. This keyboard is compact, making it great for smaller spaces. The RGB options are a nice touch for customized lighting.",
  },
  {
    productId: 67,
    userId: 37, // David DeHerrera
    rating: 4,
    title: "Decent but very loud",
    description: "It is pretty decent and types fairly smooth but I don’t really like how loud it types. The quality is good and sturdy doesn’t feel cheap and has a bit of weight to it. When plugging it in the my computer I get a software with razer to install.",
  },
  {
    productId: 67,
    userId: 41, // Jair
    rating: 5,
    title: "Great tactile response!",
    description: "I usually play FPS and MOBA games and this is absolutely perfect for both! Tactile response is so crisp and precise with good feedback. I love how it’s so compact and I can take it with me when we travel. It does have a cool RGB backlighting feature.",
  },
  {
    productId: 67,
    userId: 43, // Daniel Lam
    rating: 5,
    title: "Works fantastic",
    description: "I use this for work rather than for gaming. I like the feel and the lights. Makes working from home much more pleasant. I wish it had a 10 key but otherwise it is durable and works well. Very comfortable.",
  },
  {
    productId: 67,
    userId: 56, // Adam
    rating: 5,
    title: "Works great",
    description: "I love this keyboard! It’s very responsive and feels nice to game on. It is a nice addition to my gaming set up. The lighting is so cool and customizable and and if you’re into the clicking sounds of a keyboard, you’ll love this!",
  },
  // ✅ 69. gaming chair
  {
    productId: 69,
    userId: 16, // Nick
    rating: 5,
    title: "Great chair",
    description: "This chair has great back support. I haven’t used it for long so I am not sure how long it will hold up but I love it so far!",
  },
  {
    productId: 69,
    userId: 22, // Nate
    rating: 5,
    title: "Comfortable Chair for work",
    description: "chair is saving my back and legs after 3 years of remote work on a junky task chair",
  },
  // ✅ 70. arcade
  {
    productId: 70,
    userId: 65, // Max
    rating: 5,
    title: "It's legit!",
    description: "Well made table. Exceeded my expectations! Just got it though - we'll see how it holds up.",
  },

  /********************** 7. Sports & Outdoors **********************/
  // ✅ 73. weights
  {
    productId: 73,
    userId: 13, // Braxton
    rating: 5,
    title: "Comfortable Weights",
    description: "Bought these to complete my home gym weights set. These are comfortable to hold and I love all the fun colors. Definitely reccomend them.",
  },
  {
    productId: 73,
    userId: 17, // Andrew Fava
    rating: 5,
    title: "Just Right",
    description: "We have tried dumbbells of varying sizes over time. These are just right for everyday use. There is no pain and we still get a light workout.",
  },
  {
    productId: 73,
    userId: 50, // Brennon
    rating: 5,
    title: "Muscle bound",
    description: "Needed heavier workout weights & these were exactly what I wanted & needed.",
  },
  // ✅ 74. yoga mat
  {
    productId: 74,
    userId: 67, // Yasha
    rating: 3,
    title: "It's a pass for me",
    description: "Wish I could return it but I’ve already used it in a hot yoga class. I wouldn’t recommend this for yoga - maybe fun for a kids mat but my hands and feet always slip.",
  },
  {
    productId: 74,
    userId: 5, // Geoffrey
    rating: 2,
    title: "Slippery",
    description: "Unfortunately this mat is way too slippery for yoga.",
  },
  // ✅ 77. hiking
  {
    productId: 77,
    userId: 10, // Cody
    rating: 5,
    title: "Good links for connecting to your backpack",
    description: "There is nothing to dislike. I use these to attach my water bottle to my backpack. I guess you can use them as a key ring also.",
  },
  {
    productId: 77,
    userId: 31, // Andrew Tran
    rating: 5,
    title: "Works Great and Looks Snazzy",
    description: "It works as advertised. I clip my car and house keys to my pants while working everyday (do lots of walking around and physical labor). It stays in place and seems very sturdy. Gettting a pack of 2 is fantastic.",
  },
  {
    productId: 77,
    userId: 64, // Joanna
    rating: 5,
    title: "Great Multi Purpose Hooks",
    description: "Bought these to hold doggy bags on my pets leash and they work perfectly! Easy to use, love the bright colors. No issues with breaking yet!",
  },
  // ✅ 78. water bottle
  {
    productId: 78,
    userId: 10, // Cody
    rating: 5,
    title: "The best Waterbottle",
    description: "This is the best waterbottle I have ever had! Defently recamend. Beautiful and very afordible!",
  },
  {
    productId: 78,
    userId: 64, // Joanna
    rating: 2,
    title: "Missing. Straw Top with no Straw!?",
    description: "Missing pieces. It's the straw lid design, but didn't come with the actual straw.... Bottle itself is fine.",
  },

  /********************** 8. Pets **********************/
  // ✅ 85. cat food
  {
    productId: 85,
    userId: 26, // Rawaha
    rating: 5,
    title: "Meow",
    description: "My cats love it. They have been eating Meow mix for 8+ years.",
  },
  // ✅ 86. dog food
  {
    productId: 86,
    userId: 14, // Jesse C.
    rating: 5,
    title: "Great food",
    description: "Love the brand and my dogs love the quality of dog food they receive.",
  },
  {
    productId: 86,
    userId: 4, // Shane
    rating: 5,
    title: "My dogs love it!",
    description: "My dogs can't get enough of this. My senior dog actually has some prep in his step after switching to this. The cost is killing me though.",
  },
  // ✅ 87. cat toy
  {
    productId: 87,
    userId: 39, // David Rogers
    rating: 5,
    title: "Popular with stray kitten",
    description: "My stray cats love it. I wish it was cheaper. My stray cat ran away and hid it now I have to buy another one.",
  },
  // ✅ 88. dog toy
  {
    productId: 88,
    userId: 14, // Jesse C.
    rating: 5,
    title: "Lab's best friend",
    description: "Very durable for my lab puppy who chews through almost everything. Longest lasting you so far. Highly recommend!",
  },
  {
    productId: 88,
    userId: 4, // Shane
    rating: 3,
    title: "Great toy, but it won't hold up to chewers.",
    description: "My dog LOVES this stick! She pulled the noise maker out in minutes and chewed off the ends and branches in a day, but over a year later she still loves what's left! If you have an aggressive chewer this won't last.",
  },
  // ✅ 94. litter
  {
    productId: 94,
    userId: 26, // Rawaha
    rating: 5,
    title: "Great litter abd Vet approved!!",
    description: "This is my favorite litter. Cats are sensitive to strong perfume scents. I love this litter it does the job and you never smell anything. The best part it does not hurt my fur baby and all the previous cats I have had.",
  },
  {
    productId: 94,
    userId: 63, // Jason Kong
    rating: 5,
    title: "Love this for multiple cats. Only one I use!",
    description: "I prefer to only use this litter, for the price, odor control. And cats like it!",
  },

  /********************** 9. Furniture **********************/
  // ✅ 97. dining table
  {
    productId: 97,
    userId: 48, // Maliha
    rating: 5,
    title: "Great Value",
    description: "This table is perfect for my kitchen. I wanted something round and not too big for the area. 4 chairs fit easily around it. The base is heavy so it is very stable. Easy to assemble though the base is heavy to move but worth the effort.",
  },
  {
    productId: 97,
    userId: 58, // Christo
    rating: 5,
    title: "Table",
    description: "Love this table so much! Easy to clean and looks beautiful in the space I needed it for",
  },
  {
    productId: 97,
    userId: 61, // Eliza
    rating: 5,
    title: "Classy",
    description: "Purchased this as a conference table for my office. It is so sleek and pretty. Gives my office a solid, but feminine flair!",
  },
  // ✅ 99. side tables
  {
    productId: 99,
    userId: 18, // Ari
    rating: 5,
    title: "Love these tables!",
    description: "So easy to assemble and very attractive when placed together. They feel very solid!",
  },
  {
    productId: 99,
    userId: 49, // Thenu
    rating: 2,
    title: "They’ll have to do",
    description: "I realize this is a $100 pair of tables and my expectations should be low—and they were, but what I pulled out of the packaging blew my mind. Most strange of all, the parts came out of the box feeling damp to the touch and smelling of wet soil.",
  },
  {
    productId: 99,
    userId: 61, // Eliza
    rating: 5,
    title: "Sturdy",
    description: "Sturdy legs, metal brackets to secure-no wobbles!!",
  },
  // ✅ 100. bookcase
  {
    productId: 100,
    userId: 60, // David Burch
    rating: 5,
    title: "Works great!",
    description: "Fits perfectly in my small closet! Saves space and is great for organizing.",
  },
  {
    productId: 100,
    userId: 63, // Jason Kong
    rating: 5,
    title: "Goog product",
    description: "Easy to put together. The pieces were will marked and all holes were drilled well and in the correct spots.",
  },
  // ✅ 104. frames
  {
    productId: 104,
    userId: 42, // Tiffany
    rating: 5,
    title: "Cute simple frame",
    description: "I love these simple frames. You just have to be careful when buying because a lot of them have black marks from being moved around or something",
  },
  {
    productId: 104,
    userId: 55, // Andrew Kim
    rating: 5,
    title: "Frames",
    description: "Looks absolutely amazing on my family photo wall.",
  },
  // ✅ 105. vases
  {
    productId: 105,
    userId: 25, // Sherry
    rating: 5,
    title: "Must have vase",
    description: "One of my favorite purchases. Perfect size vase. I loved it so much I bought two.",
  },
  {
    productId: 105,
    userId: 27, // Whit
    rating: 5,
    title: "Perfect for floral centerpieces",
    description: "I bought this to create low floral centerpieces for the dinner table. It's the perfect size and height and the stems stay in. The glass is also strong and heavy. I had to get 8 so the price was good.",
  },
  {
    productId: 105,
    userId: 42, // Tiffany
    rating: 3,
    title: "Okay vase",
    description: "Not bad, smaller that I thought even though it had dimensions. Doesn't really look like a vase, more like a cup",
  },
  // ✅ 108. white board
  {
    productId: 108,
    userId: 7, // Dan Purcell
    rating: 5,
    title: "Amazing Dry Erase Board!",
    description: "This dry erase board is large yet lightweight. I absolutely love the size of it. It was very easy to install myself. I came with the instillation kit and a black Quartet marker. The surface is smooth and slick and the markers glide effortlessly.",
  },
  {
    productId: 108,
    userId: 8, // Brad S
    rating: 4,
    title: "Great product",
    description: "I got this dry erase board to put in my home office and it is absolutely amazing. It was easy to install and hang. I am able to put important dates and reminders and have a constant visual of upcoming appointments. Writing on it is a breeze.",
  },
  {
    productId: 108,
    userId: 24, // Alex Pezzati
    rating: 5,
    title: "Great dry-erase board",
    description: "This is a great dry-erase board that can help keep you and your family organized. We have this hung up in our family room with notes/reminders for everyone in the family. It was easy to install. The board is fairly big, so you can do a lot with this.",
  },
  {
    productId: 108,
    userId: 34, // Anthony Lovern
    rating: 4,
    title: "Excellent Board, Insufficient Packaging",
    description: "The board is great but the packaging needs some work. I received a damaged board with missing hardware that was obviously caused by insufficient packaging. Thankfully customer service is excellent and they shipped a replacement immediately.",
  },
  /******************* Phase 2 Products *******************/
  {
    productId: 2,
    userId: 43, // Daniel Lam
    rating: 5,
    title: "Grapefruit exfoliator",
    description: "Smells good. Refreshing feeling. Exfoliates",
  },
  {
    productId: 2,
    userId: 66, // Moran
    rating: 1,
    title: "Returning!",
    description: "since Neutrogena discontinued the Pore Minimizer Scrub in the white tube I thought I'd try this and what a joke. This doesn't even come close to the other scrub. I cannot understand why they would cancel such a great product. This has some type of big uneven ground up type seeds for the scrub and it's terrible. Pore Minimizer scrub had tiny beads that left my skin smooth and clean, not this.",
  },
  {
    productId: 3,
    userId: 99, // Alexis West
    rating: 5,
    title: "Sensitive skin",
    description: "I love this toner cause it's without alcohol and very gentle for my sensitive skin. Moisturize and leaves skin fresh and supple.",
  },
  {
    productId: 3,
    userId: 81, // Justin
    rating: 5,
    title: "Liked it",
    description: "I liked that this product wasn’t super expensive and that it didn’t leave my face feeling like a bunch of bees just stung it. It had a slight scent, but nothing abnormal. If using this right after washing my face, I felt like I could feel my face just getting lighter.",
  },
  {
    productId: 4,
    userId: 96, // Gabe
    rating: 1,
    title: '"smart" pump more like "broken" pump',
    description: "my family and i are absolutely obsessed with the almond smooth intensive care lotion. we have purchased atleast 6 bottles everytime we get home and lather up until our skin stops soaking it in, we walk away. let's say a cat knocks it just down into the sink? broken. we now have to take all the stuff off the lid and shake the lotion out and use 600 ML of lotion before it dries out.",
  },
  {
    productId: 5,
    userId: 81, // Justin
    rating: 5,
    title: "Keep me looking sexy",
    description: "At 49 years old I need all the I can get. This lotion keeps my skin hydrated and looking healthy. I put it on every day . I love the way it smells, like coconut. I doesn't make me sticky either so I can put it on before bed and I don't stick to the sheets.",
  },
  {
    productId: 7,
    userId: 82, //Keer
    rating: 3,
    title: "Not sure",
    description: "I thought midnight brown was a very dark brown but it looks almost reddish on my skin tone. A dark brown pencil usually works ok with my skin tone especially if I line the outside of my eyebrows and lightly shade in any sparse areas before using a brush. I seem to only be able to do a light fill in here & there without the color being too noticeable.",
  },
  {
    productId: 7,
    userId: 75, // Calvin
    rating: 5,
    title: "Natural color",
    description: "I like that this product has a variety of colors. They have black, brown and honey colors. Personally, I prefer the brown ones because they look more natural on skin and help lighten skin tone a little bit. It's super easy to apply and removed by any makeup remover.",
  },
  {
    productId: 7,
    userId: 48, // Maliha
    rating: 4,
    title: "RICH BROWN?",
    description: "I've used these pencils for years in Rich Brown but now I don't see that color selection and I'm reading bad reviews about the Midnight Brown which is possibly what replaced Rich Brown. What I DON'T LIKE about these pencils is that some don't sharpen well after a certain point. Most do sharpen well so I'll continue to buy IF I can find Rich Brown.",
  },
  {
    productId: 12,
    userId: 88, // Richard
    rating: 5,
    title: "First aid travel kit",
    description: "Perfect to take while you’re on vacation",
  },
  {
    productId: 12,
    userId: 90, // Schae
    rating: 5,
    title: "Good for small medical needs",
    description: "Bought this for my beach bag and will get another for my car. Great to have but tiny. Great for price and will refill as needed.",
  },
  {
    productId: 15,
    userId: 93, // Simon
    rating: 1,
    title: "Don't waste your money",
    description: "Very flimsy, thin, and tear easily. Don't waste your money. Buy Hefty brand name.",
  },
  {
    productId: 15,
    userId: 95, // David C
    rating: 5,
    title: "Good buy",
    description: "Nice lawn/trash bags. Love that they don’t come with an odor like many trash cans.",
  },
  {
    productId: 91,
    userId: 97, //
    rating: 3,
    title: "A bit flimsy to me",
    description: "It’s ok. A little bit flimsy compared to the other style wet mop. The last part of the handle gave some trouble to secure because the little ‘button’ didn’t want to pop in the hole to secure itself. I had to use something to play with it a bit to get it to pop through. That’s frustrated me a bit.",
  },
  {
    productId: 16,
    userId: 97, // Erin
    rating: 5,
    title: "Love swifter",
    description: "Always love the starter kits. Just hope one day swifter will make the wipe holder 360 rotation rather than just 180.",
  },
  {
    productId: 20,
    userId: 89, // Sam
    rating: 5,
    title: "Great",
    description: "they're great pillows. soft. but not too soft.",
  },
  {
    productId: 20,
    userId: 81, // Justin
    rating: 1,
    title: "Paula",
    description: "The end of the pillow ripped in 3 days after I got it",
  },
  {
    productId: 22,
    userId: 84, // Kris
    rating: 5,
    title: "Capri blue dupe",
    description: "Smells yummy and delicious. Purchased this many times and gifted it. Everyone loves it.",
  },
  {
    productId: 22,
    userId: 85, // Matt H
    rating: 5,
    title: "amazing",
    description: "Absolutely LOVE this scent! I burns nicely but I still can’t get over how good it smells.",
  },
  {
    productId: 23,
    userId: 87, // Nate
    rating: 5,
    title: "Diy Hat Wall",
    description: "Used To Make Diy Hat Wall",
  },
  {
    productId: 23,
    userId: 77, // Jake L
    rating: 5,
    title: "Does the job",
    description: "Used it to hold up posters, art, pennants, etc. in my kids room. Need to order another as I used most of these up and need to have them handy as well.",
  },
  {
    productId: 24,
    userId: 76, // Carmelino
    rating: 5,
    title: "Worth it!",
    description: "Nice drill to have to complete those around the house projects! Totally worth the buy….",
  },
  {
    userId: 23, // Jake L
    productId: 24,
    rating: 5,
    title: "Amazing Drill",
    description: "Works like any other Drill, perfect cuz it's portable too.",
  },
  {
    productId: 25,
    userId: 79, // Jason P
    rating: 5,
    title: "Flatware",
    description: "Love it and will recommend these",
  },
  {
    productId: 25,
    userId: 80, // Jesse B
    rating: 5,
    title: "Great basics",
    description: "Perfect basic set for my daughter’s first apartment. Bought 2 sets. Worked out great for her and her roommates. Great value.",
  },
  {
    productId: 26,
    userId: 70, // Aijia
    rating: 5,
    title: "Great dishes",
    description: "The dishes are beautiful! Classic. Well made.",
  },
  {
    productId: 26,
    userId: 86, // Na
    rating: 5,
    title: "Beautiful Dinnerware",
    description: "Love this set, they’re beautiful very heavy plates just as a restaurant style plate!",
  },
  {
    productId: 31,
    userId: 97, // Erin
    rating: 5,
    title: "Love it!",
    description: "I love these so much, they have a little handle on the side so when you warm up your food you don’t burn yourself like different glass food containers. My parents like them too I ended up buying them a pair of these 10/10 the price is worth it.",
  },
  {
    productId: 31,
    userId: 85, // Matt H
    rating: 5,
    title: "Love having this set",
    description: "Great product and suction on lid. Held up in freezer and refrigerator. I have not taken it straight from freezer/fridge to microwave. I have always let it rest for awhile at room temp first. So happy I purchased as they are used also for storing trail mix & other pantry items. They also have held up cooking in the oven but the lid is not oven safe.",
  },
  {
    productId: 32,
    userId: 83, // Kelly
    rating: 5,
    title: "Measuring cup",
    description: "Nice quality kitchen staple!",
  },
  {
    productId: 32,
    userId: 82, // Keerr
    rating: 5,
    title: "Love this measuring cup",
    description: "Why would I love this cup? Weird. But I use it for so many things. Small pitcher, measuring, etc. It's worth the money because it isn't glass and you can look at the measurments without squinting at the numbers. Has conversions right there too.",
  },
  {
    productId: 33,
    userId: 79, // Jason P
    rating: 3,
    title: "Maybe dogs can hear it?",
    description: "Heats water quickly but doesn’t whistle. ☹️",
  },
  {
    productId: 33,
    userId: 52, // Alex K
    rating: 1,
    title: "Perfect if you like drinking rust!",
    description: "Believe the reviews! It rusts after just a few uses.",
  },
  {
    productId: 36,
    userId: 51, // Logan
    rating: 5,
    title: "You'll Love it Too!",
    description: "Who doesn’t like Mary Berry? Well written with a great selection of recipes. Would make a lovely gift too!",
  },
  {
    productId: 36,
    userId: 50, // Brennon
    rating: 5,
    title: "Great Book",
    description: "WONDERFUL book and price. It was a Mothers Day gift for a good friend. She loved it!!",
  },
  {
    productId: 53,
    userId: 54, // Tom
    rating: 2,
    title: "Frayed and melted",
    description: "Apple cords tend to charge faster and are more reliable. However, after a year of gentle home use the cord frayed where it meets with the connector and it started melting. Now it’s junk. Come on Apple, you can do better.",
  },
  {
    productId: 53,
    userId: 53, // Jackson
    rating: 5,
    title: "Works Great",
    description: "Works great would buy again",
  },
  {
    productId: 54,
    userId: 55, // Andrew K
    rating: 1,
    title: "Never worked",
    description: "I probably got a defective one because it never worked. I tried using it with a ps4, switch, and roku and it didn't work with any.",
  },
  {
    productId: 54,
    userId: 69, // Abel
    rating: 5,
    title: "Perfect length",
    description: "I needed this to connect fire cube to TV. Prefect length so there isn't a lot of extra cord.",
  },
  {
    productId: 55,
    userId: 73, // Brad
    rating: 5,
    title: "Cutest little power bank",
    description: "There’s not many things that drive me as crazy as being out and about and having my phone die. Chances are, I’m in the process of using it for taking family, photos and videos or something else that is relatively important. With this power bank, I don’t have to worry about that. it is small and convenient for being portable whether I’m carrying in my pocket or purse. It’s powerful enough to charge my phone with a 5 volt 2.1 output. I also love that it’s cute and petite vs a standard large and bulky power bank.",
  },
  {
    productId: 55,
    userId: 75, // Calvin
    rating: 5,
    title: "Very useful power bank",
    description: "Love this beautiful lavender colored power bank came in very handy when my girl drained her whole charging on our recent road trip she had this in the back and her phone charged up pretty quick. Very sleek fits in her backpack and is perfect for busy teens who want to stay connected every second but are lazy to charge their phone lol btw my daughter loves the color.",
  },

  {
    productId: 56,
    userId: 89, // Sam
    rating: 5,
    title: "Good christmas gift",
    description: "I like how portable it is! I got it for my brother for Christmas and he hasn’t stopped using it!",
  },
  {
    productId: 89,
    userId: 92, // Sebastian
    rating: 5,
    title: "IS INTENDED TO BE A POLAROID CAMERA",
    description: "it's a TON of fun to experience! truly a blast from the past (age?!?)! it's most definitely intended to be a Polaroid camera, as such, realistic expectations you'll be smiling in no time ....perhaps even enjoy a walk down memory lane!",
  },
  {
    productId: 58,
    userId: 91, // Sean
    rating: 5,
    title: "Google nest doorbell",
    description: "This doorbell works seamlesslY with the hub. It also shows You alerts on Your phone. BatterY wise I have zero complains. I had read some reviews that the batterY life was not good, I disagree.",
  },
  {
    productId: 58,
    userId: 72, // Andrew W
    rating: 1,
    title: "Dont waste your money",
    description: "Biggest waste of money. App is Google Home Not NEST, like my other NEST cameras !! Unit is plugged in at all times with power supply purchased FROM GOOGLE. Yet battery dies and unit stops recording all the time ! Too hot, too cold… same story unit completely shuts down. Garbage ! Unbelievable a company like google can’t build a functioning wireless doorbell, it seems like every other company can & has.",
  },
  {
    productId: 64,
    userId: 74, // Caleb
    rating: 5,
    title: "Awesome controller",
    description: "This worked better than expected! So happy with this purchase!",
  },
  {
    productId: 64,
    userId: 86, // Na
    rating: 5,
    title: "Great gift idea",
    description: "Goos price point for a great holiday gift. It works well and makes playing games fun on phones.",
  },
  {
    productId: 65,
    userId: 87, // Nate
    rating: 3,
    title: "OK but bad app",
    description: "It works ok, but when opening the backup app of it, the connection time is very long.",
  },
  {
    productId: 65,
    userId: 93, // Yas
    rating: 5,
    title: "Ive bought a bunch over the years",
    description: "I’m a photographer and producer and i use these drives to do delivery to my clients or editors, they do the trick for that light lift",
  },
  {
    productId: 66,
    userId: 93, // Yas
    rating: 3,
    title: "xbox wired",
    description: "if you plan on getting this for the xbox STOP. this headset only works wired to the xbox controller and will not work wirelessly. but for eveything else pretty nice headset tho",
  },
  {
    productId: 66,
    userId: 96, // Gabe
    rating: 1,
    title: "Not xbox compatible",
    description: "IS NOT COMPATIBLE WITH XBOX. ONLY WILL WORK WITH 3.5mm cable. Misleading title in ad.",
  },
  {
    productId: 68,
    userId: 6, // Alec
    rating: 5,
    title: "Great quality and features",
    description: "I have this monitor for a few days. its awesome with all the features it has. I can play videogames wile watchin a video or work wile watching your favorite tv show. the resolution and detail is out of this world. highly recommend. note: have in mind the size of it. it is really big.",
  },
  {
    productId: 68,
    userId: 21, // Olivia
    rating: 5,
    title: "Perfect monitor",
    description: "Been using this monitor for about a week and so far, knock-on wood, have had zero issues with it. No dead pixels, beautiful bright screen, and smooth 240Hz. I had the CRG9 prior to this (which also gave me no issues) so I'm hopeful this one will stand the test of time. Love these monitors and can't imagine going back to anything smaller.",
  },
  {
    productId: 70,
    userId: 44, // Connor Lam
    rating: 4,
    title: "Gamer for sure",
    description: "It lacked having a drawer for storage otherwise a good product",
  },
  {
    productId: 70,
    userId: 41, // Jair
    rating: 5,
    title: "Gaming deck",
    description: "My son loves his gaming deck. We put his gaming deck together. It was fun working with my son. It was his Christmas gift.",
  },
  {
    productId: 72,
    userId: 78, // Jason A
    rating: 5,
    title: "I mean who doesn't like a gift card",
    description: "Just wish that if you purchased them online you had the option to get the redemption code in a email instead of a physical card. #ForThePolarBears . Still a great gift though",
  },
  {
    productId: 72,
    userId: 100, // Kevinelle
    rating: 5,
    title: "Steam gift card",
    description: "Why would anyone not like this it’s perfect",
  },
  {
    productId: 75,
    userId: 98, // Alex A
    rating: 2,
    title: "Not great",
    description: "Looks great and reasonably priced. But not easy to play and it vibrates too much while playing",
  },
  {
    productId: 75,
    userId: 98, // David C
    rating: 4,
    title: "Good beginner racket!",
    description: "I’m starting tennis for fun and just wanted an affordable racket before investing in a nice one and this one is perfect!",
  },
  {
    productId: 76,
    userId: 77, // Jake L
    rating: 5,
    title: "GREAT BALL !!!!!!",
    description: "GREAT BALL !! PLAYS WELL GOOD DISTANCE AND GREAT ROLL ON THE GREENS",
  },
  {
    productId: 76,
    userId: 81, // Justin
    rating: 5,
    title: "Great ball for older players like me who have a slower swing. Love it .",
    description: "I have used this ball for about three years as I am in a 87 year old golfer and have a slower swing, this is a great ball for me and I think it would be great for other seniors.",
  },
  {
    productId: 79,
    userId: 83, // Kelly
    rating: 5,
    title: "Comfortable and great buy!",
    description: "Comfortable and worth the money spent.",
  },
  {
    productId: 79,
    userId: 56, // Adam
    rating: 5,
    title: "Good air mattress!",
    description: "Easy and quick to inflate and deflate. No issues turning off the pump and keeping air in - unlike some other air mattresses I've used before, where you have to scramble quickly to close the cap. The pump goes inside and turns off when the cap is closed, and then you use the foot pump to top it off to your preferred fullness.",
  },
  {
    productId: 80,
    userId: 60, // David B
    rating: 5,
    title: "Highly Recommend",
    description: "This tent is huge! Spacious and well priced. The colors coding bars made it easy to put together even in the dark and while raining. It kept us dry and comfortable through thunderstorms.",
  },
  {
    productId: 80,
    userId: 47, // John C
    rating: 5,
    title: "Efficient, dependable!",
    description: "The Coleman Sunlodge cabin tent is really easy to set up and I love that everything is color coded. The quality is amazing and I love that with the cabin style, I can fully stand up inside of it. The tent is nice and spacious, with plenty of room for my family of five and room to spare. Coleman has been my families go to brand for all of our camping equipment for years and it will continue to be because they are always high quality and affordable.",
  },
  {
    productId: 81,
    userId: 48, // Ryan W
    rating: 5,
    title: "Afforable and does the job",
    description: "We needed an extra bag to bring home some purchases made on vacation and this was perfect to throw clothes in while gifts were tucked into suitcases. It was an affordable purchase that we can bring along next trip in our suitcase and it folds up (or shoves!) easily into a suitcase without taking up much space.",
  },
  {
    productId: 81,
    userId: 66, // Moran
    rating: 1,
    title: "Not what i Expected",
    description: "Not very durable. I was expecting a little more for the price.",
  },
  {
    productId: 82,
    userId: 59, // Cindy
    rating: 3,
    title: "Had high hopes...",
    description: "Loved it at first -holds a lot of my stuff, but after a recent trip to Manahattan, I pulled it off the carousel at Laguardia and after walking about 10 feet, realized it wasn't rolling smoothly. Upon inspection, the wheels on one corner had broken off. Not good! Very hesitant to buy another one.",
  },
  {
    productId: 82,
    userId: 62, // James
    rating: 5,
    title: "Impressed.",
    description: "Very good manufacture quality..Gorgeous.",
  },
  {
    productId: 83,
    userId: 84, // Kris
    rating: 1,
    title: "Absolute junk, sold broken, assembled broke",
    description: "Got bike, its crank was broken in the manufacturing process. Almost impossible to get help on it. Did a video on you tube to show it",
  },
  {
    productId: 84,
    userId: 74, // Caleb
    rating: 5,
    title: "Great way to track exercise .",
    description: "My Fitbit Inspire 2 was my best purchase ever at Target.",
  },
  {
    productId: 84,
    userId: 71, // Allen
    rating: 5,
    title: "Easy to use",
    description: "Works for my lifestyle",
  },
  {
    productId: 89,
    userId: 83, // Kelly
    rating: 4,
    title: "Great sounding bell, but frays into a poof",
    description: "The bell is a clear sound, not muffled like other bells. But my cat scratched this collar up until finally it looked like a ring of poof. It also turned so the top edge of the collar was making contact, not the thick part of the collar. It aged weird.",
  },
  {
    productId: 89,
    userId: 90, // Schae
    rating: 5,
    title: "Mia approved! I think...",
    description: "Cat would scratch at it so it would fray easily. Maybe it was too itchy for her. Beautiful green matched perfectly with her eyes. The clasp is good enough and the bell has saved me so much time looking for her.",
  },
  {
    productId: 89,
    userId: 60, // David B
    rating: 4,
    title: "Decent!",
    description: "I like this especially for the price but my lab keeps chewing through them. So do not recommend if your dog is an avid chewer.",
  },
  {
    productId: 89,
    userId: 97, // Erin
    rating: 5,
    title: "Look No Further for a Good Quality Leash",
    description: "I wish the shorter loop was shorter but the padding helps me keep hold of the leash without hurting my hands. Very nice look and happy it is reflective.",
  },
  {
    productId: 91,
    userId: 98, // Alex A
    rating: 5,
    title: "Such a cute little hat",
    description: "Bought this hat for my aunt’s dog (yes it’s for cats but it still works) and she loves it (my aunt not necessarily her dog haha). The hat’s good quality and has so far survived two attempts of being destroyed (as mentioned her dog in fact doesn’t want to be a little chef haha). If you have a dog or cat and want them to look adorable then you need this!",
  },
  {
    productId: 91,
    userId: 96, // Gabe
    rating: 3,
    title: "Ehhh",
    description: "Super cute but didn’t fit my cats head right … looked funky",
  },
  {
    productId: 92,
    userId: 92, // Seb
    rating: 4,
    title: "Great for smaller breeds",
    description: "These are great for smaller dogs but do not work for larger breeds. We have a petite boxer who can wear it however it doesn’t fit our GSP and def not our Great Dane. Returning 2/3.",
  },
  {
    productId: 92,
    userId: 68, //Yibo
    rating: 5,
    title: "Good product",
    description: "Soft material a little bigger than the other one I ordered",
  },
  {
    productId: 93,
    userId: 81, // Justin
    rating: 5,
    title: "It does the job",
    description: "easy opening , does what its meant to do",
  },
  {
    productId: 93,
    userId: 82, // Keer
    rating: 5,
    title: "love",
    description: "love these bags!!! ollie has the world’s largest poops but that’s okay because they fit nicely in these. bags easily come apart but don’t rip. i get unscented now but lavender is ok too",
  },
  {
    productId: 95,
    userId: 39, // David R
    rating: 5,
    title: "Great litter box",
    description: "I gave this litterbox for my friend's cat. At first the cat was curious about the box and examined it. He seemed interested in the top hole of the box. He suddenly disappeared for a few minutes and did his business. My friend told me he uses the box as his primary litterbox which she loves because of the design.",
  },
  {
    productId: 95,
    userId: 47, // John C
    rating: 5,
    title: "Clever Design!",
    description: "I love the top entry design as it keeps the litter from getting all over the floor. I needed to help my kitten into it the first time she used it. Now she is able to jump right in and out by herself. I really appreciate the scoop handle on the outside of the box. The bags are so easy to replace. This is a perfect litter box for clean freak pet owners.",
  },
  {
    productId: 96,
    userId: 54, // tom
    rating: 5,
    title: "Very happy",
    description: "So happy with the cam feeder I just love it And my puppy loves it too.",
  },
  {
    productId: 96,
    userId: 72, // Andrew W
    rating: 5,
    title: "Best Purchase!",
    description: "My puppy and I are so happy with this Cam Feeder. I can be out with no worries because I can always check on her thru the Cam. :)",
  },
  {
    productId: 98,
    userId: 76, // Carmel
    rating: 5,
    title: "Modern and good quality!",
    description: "The chairs were really easy to put together. Simple and straight forward directions. I got the beige due to another review saying it was more of a cream, however, the color is true to a beige. The brown undertones make it look like a darker oatmeal. The chairs are sturdy and look great in my dining room! Definitely recommend these to anyone looking for affordable dining chairs.",
  },
  {
    productId: 98,
    userId: 73, // brad
    rating: 5,
    title: "LOVE!",
    description: "I got these in the green and I am so pleased! I really like the linen. They are the perfect size, and super comfortable. They are shipped unassembled and packaged very well. Assembling could not be easier. If I had the room I would buy more!",
  },
 {
  productId: 101,
  userId: 80, // Jesse
  rating: 5,
  title: "White dresser",
  description: "Fast delivery easy set up Looks very nice",
},
{
  productId: 101,
  userId: 49, // Thenu
  rating: 4,
  title: "Okay but not great",
  description: "Decent for what it’s worth. Check for damaged pieces BEFORE you begin assembly!",
},
{
  productId: 102,
  userId: 50, // Brennon
  rating: 5,
  title: "Great price, works prefect.",
  description: "Needed a simple, modern look, inexpensive lamp for the living room and searched on Target.com. Read the reviews, ordered the lamp, and so far no complaints at all. Just what we needed.",
},
{
  productId: 102,
  userId: 51, // Logan
  rating: 5,
  title: "Glad I Bought It",
  description: "Easy assembly, very cozy light, good price.",
},
{
  productId: 103,
  userId: 32, // Cesar
  rating: 5,
  title: "Awesome for small spaces",
  description: "This mirror never fails; if you leave it leaning against a wall it might be slightly distorted because it’s a little flimsy, but if you hang it up on a wall it’s perfect for a small space",
},
{
  productId: 103,
  userId: 41, // Jair
  rating: 5,
  title: "Nice product",
  description: "Good product and very useful.",
},
{
  productId: 106,
  userId: 45, // Gary
  rating: 5,
  title: "Perfect little planters!",
  description: "These were an awesome addition to our front yard this year! I filled them with a mix of annuals and hung them all the way along a railing that runs across the front of our house, and I got so many compliments!! They were an amazing price, and made such a huge difference to our home, I’ll definitely be using these again next year!",
},
{
  productId: 106,
  userId: 44, // Connor
  rating: 5,
  title: "Great price with so many options!",
  description: "Excellent price, and even better is how multi use these are. I hung one against a tree with a nail. I hung the others from a fence. I just looped clear zip ties through the hole that's already provided on the planter. I fit one little impatient in each and they are thriving! Honestly the self watering compartment doesn't hold much water but I don't mind, I like watering my plants!",
},
{
  productId: 107,
  userId: 6, // Alec
  rating: 5,
  title: "Serve its purpose",
  description: "Serve its purpose. It’s a trash can, perfect for our house, but taking the trash bag out when it’s full might need some patience. The same goes with placing new trash bag in the can so that it’s clipped and don’t fall down. Impatient people please look elsewhere.",
},
{
  productId: 107,
  userId: 25, // Sherry
  rating: 5,
  title: "Great for the price",
  description: "Great trash can and price. Looks great without taking up too much space.",
},
{
  productId: 109,
  userId: 27, // Whit
  rating: 4,
  title: "Beautiful 😍",
  description: "Beautiful wreath!!!! I just add a poinsettia flower to match the Christmas 🎄 😉 Thank you target...",
},
{
  productId: 109,
  userId: 28, // Daniel F
  rating: 5,
  title: "Cute & simple",
  description: "Love this LED wreath! I added a gift bow for a little something extra. You may have to arrange the branches to hide the wiring and switch, but it’s super easy.",
},
{
  productId: 110,
  userId: 52, // Alex K
  rating: 5,
  title: "Gingerbread Ornaments",
  description: "Beautiful ornaments. Nicer quality than I expected!",
},
{
  productId: 110,
  userId: 73, // Brad
  rating: 5,
  title: "Good buy",
  description: "These look so cute and festive on the tree. They feel sturdy and hang nicely.",
},
{
  productId: 111,
  userId: 53, // Jackson
  rating: 5,
  title: "classy knit stocking",
  description: "beautiful and great price",
},
{
  productId: 111,
  userId: 88, // Richard
  rating: 5,
  title: "Adorable Stocking!",
  description: "I love this stocking! Great colors to match a wide range of decor. Durable fabric built to last. Will match with other older and newer designs. Great product through and through! Will definitely purchase more to make a set",
},
{
  productId: 112,
  userId: 42, // Tiff
  rating: 4,
  title: "Color isn't warm",
  description: "The size is very cute but the color is just not 'warm' like vintage bulbs. Which was disappointing. The light is also very bright. It's so frustrating that none of these LED light makers can get the actual warm glow of incandescent looking Christmas lights when they are available as regular house bulbs. I did keep them because there's not many alternatives, but I was hoping for better.",
},
{
  productId: 112,
  userId: 60, // David B
  rating: 5,
  title: "Cozy lights",
  description: "Love the larger sized bulbs. They really pop on our 6ft tree; one package covers it well.",
},
{
  productId: 113,
  userId: 69, // Abel
  rating: 5,
  title: "Great item",
  description: "I love the mini candy canes! They are the perfect size!",
},
{
  productId: 113,
  userId: 73, // Brad
  rating: 5,
  title: "Great value & perfect size!",
  description: "Yummy! And perfect size.",
},
{
  productId: 114,
  userId: 70, // Aijia
  rating: 5,
  title: "Just Right!",
  description: "I’m a fan of this set because you can split it up and everyone does a small house. I helped my younger kids assemble the houses, and then they did all the decorating. I recommend purchasing additional white icing. It comes with just enough, and it would be nice to have more for decorating and more “snow”. Recommend buying some extra candies like sprinkles and m&ms, too!",
},
{
  productId: 114,
  userId: 71, // Allen
  rating: 1,
  title: "Dont buy!!",
  description: "Every house broke when I tried getting the pieces apart. There were broken bases as well. There was NO saving them.",
},
{
  productId: 115,
  userId: 49, // Thenu
  rating: 5,
  title: "Christmas Tree Mug!!!",
  description: "So happy that I saw this in my local Target that I has to have it. I saw a similar one and the price was outrageous. Using this as part of my decorating. Very Cute Indeed!!!",
},
{
  productId: 115,
  userId: 62, // James
  rating: 5,
  title: "Festive mug",
  description: "Love this cup! So festive",
},
{
  productId: 116,
  userId: 66, // Mroan
  rating: 4,
  title: "Cute but too large for some",
  description: "Adorable but do not fit the menorah we have and says they will..",
},
{
  productId: 117,
  userId: 66, // Mroan
  rating: 5,
  title: "Gorgeous!",
  description: "I absolutely love mine. I bought it in store, so I obviously didn’t have any issues with shipping that some others have had. That being said, it has held up nicely and I keep it on display all year long! Gorgeous menorah.",
},
{
  productId: 118,
  userId: 52, // Alex K
  rating: 5,
  title: "Quality",
  description: "I love the Sugar Paper brand. The wrapping paper is very well made and the designs all coordinate from year to year.",
},
{
  productId: 118,
  userId: 47, // John C
  rating: 5,
  title: "Get this",
  description: "Great quality the red roll too",
},
{
  productId: 119,
  userId: 47, // John C
  rating: 5,
  title: "Love it!",
  description: "I love that it’s 3D and has glitter. Deft recommend it.",
},
{
  productId: 119,
  userId: 96, // Gabe
  rating: 5,
  title: "good",
  description: "cute glittery nice quality",
},
{
  productId: 120,
  userId: 78, // Jason
  rating: 5,
  title: "Very happy",
  description: "tree was very easy to put together 3 sections that well labeled a, b, c along with visual instructions",
},
{
  productId: 120,
  userId: 100, // Kevin
  rating: 5,
  title: "Stunning",
  description: "Tree is stunning in person and looks real",
},
]


let prodIds = [];
demoReviews.forEach(review => {
  if (!prodIds.includes(review.productId)) {
    prodIds.push(review.productId)
  }
})


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Reviews',
      demoReviews,
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'Reviews',
      { productId: { [Op.in]: prodIds } }
    )
  }
};
