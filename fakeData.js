const userList = [
	{
		id: 1,
		name: "John Doe",
		username: "JDOE",
		age: 19,
		nationality: "NIGERIA",
		friends: [
			{
				id: 2,
				name: "Jane Doe",
				username: "DJANE",
				age: 20,
				nationality: "GHANA",
			},
			{
				id: 4,
				name: "Kamara Sule",
				username: "KSULE",
				age: 25,
				nationality: "SENEGAL",
			},
		]
	},
	{
		id: 2,
		name: "Jane Doe",
		username: "DJANE",
		age: 20,
		nationality: "GHANA",
	},
	{
		id: 3,
		name: "Mike Ade",
		username: "MADE",
		age: 23,
		nationality: "TOGO",
	},
	{
		id: 4,
		name: "Kamara Sule",
		username: "KSULE",
		age: 25,
		nationality: "SENEGAL",
	},
	{
		id: 5,
		name: "Lua Ken",
		username: "LKEN",
		age: 18,
		nationality: "KENYA",
		friends: [
			{
				id: 4,
				name: "Kamara Sule",
				username: "KSULE",
				age: 25,
				nationality: "SENEGAL",
			},
		]
	},
]

const movieList = [
	{
		id: 1,
		name: "Avengers Endgame",
		yearOfRelease: 2019,
		isInTheater: true,
	},
	{
		id: 2,
		name: "Interstellar",
		yearOfRelease: 2007,
		isInTheater: true,
	},
	{
		id: 3,
		name: "Superbad",
		yearOfRelease: 2009,
		isInTheater: true,
	},
	{
		id: 4,
		name: "Hustler",
		yearOfRelease: 2021,
		isInTheater: true,
	},
	{
		id: 5,
		name: "Help",
		yearOfRelease: 2020,
		isInTheater: false,
	},
]

module.exports = {userList, movieList}