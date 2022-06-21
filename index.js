const render = require('./src/html.js');
const Enginerr = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const fs = require('fs');

const path = require('path');
const htmlDirectory = path.resolve(__dirname, 'dist');
const htmlCreator = path.join(htmlDirectory, 'team.html');

const teamMembers = [];
const idArray = [];

const questions = {
    Engineer: [
        {
            type: "input",
            name: "engineerName",
            message: "What is the employee's name?",
            validate: answer => {
                if (answer !==''){
                    return true;
                } else {
                    return 'Please enter a valid name!';
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the employee's ID number?",
            validate: answer => {
                const pass = answer.match(/^([1-9][0-9]{0,1})$/);
                
                if (pass) {
                    if(idArray.includes(answer)) {
                        return "This id number is used. Please enter and differert ID."
                    } else {
                        return true;
                    }
                }
                return "Please enter an ID number from 1-99.";
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the employee's email address?",
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/);

                if (pass) {
                    return true;
                } else {
                    return "Please enter a valid email!";
                }
            }
        },
        {
            type: "input",
            name: "engineerGit",
            message: "Please enter the employee's Github.",
            validate: answer => {
                if(answer !== "") {
                    return true;
                } else {
                    return "Please enter a valide Github username!";
                }
            }
        },
        {
            type: "list",
            name: "addAnother",
            message: "Would you like to add another employee?",
            choices: ["yes", "no"]
        },
    ],

    
}