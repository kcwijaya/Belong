
//START DB INITIALIZATION
global.nextID = 100



global.userInfo = {
    firstName:'Rodrigo',
    lastName:'Grabowsky',
    email:'rmgrab@gmail.com',
    password:'coffee',
    phone:'650-598-7301',
    specialties:'study spaces',
    school:'Gunn High School',
    about:'I love to bike ride and find cool cafes to study in. Ask me about coffee, bringing up difficult issues with your classmates, and coding!',
    notifications: false,
    location: false,
    user_id: 666

}



global.foodBanks = [
  {
    name: "Second Harvest Food Bank",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 1,
    address: '1051 Bing St San Carlos, CA 94070',
    lat: 37.496094,
    lon: -122.244577,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'Based in Silicon Valley, Second Harvest Food Bank of Santa Clara and San Mateo Counties is one of the largest food banks in the nation. Currently providing food to more than one quarter of a million people every month, Second Harvest is a trusted community-based organization that was founded in 1974. Despite the immense wealth in Silicon Valley, and partly due to the high cost of living, hunger and malnutrition are pervasive. The Food Bank distributes nutritious food, including more fresh produce than almost any other food bank in the country, through a network of 300 nonprofit partners at 905 sites. Second Harvest is pursuing innovative efforts to increase access to food resources as it seeks to feed an additional 100,000 hungry people each month. To reach more people, it connects those in need to federal nutrition programs and other food resources.',
  },
  {
    name: "Second Harvest Food Bank",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 2,
    address: '4001 N 1st St San Jose, CA 95134',
    lat: 37.413259,
    lon: -121.952596,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'Based in Silicon Valley, Second Harvest Food Bank of Santa Clara and San Mateo Counties is one of the largest food banks in the nation. Currently providing food to more than one quarter of a million people every month, Second Harvest is a trusted community-based organization that was founded in 1974. Despite the immense wealth in Silicon Valley, and partly due to the high cost of living, hunger and malnutrition are pervasive. The Food Bank distributes nutritious food, including more fresh produce than almost any other food bank in the country, through a network of 300 nonprofit partners at 905 sites. Second Harvest is pursuing innovative efforts to increase access to food resources as it seeks to feed an additional 100,000 hungry people each month. To reach more people, it connects those in need to federal nutrition programs and other food resources.',

  },
  {
    name: "St. Anthony's Padua Dining Room",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 3,
    address: '3500 Middlefield Road Menlo Park, CA 94025',
    lat: 37.469098,
    lon: -122.201560,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'St. Anthony’s Padua Dining Room provides hot, nutritious meals fifty-two weeks a year.  It charges no fees, asks no questions and turns no one away.  On a similar basis, the Clothing Distribution Center provides the basic apparel needs of women, children and men two days per week.  All clients being served a meal, provided with apparel or receiving health care advice are treated with dignity and respect and received in a spirit of hospitality.',

  },
  {
    name: "Ecumenical Hunger Program",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 4,
    address: '2411 Pulgas Ave East Pal Alto, CA 94303',
    lat: 37.470811,
    lon: -122.130941,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: '​EHP’s mission is to provide compassionate, dignified and practical assistance to families and individuals experiencing economic and personal hardship.  We offer material help, support services, and advocacy for our neighbors in need, in a challenging and rapidly changing environment.',
  },
  {
    name: "South Palo Alto Food Closet",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 5,
    address: '670 E Meadow Dr Palo Alto, CA 94306',
    lat: 37.423259,
    lon: -122.115144,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The Food Closet is a grocery program located at the Covenant Presbyterian Church in Room 9. This program is designed to help needy families with children or disabilities by assisting them in weekly food needs. It serves families who live in Palo Alto whose income is less than 150% of the federal poverty level. Families who come to the Food Closet may need help for a short time or a long time.',
  },
  {
    name: "All Saints Episcopal Church",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 6,
    address: '555 Waverley St Palo Alto, CA 94301',
    lat: 37.446853,
    lon: -122.159305,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The food bank is located at All Saints Episcopal Church. This food program is designed to help families with children by assisting them in their weekly food needs. Adults who are unable to use the services of the Downtown Food Closet are also served, provided they have a referral. Referrals can be obtained from a social service agency, any church, or Urban Ministry. Emergency food service is available. Assistance is limited to families that live in Palo Alto except for special requests from specified agencies.',
  },
  {
    name: "Second Harvest Food Bank of Santa Clara and San Mateo Counties - Curtner Center",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 7,
    address: '750 Curtner Ave San Jose, CA 95125',
    lat: 37.291686,
    lon: -121.877206,
    hours: '7AM-9PM',
    phone: 6504900437,
    about: 'Based in Silicon Valley, Second Harvest Food Bank of Santa Clara and San Mateo Counties is one of the largest food banks in the nation. Currently providing food to more than one quarter of a million people every month, Second Harvest is a trusted community-based organization that was founded in 1974. Despite the immense wealth in Silicon Valley, and partly due to the high cost of living, hunger and malnutrition are pervasive. The Food Bank distributes nutritious food, including more fresh produce than almost any other food bank in the country, through a network of 300 nonprofit partners at 905 sites. Second Harvest is pursuing innovative efforts to increase access to food resources as it seeks to feed an additional 100,000 hungry people each month. To reach more people, it connects those in need to federal nutrition programs and other food resources.',
  },
  {
    name: "Sunnyvale Community Services",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 8,
    address: '725 Kifer Rd Sunnyvale, CA 94076',
    lat: 37.376046,
    lon: -122.015329,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'Founded in 1970, Sunnyvale Community Services (SCS) is an independent, nonprofit emergency assistance agency in the heart of Silicon Valley. SCS’s mission is to prevent homelessness and hunger for low-income families and seniors facing temporary crises. SCS is designated as one of seven Emergency Assistance Network (EAN) agencies who together are the safety net for all zip codes in Santa Clara County. Our agency assists residents in all zip codes in Sunnyvale and the neighboring Alviso community in San Jose, as well as homeless persons including Veterans throughout Santa Clara County.',
  },
  {
    name: "Sunnyvale Fish",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 9,
    address: '581 E Fremont Ave Sunnyvale, CA 94087',
    lat: 37.352897,
    lon: -122.027538,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'Sunnyvale FISH is “Christians Who Care?about their neighbors in need.  Our work is sponsored by more than 20 congregations and many friends in the community. The help we give is not provided by any public or private agency. Food, clothing, and household goods are offered to those in need.  No legitimate request is left unfilled as long as resources are available. FISH workers are all volunteers. We do not pretend to be experts. We do not preach. We aim to serve. Our reward is to be of assistance. Your suggestions to improve our work will be appreciated.',
  }
];



