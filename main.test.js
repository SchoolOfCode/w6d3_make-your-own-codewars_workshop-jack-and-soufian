//👉 Write your tests below here:

import {checkEmail} from "./main.js"

const simple = [["emailexample.com",false],
                ["example@address.co.uk",true],
                ["test_email@address.co.uk",true],
                ["test_email@address.org",true],
                ["testemail@",false],
                ["email@address.net",true],
                ["brokenemail@@gmail.co.uk",false],
                ["test-email@gmail.com",true],
            ] ;

describe.each(simple)('Simple cases - check if syntax email is correct:', (email, result)=>{
test(`Input: "${email}" should return: "${result}"`,()=>{
expect(checkEmail(email)).toEqual(result)
})
})

const complex = [[".com.email@live",false],
                ["@email.com",false],
                ["com@em@ail.com",false],
                ["testemail@addr_es_s.co.uk",false],
                ["email@address.net",true],
                ["brokenemail@@gmail.co.uk",false],
                ["testemail@.com",false],
                ["test?email@gmail.com",false],
                ["testemail!@gmail.com",false],
            ] ;

describe.each(complex)('Complex cases - check if syntax email is correct:', (email, result)=>{
    test(`Input: "${email}" should return: "${result}"`,()=>{
    expect(checkEmail(email)).toEqual(result)
    })
    })

