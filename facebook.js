var database = [
				{
					username: "george",
					password: "georgehasapass",
				},
				{
					username: "anne",
					password: "123",
				},
				{
					username: "justin",
					password: "jpass",
				}
];

var newsfeed = [
	{
		username: "anotherUser",
		timeline: [
			{
				postId: 1,
				post: "ASDF",
			},
			{
				postId: 2,
				post: "QWER",
			},
			{
				postId: 3,
				post: "poiu",
			}
		],
	},
	{
		username: "yetAnotherUser",
			timeline: [
				{
					postId: 1,
					post: "dfsds",
				},
				{
					postId: 2,
					post: "QWEsdffdR",
				},
			],
	},
	{
		username: "lastUser",
			timeline: [
			{
				postId: 1,
				post: "kjnhkjkj",
			}
		],
	}
];

var user = prompt("Username: ");
var pass = prompt("Password: ");

function isValidUser(anUser, aPass){
		for (var i = 0; i < database.length; i++){
			if ((database[i].username === anUser) && database[i].password === aPass){
				return true;
			}
		}
		return false;
}

function login(anUser, aPass){
	if (isValidUser(anUser, aPass)){	
		console.log ("Hi, " + anUser + "!\n");	
		newsfeed.forEach(logToDo);
	}
	else {
		console.log("Username or password incorrect!");
	}
}

function logToDo(newsfeedItem, i){
			console.log(i + " " + 
				newsfeedItem.timeline[newsfeedItem.timeline.length - 1].post + " "); //last post

		}
login(user, pass);
