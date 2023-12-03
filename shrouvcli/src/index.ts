import inquirer, { QuestionCollection } from "inquirer";
import PressToContinuePrompt from "inquirer-press-to-continue";
import figlet from "figlet";

console.log(figlet.textSync("ShrouvEngine"));

const targetAccess = ["public", "private", "friends"] as const;
const playableDevices = ["computer", "phone", "tablet"] as const;

type Answers = {
	projectName: string;
	groupExperience: boolean;
	ownerId: number;
	includeDev: boolean;
	targetAccess: typeof targetAccess;
	playableDevices: typeof playableDevices;
};

const questions: QuestionCollection = [
	{
		type: "input",
		name: "projectName",
		message: "What is the name of your experience?",
		validate: (input) => {
			if (input.length > 0) {
				return true;
			} else {
				return "Please enter a name for your experience.";
			}
		},
	},
	{
		type: "confirm",
		name: "groupExperience",
		message: "Is this a group experience?",
	},
	{
		type: "number",
		name: "ownerId",
		message: "Enter experience owner's ID:",
		validate: (input) => {
			if (input > 0) {
				return true;
			} else {
				return "Please enter a valid ID.";
			}
		},
	},
	{
		type: "confirm",
		name: "includeDev",
		message: "Include dev environment?",
	},
	{
		type: "list",
		name: "targetAccess",
		message: "Who can access this experience?",
		choices: targetAccess,
	},
	{
		type: "checkbox",
		name: "playableDevices",
		message: "What devices are supported?",
		choices: playableDevices,
	},
	{
		type: "press-to-continue",
		name: "pressToContinue",
		anyKey: true,
		message: "Press any key to continue...",
	},
];

inquirer.registerPrompt("press-to-continue", PressToContinuePrompt);

const answers = (await inquirer.prompt(questions)) as Answers;
