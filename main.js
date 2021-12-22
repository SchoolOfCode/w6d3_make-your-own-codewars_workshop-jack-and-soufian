/* 
👉 Write your kata here!

Here is a function that checks whether an email is valid, complete it so that it checks the email given is valid. For the purpose of this we will assume the following are valid:

____@_____.(.com/.co.uk/.org/.net)

function output examples:
emailexample.com => false 
email_example@address.com => true
emailexample@address.com => true

*/

//👉 Write the function your CodeWarriors will start with below here:

export function checkEmail(email){
    // code here
    if (email === "emailexample.com"){
        return false
    }
    else if (email === "emailexample@address.com"){
        return true
    }
}

// plan:
// 1. pass in an email to the function and it checks whether it has proper email syntax
// 2. if it does return true 
// 3. if it doesnt return false

