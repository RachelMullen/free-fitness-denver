User.destroy_all

user1 = User.create!(
    email: "rachel@example.com",
    password: "123", 
    name: "Rachel Mullen",
    bio: "I love running and community!",
    attachment: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

user2 = User.create!(
    email: "dj@example.com",
    password: "123", 
    name: "DJ Reichel",
    bio: "Rather be snowboarding!",
    attachment: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrsQCMmFMku-sq8mvpzprUgWZMt3DAYA-9PLpSBvJy&s")

user3 = User.create!(
    email: "teresa@example.com",
    password: "123", 
    name: "Teresa Krug",
    bio: "I take hiking photos for Instagram!",
    attachment: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

user4 = User.create!(
  email: "elise@example.com",
  password: "123", 
  name: "Elise Mullen",
  bio: "I drive to the top of 14ers!",
  attachment: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

user5 = User.create!(
  email: "smokey@example.com",
  password: "123", 
  name: "Smokey TheDog",
  bio: "I'm a good boy!",
  attachment: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrsQCMmFMku-sq8mvpzprUgWZMt3DAYA-9PLpSBvJy&s")

p "Created Users!"

Organization.destroy_all

organization1 = Organization.create!(
  name: "Back on My Feet",
  organizer_id: user1.id,
  description: "Back on My Feet seeks to revolutionize the way society approaches homelessness. Our unique model demonstrates that if you first restore confidence, strength and self-esteem, individuals are better equipped to tackle the road ahead. For all in need, we aim to provide: practical training and employment resources for achieving independence; an environment that promotes accountability; and a community that offers compassion and hope.", 
  attachment: "https://backonmyfeet.org/wp-content/uploads/2021/08/cropped-BoMF-Lockup-Logo-DkBlue-01.png",
  announcements: "Please fill out a volunteer application here before joining: https://backonmyfeet.org/get-involved/volunteer/",
  link: "https://backonmyfeet.org/denver/",
  social_media: "https://www.instagram.com/backonmyfeet/?hl=en")

organization2 = Organization.create!(
  name: "November Project",
  organizer_id: user2.id,
  description: "Fun, Free Fitness in Denver! So many of the people who call November Project Denver their home connect with others who inspire and challenge them to take on something new and difficult: many race their first 5K, half marathon, marathon, triathlon, and ultramarathon. Whether you are a seasoned athlete, returning from an injury, or you are using fitness as a means to grow your community, November Project Denver will be delighted each and every time you #justshowup – Check out November Project Denver via Facebook and Instagram for the latest happenings!", 
  attachment: "https://dpgzjp4u334u3.cloudfront.net/wp-content/uploads/cropped-Logo-artwork_Black-small14.png",
  announcements: "All levels and abilities are welcome!",
  link: "https://november-project.com/denver-co/",
  social_media: "https://www.instagram.com/novemberprojectdenver/")

organization3 = Organization.create!(
  name: "Denver Beer Co.",
  organizer_id: user2.id,
  description: "Join us on Tuesdays at 6:30pm for Denver Beer Co Run Club! We host a local Run Club at each of our Taprooms every Tuesday that is free to join.

  Join your friends in a beautiful 5K walk, jog or run that showcases our awesome neighborhoods (Denver, Olde Town Arvada, and Rosedale) and reward yourself with your favorite small batch brew after.
  
  We start promptly at 6:30pm, so plan enough time to find parking and sign the waiver (for first timers only).
  
  This is a year-round run club, so come prepared with warm layers, reflective gear and/or headlamps on fall and winter evenings", 
  attachment: "https://denverbeerco.com/wp-content/uploads/2021/11/dbc-logo.svg",
  announcements: "All levels and abilities are welcome!",
  link: "https://denverbeerco.com/events/dbc-run-club-all-three-taprooms-4/",
  social_media: "https://www.facebook.com/groups/denverbeercorunclub/")

organization4 = Organization.create!(
  name: "Highland Tap & Burger",
  organizer_id: user4.id,
  description: "Meet up with fellow fitness enthusiasts for the Highland Tap & Burger Run Club, and run a pre-planned 5k- or 10k-loop around the historic neighborhoods of Lower Downtown and the Highlands. All runners get free pasta and salad, as well as 20 percent off select beers. Highland Tap & Burger features dozens of Colorado craft beers on tap and in bottles. Throughout the year, we'll have different giveaways and information updates from local races and running groups. A huge THANK YOU to our generous sponsors!", 
  attachment: "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-6/313112867_2148525685318262_7807521815158219272_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=_rpkPj9YQhIAX_EQvS1&_nc_ht=scontent.fapa1-1.fna&oh=00_AfA7cPWVCPT3Dc38C48Xee-gqlwMTjosNCjrkvvDXz0bVg&oe=636D5AF1",
  announcements: "Runners can choose a 10K or 5K distance.",
  link: "http://www.denverrunclub.com/",
  social_media: "https://www.facebook.com/groups/HTBrunclub/")

organization5 = Organization.create!(
  name: "Blackbird Public House",
  organizer_id: user5.id,
  description: "Join your neighbors at Blackbird Public House for an evening 5K run around Washington Park. All runners receive $4 select Colorado craft beers and a free shirt at 15 runs.", 
  attachment: "https://www.blackbirdpublichouse.com/wp-content/uploads/rtb-2021.jpg",
  announcements: "Runs April - Oct. Every runner will need to fill out the ONE-TIME registration on the iPad at Blackbird… even if you have run with us in past seasons.",
  link: "https://www.blackbirdpublichouse.com/run-the-bird/",
  social_media: "https://www.facebook.com/runthebirdwashpark/")

organization6 = Organization.create!(
  name: "Denver Cruisers",
  organizer_id: user4.id,
  description: "The Denver Cruiser Ride is a weekly pub crawl that meets on Wednesday nights to cycle safely through the streets of Denver. A mid week Mile High City tradition for over a decade, each of the 20 summer rides boasts a different theme, often involving zany costumes. With close to 60,000 people turning out over the season, the Denver Cruiser Ride has become the largest weekly bike party on the planet! Past themes have included Denver 1894, Mad Max, Bike Prom and Birds & Bees. Check the website Wednesday afternoon for that night's starting point.", 
  attachment: "http://www.denvercruiserride.com/images/500plate.png",
  announcements: "Runs May-October. Check their website for this week's starting point.",
  link: "http://denvercruiserride.com/",
  social_media: "https://www.facebook.com/DenverBikeNight/")

organization7 = Organization.create!(
  name: "Bike Streets",
  organizer_id: user3.id,
  description: "Anyone of any age, ability, or background should be able to ride a bike to any destination in Denver.Join us for a free, low-stress Denver bike tour.
  Learn the VAMOS plan and how to use the low-stress Denver bike map. Tours are 8-12 miles at a joyfully slow pace of 6-8 MPH.", 
  attachment: "https://images.squarespace-cdn.com/content/v1/5fe50748caf95b4fe920e3e0/2d7497d7-7618-4cae-8286-a4dbc93c8f14/BikeStreets-logov1.2-blackshort.png?format=1500w",
  announcements: "Runs July-October. Check their website for event signup.",
  link: "https://www.bikestreets.com/events",
  social_media: "")

organization8 = Organization.create!(
  name: "O'Dell Brewing",
  organizer_id: user3.id,
  description: "RunOBC is an all-inclusive run club welcoming all levels from beginners to seasoned runners. Route distances will be between 3 and 6 miles, with turn-around points generally available on all runs longer than 4 miles. We run rain or shine and don't forget to bring a headlamp and reflective gear for fall and winter runs.
  Get a discount on pints for run club participants and socializing at the Odell Brewing Co. Taproom with your fellow RunOBC runners!", 
  attachment: "https://assets.untappd.com/site/brewery_logos/brewery-OdellBrewingCo_7296.jpeg",
  announcements: "Check event socials for more information.",
  link: "https://www.odellbrewing.com/locations/",
  social_media: "")

organization9 = Organization.create!(
  name: "Denver Beer Runners",
  organizer_id: user1.id,
  description: "This is a group for anyone interested in balancing fitness with the enjoyment of craft beer in Denver. Every Wednesday night a group of runners with varying experience meets at a local brewery or craft beer bar and runs between 3-5 miles returning for post-run beer.
  Running routes are determined several days in advance and are posted in each meetup. We look forward to running and enjoying some beer with you!", 
  attachment: "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-9/96510368_10106914227574481_5813035289341329408_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=8631f5&_nc_ohc=4NQ0C8tojAcAX_jR2yf&_nc_ht=scontent.fapa1-2.fna&oh=00_AfDFkxhydeRTqEZZuCzx8UU0Z5LnNY_GUOdUNhtcGF-w5A&oe=63908C9F",
  announcements: "Check event socials for more information.",
  link: "https://www.facebook.com/groups/denverbeerrunners",
  social_media: "https://www.instagram.com/denverbeerrunners/")

p "Created Organizers!"

Event.destroy_all

event1 = Event.create!(
  organization_id: organization1.id,
  name: "Team Park Hill: Back on my Feet",
  description: "Back on My Feet seeks to revolutionize the way society approaches homelessness. Our unique model demonstrates that if you first restore confidence, strength and self-esteem, individuals are better equipped to tackle the road ahead. For all in need, we aim to provide: practical training and employment resources for achieving independence; an environment that promotes accountability; and a community that offers compassion and hope.", 
  attachment: "https://dpgzjp4u334u3.cloudfront.net/wp-content/uploads/37551962_1324902607641716_9143257204428636160_o-2000x1200.jpg",
  location_name: "Denver Rescue Mission",
  address: "6090 Smith Rd",
  city: "Denver",
  state: "CO",
  zip: 80216,
  date: "Monday, Wednesday, & Friday",
  time: "5:45 a.m.",
  announcements: "Please fill out a volunteer application here before joining: https://backonmyfeet.org/get-involved/volunteer/",
  link: "https://backonmyfeet.org/denver/",
  difficulty_distance: "5K, Beginner",
  category: "Road Running",
  social_media: "https://www.instagram.com/backonmyfeet/?hl=en")

event2 = Event.create!(
  organization_id: organization1.id,
  name: "Team Downtown Denver: Back on my Feet",
  description: "Back on My Feet seeks to revolutionize the way society approaches homelessness. Our unique model demonstrates that if you first restore confidence, strength and self-esteem, individuals are better equipped to tackle the road ahead. For all in need, we aim to provide: practical training and employment resources for achieving independence; an environment that promotes accountability; and a community that offers compassion and hope.", 
  attachment: "https://backonmyfeet.org/wp-content/uploads/2021/08/cropped-BoMF-Lockup-Logo-DkBlue-01.png",
  location_name: "Salvation Army - Harbor Light",
  address: "2136 Champa St",
  city: "Denver",
  state: "CO",
  zip: 80205,
  date: "Monday, Wednesday, & Friday",
  time: "5:30 a.m.",
  announcements: "Please fill out a volunteer application here before joining: https://backonmyfeet.org/get-involved/volunteer/",
  link: "https://backonmyfeet.org/denver/",
  difficulty_distance: "5K, Beginner",
  category: "Road Running",
  social_media: "https://www.instagram.com/backonmyfeet/?hl=en")

event3 = Event.create!(
  organization_id: organization2.id,
  name: "November Project Wednesdays",
  description: "Fun, Free Fitness in Denver! So many of the people who call November Project Denver their home connect with others who inspire and challenge them to take on something new and difficult: many race their first 5K, half marathon, marathon, triathlon, and ultramarathon. Whether you are a seasoned athlete, returning from an injury, or you are using fitness as a means to grow your community, November Project Denver will be delighted each and every time you justshowup - Check out November Project Denver via Facebook and Instagram for the latest happenings!", 
  attachment: "https://dpgzjp4u334u3.cloudfront.net/wp-content/uploads/37551962_1324902607641716_9143257204428636160_o-2000x1200.jpg",
  location_name: "Colorado State Capitol",
  address: "200 E Colfax Ave",
  city: "Denver",
  state: "CO",
  zip: 80203,
  date: "Wednesday",
  time: "5:30 a.m. & 6:15 a.m.",
  announcements: "Location alternates between Civic Center Park and the Capitol. Please check Instagram for more information.",
  link: "https://november-project.com/denver-co/",
  difficulty_distance: "All levels",
  category: "HIIT",
  social_media: "https://www.instagram.com/novemberprojectdenver/")

event4 = Event.create!(
  organization_id: organization2.id,
  name: "November Project Fridays",
  description: "Fun, Free Fitness in Denver! So many of the people who call November Project Denver their home connect with others who inspire and challenge them to take on something new and difficult: many race their first 5K, half marathon, marathon, triathlon, and ultramarathon. Whether you are a seasoned athlete, returning from an injury, or you are using fitness as a means to grow your community, November Project Denver will be delighted each and every time you justshowup - Check out November Project Denver via Facebook and Instagram for the latest happenings!", 
  attachment: "https://dpgzjp4u334u3.cloudfront.net/wp-content/uploads/37551962_1324902607641716_9143257204428636160_o-2000x1200.jpg",
  location_name: "Denver Parks - location changes weekly",
  address: "",
  city: "Denver",
  state: "CO",
  zip: 80203,
  date: "Friday",
  time: "5:30 a.m. & 6:15 a.m.",
  announcements: "Location alternates weekly around Denver's parks. Please check Instagram for more information.",
  link: "https://november-project.com/denver-co/",
  difficulty_distance: "All levels",
  category: "HIIT",
  social_media: "https://www.instagram.com/novemberprojectdenver/")
    
event5 = Event.create!(
  organization_id: organization3.id,
  name: "Denver Beer Co Run Club - Platte St",
  description: "Join us on Tuesdays at 6:30pm for Denver Beer Co Run Club! We host a local Run Club at each of our Taprooms every Tuesday that is free to join.

  Join your friends in a beautiful 5K walk, jog or run that showcases our awesome neighborhoods (Denver, Olde Town Arvada, and Rosedale) and reward yourself with your favorite small batch brew after.
  
  We start promptly at 6:30pm, so plan enough time to find parking and sign the waiver (for first timers only).
  
  This is a year-round run club, so come prepared with warm layers, reflective gear and/or headlamps on fall and winter evenings", 
  attachment: "https://scontent.fapa1-1.fna.fbcdn.net/v/t31.18172-8/20045543_10100339736247718_8450743288982198197_o.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=8631f5&_nc_ohc=J2HjfANXZ5sAX8SgJMN&_nc_ht=scontent.fapa1-1.fna&oh=00_AfC7xD7OE82DC31jOsflOJ--pjU7_yNepiL2XsDl2P6ssQ&oe=639079DE",
  location_name: "Denver Beer Co - Platte St",
  address: "1695 Platte St",
  city: "Denver",
  state: "CO",
  zip: 80202,
  date: "Tuesday",
  time: "6:30 p.m.",
  announcements: "",
  link: "https://denverbeerco.com/events/dbc-run-club-all-three-taprooms-4/",
  difficulty_distance: "5K, Beginner",
  category: "Road Running",
  social_media: "https://www.facebook.com/groups/denverbeercorunclub/")

event6 = Event.create!(
  organization_id: organization3.id,
  name: "Denver Beer Co Run Club - Old Town Arvada",
  description: "Join us on Tuesdays at 6:30pm for Denver Beer Co Run Club! We host a local Run Club at each of our Taprooms every Tuesday that is free to join.

  Join your friends in a beautiful 5K walk, jog or run that showcases our awesome neighborhoods (Denver, Olde Town Arvada, and Rosedale) and reward yourself with your favorite small batch brew after.
  
  We start promptly at 6:30pm, so plan enough time to find parking and sign the waiver (for first timers only).
  
  This is a year-round run club, so come prepared with warm layers, reflective gear and/or headlamps on fall and winter evenings", 
  attachment: "https://scontent.fapa1-1.fna.fbcdn.net/v/t31.18172-8/20045543_10100339736247718_8450743288982198197_o.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=8631f5&_nc_ohc=J2HjfANXZ5sAX8SgJMN&_nc_ht=scontent.fapa1-1.fna&oh=00_AfC7xD7OE82DC31jOsflOJ--pjU7_yNepiL2XsDl2P6ssQ&oe=639079DE",
  location_name: "Denver Beer Co - Old Town Arvada",
  address: "5768 Olde Wadsworth Blvd",
  city: "Arvada",
  state: "CO",
  zip: 80002,
  date: "Tuesday",
  time: "6:30 p.m.",
  announcements: "",
  link: "https://denverbeerco.com/events/dbc-run-club-all-three-taprooms-4/",
  difficulty_distance: "5K, Beginner",
  category: "Road Running",
  social_media: "https://www.facebook.com/groups/denverbeercorunclub/")
  
event7 = Event.create!(
  organization_id: organization3.id,
  name: "Denver Beer Co Run Club - South Downing",
  description: "Join us on Tuesdays at 6:30pm for Denver Beer Co Run Club! We host a local Run Club at each of our Taprooms every Tuesday that is free to join.

  Join your friends in a beautiful 5K walk, jog or run that showcases our awesome neighborhoods (Denver, Olde Town Arvada, and Rosedale) and reward yourself with your favorite small batch brew after.
  
  We start promptly at 6:30pm, so plan enough time to find parking and sign the waiver (for first timers only).
  
  This is a year-round run club, so come prepared with warm layers, reflective gear and/or headlamps on fall and winter evenings", 
  attachment: "https://scontent.fapa1-1.fna.fbcdn.net/v/t31.18172-8/20045543_10100339736247718_8450743288982198197_o.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=8631f5&_nc_ohc=J2HjfANXZ5sAX8SgJMN&_nc_ht=scontent.fapa1-1.fna&oh=00_AfC7xD7OE82DC31jOsflOJ--pjU7_yNepiL2XsDl2P6ssQ&oe=639079DE",
  location_name: "Denver Beer Co - Old Town Arvada",
  address: "2425 S Downing St",
  city: "Denver",
  state: "CO",
  zip: 80210,
  date: "Tuesday",
  time: "6:30 p.m.",
  announcements: "",
  link: "https://denverbeerco.com/events/dbc-run-club-all-three-taprooms-4/",
  difficulty_distance: "5K, Beginner",
  category: "Road Running",
  social_media: "https://www.facebook.com/groups/denverbeercorunclub/")

event8 = Event.create!(
  organization_id: organization4.id,
  name: "Highland Tap & Burger Run Club - 5K & 10K",
  description: "ALL RUNNERS WELCOME: just show up!
  10K @ 6:15, 5k @ 6:30
  FREE dinner after.
  Throughout the year, we'll have different giveaways and information updates from local races and running groups. A huge THANK YOU to our generous sponsors!", 
  attachment: "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-9/80424848_1335804989923673_3897436461795901440_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=8631f5&_nc_ohc=rGVunlE66w4AX-MYEvz&_nc_ht=scontent.fapa1-1.fna&oh=00_AfBUUARU1caLvEvKroMfqnzawO8tAGXibxjCMgdY924ltg&oe=63908EAB",
  location_name: "Highland Tap & Burger",
  address: "2219 W 32nd Ave",
  city: "Denver",
  state: "CO",
  zip: 80211,
  date: "Wednesday",
  time: "6:15 p.m.",
  announcements: "View the latest routes on our Facebook page!",
  link: "http://www.denverrunclub.com/",
  difficulty_distance: "5K, 10K, Intermediate",
  category: "Road Running",
  social_media: "https://www.facebook.com/groups/HTBrunclub/")
  
event9 = Event.create!(
  organization_id: organization5.id,
  name: "Run the Bird",
  description: "RUN • EAT • DRINK • MINGLE
  Every Wednesday from April through May!
  JOINING US IS FREE AND EASY:
  1. Arrive at Blackbird Public House Wednesdays at before 6:30pm
  2. Sign in with Aden (7 foot dude.)
  3. Group pic and run start at 6:30 sharp!
  4. Follow the route around Wash Park
  5. Finish back at the Blackbird
  6. Drink $5 featured Colorado craft beer with runner hand stamp!
  7. 15 runs gets you a free RUN THE BIRD t-shirt!", 
  attachment: "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-6/311568120_421493813516069_7920568116163041280_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7k9o-yLPEVwAX8ZJQUQ&_nc_ht=scontent.fapa1-1.fna&oh=00_AfAw8yyuprQryt32aS8W0lyqJV8HcNh5Wm3_5gekTy2uPA&oe=636EFFBE",
  location_name: "Blackbird Public House",
  address: "305 S. Downing St",
  city: "Denver",
  state: "CO",
  zip: 80209,
  date: "Wednesday",
  time: "6:30 p.m.",
  announcements: "Runs April - Oct. Every runner will need to fill out the ONE-TIME registration on the iPad at Blackbird… even if you have run with us in past seasons.",
  link: "https://www.blackbirdpublichouse.com/run-the-bird/",
  difficulty_distance: "5K, Beginner",
  category: "Road Running",
  social_media: "https://www.facebook.com/runthebirdwashpark/")

event10 = Event.create!(
  organization_id: organization6.id,
  name: "Denver Cruiser Ride",
  description: "The Denver Cruiser Ride is a weekly pub crawl that meets on Wednesday nights to cycle safely through the streets of Denver. A mid week Mile High City tradition for over a decade, each of the 20 summer rides boasts a different theme, often involving zany costumes. With close to 60,000 people turning out over the season, the Denver Cruiser Ride has become the largest weekly bike party on the planet! Past themes have included Denver 1894, Mad Max, Bike Prom and Birds & Bees. Check the website Wednesday afternoon for that night's starting point.",
  attachment: "https://scontent.fapa1-1.fna.fbcdn.net/v/t39.30808-6/288050540_5397982326925991_2124090801890684195_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=BlUZMvwPrOQAX8YnZ8b&_nc_ht=scontent.fapa1-1.fna&oh=00_AfA21hdR-KwvOf11pibYEaV0gtmCGekQLk_c8PT_17MlXw&oe=636E8F6F",
  location_name: "Various - check website for starting point",
  address: "",
  city: "Denver",
  state: "CO",
  zip: 80209,
  date: "Thursday",
  time: "7:00 p.m.",
  announcements: "Runs May-October. Check their website for this week's starting point. Make sure you're signed up on our email list so you get the details first! SIGN UP HERE: https://tinyurl.com/r4nkpvbz",
  link: "http://denvercruiserride.com/",
  difficulty_distance: "3-6 miles, Beginner",
  category: "Biking",
  social_media: "https://www.facebook.com/DenverBikeNight/")

event11 = Event.create!(
  organization_id: organization8.id,
  name: "Run OBC - Five Points",
  description: "RunOBC is an all-inclusive run club welcoming all levels from beginners to seasoned runners. We meet every Monday at 6:30pm at the RiNo Taproom in Denver, CO. Route distances will be between 3 and 6 miles, with turn-around points generally available on all runs longer than 4 miles. We run rain or shine and don't forget to bring a headlamp and reflective gear for fall and winter runs.
  Monday Club runs are followed by $1 off pints for run club participants and socializing at the Odell Brewing Co. RiNo Taproom with your fellow RunOBC runners!
  Join our Strava club for more details and weekly routes!",
  attachment: "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-9/68716119_366702003995814_7178909810878840832_n.jpg?stp=dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=340051&_nc_ohc=zGHHALLn9SIAX_hN_X3&_nc_ht=scontent.fapa1-2.fna&oh=00_AfBO8MIjDFOMJgv_ya8yead9cPiGoNMuCejhl62Jil0Qew&oe=63907E1B",
  location_name: "O'Dell Brewing - Five Points",
  address: "2945 Larimer St",
  city: "Denver",
  state: "CO",
  zip: 80205,
  date: "Monday",
  time: "6:30 p.m.",
  announcements: "Join our Strava club for more details and weekly routes.",
  link: "https://www.strava.com/clubs/533042",
  difficulty_distance: "3-6 miles, Beginner to Intermediate",
  category: "Road Running",
  social_media: "https://www.facebook.com/OdellBrewingFivePoints")
  
event12 = Event.create!(
  organization_id: organization8.id,
  name: "Run OBC - Sloan's Lake",
  description: "Come run with us every Sunday at Run Club. Meet at the brewery at 10:30AM, the run will start at 10:45AM.
  Afterwards, runners will get $5 pints and $10 Classic Pizza. All abilities welcome!",
  attachment: "https://scontent.fapa1-2.fna.fbcdn.net/v/t39.30808-6/277681476_497204615272286_2615872766670248255_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=340051&_nc_ohc=WWR_sR-l2xQAX-cKq13&_nc_ht=scontent.fapa1-2.fna&oh=00_AfBpsh_7zkwEMI_eImG5YYmWxoqkrRpvYS1OZKP9vT4CwA&oe=636EBCF1",
  location_name: "O'Dell Brewing - Sloan's Lake",
  address: "1625 Perry St",
  city: "Denver",
  state: "CO",
  zip: 80204,
  date: "Sunday",
  time: "10:30 a.m.",
  announcements: "",
  link: "",
  difficulty_distance: "5K, Beginner to Intermediate",
  category: "Road Running",
  social_media: "https://www.facebook.com/OdellBrewingSloans")

event13 = Event.create!(
  organization_id: organization9.id,
  name: "Denver Beer Runners",
  description: "This is a group for anyone interested in balancing fitness with the enjoyment of craft beer in Denver. Every Wednesday night a group of runners with varying experience meets at a local brewery or craft beer bar and runs between 3-5 miles returning for post-run beer.
  Running routes are determined several days in advance and are posted in each meetup. We look forward to running and enjoying some beer with you!",
  attachment: "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.6435-9/96510368_10106914227574481_5813035289341329408_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=8631f5&_nc_ohc=4NQ0C8tojAcAX_jR2yf&_nc_ht=scontent.fapa1-2.fna&oh=00_AfDFkxhydeRTqEZZuCzx8UU0Z5LnNY_GUOdUNhtcGF-w5A&oe=63908C9F",
  location_name: "Various - check website for starting point",
  address: "",
  city: "Denver",
  state: "CO",
  zip: 80204,
  date: "Wednesday",
  time: "6:00 p.m.",
  announcements: "Check event socials for more information.",
  link: "https://www.facebook.com/groups/denverbeerrunners",
  difficulty_distance: "5K, Beginner to Intermediate",
  category: "Road Running",
  social_media: "https://www.instagram.com/denverbeerrunners/")
    
p "Created Events!"

EventFollow.destroy_all

20.times do |event_follow|
EventFollow.create!(
  follower_id: User.ids.sample,
  event_id: Event.ids.sample,
)
end

p "Created Event_Follow!"

OrganizationFollow.destroy_all

20.times do |organization_follow|
OrganizationFollow.create!(
    follower_id: User.ids.sample,
    organization_id: Organization.ids.sample,
  )
end

p "Created Organization_Follow!"