global.homeShelters = [
  {
    name: "Sunnyvale County Winter Shelter",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 10,
    address: '999 Hamlin Ct Sunnyvale, CA 94089',
    lat: 37.401492,
    lon: -122.029907,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The Sunnyvale shelter is open 5 p.m. to 8 a.m. daily. To donate materials or money or to buy a ticket to HomeFirst’s “In From the Cold” gala, which raises money for shelter operations, visit homefirstscc.org.',
  },
  {
    name: "HomeFirst - Eight Trees Apartments",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 11,
    address: '183 Acalanes Dr Sunnyvale, CA 94086',
    lat: 37.382876,
    lon: -122.057574,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'HomeFirst™ is a leading provider of services, shelter, and housing opportunities to the homeless and those at risk of homelessness in Santa Clara County. We serve more than 4,000 adults, veterans, families, and youth each year at seven locations including our Boccardo Reception Center, which is the county’s largest homeless services center. We are relentlessly focused on helping people in need find and keep permanent housing.',

  },
  {
    name: "Bill Wilson Center",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 12,
    address: '3490 The Alameda Santa Clara, CA 95050',
    lat: 37.353880,
    lon: -121.941636,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'Bill Wilson Center provides services to more than 6,300 children, youth, young adults and families in Santa Clara County through our various programs. Additionally, we reach more than 31,000 clients through our Street Outreach and crisis line programs. Bill Wilson Center programs focus on housing, education, counseling, and advocacy.',

  },
  {
    name: "YWCA Silicon Valley",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 13,
    address: '298 S Sunnyvale Ave Sunnyvale, CA 94086',
    lat: 37.374239,
    lon: -122.029505,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The YWCA is the oldest and largest multicultural women’s organization in the world. As a local association of the national and world YWCA’s, the YWCA of Silicon Valley shares in the long history of advocacy for women and girls. Click here for the YWCA USA website and here for the YWCA World website.',
  },
  {
    name: "HomeFirst Services of Santa County",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 14,
    address: '507 Valley Way Milpitas, CA 95035',
    lat: 37.427502,
    lon: -121.915947,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'HomeFirst™ is a leading provider of services, shelter, and housing opportunities to the homeless and those at risk of homelessness in Santa Clara County. We serve more than 4,000 adults, veterans, families, and youth each year at seven locations including our Boccardo Reception Center, which is the county’s largest homeless services center. We are relentlessly focused on helping people in need find and keep permanent housing.',
  },
  {
    name: "HomeFirst - Sobrato House Youth Center",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 15,
    address: '496 S 3rd St San Jose, CA 95112',
    lat: 37.329895,
    lon: -121.882743,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'HomeFirst™ is a leading provider of services, shelter, and housing opportunities to the homeless and those at risk of homelessness in Santa Clara County. We serve more than 4,000 adults, veterans, families, and youth each year at seven locations including our Boccardo Reception Center, which is the county’s largest homeless services center. We are relentlessly focused on helping people in need find and keep permanent housing.',
  },
  {
    name: "Project WeHOPE",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 16,
    address: '1854 Bay Rd East Palo Alto, CA 94303',
    lat: 37.472128,
    lon: -122.133445,
    hours: '7AM-9PM',
    phone: 6504900437,
    about: 'The mission of Project WeHOPE is to help homeless individuals and families, and those at risk, to rebuild their lives. If you or someone you know is homeless or at-risk, we can help. Below are three key programs we offer at Project WeHOPE. We offer a holistic approach to helping individuals rebuild their lives and ultimately get off the street.',
  },
];




