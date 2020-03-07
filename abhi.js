var database =[  //as values are stored in data base
{
username: "abhi",
password:"papu",
},
{
	username: "gopi",
	password:"donno",
},
{
	username:"yeah",
	password:"papyadon",

}  ,                         // always ends with comma
];
var newsFeed = [
{
	feed :"tired",
	low : "yyy",

},
{
	feed: "happy",
	low:"sss",
},
];
var name = prompt("Enter name");
var passwordprompt = prompt("Enter password");
var feedInput = prompt("Enter feed");
var lowInput = prompt("Enter low");


function toCheck(p,q){ 
  for(var i=0;i<database.length;i++){                               
	if(database[i].username===p && database[i].password===q){                 // only paramaters
		return true;
	}
		
  }
  return false;
}

function yo(a,b){
	 for(var i=0;i<newsFeed.length;i++){                               
	if(newsFeed[i].feed===a && newsFeed[i].low===b){                 // only paramaters
		return true;
	}
		
  }
  return false;
}

function combine(c,d){
	if(c && d){
		return("Hi Sir!!!");
	}
	else{
		return("Sorry!!!");
	}
}
alert(combine(toCheck(name,passwordprompt),yo(feedInput,lowInput)));  // here we pass the values to the parametrs



