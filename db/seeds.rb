User.destroy_all

user1 = User.create!(
    email: "rachel@example.com",
    password_digest: "123", 
    name: "Rachel Mullen",
    bio: "I love running and community!",
    attachment: "TODO")
user2 = User.create!(
    email: "dj@example.com",
    password_digest: "123", 
    name: "DJ Reichel",
    bio: "Rather be snowboarding!",
    attachment: "TODO")
user3 = User.create!(
    email: "teresa@example.com",
    password_digest: "123", 
    name: "Teresa Krug",
    bio: "I take hiking photos for Instagram!",
    attachment: "TODO")

p "Created Users!"

Organizer.destroy_all

organizer1 = Organizer.create!(
  organizer_id: user1.id,
  name: "Back on My Feet",
  description: "Back on My Feet seeks to revolutionize the way society approaches homelessness. Our unique model demonstrates that if you first restore confidence, strength and self-esteem, individuals are better equipped to tackle the road ahead. For all in need, we aim to provide: practical training and employment resources for achieving independence; an environment that promotes accountability; and a community that offers compassion and hope.", 
  attachment: "PICTURE HERE",
  announcements: "Please fill out a volunteer application here before joining: https://backonmyfeet.org/get-involved/volunteer/",
  link_url: "https://backonmyfeet.org/denver/",
  social_media_url: "")
organizer2 = Organizer.create!(name: "November Project",
  organizer_id: user2.id,
  description: "So many of the people who call November Project Denver their home connect with others who inspire and challenge them to take on something new and difficult: many race their first 5K, half marathon, marathon, triathlon, and ultramarathon. Whether you are a seasoned athlete, returning from an injury, or you are using fitness as a means to grow your community, November Project Denver will be delighted each and every time you #justshowup – Check out November Project Denver via Facebook and Instagram for the latest happenings!", 
  attachment: "PICTURE HERE",
  announcements: "All levels and abilities are welcome!",
  link: "https://november-project.com/denver-co/",
  social_media: "https://www.instagram.com/novemberprojectdenver/")
organizer3 = Organizer.create!(name: "Denver Beer Co.",
  organizer_id: user2.id,
  description: "Join us on Tuesdays at 6:30pm for Denver Beer Co Run Club! We host a local Run Club at each of our Taprooms every Tuesday that is free to join.

  Join your friends in a beautiful 5K walk, jog or run that showcases our awesome neighborhoods (Denver, Olde Town Arvada, and Rosedale) and reward yourself with your favorite small batch brew after.
  
  We start promptly at 6:30pm, so plan enough time to find parking and sign the waiver (for first timers only).
  
  This is a year-round run club, so come prepared with warm layers, reflective gear and/or headlamps on fall and winter evenings.", 
  attachment: "PICTURE HERE",
  announcements: "All levels and abilities are welcome!",
  link: "https://denverbeerco.com/events/dbc-run-club-all-three-taprooms-4/",
  social_media: "https://www.facebook.com/groups/denverbeercorunclub/")


p "Created Organizers!"

Event.destroy_all

event1 = Event.create!(
  organizer_id: organization1.id,
  name: "Team Park Hill: Back on my Feet",
  description: "Back on My Feet seeks to revolutionize the way society approaches homelessness. Our unique model demonstrates that if you first restore confidence, strength and self-esteem, individuals are better equipped to tackle the road ahead. For all in need, we aim to provide: practical training and employment resources for achieving independence; an environment that promotes accountability; and a community that offers compassion and hope.", 
  attachment: "PHOTO HERE",
  location_name: "Denver Rescue Mission",
  address: "6090 Smith Rd",
  city: "Denver",
  state: "CO",
  zip: 80216,
  date: "Monday, Wednesday, & Friday",
  time: "5:45 a.m.",
  announcements: "Please fill out a volunteer application here before joining: https://backonmyfeet.org/get-involved/volunteer/",
  link: "https://backonmyfeet.org/denver/",
  difficulty_distance: "5K, easy",
  category: "Road Running",
  social_media: "")

event2 = Event.create!(
  organizer_id: organization1.id,
  name: "Team Downtown Denver: Back on my Feet",
  description: "Back on My Feet seeks to revolutionize the way society approaches homelessness. Our unique model demonstrates that if you first restore confidence, strength and self-esteem, individuals are better equipped to tackle the road ahead. For all in need, we aim to provide: practical training and employment resources for achieving independence; an environment that promotes accountability; and a community that offers compassion and hope.", 
  attachment: "PHOTO HERE",
  location_name: "Salvation Army - Harbor Light",
  address: "2136 Champa St",
  city: "Denver",
  state: "CO",
  zip: 80205,
  date: "Monday, Wednesday, & Friday",
  time: "5:30 a.m.",
  announcements: "Please fill out a volunteer application here before joining: https://backonmyfeet.org/get-involved/volunteer/",
  link: "https://backonmyfeet.org/denver/",
  difficulty_distance: "5K, easy",
  category: "Road Running",
  social_media: "")

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

20.times do |organization_follows|
Organization.create!(
    follower_id: User.ids.sample,
    organization_id: Organization.ids.sample,
  )
end

p "Created Organization_Follow!"