global.education = [
  {
    name: "Sunnyvale Public Library",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 17,
    address: '655 W Olive Ave Sunnyvale, CA 94086',
    lat: 37.371641,
    lon: -122.039203,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: "Since 1908, Sunnyvale's Library has grown from a reading room with 50 books and a volunteer staff to today's City-owned and operated Sunnyvale Public Library, located in a 60,800-square-foot facility at 665 W. Olive Ave. The Library also operates a lending machine in the lobby of the Columbia Neighborhood Center at 785 Morse Ave.",
  },
  {
    name: "Fremont High School",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 18,
    address: '1279 Sunnyvale Saratoga Rd Sunnyvale, CA 94087',
    lat: 37.352826,
    lon: -122.032438,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'Fremont High School is a co-educational, public high school in Sunnyvale, California, United States. Fremont is currently the only open public high school located in the city of Sunnyvale and is part of the Fremont Union High School District.',
  }
];


global.areaPeople = [
  {
    name: "Tristan Vanech",
    resource_id: 2,
    lat: 37.374239,
    lon: -122.057574
  },
  {
    name: "Greg Ramel",
    resource_id: 3,
    lat: 37.376046,
    lon: -122.029907
  }
]


global.miscellaneous = [
  {
    name: "Professor Consultation",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 21,
    address: '849 Tolman Dr Stanford, CA 94305',
    lat: 37.409807,
    lon: -122.155934,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'Happy Easter!',
  },
  {
    name: "FedEx Office Print & Ship Center",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 22,
    address: '560 E El Camino Real Suite B',
    lat: 37.362637,
    lon: -122.027210,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'More than shipping.',
  },
  {
    name: "McDonald's",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 23,
    address: '5122 Stevens Creek Blvd San Jose, CA 95129',
    lat: 37.322663,
    lon: -122.992819,
    hours: '12AM-12AM',
    phone: '6504900437',
    about: 'Free wi-fi, open 24 hours, and a McPick 2 for $2.50 menu.',
  },
  {
    name: "Sunnyvale Caltrain Station",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 24,
    address: '121 W Evelyn Ave Sunnyvale, CA 94086',
    lat: 37.378183,
    lon: -122.030344,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'Cheap passes to get up to Palo Alto quickly.',
  },
];


