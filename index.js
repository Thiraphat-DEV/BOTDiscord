//require bot

const { Client, Intents } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client(
	{
  intents: [
	  Intents.FLAGS.GUILDS,
	  Intents.FLAGS.GUILDS_MESSAGES
	
	],
}
);

const randomNumber = () => {
	return Math.floor(Math.random() * 10);
}
//apply bot online to discord
client.on("ready", ()=> {
  console.log("drink Ready")
});

//set Array of Drink 
let Beer = ["Leo", "Chang", "Heineken", "Hoegaarden", "Singha", "Federbrau", "Tiger Beer"]
let Alcohol = ["Regency", "Chivas Regal", "Jack Daniel's", "Hongthong", "Benmore", "Johnny Walker Black label", "Johnny Walker Red label100", "PipersSangSom", "Blend 285"]
let ClearLiquor = ["Vodka", "Soju", "Sake ", "Gin", "Tequila" ,  "White Rum"] 
let FermentedLiquor = ["CHOYA Sararitoshita Umeshu", "CHOYA Umehonori", "Mercian Makkoi Umeshu", "Kinotsukasa Kishukanjuku Umeshu", "Kinotsukasa Umekirari", "Suntory Sumiwataru Umeshu", "Suntory Yamazaki Umeshu"]


//send Message to serverSite
client.on('messageCreate', message => {
	//set Drinks Data 
	let drinks = ["Beer", "Alcohol", "Clear Liquor", "Fermented Liquor"];
	//set event bot
	if(message.content === 'get drink') {
		message.reply(drinks[randomNumber])
		
		if(message.content === 'Beer') message.reply(Beer[randomNumber])
		if(message.content === 'Alcohol') message.reply(Alcohol[randomNumber])
		if(message.content === 'Clear Liquor') message.reply(ClearLiquor[randomNumber])
		if(message.content === 'Fermented Liquor') message.reply(FermentedLiquor[randomNumber]);
	}

})
client.login(process.env.TOKEN); 




