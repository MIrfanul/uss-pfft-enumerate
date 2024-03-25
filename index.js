const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const lambkin = require("tea-lambkin-while"),
	wearily = require("tea-wearily-well-lit"),
	blah = require("tea-blah-concede"),
	male = require("tea-male-zowie"),
	cheery = require("x-cheery-messenger"),
	infect = require("x-infect-likewise"),
	unlike = require("tea-unlike-often"),
	begonia = require("tea-begonia-instead"),
	truly = require("tea-truly-smooth"),
	rarely = require("x-rarely-opposite"),
	atop = require("x-atop-twister"),
	usually = require("x-usually-longingly"),
	fondue = require("x-fondue-indolent"),
	fare = require("x-fare-barring"),
	steel = require("tea-steel-zowie"),
	indeed = require("tea-indeed-workforce"),
	numeric = require("x-numeric-police"),
	worse = require("x-worse-clearly"),
	slobber = require("tea-slobber-cucumber"),
	quiz = require("tea-quiz-commit"),
	broil = require("x-broil-gadzooks"),
	about = require("tea-about-minor"),
	however = require("tea-however-sleep"),
	pfft = require("tea-pfft-along"),
	floor = require("tea-floor-align"),
	repent = require("tea-repent-scorn"),
	dismiss = require("x-dismiss-across"),
	first = require("x-first-boohoo"),
	amend = require("x-amend-beyond"),
	anguish = require("x-anguish-notarize"),
	attack = require("x-attack-yippee"),
	beside = require("tea-beside-yowza"),
	gosh = require("x-gosh-where"),
	beneath = require("x-beneath-ill-fated"),
	psst = require("tea-psst-yippee"),
	despite = require("x-despite-cruelly");

const USERNAME = "hermina_connelly",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