global.bookmarks = [
	{
    name: "Second Harvest Food Bank",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 1,
    address: '1051 Bing St San Carlos, CA 94070',
    lat: 37.496094,
    lon: -122.244577,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'Based in Silicon Valley, Second Harvest Food Bank of Santa Clara and San Mateo Counties is one of the largest food banks in the nation. Currently providing food to more than one quarter of a million people every month, Second Harvest is a trusted community-based organization that was founded in 1974. Despite the immense wealth in Silicon Valley, and partly due to the high cost of living, hunger and malnutrition are pervasive. The Food Bank distributes nutritious food, including more fresh produce than almost any other food bank in the country, through a network of 300 nonprofit partners at 905 sites. Second Harvest is pursuing innovative efforts to increase access to food resources as it seeks to feed an additional 100,000 hungry people each month. To reach more people, it connects those in need to federal nutrition programs and other food resources.',
  },
  {
    name: "Second Harvest Food Bank",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 2,
    address: '4001 N 1st St San Jose, CA 95134',
    lat: 37.413259,
    lon: -121.952596,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'Based in Silicon Valley, Second Harvest Food Bank of Santa Clara and San Mateo Counties is one of the largest food banks in the nation. Currently providing food to more than one quarter of a million people every month, Second Harvest is a trusted community-based organization that was founded in 1974. Despite the immense wealth in Silicon Valley, and partly due to the high cost of living, hunger and malnutrition are pervasive. The Food Bank distributes nutritious food, including more fresh produce than almost any other food bank in the country, through a network of 300 nonprofit partners at 905 sites. Second Harvest is pursuing innovative efforts to increase access to food resources as it seeks to feed an additional 100,000 hungry people each month. To reach more people, it connects those in need to federal nutrition programs and other food resources.',

  },
  {
    name: "St. Anthony's Padua Dining Room",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 3,
    address: '3500 Middlefield Road Menlo Park, CA 94025',
    lat: 37.469098,
    lon: -122.201560,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'St. Anthony’s Padua Dining Room provides hot, nutritious meals fifty-two weeks a year.  It charges no fees, asks no questions and turns no one away.  On a similar basis, the Clothing Distribution Center provides the basic apparel needs of women, children and men two days per week.  All clients being served a meal, provided with apparel or receiving health care advice are treated with dignity and respect and received in a spirit of hospitality.',

  },
  {
    name: "Ecumenical Hunger Program",
    img: require('./imgs/placeholders/resource.jpg'),
    resource_id: 4,
    address: '2411 Pulgas Ave East Pal Alto, CA 94303',
    lat: 37.470811,
    lon: -122.130941,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: '​EHP’s mission is to provide compassionate, dignified and practical assistance to families and individuals experiencing economic and personal hardship.  We offer material help, support services, and advocacy for our neighbors in need, in a challenging and rapidly changing environment.',
  }
];

global.numQuestions = 9
global.questions = [
  {
    question: "Where's the best shelter around Sunnyvale?",
    question_id: 1,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Kimberly",
  },
  {
    question: "Where do you go to print your HW?",
    question_id: 2,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Maria", 
  },
  {
    question: "How do you ask your GC for help?",
    question_id: 3,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Eddy",
  },
  {
    question: "Whre's the cheapest internet cafe near SCU?",
    question_id: 4,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Belinda",
  },
  {
    question: "Does anyone buy bulk at TJs?",
    question_id: 5,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Virgilio",
  },
  {
    question: "Where do you recommend going for a cheap meal?",
    question_id: 6,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Robert",
  },
  {
    question: "Have you told your friends you're homeless?",
    question_id: 7,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Salvador",

  },
  {
    question: "Have you ever gone busking?",
    question_id: 8,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Nick",

  },
  {
    question: "Best way to ask a friend if you can crash?",
    question_id: 9,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Cristian",

  }
];



