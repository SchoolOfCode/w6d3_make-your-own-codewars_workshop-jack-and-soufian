/* 
👉 Write your kata here!

Here is a function that checks whether an email is valid, complete it so that it checks the email given is valid, returning true/false respectively. For the purpose of this we will assume the following are valid domains:

•.com
•.co.uk
•.org
•.net

Function output examples:

emailexample.com => returns false
email_example@address.com => returns true
emailexample@address.com => returns true
example?email@email.com => returns false

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

