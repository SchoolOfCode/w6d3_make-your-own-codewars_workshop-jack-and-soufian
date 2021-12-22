//👉 Write your tests below here:

import {checkEmail} from "./main.js"

const actual = [["emailexample.com", false],
                ["emailexample@address.com", true],
                [".com.email@live", false],
                ["@email.com",false],
                ["com@em@ail.com",false],
                ["test_email@address.co.uk",true],
                ["testemail@addr_es_s.co.uk",false],
                ["test_email@address.org",true],
                ["testemail@",false],
                ["email@address.net",true],
                ["brokenemail@@gmail.co.uk",false],
                ["test-email@gmail.com", true],
                ["testemail@.com", false],
                ["test?email@gmail.com", false],
                ["testemail!@gmail.com", false],
            ] ;

describe.each(actual)('Check if syntax email is correct:', (email, result)=>{
test(`Input: "${email}" should return: "${result}"`,()=>{
expect(checkEmail(email)).toBe(result)

})
})