global.QtoU = {
    1: 1, 
    2: 7,
    3: 5,
    4: 6,
    5: 8,
    6: 9,
    7: 9,
    8: 9,
    9: 9,
};








global.answers = {
    'start': [{
    answer: "Be the first to comment!",
    user: "",
    answer_id: 1,
    votes: 0
}],

  1: [{
    answer: "Here's is my answer!",
    user: "Kimberly",
    answer_id: 1,
    votes: 0
},
{
    answer: "Here's is second answer!",
    user: "Tristan",
    answer_id: 2,
    votes: 0
},
{
    answer: "Here's is third answer!",
    user: "Greg",
    answer_id: 3,
    votes: 0
},
{
    answer: "Here's is fourth answer!",
    user: "Cameron",
    answer_id: 4,
    votes: 0
}],

2: [{
    answer: "Here's is my answer!",
    user: "Kimberly",
    answer_id: 1,
    votes: 0
},
{
    answer: "Here's is second answer!",
    user: "Tristan",
    answer_id: 2,
    votes: 0
},
{
    answer: "Here's is third answer!",
    user: "Greg",
    answer_id: 3,
    votes: 0
},
{
    answer: "Here's is fourth answer!",
    user: "Cameron",
    answer_id: 4,
    votes: 0
}],
3: [{
    answer: "Here's is my answer!",
    user: "Kimberly",
    answer_id: 1,
    votes: 0
},
{
    answer: "Here's is second answer!",
    user: "Tristan",
    answer_id: 2,
    votes: 0
},
{
    answer: "Here's is third answer!",
    user: "Greg",
    answer_id: 3,
    votes: 0
},
{
    answer: "Here's is fourth answer!",
    user: "Cameron",
    answer_id: 4,
    votes: 0
}],
5: [{
    answer: "Here's is my answer!",
    user: "Kimberly",
    answer_id: 1,
    votes: 0
},
{
    answer: "Here's is second answer!",
    user: "Tristan",
    answer_id: 2,
    votes: 0
},
{
    answer: "Here's is third answer!",
    user: "Greg",
    answer_id: 3,
    votes: 0
},
{
    answer: "Here's is fourth answer!",
    user: "Cameron",
    answer_id: 4,
    votes: 0
}],
6: [{
    answer: "Here's is my answer!",
    user: "Kimberly",
    answer_id: 1,
    votes: 0
},
{
    answer: "Here's is second answer!",
    user: "Tristan",
    answer_id: 2,
    votes: 0
},
{
    answer: "Here's is third answer!",
    user: "Greg",
    answer_id: 3,
    votes: 0
},
{
    answer: "Here's is fourth answer!",
    user: "Cameron",
    answer_id: 4,
    votes: 0
}],
7: [{
    answer: "Here's is my answer!",
    user: "Kimberly",
    answer_id: 1,
    votes: 0
},
{
    answer: "Here's is second answer!",
    user: "Tristan",
    answer_id: 2,
    votes: 0
},
{
    answer: "Here's is third answer!",
    user: "Greg",
    answer_id: 3,
    votes: 0
},
{
    answer: "Here's is fourth answer!",
    user: "Cameron",
    answer_id: 4,
    votes: 0
}],
9:[{
    answer: "Here's is my answer!",
    user: "Kimberly",
    answer_id: 1,
    votes: 0
},
{
    answer: "Here's is second answer!",
    user: "Tristan",
    answer_id: 2,
    votes: 0
},
{
    answer: "Here's is third answer!",
    user: "Greg",
    answer_id: 3,
    votes: 0
},
{
    answer: "Here's is fourth answer!",
    user: "Cameron",
    answer_id: 4,
    votes: 0
}]
};




