'use strict';
// /** @type {import('sequelize-cli').Migration} */


const demoReviews = [
  /********************** 1. Personal Care **********************/
  // ✅ 1. toothpaste
  {
    productId: 1,
    userId: 60,
    rating: 5,
    title: "Right size",
    description: "Just what wanted, right size and price",
  },
  // ✅ 5. solution
  {
    productId: 5,
    userId: 27,
    rating: 1,
    title: "This solution is the devil.",
    description: "I purchased a small bottle of ths for a weekend trip. The trip ended up being ruined because after soaking my contacts in this solution friday night i could barely see the rest of the weekend. I wouldn't wish this solution on my worst enemy.",
  },
  // ✅ 6. softlips
  {
    productId: 6,
    userId: 23,
    rating: 5,
    title: "Great product!",
    description: "I bought this a month ago and it's been amazing. It smells good, adds the right amount of shine. It moisturizes and keeps my lips soft. It's easy to take one with you everywhere",
  },
  // ✅ 9. cotton
  {
    productId: 9,
    userId: 23,
    rating: 5,
    title: "Good quality cotton balls",
    description: "Nice and good quality cotton",
  },
  // ✅ 10. tissue
  {
    productId: 10,
    userId: 13,
    rating: 4,
    title: "I like the product and buy it when I need tissues.",
    description: "Opened a box of 124 2-ply tissues and the box only had two tissues in it. I bought a package of 3 and it was the middle box. Thought you should know.",
  },
  {
    productId: 10,
    userId: 17,
    rating: 5,
    title: "Puffs",
    description: "My favorite when allergy season is here but cost to much!",
  },
  // ✅ 11. ibuprofen
  {
    productId: 11,
    userId: 1,
    rating: 5,
    title: "our go to pain relief",
    description: "Aleve is our brand we have been using for years. Aches and pains? Stiff back? Kids giving you a headache? Two of these and you are good as new for hours. Product has not changed since we started taking. Love the easy open bottle.",
  },

  /********************** 2. Home **********************/
  // ✅ 13. gloves
  {
    productId: 13,
    userId: 58,
    rating: 4,
    title: "Just Ok",
    description: "These are just ok. They tend to thin and tear after about 3 weeks",
  },
  // ✅ 14. mrs. meyers
  {
    productId: 14,
    userId: 58,
    rating: 5,
    title: "Delicious Scent",
    description: "Earthy smelling, one of my fave scents… and I buy them all. Effective at cleaning. Love the bottle size and the sprayer is always even and drip less and perfect.",
  },
  // ✅ 17. woollite
  {
    productId: 17,
    userId: 55,
    rating: 5,
    title: "Amazing",
    description: "This is great on black clothes. It doesn’t fade.",
  },
  {
    productId: 17,
    userId: 58,
    rating: 4,
    title: "Good soap but pricy",
    description: "Like everything but the price",
  },
  {
    productId: 17,
    userId: 6,
    rating: 5,
    title: "Woolite - needs no introduction!",
    description: "This is the only detergent for dark delicates I use (and the White bottle for light delicates). Woolite is the best - hands down for keeping fabrics looking new and gently washing away soil. The scent is pleasant and not overpowering.",
  },
  // ✅ 18. hangers
  {
    productId: 18,
    userId: 10,
    rating: 5,
    title: "Smart looking",
    description: "I think when all the hangers are the same you get instant neatness. These hangers are simple and sleek looking. I’ve transition almost all my clothes to them. I did try another brand and the hang and hook detached. These have been sturdy and reliable.",
  },
  // ✅ 19. towels
  {
    productId: 19,
    userId: 55,
    rating: 3,
    title: "Okay material",
    description: "Cheap price, quality is okay. Good if you just need some new towels on a budget they’re not very soft but you get what you pay for",
  },
  // ✅ 21. steamer
  {
    productId: 21,
    userId: 19,
    rating: 5,
    title: "Portable and Reliable",
    description: "This is one of the best steamers that I’ve owned. It takes the wrinkles out of my clothes and it is extremely easy to transport.",
  },
  /********************** 3. Kitchen & Dining **********************/
  // ✅ 27. wine glasses
  {
    productId: 27,
    userId: 25,
    rating: 5,
    title: "Nice lottke glass",
    description: "Great price, fun to drink my sparkling water out of",
  },
  {
    productId: 27,
    userId: 53,
    rating: 5,
    title: "Wine glasses",
    description: "Loved them. Perfect small Casual wine glasses at a great price.",
  },
  {
    productId: 27,
    userId: 59,
    rating: 5,
    title: "Cute stemless glasses",
    description: "I got the stackable stemless glasses. They are super cute and stack well in cabinets! They are not perfectly even, but they are great quality for the price paid. Also love that they are dishwasher safe.",
  },
  {
    productId: 27,
    userId: 13,
    rating: 2,
    title: "Dare not drop it",
    description: "Shatters into large and small chunks.",
  },
  // ✅ 28. knives
  {
    productId: 28,
    userId: 37,
    rating: 5,
    title: "No issues!",
    description: "Works great, best basic set I've ever gotten.",
  },
  // ✅ 29. grilling
  {
    productId: 29,
    userId: 37,
    rating: 5,
    title: "Very Good",
    description: "Very happy with this set. It is large as others have mentioned but for those with bigger hands it is perfect for turning steaks with the strong tongs as well as the very sturdy spatula for other items. Easy clean up also.",
  },
  {
    productId: 29,
    userId: 6,
    rating: 4,
    title: "Would be great scaled down a bit ...",
    description: "I love OXO utensils, but the size of this set is overkill (unusable) for my small hands and Weber Smokey Joe grill.",
  },
  // ✅ 30. compostable baking sheet
  {
    productId: 30,
    userId: 37,
    rating: 5,
    title: "Non stick natural",
    description: "It works well, no need to use oil doesn't stick. Easy clean up. Natural parchment. They changed the box, now easier too cut the parchment.",
  },
  {
    productId: 30,
    userId: 16,
    rating: 5,
    title: "Parchment paper",
    description: "I like the earth friendly quality",
  },
  // ✅ 34. toaster oven
  {
    productId: 34,
    userId: 4,
    rating: 5,
    title: "Nice",
    description: "Nice design. Easy to use and clean",
  },
  // ✅ 35. cookware
  {
    productId: 35,
    userId: 53,
    rating: 5,
    title: "Good Quality",
    description: "Deep skillets. Good heat distribution. Nice selection of sizes in the set.",
  },
  /********************** 4. Grocery **********************/
  // ✅ 37. eggs
  {
    productId: 37,
    userId: 20,
    rating: 5,
    title: "Some leaking do check the carton!",
    description: "Good quality for an even better price! Less than $2 is hard to beat. You do have to check each carton to ensure there aren’t cracks though.",
  },
  // ✅ 38. bread
  {
    productId: 38,
    userId: 20,
    rating: 1,
    title: "PERSERVATIVE NATION!",
    description: "This bread has an insane amount of additives. People wonder why everyone is walking around with health issues, do better!",
  },
  {
    productId: 38,
    userId: 36,
    rating: 1,
    title: "Not sourdough",
    description: "Is this a joke? Not sourdough, same dish sponge consistency as most store bought breads... Sticking to HEB one, the only real bread I'm able to find",
  },
  // ✅ 39. rice
  {
    productId: 39,
    userId: 22,
    rating: 5,
    title: "Good Product",
    description: "This is good value and great product. We buy bags when it is available.",
  },
  // ✅ 40. butter
  {
    productId: 40,
    userId: 36,
    rating: 5,
    title: "Best better; the only one I use",
    description: "The only butter I use for everything! Can’t tell how many times I have bought this.",
  },
  {
    productId: 40,
    userId: 3,
    rating: 5,
    title: "Best butter",
    description: "Such good butter!! Nice, rich, and salty.",
  },
  // ✅ 41. sriracha
  {
    productId: 41,
    userId: 43,
    rating: 5,
    title: "Sriracha is awesome",
    description: "Yeah man, Sriracha is awesome and this is the best Sriracha",
  },
  // ✅ 42. Nutella
  {
    productId: 42,
    userId: 1,
    rating: 5,
    title: "I can’t live without this",
    description: "Omg this is so good. The texture is rich and thick and so creamy. You can put it on toast use as a filling for cake put on fruit it goes well with so much. I would recommend this to everyone.",
  },
  // ✅ 43. Ritter Sport
  {
    productId: 43,
    userId: 13,
    rating: 5,
    title: "Go to treat",
    description: "One of my favorite sweet treats. The chocolate is delicious and the whole hazelnuts. So moreish. And cost is at least $1 cheaper at target than any grocery stores.",
  },
  {
    productId: 43,
    userId: 17,
    rating: 5,
    title: "One of my favorite",
    description: "Been having these for years and like the taste and hazelnuts in them. One of my best chocolates out there. The price has gone up but glad the taste is still the best.",
  },
  // ✅ 44. Ice cream
  {
    productId: 44,
    userId: 5,
    rating: 5,
    title: "The GOAT",
    description: "The GOAT. The Tom Brady of ice creams.",
  },
  {
    productId: 44,
    userId: 25,
    rating: 5,
    title: "The best ice cream",
    description: "I had never had a better ice cream than this one! This is the best flavor from the best brand! The cone pieces along with the chocolate and caramel create a PERFECT flavor explosion. Absolutely love it!",
  },
  {
    productId: 44,
    userId: 32,
    rating: 5,
    title: "Delicious",
    description: "This is my favorite flower, I like the taste, the ingredients and nutrients, it is delicious and enjoyable, you can try and check this out.",
  },
  // ✅ 45. donuts
  {
    productId: 45,
    userId: 7,
    rating: 5,
    title: "A fluffy delight",
    description: "It was so soft and not too sugary",
  },
  // ✅ 46. orange juice
  {
    productId: 46,
    userId: 20,
    rating: 5,
    title: "Best OJ",
    description: "Best Orange 🍊 Juice",
  },
  {
    productId: 46,
    userId: 46,
    rating: 5,
    title: "Best OJ",
    description: "It’s the best no pulp orange juice in the game!",
  },
  {
    productId: 46,
    userId: 60,
    rating: 5,
    title: "Simply OJ",
    description: "I love this juice, especially the flavor",
  },
  {
    productId: 46,
    userId: 17,
    rating: 5,
    title: "So good",
    description: "Who doesn’t love a good no pulp OJ , ehh!?! Lol delicious",
  },
  // ✅ 47. soymilk
  {
    productId: 47,
    userId: 60,
    rating: 5,
    title: "classic",
    description: "there is something about classic silk soy milk and tazo chia tea mix together that I am beyond addicted to. the flavors balance each other so well. i wish i could still find soy ice cream another fav of mine but now theyre all coconut milk.",
  },
  {
    productId: 47,
    userId: 16,
    rating: 5,
    title: "Great, just don't get close to freezing",
    description: "Smooth and consistent taste and great quality. My 2 year old and I both are very picking and love regular milk but we love this milk on occasion as we try to incorporate more plant based foods in our diets. Product gets weird clumps if it freezes.",
  },
  // ✅ 48. wine
  {
    productId: 48,
    userId: 39,
    rating: 4,
    title: "Nice",
    description: "A lighter or medium red this is bursting with berry flavors. It goes down very smoothly. It’s pretty good for California wine but I honestly think you can find better for cheaper. Many love this one though!",
  },
  {
    productId: 48,
    userId: 41,
    rating: 5,
    title: "Small bottle!",
    description: "The bottle is small This is what I get for not reading the ounces either way I’m gonna drink it and it’s delicious but just warning others this is a mini bottle not a full size for you guys probably already knew lol",
  },
  {
    productId: 48,
    userId: 51,
    rating: 4,
    title: "It is smooth to",
    description: "It is smooth to drink and has subtle notes of berries. Compared to other Pinot Noirs, I think there are better ones to choose from, but at this price point I think this is a good option. If you are new to wine, this bottle is a great Noir to start with.",
  },
  {
    productId: 48,
    userId: 52,
    rating: 5,
    title: "Out go to standard",
    description: "Out go to standard Pinot Noir! Usually pretty affordable. All the flavors and notes you expect from a Pinot Noir",
  },
  {
    productId: 48,
    userId: 53,
    rating: 5,
    title: "Delicious, Refreshing, and 10/10",
    description: "I am a fan of Kim Crawford’s Sauvignon Blanc! It’s fresh and crisp. Perfect for a summer day. Pairs well with everything. Cheers!",
  },
  {
    productId: 48,
    userId: 54,
    rating: 5,
    title: "Hands down, best Pinot!!!",
    description: "Having a bad day? Meiomi. Having a good day? Meiomi. Need a you day? Meiomi. Each and every time. I am obsessed with this wine. Have gotten all my friends hooked on it as well!",
  },
  {
    productId: 48,
    userId: 58,
    rating: 1,
    title: "So overplayed",
    description: "This wine isn't it. It's quality has gone down and is now just a mass produced grape juice with zero quality.",
  },
  {
    productId: 48,
    userId: 59,
    rating: 5,
    title: "My favorite",
    description: "Never met anyone that doesn’t like this wine. Even for beginners!",
  },
  {
    productId: 48,
    userId: 9,
    rating: 2,
    title: "Smooth but yuck",
    description: "It has a smooth finish, but something about the taste is awful to me.",
  },
  /********************** 5. Electronics **********************/
  // ✅ 49. tv
  {
    productId: 49,
    userId: 20,
    rating: 5,
    title: "Great colors",
    description: "I bought it last month and we are happy with the TV we bought",
  },
  {
    productId: 49,
    userId: 26,
    rating: 5,
    title: "Great colors and clarity",
    description: "I replaced my old 55 inch with this 0LED and the colors and definition is outstanding.",
  },
  {
    productId: 49,
    userId: 31,
    rating: 5,
    title: "Fabulous",
    description: "Recently upgraded from a 6yr old 65 LG OLED to a C2 77. It does appear in 6yrs the improvement in technology has made a difference for the good. I had been contemplating this for the better part of the year and I am glad I finally pulled the trigger.",
  },
  {
    productId: 49,
    userId: 50,
    rating: 5,
    title: "Great purchase!",
    description: "I purchased this tv 3 weeks ago and I'm very pleased with the features and the picture quality. Would recommend it if you are looking for a great tv.",
  },
  {
    productId: 49,
    userId: 4,
    rating: 5,
    title: "Great tv",
    description: "Best decision I made in a while, nice upgrade from my Samsung, great price at Costco, really enjoy watching my movies and sports on this",
  },
  {
    productId: 49,
    userId: 5,
    rating: 5,
    title: "Great tv all around",
    description: "Have had this tv for about two weeks with no issues. Picture is clear and colors are vibrant. Sound is good even without external speakers",
  },
  {
    productId: 49,
    userId: 11,
    rating: 5,
    title: "Gorgeous picture!",
    description: "The picture quality is stunning on this tv , so much better than we anticipated. We did our research, read reviews etc and it is so much better than the descriptions. You feel like you are with the actors, or at least could reach out and touch them.",
  },
  {
    productId: 49,
    userId: 14,
    rating: 5,
    title: "Movie Theater Experience in a Small Room",
    description: "I recently bought this TV a few weeks ago and have loved it ever since. Every movie, shows and games that my family and I have watched has been nothing but extraordinary.",
  },
  // ✅ 50. ipad
  {
    productId: 50,
    userId: 24,
    rating: 5,
    title: "Awesome with a few exceptions",
    description: "I absolutely love the size of this ipad. The only downfall is if you’re on a Zoom call the battery will die quickly. I learned to put it in low power mode. Also you need wireless headphones in order use it privately in public.",
  },
  {
    productId: 50,
    userId: 26,
    rating: 5,
    title: "Awesomeness",
    description: 'I totally love it.!! “Style, Weight, Color” And Retina Display and Functions.!! Awesomeness .!!',
  },
  {
    productId: 50,
    userId: 27,
    rating: 4,
    title: "Great product",
    description: "Love it. Only issue I had was the instructions from ATT. They said it was already activated and to follow the directions on the IPAD. You have to call att for them to activate it. It does not come already activated.",
  },
  {
    productId: 50,
    userId: 30,
    rating: 5,
    title: "New Purchase",
    description: "I have enjoyed every minute using my new iPad. It is everything I have been needing for sometime.",
  },
  {
    productId: 50,
    userId: 31,
    rating: 5,
    title: "Very pleased with this item.",
    description: "****Cool ***** Much sleeker than previous ipad",
  },
  {
    productId: 50,
    userId: 49,
    rating: 5,
    title: "Love it",
    description: "Love it a lot a lot a lot",
  },
  {
    productId: 50,
    userId: 50,
    rating: 5,
    title: "Upgraded ipad",
    description: "I love how the camera recognizes the face it will move to find your face",
  },
  {
    productId: 50,
    userId: 60,
    rating: 5,
    title: "GREAT PRODUCT. FAST SHIPPING",
    description: "Love this iPad. It’s so easy to use and has a very posh look and feel",
  },
  {
    productId: 50,
    userId: 2,
    rating: 5,
    title: "Love it.",
    description: "The new iPad Pro is just what my daughter needed.",
  },
  {
    productId: 50,
    userId: 9,
    rating: 5,
    title: "Apple is solid",
    description: "Love the new iPad maybe I should have gotten the bigger screen.",
  },
  // ✅ 51. airpods
  {
    productId: 51,
    userId: 19,
    rating: 5,
    title: "Love everything but the fit",
    description: "I love the noise canceling and the design kinda hard to fit in ear",
  },
  {
    productId: 51,
    userId: 38,
    rating: 5,
    title: "Worth it",
    description: "The best ones so far and as cool new features",
  },
  {
    productId: 51,
    userId: 42,
    rating: 5,
    title: "Must buy",
    description: "Lost my first generation pros and bought these. These are phenomenal headphones and the clarity of the headphones has truly enhanced from the 1st generation AirPods Pro’s",
  },
  {
    productId: 51,
    userId: 48,
    rating: 5,
    title: "Very good",
    description: "was able to pick it up same day right after school for cheaper price than apple store. work like a charm",
  },
  {
    productId: 51,
    userId: 49,
    rating: 5,
    title: "Great Buy",
    description: "Loving the ANC and transparency modes so far, battery life is great and sound quality is top tier. Defined would recommend, 10/10!",
  },
  {
    productId: 51,
    userId: 55,
    rating: 5,
    title: "Amazing earbuds",
    description: "Wow! Amazing noise cancellation! Amazing stereo! I have had apple earbuds before but they were nothing compared to these!!",
  },
  {
    productId: 51,
    userId: 60,
    rating: 5,
    title: "Happy with my choice",
    description: "Great sound and the fit is better. I love the ability to adjust the volume from the pods Target made price worth it",
  },
  {
    productId: 51,
    userId: 61,
    rating: 5,
    title: "Apple Airpods Pro Gen 2 - nothing can compare to sound quality!",
    description: "Title speaks for itself. Has to be one of the best if not 'the best' out there in the market today. Apple did a good job this time. Excellent sound quality! There's absolutely nothing I can think of that's negative. Best money spent no doubt!",
  },
  {
    productId: 51,
    userId: 3,
    rating: 5,
    title: "Very cool",
    description: "These are the best headphones",
  },
  {
    productId: 51,
    userId: 7,
    rating: 5,
    title: "Sound quality amazing!",
    description: "Sound quality amazing! I had Power Beats before and I loved them because the battery lasted 15 hours and these definitely don’t last as long (about half the time) but the quality of the sounds is unbeatable.",
  },
  {
    productId: 51,
    userId: 8,
    rating: 5,
    title: "Worth it",
    description: "The noise canceling is beyond impressive. This is my first pair of apple AirPods and I’m ecstatic about them!",
  },
  // ✅ 52. homepod mini
  {
    productId: 52,
    userId: 6,
    rating: 5,
    title: "Amazing product",
    description: "For those who say “Hur Hur. It needs PlUgGeD in Fer PoWeR”, they need to go back to elementary school to learn that power is needed to make anything work and needs to be plugged into some sort of power source. This is a great product.",
  },
  {
    productId: 52,
    userId: 21,
    rating: 5,
    title: "Best smart speaker",
    description: "If you have Apple products (iPhone, iPad, Mac, etc) this little speaker is a no brainer! Excellent sound quality! Small, but mighty!! I already had one and purchased 2 more! Excited to try the intercom feature! The new blue color is very pretty!",
  },
  {
    productId: 52,
    userId: 36,
    rating: 5,
    title: "10/10 recommend!",
    description: "I love it! the sound quality is amazing!",
  },
  {
    productId: 52,
    userId: 45,
    rating: 5,
    title: "Love",
    description: "Great sound and seamlessly pairs with all Apple devices. The small size makes it easy to move around. Only reason for 4 stars is that it needs to be plugged in",
  },
  {
    productId: 52,
    userId: 49,
    rating: 5,
    title: "Fantastic!",
    description: "Fantastic speaker in a very small package. Fills my bedroom with sound and only takes up a tiny space.",
  },
  // ✅ 57. webcam
  {
    productId: 57,
    userId: 14,
    rating: 4,
    title: "Worked for 3 years!",
    description: "I've had this webcam for over 3 years and it has worked well! The only issue is that now it only shows a white screen. I've tried the troubleshooting tips found on Logitech's website and taken it apart but no luck in fixing it.",
  },
  {
    productId: 57,
    userId: 32,
    rating: 5,
    title: "Good Picture",
    description: "Good quality picture for an inexpensive camera",
  },
  {
    productId: 57,
    userId: 49,
    rating: 5,
    title: "Adequate and Effective",
    description: "I am new to technology and my son advised me that this would be effective tool to use to meet clients. Very user friendly.",
  },
  // ✅ 59. lights
  {
    productId: 59,
    userId: 33,
    rating: 4,
    title: "Lots of options!",
    description: "Love that this strip gives you the option to cut it and make it exactly the length that you need it to be! My only wish is that it was a little more flexible for making a turn so that I could have wrapped it a little better around my TV stand.",
  },
  {
    productId: 59,
    userId: 35,
    rating: 5,
    title: "Great for larger TVs",
    description: "I was gifted this to try out and I am in love. Our TV is 87 inches and we needed more strip lights and this set the effect over the edge. EVeryone that comes into my house is amazing as its the first thing they say.",
  },
  {
    productId: 59,
    userId: 41,
    rating: 5,
    title: "Out with the old, in with the Hue!",
    description: "I had a ton of cheap LED strip lights from low-grade brands and I finally upgraded to these lights and I couldn't be happier. The color options are endless and installation was super easy. The lights feel secure and definitely worth the splurge.",
  },
  {
    productId: 59,
    userId: 43,
    rating: 5,
    title: "Great light strips!",
    description: "I love that these lightstrips are so easy to install! The app is easy to use as well and offers so many pretty color options. I used these under my kitchen cabinets and they transform my whole kitchen!",
  },
  {
    productId: 59,
    userId: 49,
    rating: 1,
    title: "Bad adhesive strip - too expensive",
    description: "If your wall isn’t completely smooth the adhesive will not stick. Had to return it because it just came undone over and over again.",
  },
  // ✅ 60. robovac
  {
    productId: 60,
    userId: 41,
    rating: 5,
    title: "Great deal and big help!",
    description: "Such a great robovac for dust and debris esp for a big house with two little ones and a lot of things in the way. Every day I empty it out and it's had gathered up a full carton.",
  },
  {
    productId: 60,
    userId: 49,
    rating: 5,
    title: "WOW!! Love my Eufy!!",
    description: "Easy app setup. Shared settings with another phone easily. Ran on max suction for at least 45 min. Picked up plenty of dog hair and other debris, dust and dirt. Really was surprised at how well it cleaned.",
  },

  /********************** 6. Video Games **********************/
  // ✅ 61. xbox
  {
    productId: 61,
    userId: 14,
    rating: 4,
    title: "Very good petite console",
    description: "This is a console that focus’s on peak performance and I enjoy that. It also packs a punch in the form of the high level graphics and the durability of the console solid 8/10",
  },
  {
    productId: 61,
    userId: 20,
    rating: 5,
    title: "Fun",
    description: "I have so much fun with it every day I recommend this",
  },
  {
    productId: 61,
    userId: 49,
    rating: 5,
    title: "XBOX XBOX XBOX",
    description: "XBOX IS GREAT, NO COMPARING",
  },
  // ✅ 62. PS5
  {
    productId: 62,
    userId: 15,
    rating: 5,
    title: "Step in the right direction",
    description: "Absolutely love this console this is a huge step up from me jumping from ps4 pro. No more fan noise, no more long loading times, a wayyyyy faster UI. This in every way possible is truly a next gen console. I was so lucky to be able to get the final ps5.",
  },
  {
    productId: 62,
    userId: 33,
    rating: 5,
    title: "Ps5",
    description: "It is very smooth and defiantly worth the price",
  },
  {
    productId: 62,
    userId: 34,
    rating: 5,
    title: "2 years later",
    description: "Was finally able to get my hands on one this weekend woke up early Saturday morning went on target and they had one in stock put my pick up order in and was surprised I got it love it",
  },
  {
    productId: 62,
    userId: 49,
    rating: 5,
    title: "PlayStation 5",
    description: "Everything is perfect with the PS5. Quick download and load speed. Plays games without any issues. Plenty of memory space.",
  },
  // ✅ 63. meta quest
  {
    productId: 63,
    userId: 26,
    rating: 5,
    title: "Hardware is fine",
    description: "I have a Rift S and just bought the Quest 2. I love the cordless thing but some changes to the software side would be nice. With the Rift S I can roam around in my VR home environment but with the Quest 2 I can only stand in one place.",
  },
  {
    productId: 63,
    userId: 28,
    rating: 5,
    title: "Overly Surprised",
    description: "I owned the first Oculus (SDK) and years later got a Valve Index. I purchased the Quest for my kid and set it up for him. I am really surprised on the hardware, the tracking, the comfort, the roomscale drawing/layout, the battery, and over all product.",
  },
  {
    productId: 63,
    userId: 34,
    rating: 2,
    title: "Review after using Meta Quest a couple of months",
    description: "It's heavy, not comfortable with glasses, dizzy, not enough contents. The contents are selling but not satisfied when purchased. I didn't buy this for gaming.",
  },
  // ✅ 65. keyboard
  {
    productId: 65,
    userId: 18,
    rating: 5,
    title: "Best decent Gaming Keyboard",
    description: "I really enjoy the green switches, sounds great, and surprisingly it comes with PBT keycaps, Amazing quality",
  },
  {
    productId: 65,
    userId: 22,
    rating: 5,
    title: "Good keyboard",
    description: "This keyboard is comfortable to use. The keys make a loud clicking sound when you press them. This keyboard is compact, making it great for smaller spaces. The RGB options are a nice touch for customized lighting.",
  },
  {
    productId: 65,
    userId: 35,
    rating: 4,
    title: "Decent but very loud",
    description: "It is pretty decent and types fairly smooth but I don’t really like how loud it types. The quality is good and sturdy doesn’t feel cheap and has a bit of weight to it. When plugging it in the my computer I get a software with razer to install.",
  },
  {
    productId: 65,
    userId: 38,
    rating: 5,
    title: "Great tactile response!",
    description: "I usually play FPS and MOBA games and this is absolutely perfect for both! Tactile response is so crisp and precise with good feedback. I love how it’s so compact and I can take it with me when we travel. It does have a cool RGB backlighting feature.",
  },
  {
    productId: 65,
    userId: 40,
    rating: 5,
    title: "Works fantastic",
    description: "I use this for work rather than for gaming. I like the feel and the lights. Makes working from home much more pleasant. I wish it had a 10 key but otherwise it is durable and works well. Very comfortable.",
  },
  {
    productId: 65,
    userId: 48,
    rating: 5,
    title: "Works great",
    description: "I love this keyboard! It’s very responsive and feels nice to game on. It is a nice addition to my gaming set up. The lighting is so cool and customizable and and if you’re into the clicking sounds of a keyboard, you’ll love this!",
  },
  // ✅ 68. gaming chair
  {
    productId: 68,
    userId: 14,
    rating: 5,
    title: "Great chair",
    description: "This chair has great back support. I haven’t used it for long so I am not sure how long it will hold up but I love it so far!",
  },
  {
    productId: 68,
    userId: 20,
    rating: 5,
    title: "Comfortable Chair for work",
    description: "chair is saving my back and legs after 3 years of remote work on a junky task chair",
  },
  // ✅ 70. arcade
  {
    productId: 70,
    userId: 57,
    rating: 5,
    title: "It's legit!",
    description: "Well made table. Exceeded my expectations! Just got it though - we'll see how it holds up.",
  },

  /********************** 7. Sports & Outdoors **********************/
  // ✅ 73. weights
  {
    productId: 73,
    userId: 11,
    rating: 5,
    title: "Comfortable Weights",
    description: "Bought these to complete my home gym weights set. These are comfortable to hold and I love all the fun colors. Definitely reccomend them.",
  },
  {
    productId: 73,
    userId: 15,
    rating: 5,
    title: "Just Right",
    description: "We have tried dumbbells of varying sizes over time. These are just right for everyday use. There is no pain and we still get a light workout.",
  },
  {
    productId: 73,
    userId: 46,
    rating: 5,
    title: "Muscle bound",
    description: "Needed heavier workout weights & these were exactly what I wanted & needed.",
  },
  // ✅ 74. yoga mat
  {
    productId: 74,
    userId: 59,
    rating: 3,
    title: "It's a pass for me",
    description: "Wish I could return it but I’ve already used it in a hot yoga class. I wouldn’t recommend this for yoga - maybe fun for a kids mat but my hands and feet always slip.",
  },
  {
    productId: 74,
    userId: 4,
    rating: 2,
    title: "Slippery",
    description: "Unfortunately this mat is way too slippery for yoga.",
  },
  // ✅ 76. hiking
  {
    productId: 76,
    userId: 8,
    rating: 5,
    title: "Good links for connecting to your backpack",
    description: "There is nothing to dislike. I use these to attach my water bottle to my backpack. I guess you can use them as a key ring also.",
  },
  {
    productId: 76,
    userId: 29,
    rating: 5,
    title: "Works Great and Looks Snazzy",
    description: "It works as advertised. I clip my car and house keys to my pants while working everyday (do lots of walking around and physical labor). It stays in place and seems very sturdy. Gettting a pack of 2 is fantastic.",
  },
  {
    productId: 76,
    userId: 56,
    rating: 5,
    title: "Great Multi Purpose Hooks",
    description: "Bought these to hold doggy bags on my pets leash and they work perfectly! Easy to use, love the bright colors. No issues with breaking yet!",
  },
  // ✅ 77. water bottle
  {
    productId: 77,
    userId: 8,
    rating: 5,
    title: "The best Waterbottle",
    description: "This is the best waterbottle I have ever had! Defently recamend. Beautiful and very afordible!",
  },
  {
    productId: 77,
    userId: 56,
    rating: 2,
    title: "Missing. Straw Top with no Straw!?",
    description: "Missing pieces. It's the straw lid design, but didn't come with the actual straw.... Bottle itself is fine.",
  },

  /********************** 8. Pets **********************/
  // ✅ 85. cat food
  {
    productId: 85,
    userId: 24,
    rating: 5,
    title: "Meow",
    description: "My cats love it. They have been eating Meow mix for 8+ years.",
  },
  // ✅ 86. dog food
  {
    productId: 86,
    userId: 12,
    rating: 5,
    title: "Great food",
    description: "Love the brand and my dogs love the quality of dog food they receive.",
  },
  {
    productId: 86,
    userId: 3,
    rating: 5,
    title: "My dogs love it!",
    description: "My dogs can't get enough of this. My senior dog actually has some prep in his step after switching to this. The cost is killing me though.",
  },
  // ✅ 87. cat toy
  {
    productId: 87,
    userId: 37,
    rating: 5,
    title: "Popular with stray kitten",
    description: "My stray cats love it. I wish it was cheaper. My stray cat ran away and hid it now I have to buy another one.",
  },
  // ✅ 88. dog toy
  {
    productId: 88,
    userId: 12,
    rating: 5,
    title: "Lab's best friend",
    description: "Very durable for my lab puppy who chews through almost everything. Longest lasting you so far. Highly recommend!",
  },
  {
    productId: 88,
    userId: 3,
    rating: 3,
    title: "Great toy, but it won't hold up to chewers.",
    description: "My dog LOVES this stick! She pulled the noise maker out in minutes and chewed off the ends and branches in a day, but over a year later she still loves what's left! If you have an aggressive chewer this won't last.",
  },
  // ✅ 94. litter
  {
    productId: 94,
    userId: 24,
    rating: 5,
    title: "Great litter abd Vet approved!!",
    description: "This is my favorite litter. Cats are sensitive to strong perfume scents. I love this litter it does the job and you never smell anything. The best part it does not hurt my fur baby and all the previous cats I have had.",
  },
  {
    productId: 94,
    userId: 55,
    rating: 5,
    title: "Love this for multiple cats. Only one I use!",
    description: "I prefer to only use this litter, for the price, odor control. And cats like it!",
  },

  /********************** 9. Furniture **********************/
  // ✅ 97. dining table
  {
    productId: 97,
    userId: 44,
    rating: 5,
    title: "Great Value",
    description: "This table is perfect for my kitchen. I wanted something round and not too big for the area. 4 chairs fit easily around it. The base is heavy so it is very stable. Easy to assemble though the base is heavy to move but worth the effort.",
  },
  {
    productId: 97,
    userId: 50,
    rating: 5,
    title: "Table",
    description: "Love this table so much! Easy to clean and looks beautiful in the space I needed it for",
  },
  {
    productId: 97,
    userId: 53,
    rating: 5,
    title: "Classy",
    description: "Purchased this as a conference table for my office. It is so sleek and pretty. Gives my office a solid, but feminine flair!",
  },
  // ✅ 99. side tables
  {
    productId: 99,
    userId: 16,
    rating: 5,
    title: "Love these tables!",
    description: "So easy to assemble and very attractive when placed together. They feel very solid!",
  },
  {
    productId: 99,
    userId: 45,
    rating: 2,
    title: "They’ll have to do",
    description: "I realize this is a $100 pair of tables and my expectations should be low—and they were, but what I pulled out of the packaging blew my mind. Most strange of all, the parts came out of the box feeling damp to the touch and smelling of wet soil.",
  },
  {
    productId: 99,
    userId: 53,
    rating: 5,
    title: "Sturdy",
    description: "Sturdy legs, metal brackets to secure-no wobbles!!",
  },
  // ✅ 100. bookcase
  {
    productId: 100,
    userId: 52,
    rating: 5,
    title: "Works great!",
    description: "Fits perfectly in my small closet! Saves space and is great for organizing.",
  },
  {
    productId: 100,
    userId: 55,
    rating: 5,
    title: "Goog product",
    description: "Easy to put together. The pieces were will marked and all holes were drilled well and in the correct spots.",
  },
  // ✅ 104. frames
  {
    productId: 104,
    userId: 39,
    rating: 5,
    title: "Cute simple frame",
    description: "I love these simple frames. You just have to be careful when buying because a lot of them have black marks from being moved around or something",
  },
  {
    productId: 104,
    userId: 47,
    rating: 5,
    title: "Frames",
    description: "Looks absolutely amazing on my family photo wall.",
  },
  // ✅ 105. vases
  {
    productId: 105,
    userId: 23,
    rating: 5,
    title: "Must have vase",
    description: "One of my favorite purchases. Perfect size vase. I loved it so much I bought two.",
  },
  {
    productId: 105,
    userId: 25,
    rating: 5,
    title: "Perfect for floral centerpieces",
    description: "I bought this to create low floral centerpieces for the dinner table. It's the perfect size and height and the stems stay in. The glass is also strong and heavy. I had to get 8 so the price was good.",
  },
  {
    productId: 105,
    userId: 39,
    rating: 3,
    title: "Okay vase",
    description: "Not bad, smaller that I thought even though it had dimensions. Doesn't really look like a vase, more like a cup",
  },
  // ✅ 108. white board
  {
    productId: 108,
    userId: 5,
    rating: 5,
    title: "Amazing Dry Erase Board!",
    description: "This dry erase board is large yet lightweight. I absolutely love the size of it. It was very easy to install myself. I came with the instillation kit and a black Quartet marker. The surface is smooth and slick and the markers glide effortlessly.",
  },
  {
    productId: 108,
    userId: 6,
    rating: 4,
    title: "Great product",
    description: "I got this dry erase board to put in my home office and it is absolutely amazing. It was easy to install and hang. I am able to put important dates and reminders and have a constant visual of upcoming appointments. Writing on it is a breeze.",
  },
  {
    productId: 108,
    userId: 22,
    rating: 5,
    title: "Great dry-erase board",
    description: "This is a great dry-erase board that can help keep you and your family organized. We have this hung up in our family room with notes/reminders for everyone in the family. It was easy to install. The board is fairly big, so you can do a lot with this.",
  },
  {
    productId: 108,
    userId: 32,
    rating: 4,
    title: "Excellent Board, Insufficient Packaging",
    description: "The board is great but the packaging needs some work. I received a damaged board with missing hardware that was obviously caused by insufficient packaging. Thankfully customer service is excellent and they shipped a replacement immediately.",
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
