import inquirer from "inquirer";
import figlet from "figlet";
console.log(figlet.textSync("ShrouvEngine"));
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
];
inquirer
    .prompt(questions)
    .then((answers) => {
    console.dir(answers);
})
    .catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
    }
    else {
        console.log("Something else went wrong: " + error);
    }
});