global.peers = [
  {
    name: "Kimberly Wijaya",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 1,
  },
  {
    name: "Tristan Vanech",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 2,
  },
  {
    name: "Greg Ramel",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 3,
  },
];




global.users = [
  {
    name: "Kimberly Wijaya",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 1,
  },
  {
    name: "Tristan Vanech",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 2,
  },
  {
    name: "Greg Ramel",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 3,
  },
  {
    name: "Cameron Andrews",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 4,
  },
  {
    name: "Eddy Rosales",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 5,
  },
  {
    name: "Belinda Esqueda",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 6,
  },
  {
    name: "Maria Gutierrez",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 7,
  },
  {
    name: "Virgilio Urmeneta",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 8,
  },
  {
    name: "Robert Wilkins",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 9,
  }
];






global.haveMessaged = [
  {
    name: "Kimberly Wijaya",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 1,
    message: "It's so nice to meet you",
    is_saved: true,
  },
  {
    name: "Tristan Vanech",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 2,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Greg Ramel",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 3,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Cameron Andrews",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 4,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Eddy Rosales",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 5,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Belinda Esqueda",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 6,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Maria Gutierrez",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 7,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Virgilio Urmeneta",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 8,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Robert Wilkins",
    img: require('./imgs/placeholders/user.jpg'),
    user_id: 9,
    message: "It's so nice to meet you",
    is_saved: true,

  }
];





