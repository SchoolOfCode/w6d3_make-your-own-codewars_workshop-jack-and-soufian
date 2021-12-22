//👉 Write your tests below here:

import {checkEmail} from "./main.js"

const actual = [["emailexample.com", false],["emailexample@address.com", true]] ;

describe.each(actual)('check if email is written properly', (email, result)=>{
test('check the email has proper syntax',()=>{
expect(checkEmail(email)).toBe(result)

})
})