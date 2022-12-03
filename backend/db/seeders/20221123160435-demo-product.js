'use strict';
// /** @type {import('sequelize-cli').Migration} */

{
  id: 1,
  departmentId: 1,
  name: "",
  brand "",
  price: ,
  description: "",
},



const demoProducts = [
  /********************** 1. Personal Care **********************/
  {
    id: 1,
    departmentId: 1,
    name: "Colgate Max Fresh Toothpaste with Mini Breath Strips Cool Mint - 6oz",
    brand: "Colgate",
    price: 2.89,
    description: "You can breathe confidently with Colgate Max Fresh Toothpaste with Breath Strips and a great Cool Mint flavor. Our unique toothpaste formula is packed with hundreds of mini breath strips and unleashes a powerful rush of freshness for long-lasting fresh breath. Colgate Max Fresh Toothpaste with Breath Strips invigorates your brushing experience and leaves your breath feeling fresh for hours. Plus, it fights cavities and whitens teeth leaving you with a healthy smile.",
  },
  {
    id: 2,
    departmentId: 1,
    name: "Neutrogena Pink Grapefruit Face Scrub - 2 fl oz",
    brand: "Neutrogena",
    price: 4.69,
    description: "Help treat breakouts while gently exfoliating your skin with Neutrogena Oil-Free Acne Face Wash Pink Grapefruit Foaming Scrub. Designed for acne-prone skincare, this foaming scrub clears breakouts, blackheads. With Micro-Clear technology and maximum strength Salicylic Acid acne fighting mediation, this formula works to cut through pore-clogging oil, allowing acne medicine to penetrate to the source of breakouts, unclogging congested pores and removing dirt and impurities.",
  },
  {
    id: 3,
    departmentId: 1,
    name: "", //toner
    brand "",
    price: ,
    description: "",
  },
  {
    id: 4,
    departmentId: 1,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 5,
    departmentId: 1,
    name: "PureMoist Opti-Free Contact Solution",
    brand: "",
    price: 17.99,
    description: "Be kind to your eyes with Opti-Free Contact Solution from PureMoist. A disinfecting contact solution that's gentle enough for sensitive eyes, it creates a barrier across the lens dispelling dirt and grit throughout the day.",
  },
  {
    id: 6,
    departmentId: 1,
    name: "Softlips Lip Balm - Vanilla - 0.21oz/3pk",
    brand: "",
    price: 3.79,
    description: "One of the nice things about this lip balm is its flavor. Treat your lips to the sweetness of Softlips® Vanilla, a warm and smooth glide of lip nourishing ingredients to leave your lips soft and hydrated.",
  },
  {
    id: 7,
    departmentId: 1,
    name: "", brows
    brand "",
    price: ,
    description: "",
  },
  {
    id: 8,
    departmentId: 1,
    name: "", razor
    brand "",
    price: ,
    description: "",
  },
  {
    id: 9,
    departmentId: 1,
    name: "Jumbo Cotton Balls - up & up™",
    brand: "",
    price: 1.49,
    description: "From cosmetics to skincare applications, these Jumbo Cotton Balls from up & up™ are great for a wide range of uses. Made of 100% cotton, this pack includes super-sized fluffy cotton balls that are soft and absorbent.",
  },
  {
    id: 10,
    departmentId: 1,
    name: "Puffs Ultra Soft Facial Tissue",
    brand: "",
    price: 2.99,
    description: "Keep the cushiony softness of Puffs Ultra Soft around to ease your sniffles and sneezes. Puffs cushions your nose from ordinary tissues so you can skip any sore, red nose issues.",
  },
  {
    id: 11,
    departmentId: 1,
    name: "Aleve Naproxen Sodium Arthritis Pain Reliever & Fever Reducer Tablets (NSAID)",
    brand: "",
    price: 10.19,
    description: "Aleve Naproxen Sodium Pain Relief Caplets are proven stronger and longer on pain than Tylenol. Each Naproxen Sodium 220 mg pain medicine caplet has the strength to last up to 12 hours.",
  },
  {
    id: 12, first aid
    departmentId: 1,
    name: "",
    brand "",
    price: ,
    description: "",
  },


  /********************** 2. Home **********************/
  {
    id: 13,
    departmentId: 2,
    name: "Reusable Gloves - Medium - Made By Design™",
    brand: "",
    price: 5.00,
    description: "Add convenience to your daily cleaning chores with the Heavy-Duty Latex Gloves from Made By Design™. Crafted from latex, these household cleaning gloves offer you a flexible fit, while the soft cotton flocked interior makes them feel comfy.",
  },
  {
    id: 14,
    departmentId: 2,
    name: "Mrs. Meyer's Clean Day Basil Scent Multi-Surface Everyday Cleaner - 16 fl oz",
    brand: "",
    price: 4.99,
    description: "Mrs. Meyer’s Clean Day Multi-Surface Everyday Cleaners feature hard-working yet gentle multi purpose cleaning agents, while also providing a special, singular scent for your entire home.",
  },
  {
    id: 15, liner
    departmentId: 2,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 16, swiffer
    departmentId: 2,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 17,
    departmentId: 2,
    name: "Woolite Darks Liquid Laundry Detergent",
    brand: "",
    price: 7.89,
    description: "Woolite Darks Defense is a first of its kind formula that keeps your clothes looking like new for up to 20 washes, even synthetics and blends. It protects your clothes from fading, pilling, for up to 20 washes and stretching for up to 6 washes.",
  },
  {
    id: 18,
    departmentId: 2,
    name: "4pk Wood Suit Hangers Natural - Brightroom™",
    brand: "",
    price: 7.00,
    description: "Create a coordinated, tidy look in your closet with ease while helping your clothes stay wrinkle-free with this 4-Pack of Wood Suit Hangers from Brightroom™. Featuring durable wood and steel construction.",
  },
  {
    id: 19,
    departmentId: 2,
    name: "Bath Towel - Room Essentials™",
    brand: "",
    price: 3.50,
    description: "For a simplistic update to your bath accessories, pick up this Bath Towel from Room Essentials™. Designed in a solid color, this bath towel mixes easily with your existing decor style and color palette.",
  },
  {
    id: 20, pillows
    departmentId: 2,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 21,
    departmentId: 2,
    name: "Pure Enrichment Puresteam Portable Fabric Steamer",
    brand: "",
    price: 29.99,
    description: "Fall in love with your clothes again with Pure Enrichment’s PureSteam Portable Fabric Steamer. Unlike the chore of ironing, our small but mighty portable garment steamer makes wrinkle-busting a quick and fun activity you will look forward to doing.",
  },
  {
    id: 22, candle
    departmentId: 2,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 23, command strips
    departmentId: 2,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 24, tools
    departmentId: 2,
    name: "",
    brand "",
    price: ,
    description: "",
  },

  /********************** 3. Kitchen & Dining **********************/
  {
    id: 25, cutlery
    departmentId: 3,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 26, flatware
    departmentId: 3,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 27,
    departmentId: 3,
    name: "Assorted Wine Glasses - Made By Design™",
    brand: "",
    price: 12.00,
    description: "You’ll love using this 12-ounce Wine Glass from Made By Design™ for any occasion, from wine-and-bubble-bath nights to dinner parties with friends. The simple design makes for a timeless kitchen staple.",
  },
  {
    id: 28,
    departmentId: 3,
    name: "Farberware Edgekeeper 13 Piece Self Sharpening StainlessSteel Hollow Handle Knife Block Set",
    brand: "",
    price: 79.99,
    description: "This Farberware Knife Block features EdgeKeeper Technology that automatically sharpens the straight edge knives with every use. Built-in ceramic sharpeners hone the blades whenever they are removed from the block.",
  },
  {
    id: 29,
    departmentId: 3,
    name: "OXO Grilling Turner and Tong Set",
    brand: "",
    price: 22.99,
    description: "With its sturdy stainless steel design, the OXO SoftWorks Grilling Turner makes flipping, turning and lifting burgers, steaks, salmon filets, and other grilling go-to’s feel effortless. The wide, beveled head slides smoothly under foods.",
  },
  {
    id: 30,
    departmentId: 3,
    name: "If You Care Parchment Food Wraps Sheets - 70 sq ft",
    brand: "",
    price: 4.79,
    description: "Make your cooking experience clean and environmentally-friendly with If You Care Parchment Baking Sheets! Non-toxic, minimal clean up and multiple uses. Never tested on animals and completely chlorine and bleach free.",
  },
  {
    id: 31, tupperware
    departmentId: 3,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 32, measuring
    departmentId: 3,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 33, kettle
    departmentId: 3,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 34,
    departmentId: 3,
    name: "BLACK+DECKER 4 Slice Natural Convection Toaster Oven - Silver - TO1745SSG",
    brand: "",
    price: 52.99,
    description: "Taste the difference even heating can make with the BLACK + DECKER™ Natural Convection Toaster Oven. The interior was designed using the principles of thermodynamics, circulating airflow efficiently to provide more even heating* and fast results.",
  },
  {
    id: 35,
    departmentId: 3,
    name: "Farberware Edgekeeper 13 Piece Self Sharpening StainlessSteel Hollow Handle Knife Block Set",
    brand: "",
    price: 79.99,
    description: "This Farberware Knife Block features EdgeKeeper Technology that automatically sharpens the straight edge knives with every use. Built-in ceramic sharpeners hone the blades whenever they are removed from the block.",
  },
  {
    id: 36, book
    departmentId: 3,
    name: "",
    brand "",
    price: ,
    description: "",
  },

  /********************** 4. Grocery **********************/
  {
    id: 37,
    departmentId: 4,
    name: "Grade A Large Eggs - 12ct - Good & Gather™ (Packaging May Vary)",
    brand: "",
    price: 2.49,
    description: "Grade A Large Eggs make an excellent staple in your kitchen — they're a convenient and versatile addition to everyday meals, and they're a breeze to whip up and include in a range of recipes for the whole family to enjoy.",
  },
  {
    id: 38,
    departmentId: 4,
    name: "Sliced Sourdough Bread - 17oz - Favorite Day™",
    brand: "",
    price: 4.39,
    description: "Keep a classic staple on hand with the Sliced Sourdough Bread from Favorite Day™. This delicious bread features classic tangy sourdough flavor that’s perfect for enjoying with soup and a sandwich, or with jelly, jam, butter or a spread.",
  },
  {
    id: 39,
    departmentId: 4,
    name: "Enriched Long Grain White Rice - 32oz - Good & Gather™",
    brand: "",
    price: 2.29,
    description: "All your favorite dishes will easily be completed with the Enriched Long Grain White Rice from Good & Gather™. This tasty white rice is extremely versatile and perfect for a wide variety of dishes. You can pair this rice with beans for a simple dish.",
  },
  {
    id: 40,
    departmentId: 4,
    name: "Kerrygold Grass-Fed Naturally Softer Pure Irish Butter - 8oz Tub",
    brand: "",
    price: 5.89,
    description: "Our Naturally Softer Butter is unlike anything else in the world. The milk that grass-fed Kerrygold cows produce in the summer months is highest in naturally softer milkfat. We use a special process to gently churn this summer milk.",
  },
  {
    id: 41,
    departmentId: 4,
    name: "Huy Fong Sriracha Chili Sauce - 28oz",
    brand: "",
    price: 5.39,
    description: "Our most popular sauce. Created from sun ripened chilies into a smooth paste we have captured its flavor in a convenient squeeze bottle that is easy to use.",
  },
  {
    id: 42,
    departmentId: 4,
    name: "Nutella Ferrero Chocolate Hazelnut Spread - 26.5oz",
    brand: "",
    price: 7.79,
    description: "Wake up to wow with the rich, creamy hazelnut spread that you know and love, Nutella. The original hazelnut and cocoa spread that has been on the breakfast tables of millions worldwide, spreading good moments to start the day for more than 50 years.",
  },
  {
    id: 43,
    departmentId: 4,
    name: "Ritter Sport Milk Chocolate with Whole Hazelnuts Bar - 3.5oz",
    brand: "",
    price: 3.49,
    description: "Ritter Sport Milk Chocolate (30% Cocoa) with Whole Hazelnuts. FOR BITERS. NOT FOR SUCKERS. Whole crunchy roasted hazelnuts from Turkey, chosen specifically for their 11-13 millimeter diameter, are fully ripened for an intense nutty taste.",
  },
  {
    id: 44,
    departmentId: 4,
    name: "Haagen-Dazs Caramel Cone Ice Cream - 14oz",
    brand: "",
    price: 5.99,
    description: "HÄAGEN-DAZS Caramel Cone Ice Cream is a creamy, crunchy composition of smooth caramel ice cream, crunchy chocolaty-covered cone pieces, and rich caramel swirls for an incredibly flavorful experience that lingers on your tongue.",
  },
  {
    id: 45,
    departmentId: 4,
    name: "Assorted Mini Donuts - 11oz - Favorite Day™",
    brand: "",
    price: 3.79,
    description: "Assorted Mini Donuts from Favorite Day™ make it easy to start your day with something sweet. This donut pack has something to satisfy every sweet tooth, with mini donuts in three delicious varieties.",
  },
  {
    id: 46,
    departmentId: 4,
    name: "Simply Orange Pulp Free with Calcium & Vitamin D Juice - 52 fl oz",
    brand: "",
    price: 4.49,
    description: "For Simply Orange Pulp Free with Calcium & Vitamin D, we carefully select real, ripe oranges and turn them into a deliciously simple pulp-free orange juice. Not from concentrate and never frozen, for a deliciously fresh-squeezed taste.",
  },
  {
    id: 47,
    departmentId: 4,
    name: "Silk Vanilla Soy Milk - 0.5gal",
    brand: "",
    price: 4.49,
    description: "Treat yourself to the tasty goodness of Silk Vanilla Soymilk. Made with whole-harvested soybeans and a touch of vanilla, this Soymilk offers rich, creamy taste in every delectable drop and makes a perfect non-dairy alternative to milk.",
  },
  {
    id: 48,
    departmentId: 4,
    name: "Meiomi Pinot Noir Red Wine - 750ml Bottle",
    brand: "",
    price: 20.99,
    description: "Meiomi Pinot Noir Red Wine offers unique structure and depth seldom seen in a pinot noir wine. This California wine is carefully crafted with premium grapes from the coastal state's most notable winegrowing regions and aged in French oak barrels.",
  },

  /********************** 5. Electronics **********************/
  {
    id: 49,
    departmentId: 5,
    name: "LG 65-inch Class 4K UHD Smart OLED TV - OLED65C2PUA",
    brand: "",
    price: 2499.99,
    description: "The versatile LG OLED C Series has gotten even more impressive with brighter colors, a new, more advanced processor and a sleeker, slimmer bezel. Self-lit LG OLED pixels create beautiful picture quality with infinite contrast.",
  },
  {
    id: 50,
    departmentId: 5,
    name: "Apple iPad Pro 12.9-inch Wi-Fi + Cellular (2021, 5th Generation)",
    brand: "",
    price: 1299.99,
    description: "iPad Pro features the powerful Apple M1 chip for next-level performance and all-day battery life.3 An immersive 12.9-inch Liquid Retina XDR display for viewing and editing HDR photos and videos. 5G cellular models for blazing speeds away from Wi-Fi.",
  },
  {
    id: 51,
    departmentId: 5,
    name: "Apple AirPods Pro True Wireless Bluetooth Headphones (2nd Generation)",
    brand: "",
    price: 249.99,
    description: "AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking for immersive sound. Now with multiple ear tips (XS, S, M, L) and up to 6 hours of listening time.",
  },
  {
    id: 52,
    departmentId: 5,
    name: "Apple HomePod mini",
    brand: "",
    price: 99.99,
    description: "HomePod mini delivers unexpectedly big sound for a speaker of its size. Place multiple speakers around the house for a connected sound system. With Siri, your do-it-all intelligent assistant helps with everyday tasks and controls your smart home.",
  },
  {
    id: 53, charger
    departmentId: 5,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 54, HDMI
    departmentId: 5,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 55, battery
    departmentId: 5,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 56, polaroid
    departmentId: 5,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 57,
    departmentId: 5,
    name: "Logitech C270 3.0MP Webcam - Black (960-000694)",
    brand: "",
    price: 29.99,
    description: "With the Logitech C270 Webcam, you can confidently join any video meeting knowing you’ll always have quality audio and video. Our most affordable camera, the C270 Webcam is an upgrade for your laptop or desktop with practical features.",
  },
  {
    id: 58, surveillance
    departmentId: 5,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 59,
    departmentId: 5,
    name: "Philips Hue White and Color Ambiance Bluetooth Enabled Lightstrip Base Kit",
    brand: "",
    price: 99.99,
    description: "Get colored smart light anywhere in your home with the latest Philips Hue White and Color ambiance Bluetooth enabled lightstrip. This base kit includes an 80-inch white and color lightstrip, power adapter, and connector box for reattaching cut pieces.",
  },
  {
    id: 60,
    departmentId: 5,
    name: "eufy RoboVac G15 Gyro Navigation",
    brand: "",
    price: 249.99,
    description: "Experience an upgraded standard of floorcare cleaning with the eufy Clean RoboVac G15 Robot Vacuum. Developed with intelligent, deep cleaning solutions and innovative features, the RoboVac G15 features an impressive 2500 Pa of strong suction power.",
  },

  /********************** 6. Video Games **********************/
  {
    id: 61,
    departmentId: 6,
    name: "Xbox Series S Console",
    brand: "",
    price: 299.99,
    description: "Go all-digital with Xbox Series S and enjoy next-gen performance in the smallest Xbox ever, at a great price. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS.",
  },
  {
    id: 62,
    departmentId: 6,
    name: "PlayStation 5 Console",
    brand: "",
    price: 499.99,
    description: "Play Has No Limits™ The PS5™ console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.",
  },
  {
    id: 63,
    departmentId: 6,
    name: "Meta Quest 2: Advanced All-In-One Virtual Reality Headset - 256GB",
    brand: "",
    price: 499.99,
    description: "Quest 2 is the all-in-one system that truly sets you free to roam in VR. With no wires or cables to limit your experience, simply put on the headset, draw out your play space, and jump into fully-immersive, imagination-defying worlds.",
  },
  {
    id: 64, storage
    departmentId: 6,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 65, headset
    departmentId: 6,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 66,
    departmentId: 6,
    name: "Razer Black Widow V3 Gaming Keyboard for PC",
    brand: "",
    price: 139.99,
    description: "FEEL THE DIFFERENCE. The name that started it all returns to reassert its dominance. Feel the difference with the Razer BlackWidow V3—backed by a legacy as the first and most iconic mechanical gaming keyboard, and armed with new, improved features.",
  },
  {
    id: 67, monitor
    departmentId: 6,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 68,
    departmentId: 6,
    name: "Oren High Back Gaming Task Chair - Lifestyle Solutions",
    brand: "",
    price: 67.99,
    description: "Ready for full-on game mode or just need to tackle emails at the office, the Lifestyle Solutions Oren Gaming Office Chair is ready for you. Featuring height-appropriate armrests, tilt control, 360-degree swivel and smooth-gliding casters.",
  },
  {
    id: 69, desk
    departmentId: 6,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 70,
    departmentId: 6,
    name: "Arcade1Up Pac-Man Head-2-Head Gaming Table",
    brand: "",
    price: 699.99,
    description: "Face your competition -- literally -- with this Black Series PAC-MAN™ Head-to-Head Gaming Table from Arcade1Up! Bringing you authentic retrogaming experiences at attractive home arcade price points.",
  },
  {
    id: 71, case orr figurine
    departmentId: 6,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 72, monitor
    departmentId: 6,
    name: "",
    brand "",
    price: ,
    description: "",
  },

  /********************** 7. Sports & Outdoors **********************/
  {
    id: 73,
    departmentId: 7,
    name: "Dumbbell - All in Motion™",
    brand: "",
    price: 25.99,
    description: "Why we're ALL IN: Tone and strengthen your arms, chest and shoulders with the help of hand weights that have hexagon-shaped heads to prevent them from rolling as you switch between exercises. Each weight comes with a comfortable non-slip inlaid texture.",
  },
  {
    id: 74,
    departmentId: 7,
    name: "Yoga Mat 3mm - All in Motion™",
    brand: "",
    price: 16.99,
    description: "Why we're ALL IN: The textured non-slip surface of this yoga mat lets you focus on flowing from pose to pose whether you're practicing at home or at the studio. A lightweight and durable design makes it easy to take with you during busy days on the go.",
  },
  {
    id: 75, tennis
    departmentId: 7,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 76,
    departmentId: 7,
    name: "Coleman Deluxe Links - 2 pk.",
    brand: "",
    price: 2.89,
    description: "Whether you're hiking, backpacking, or biking around town, the Coleman® Deluxe Carabiner Clips will securely attach your gear to backpacks, belt loops, and coolers for hands-free carrying. The spring-loaded carabiners support up to 75 pounds each.",
  },
  {
    id: 77,
    departmentId: 7,
    name: "Simple Modern 32oz Summit Water Bottle with Straw 1 Tone",
    brand: "",
    price: 21.99,
    description: "The Simple Modern Summit water bottle is double wall, vacuum insulated, and made with premium gauge 18/8 stainless steel keeping your beverage hot or cold for hours. It comes with a straw lid which is perfect for the person on the go.",
  },
  {
    id: 78, sweatband
    departmentId: 7,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 79, mattress
    departmentId: 7,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 80, tent
    departmentId: 7,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 81, bag
    departmentId: 7,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 82, luggage
    departmentId: 7,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 83, bike
    departmentId: 7,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 84, fit bit
    departmentId: 7,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  /********************** 8. Pets **********************/
  {
    id: 85,
    departmentId: 8,
    name: "Meow Mix Original Choice with Flavors of Chicken, Turkey & Salmon Adult Complete & Balanced Dry Cat Food",
    brand: "",
    price: 16.39,
    description: "Your cat eats the same food day in and day out, so why not treat them to Meow Mix Original Choice Dry Cat Food. Made with high-quality ingredients, Meow Mix provides a healthy balanced diet for cats of all ages.",
  },
  {
    id: 86,
    departmentId: 8,
    name: "Purina ONE SmartBlend Chicken & Rice Formula Adult Dry Dog Food",
    brand: "",
    price: 16.49,
    description: "Feed your dog Purina ONE Natural Chicken and Rice Formula With Added Vitamins, Minerals and Nutrients adult dry dog food. This high protein dog food supports strong muscles, including a dog's healthy heart.",
  },
  {
    id: 87,
    departmentId: 8,
    name: "Tassel Wand Cat Toy - Boots & Barkley™",
    brand: "",
    price: 3.99,
    description: "Get your feline friend in playful mood with the Chase Pom & Tassel Cat Wand from Boots & Barkley™. This interactive cat toy will ensure your cat gets proper mental stimulation and physical exercise for them to stay active and healthy.",
  },
  {
    id: 88,
    departmentId: 8,
    name: "Long Rubber Stick with Crinkles Dog Toy - Blue - Boots & Barkley™",
    brand: "",
    price: 9.99,
    description: "The Long Rubber Stick With Crinkles Dog Toy from Boots & Barkley™ provides a safer alternative if your dog loves to chew wooden sticks or twigs. Made from soft rubber-like, non-toxic material that won’t splinter or crack.",
  },
  {
    id: 89, collar
    departmentId: 8,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 90, leash
    departmentId: 8,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 91, cat clothes
    departmentId: 8,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 92, dog clothes
    departmentId: 8,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 93, dog bags
    departmentId: 8,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 94,
    departmentId: 8,
    name: "Fresh Step - Simply Unscented Litter - Clumping Cat Litter - 25lbs",
    brand: "",
    price: 17.59,
    description: "Recommended by vets, Fresh Step Simply Unscented Cat Litter is free from added fragrances and dyes, with the same odor control power of regular Fresh Step cat litter. This unscented cat litter prevents bacterial odor growth on the litter.",
  },
  {
    id: 95, litter box
    departmentId: 8,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 96, feeder
    departmentId: 8,
    name: "",
    brand "",
    price: ,
    description: "",
  },

  /********************** 9. Furniture **********************/
  {
    id: 97,
    departmentId: 9,
    name: "Braniff Round Dining Table Metal Base - Project 62™",
    brand: "",
    price: 559.99,
    description: "Add sophisticated style to your dining area with this Braniff Round Tulip Dining Table from Project 62™. Founded on a pedestal base for a streamlined look, this round metal dining table easily fits up to four people.",
  },
  {
    id: 98, chairs
    departmentId: 9,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 99,
    departmentId: 9,
    name: "Nesting End Tables with Tray Top - Lavish Home",
    brand: "",
    price: 99.99,
    description: "Add a mid-century yet modern style and some storage space to your living room, bedroom, nursery, or home office with this set of two Round Nesting End Tables by Yorkshire Home. Made of durable wood, these spindle-legged side tables have a matte finish.",
  },
  {
    id: 100,
    departmentId: 9,
    name: "11-inch 6 Cube Organizer Shelf - Room Essentials™",
    brand: "",
    price: 35,
    description: "Give your traditional bookshelf a modern update with the 6 Cube Organizer Shelf from Room Essentials™. The cube openings are great for storage and compatible with 11-inch storage bins. This item can be displayed horizontally or vertically.",
  },
  {
    id: 101, drawer
    departmentId: 9,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 102, lamp
    departmentId: 9,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 103, mirror
    departmentId: 9,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 104,
    departmentId: 9,
    name: '16" x 20" Matted to 11" x 14" Thin Gallery Frame - Room Essentials™',
    brand: "",
    price: 21.00,
    description: 'The 16" x 20" Matted to 11" x 14" Thin Gallery Frame by Room Essentials™ will showcase your most adored moments in a modern yet timeless format. Each frame comes with a single white mat for a clean look that will work in any space.',
  },
  {
    id: 105,
    departmentId: 9,
    name: "Glass Vase - Threshold™",
    brand: "",
    price: 5.00,
    description: 'Add a simple style to your home decor with this 6" x 7" Glass Vase from Threshold™. This contemporary cylindrical vase makes a welcoming tabletop accent. It features a clear glass finish that easily coordinates with any decor.',
  },
  {
    id: 106, planter
    departmentId: 9,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 107, trash hbin
    departmentId: 9,
    name: "",
    brand "",
    price: ,
    description: "",
  },
  {
    id: 108,
    departmentId: 9,
    name: 'Quartet Standard Melamine Whiteboard - 24" x 36"',
    brand: "",
    price: 46.49,
    description: "Total Erase® dry-erase board with durable surface that resists ghosting and staining and erases cleanly. Best for moderate use in spaces with regular traffic. Frame color complements virtually any décor. Mount vertically or horizontally.",
  },

  /********************** 10. Clearance **********************/
  // {
  //   // id: 109,
  //   departmentId: 10,
  //   name: "",
  //   price: ,
  //   description: "",
  // },
]


let deptIds = [];
demoProducts.forEach(product => {
  if (!deptIds.includes(product.departmentId)) {
    deptIds.push(product.departmentId)
  }
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Products',
      demoProducts,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Products',
      { departmentId: { [Op.in]: deptIds } },
      {}
    )
  }
};