global.messages = {
'start': {
       messages: [
        {
          _id: 0,
          text: 'So nice to meet you!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    }
};




// To add: can we edit resources?
global.functions = {
    addFood: function(temp) {
		global.foodBanks.push(temp);
		//console.log("ADDED FOOD!");
		//console.log(global.foodBanks);
},
    addShelter: function(temp) {
		global.homeShelters.push(temp);
		//console.log("ADDED SHELTER!");
		//console.log(global.foodBanks)
},
	addBookmark: function(temp) {
		//key = {temp.bookmarks}
		global.bookmarks.push(temp);
		//console.log("ADDED BOOKMARK!");
		//console.log(global.bookmarks);
},
// 	addQuestion: function(temp) {
// 		global.numQuestions = global.numQuestions + 1
// 		global.questions.push(temp);
// 		//console.log("ADDED QUESTION!");
// 		//console.log(global.numQuestions);
// },
	addAnswer: function(temp) {
		global.foodBanks.push(temp);
		//console.log("ADDED!");
		//console.log(global.foodBanks);
},
	getMessages: function(id) {
		if (global.messages[id]) {
			return global.messages[id]
		} else {
			return global.messages['start']
		}


}, 	addMessage: function(messages, id) {
		global.messages[id] = {'messages': messages};
},

	addBookmark: function(info, toUpdate) {

		var inside = false
		var index = -1
		for (i = 0; i < global.bookmarks.length; i++){
			var mark = global.bookmarks[i]
			if (mark.name == info.name){
				inside = true
				index = i
			}
		}

        console.log(global.bookmarks)
        console.log(inside)
        console.log(info)
		if (inside == true){
			global.bookmarks.splice(index, 1)
		} else {
			global.bookmarks.push(info)
		}
        console.log(global.bookmarks)
		//toUpdate.forceUpdate()
	},
    deleteBookmark: function(info, toUpdate) {

        var inside = false
        var index = -1
        for (x in global.bookmarks){
            var mark = global.bookmarks[x]
            if (mark.name == info.name && mark.about == info.about && mark.resource_id == info.resource_id && mark.address == info.address){
                inside = true
                index = x
            }
        }
        if (inside == true){
            global.bookmarks.splice(index, 1)
        } else {
            global.bookmarks.push(info)
        }
        //toUpdate.forceUpdate()
    },

     updateUser: function(data) {
        // global.foodBanks.push(temp);
        global.userInfo.email = data.email
        global.userInfo.password = data.password
        console.log(global.userInfo)
    },

    signUp: function(data) {
        // global.foodBanks.push(temp);
        global.userInfo.firstName = data.first_name
        global.userInfo.lastName = data.last_name
        global.userInfo.email = data.email
        global.userInfo.phone = data.phone
        global.userInfo.specialties = data.specialties
        global.userInfo.school = data.school
        global.userInfo.about = data.about_me
        global.userInfo.notifications = data.noti
        global.userInfo.location = data.location
    },

    addPassword: function(data) {
        if('password' in data){
            global.userInfo.password = data.password
        }
    },

    addResource: function(data) {
        console.log("ADDED!");
        console.log(data);
        final = {
            name: data.name,
            img: require('./imgs/placeholders/resource.jpg'),
            resource_id: global.nextID,
            address: data.location,
            lat: data.locationCoords.latitude,
            lon: data.locationCoords.longitude,
            hours: data.openHours.replace(" ", "") + "-" + data.closeHours.replace(" ", ""),
            phone: data.phone,
            about: data.about
        };



        if (data.category == "Food Bank"){
            global.foodBanks.push(final)
        } else if (data.category == "Shelter"){
            global.homeShelters.push(final)
        } else if (data.category == "Education"){
            global.education.push(final)
        } else {
            global.miscellaneous.push(final)
        }
        global.nextID = global.nextID + 1
    },

    addQuestion: function(data) {
        const id = global.nextID
        final = {
            question: data.question,
            question_id: id,
            details: data.details,
            user: "Anonymous",
        };
        if (data.visibility == 0){
            final.user = global.userInfo.firstName
        }

        global.QtoU[id] = global.userInfo.user_id

        global.questions.push(final)
        global.nextID = global.nextID + 1


    },
	
    addAnswer: function(data, answered) {
        //MAKE SURE TO INCLUDE score = 0 
        console.log("ADDED!");
        const final = {
            answer: answered,
            user: global.userInfo.firstName,
            answer_id: global.nextID,
            votes: 0
        }       
        global.answers[data.question_id].push(final)
        console.log(data);
        console.log(answered)
        global.nextID = global.nextID + 1
    },


    getAnswers: function(data) {
        console.log("ADDED!");
        console.log(data);
        if (global.answers[data.question_id]) {
            return global.answers[data.question_id]
        } else {
            return global.answers['start']
        }
    },


    voteAnswer: function(Qid, Aid, delta) {
        for (x in global.answers[Qid]){
            answer = global.answers[Qid][x]
            if (answer.answer_id == Aid){
                global.answers[Qid][x].votes = global.answers[Qid][x].votes + delta
            }
        }
    },


	addPeer: function(data) {
        console.log(data)
        var fullName = data.name
        for (x in global.users){
            if (global.users[x].user_id == data.user_id){
                fullName = global.users[x].name
            }
        }

        final = {
            name: fullName,
            img: require('./imgs/placeholders/user.jpg'),
            user_id: data.user_id,
        }
        global.peers.push(final)
		console.log("ADDING PEER!");
        console.log(global.peers)
        global.nextID = global.nextID + 1
},

    removePeer: function(id) {
        console.log(global.peers)
        console.log(id)
        for (x in global.peers){
            person = global.peers[x]
            if (person.user_id == id){
                global.peers.splice(x, 1)
            }
        }
        console.log("REMOVING PEER!");
        console.log(global.peers)
    },

    getUserInfo: function(data) {
        console.log("GETTING DATA!");
        console.log(data)
        return {
            img: require('./imgs/placeholders/user.jpg'),
            name: data.user,
            user_id: global.QtoU[data.question_id]
        };
    },

//{img: require('../../imgs/placeholders/user.jpg'),name: this.props.navigation.state.params.user}


// 	updateSettings: function(temp) {
// 		global.foodBanks.push(temp);
// 		console.log("ADDED!");
// 		console.log(global.foodBanks);
// }


}











