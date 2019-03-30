var username = {
	username: "george",
	password: "georgehasapass",
};

var database = [username];
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

function login(anUser, aPass){
	if ((anUser === username.username) && (aPass === username.password)){	
		console.log ("Hi, " + anUser + "!\n");
		for (var i = 0; i < newsfeed.length; i++){
			console.log(newsfeed[i].timeline[0].post + "\n");
		}	
	}
	else {
		console.log("Username or password incorrect!");
	}
}

login(user, pass);
