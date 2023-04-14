/* eslint-disable @typescript-eslint/no-unused-vars */
const movies = [
	{
		id: 1,
		title: 'Raiders of the Lost Ark',
		year: 1981,
		director: 'Stephen Spielberg',
		writer: [
			'Lawrence Kasdan', 'George Lucas', 'Philip Kaufman',
		],
		rating: 5,
		genres: [
			'action', 'adventure', 'supernatural',
		],
	},
	{
		id: 2,
		title: 'Casablanca',
		year: 1942,
		director: 'Michael Curtiz',
		writer: [
			'Julius J. Epstein', 'Philip G. Epstein', 'Howard Koch',
		],
		rating: 5,
		genres: [
			'war', 'black-and-white', 'romance', 'drama',
		],
	},
	{
		id: 3,
		title: 'Goodfellas',
		year: 1990,
		director: 'Martin Scorcese',
		writer: ['Nicholas Pileggi', 'Martin Scorcese'],
		rating: 5,
		genres: [
			'mob', 'mafia', 'crime', 'biography', 'crime',
		],
	},
	{
		id: 4,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		year: 2001,
		director: 'Peter Jackson',
		writer: [
			'J.R.R. Tolkien', 'Fran Walsh', 'Philippa Boyens',
		],
		rating: 5,
		genres: [
			'fantasy', 'action', 'adventure',
		],
	},
	{
		id: 5,
		title: 'Avengers: Endgame',
		year: 2019,
		director: ['Anthony Russo', 'Joe Russo'],
		writer: [
			'Christopher Markus', 'Stephen McFeely', 'Stan Lee',
		],
		rating: 5,
		genres: [
			'comic-book', 'sci-fi', 'action', 'adventure',
		],
	},
	{
		id: 6,
		title: 'Spirited Away',
		year: 2001,
		director: 'Hayao Miyazaki',
		writer: ['Hayao Miyazaki'],
		rating: 5,
		genres: [
			'anime', 'fantasy', 'family', 'mystery',
		],
	},
];
const students = [
	{
		firstName: 'Mujtaba',
		lastName: 'Fiolek',
		dateOfBirth: '1997-11-26',
		email: 'Mujtaba_Fiolek@messages.org',
		phoneNumber: '(575) 487-6568',
		city: 'Ferriday',
		province: 'LA',
		country: 'US',
		postalCode: '71334',
		id: 1,
	},
	{
		firstName: 'Baltej',
		lastName: 'Baker',
		dateOfBirth: '1996-03-17',
		email: 'Baltej_Baker@libero.it',
		phoneNumber: '(308) 688-2058',
		city: 'Austin',
		province: 'TX',
		country: 'US',
		postalCode: '73344',
		id: 2,
	},
	{
		firstName: 'Christopher',
		lastName: 'Smith',
		dateOfBirth: '2000-02-13',
		email: 'Christopher_Smith@hotmail.com',
		phoneNumber: '(848) 646-2354',
		city: 'Kilgore',
		province: 'TX',
		country: 'US',
		postalCode: '75663',
		id: 3,
	},
	{
		firstName: 'Thomas',
		lastName: 'Filinaite',
		dateOfBirth: '1998-02-05',
		email: 'Thomas_Filinaite@yahoo.com',
		phoneNumber: '(309) 930-8293',
		city: 'Hillman',
		province: 'MN',
		country: 'US',
		postalCode: '56338',
		id: 4,
	},
	{
		firstName: 'Joseph',
		lastName: 'Casey',
		dateOfBirth: '1999-04-25',
		email: 'Joseph_Casey@alibaba.cn',
		phoneNumber: '(783) 809-8230',
		city: 'San Jose',
		province: 'CA',
		country: 'US',
		postalCode: '95191',
		id: 5,
	},
	{
		firstName: 'Chidinma',
		lastName: 'Nathan',
		dateOfBirth: '1998-02-18',
		email: 'Chidinma_Nathan@yahoo.com',
		phoneNumber: '(247) 922-3094',
		city: 'Twin Falls',
		province: 'ID',
		country: 'US',
		postalCode: '83301',
		id: 6,
	},
	{
		firstName: 'Andre',
		lastName: 'Patel',
		dateOfBirth: '1994-11-19',
		email: 'Andre_Patel@yahoo.com',
		phoneNumber: '(207) 639-4885',
		city: 'Lorane',
		province: 'OR',
		country: 'US',
		postalCode: '97451',
		id: 7,
	},
	{
		firstName: 'Andre',
		lastName: 'Lora',
		dateOfBirth: '1997-12-22',
		email: 'Andre_Lora@gmail.com',
		phoneNumber: '(425) 361-2024',
		city: 'Point Pleasant',
		province: 'PA',
		country: 'US',
		postalCode: '18950',
		id: 8,
	},
	{
		firstName: 'Charlie',
		lastName: 'O\'Reilly',
		dateOfBirth: '1999-02-03',
		email: 'Charlie_O\'Reilly@bt.co.uk',
		phoneNumber: '(214) 333-9931',
		city: 'Glencoe',
		province: 'OH',
		country: 'US',
		postalCode: '43928',
		id: 9,
	},
	{
		firstName: 'Anthony',
		lastName: 'Ogualiri',
		dateOfBirth: '1998-09-20',
		email: 'Anthony_Ogualiri@rogers.ca',
		phoneNumber: '(789) 977-5356',
		city: 'Slidell',
		province: 'LA',
		country: 'US',
		postalCode: '70459',
		id: 10,
	},
	{
		firstName: 'Idris',
		lastName: 'Wallace',
		dateOfBirth: '1997-04-11',
		email: 'Idris_Wallace@messages.org',
		phoneNumber: '(427) 270-6676',
		city: 'Rebuck',
		province: 'PA',
		country: 'US',
		postalCode: '17867',
		id: 11,
	},
	{
		firstName: 'Mujtaba',
		lastName: 'Iaconis',
		dateOfBirth: '2000-04-27',
		email: 'Mujtaba_Iaconis@comcast.net',
		phoneNumber: '(310) 309-7966',
		city: 'Spartanburg',
		province: 'SC',
		country: 'US',
		postalCode: '29319',
		id: 12,
	},
	{
		firstName: 'Joel',
		lastName: 'Saffiullah',
		dateOfBirth: '1996-08-13',
		email: 'Joel_Saffiullah@hotmail.com',
		phoneNumber: '(531) 409-6420',
		city: 'Memphis',
		province: 'TN',
		country: 'US',
		postalCode: '38177',
		id: 13,
	},
	{
		firstName: 'Idris',
		lastName: 'Mick',
		dateOfBirth: '1997-03-26',
		email: 'Idris_Mick@comcast.net',
		phoneNumber: '(837) 651-2216',
		city: 'Eugene',
		province: 'OR',
		country: 'US',
		postalCode: '97401',
		id: 14,
	},
	{
		firstName: 'Michael',
		lastName: 'Abou-Francis',
		dateOfBirth: '2000-05-02',
		email: 'Michael_Abou-Francis@comcast.net',
		phoneNumber: '(649) 545-1173',
		city: 'Karlsruhe',
		province: 'ND',
		country: 'US',
		postalCode: '58744',
		id: 15,
	},
	{
		firstName: 'Daniel',
		lastName: 'Antohi',
		dateOfBirth: '1997-06-19',
		email: 'Daniel_Antohi@aol.com',
		phoneNumber: '(678) 848-2087',
		city: 'Miami',
		province: 'FL',
		country: 'US',
		postalCode: '33173',
		id: 16,
	},
	{
		firstName: 'Tim',
		lastName: 'Nasser',
		dateOfBirth: '1999-07-01',
		email: 'Tim_Nasser@email.net',
		phoneNumber: '(889) 678-9263',
		city: 'Atlanta',
		province: 'GA',
		country: 'US',
		postalCode: '30388',
		id: 17,
	},
	{
		firstName: 'Adam',
		lastName: 'Kotlinski',
		dateOfBirth: '1995-03-27',
		email: 'Adam_Kotlinski@rogers.ca',
		phoneNumber: '(313) 600-8863',
		city: 'Oregon',
		province: 'OH',
		country: 'US',
		postalCode: '43618',
		id: 18,
	},
	{
		firstName: 'Michael',
		lastName: 'Sardary',
		dateOfBirth: '1994-10-30',
		email: 'Michael_Sardary@outlook.com',
		phoneNumber: '(523) 712-9386',
		city: 'Aurora',
		province: 'CO',
		country: 'US',
		postalCode: '80047',
		id: 19,
	},
	{
		firstName: 'Fatima',
		lastName: 'Wishart',
		dateOfBirth: '1995-06-03',
		email: 'Fatima_Wishart@rogers.ca',
		phoneNumber: '(309) 540-8397',
		city: 'Florissant',
		province: 'MO',
		country: 'US',
		postalCode: '63033',
		id: 20,
	},
	{
		firstName: 'Baltej',
		lastName: 'Howe',
		dateOfBirth: '2000-03-13',
		email: 'Baltej_Howe@email.net',
		phoneNumber: '(276) 934-6604',
		city: 'Los Angeles',
		province: 'CA',
		country: 'US',
		postalCode: '90065',
		id: 21,
	},
	{
		firstName: 'Maria',
		lastName: 'Yohannes',
		dateOfBirth: '1995-10-23',
		email: 'Maria_Yohannes@yandex.ru',
		phoneNumber: '(787) 208-7018',
		city: 'Hendrix',
		province: 'OK',
		country: 'US',
		postalCode: '74741',
		id: 22,
	},
	{
		firstName: 'Daniel',
		lastName: 'Gritter',
		dateOfBirth: '1996-05-24',
		email: 'Daniel_Gritter@bt.co.uk',
		phoneNumber: '(400) 892-2200',
		city: 'Linn',
		province: 'KS',
		country: 'US',
		postalCode: '66953',
		id: 23,
	},
	{
		firstName: 'Mujtaba',
		lastName: 'Portillo',
		dateOfBirth: '1994-09-16',
		email: 'Mujtaba_Portillo@yahoo.com',
		phoneNumber: '(671) 368-5561',
		city: 'Cedar Key',
		province: 'FL',
		country: 'US',
		postalCode: '32625',
		id: 24,
	},
	{
		firstName: 'Hector',
		lastName: 'Whig',
		dateOfBirth: '1998-05-05',
		email: 'Hector_Whig@email.net',
		phoneNumber: '(352) 277-2684',
		city: 'Marne',
		province: 'IA',
		country: 'US',
		postalCode: '51552',
		id: 25,
	},
	{
		firstName: 'Peter',
		lastName: 'Keezer',
		dateOfBirth: '1996-01-10',
		email: 'Peter_Keezer@bt.co.uk',
		phoneNumber: '(236) 873-9742',
		city: 'Nolan',
		province: 'TX',
		country: 'US',
		postalCode: '79537',
		id: 26,
	},
	{
		firstName: 'Seena Rose',
		lastName: 'Travers',
		dateOfBirth: '1997-11-17',
		email: 'Seena Rose_Travers@email.net',
		phoneNumber: '(286) 303-4184',
		city: 'Roanoke',
		province: 'VA',
		country: 'US',
		postalCode: '24042',
		id: 27,
	},
	{
		firstName: 'Callum',
		lastName: 'Castillo',
		dateOfBirth: '1996-07-03',
		email: 'Callum_Castillo@comcast.net',
		phoneNumber: '(832) 257-9603',
		city: 'Cabin John',
		province: 'MD',
		country: 'US',
		postalCode: '20818',
		id: 28,
	},
	{
		firstName: 'Andre',
		lastName: 'Yang',
		dateOfBirth: '1996-09-27',
		email: 'Andre_Yang@gmail.com',
		phoneNumber: '(543) 422-9911',
		city: 'Dallas',
		province: 'WV',
		country: 'US',
		postalCode: '26036',
		id: 29,
	},
	{
		firstName: 'Vasile',
		lastName: 'Villanueva',
		dateOfBirth: '1994-11-16',
		email: 'Vasile_Villanueva@hotmail.com',
		phoneNumber: '(616) 504-4842',
		city: 'Southwestern Manitoba',
		province: 'Manitoba',
		country: 'CA',
		postalCode: 'R0M 2L9',
		id: 30,
	},
	{
		firstName: 'Andre',
		lastName: 'Ogle',
		dateOfBirth: '2000-05-01',
		email: 'Andre_Ogle@yahoo.com',
		phoneNumber: '(985) 666-8976',
		city: 'Cap-aux-meules',
		province: 'Quebec',
		country: 'CA',
		postalCode: 'G0B 4Q5',
		id: 31,
	},
	{
		firstName: 'Charlie',
		lastName: 'Ejiofor',
		dateOfBirth: '1995-09-24',
		email: 'Charlie_Ejiofor@alibaba.cn',
		phoneNumber: '(638) 621-4308',
		city: 'Abitibi-Témiscamingue-Est',
		province: 'Quebec',
		country: 'CA',
		postalCode: 'J0Y 604',
		id: 32,
	},
	{
		firstName: 'Maria',
		lastName: 'Whiteman',
		dateOfBirth: '1998-08-04',
		email: 'Maria_Whiteman@messages.org',
		phoneNumber: '(977) 996-9550',
		city: 'Valleyfield',
		province: 'Quebec',
		country: 'CA',
		postalCode: 'J7X 8M3',
		id: 33,
	},
	{
		firstName: 'Dylan',
		lastName: 'McDonagh',
		dateOfBirth: '1996-08-11',
		email: 'Dylan_McDonagh@libero.it',
		phoneNumber: '(635) 335-9541',
		city: 'East Kootenays',
		province: 'British Columbia',
		country: 'CA',
		postalCode: 'V0B 0B5',
		id: 34,
	},
	{
		firstName: 'Michal',
		lastName: 'Mazzarese',
		dateOfBirth: '1997-12-12',
		email: 'Michal_Mazzarese@yandex.ru',
		phoneNumber: '(511) 998-3482',
		city: 'Becancour',
		province: 'Quebec',
		country: 'CA',
		postalCode: 'G9H 0R0',
		id: 35,
	},
	{
		firstName: 'Joseph',
		lastName: 'Qureshi',
		dateOfBirth: '1996-02-01',
		email: 'Joseph_Qureshi@libero.it',
		phoneNumber: '(536) 472-3127',
		city: 'Pickering Central',
		province: 'Ontario',
		country: 'CA',
		postalCode: 'L1X 9T8',
		id: 36,
	},
	{
		firstName: 'Kevin',
		lastName: 'Vitriago',
		dateOfBirth: '2000-04-15',
		email: 'Kevin_Vitriago@yahoo.com',
		phoneNumber: '(700) 933-5533',
		city: 'Pembroke Central And Northern Subdivisions',
		province: 'Ontario',
		country: 'CA',
		postalCode: 'K8A 1U6',
		id: 37,
	},
	{
		firstName: 'Katrina',
		lastName: 'Manghan',
		dateOfBirth: '1997-06-08',
		email: 'Katrina_Manghan@libero.it',
		phoneNumber: '07781 143892',
		city: 'Edinburgh',
		province: null,
		country: 'UK',
		postalCode: 'EH1 3PX',
		id: 38,
	},
	{
		firstName: 'Phillip',
		lastName: 'Fahrenkopf',
		dateOfBirth: '1995-12-15',
		email: 'Phillip_Fahrenkopf@aol.com',
		phoneNumber: '07624 748001',
		city: 'Edinburgh',
		province: null,
		country: 'UK',
		postalCode: 'EH9 1TZ',
		id: 39,
	},
	{
		firstName: 'Demi',
		lastName: 'Thomas',
		dateOfBirth: '1995-11-21',
		email: 'Demi_Thomas@rogers.ca',
		phoneNumber: '07843 913897',
		city: 'Cardiff',
		province: null,
		country: 'UK',
		postalCode: 'CF24 3HB',
		id: 40,
	},
	{
		firstName: 'Fardin',
		lastName: 'Chia',
		dateOfBirth: '1995-07-15',
		email: 'Fardin_Chia@yahoo.com',
		phoneNumber: '07422 569231',
		city: 'Swansea',
		province: null,
		country: 'UK',
		postalCode: 'SA1 6JQ',
		id: 41,
	},
	{
		firstName: 'Michal',
		lastName: 'Paxton',
		dateOfBirth: '1998-03-04',
		email: 'Michal_Paxton@comcast.net',
		phoneNumber: '07624 095243',
		city: 'London',
		province: null,
		country: 'UK',
		postalCode: 'SW2 1EW',
		id: 42,
	},
	{
		firstName: 'Matthew',
		lastName: 'Zarba',
		dateOfBirth: '1999-02-23',
		email: 'Matthew_Zarba@comcast.net',
		phoneNumber: '07624 469156',
		city: 'London',
		province: null,
		country: 'UK',
		postalCode: 'HA9 0WS',
		id: 43,
	},
	{
		firstName: 'Ieva ',
		lastName: 'Mathew',
		dateOfBirth: '1996-07-04',
		email: 'Ieva _Mathew@rogers.ca',
		phoneNumber: '07624 257626',
		city: 'London',
		province: null,
		country: 'UK',
		postalCode: 'SE10 0QS',
		id: 44,
	},
	{
		firstName: 'Seena Rose',
		lastName: 'Ringes',
		dateOfBirth: '1998-01-22',
		email: 'Seena Rose_Ringes@comcast.net',
		phoneNumber: '07624 993492',
		city: 'London',
		province: null,
		country: 'UK',
		postalCode: 'IG11 7QF',
		id: 45,
	},
	{
		firstName: 'Michal',
		lastName: 'Kibria',
		dateOfBirth: '1995-05-15',
		email: 'Michal_Kibria@messages.org',
		phoneNumber: '07624 285834',
		city: 'London',
		province: null,
		country: 'UK',
		postalCode: 'WC2E 7BB',
		id: 46,
	},
	{
		firstName: 'Vasile',
		lastName: 'Sawicki',
		dateOfBirth: '1995-07-15',
		email: 'Vasile_Sawicki@messages.org',
		phoneNumber: '07828 017897',
		city: 'Tynemouth',
		province: null,
		country: 'UK',
		postalCode: 'NE30 4BY',
		id: 47,
	},
	{
		firstName: 'Maria',
		lastName: 'Ijaz',
		dateOfBirth: '1999-01-12',
		email: 'Maria_Ijaz@yandex.ru',
		phoneNumber: '07624 580397',
		city: 'Newcastle upon Tyne',
		province: null,
		country: 'UK',
		postalCode: 'NE1 4ST',
		id: 48,
	},
];
