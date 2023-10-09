import  { login_TC }  from "../pageobjects/GRN_login.js"
import  { create_TC } from "../pageobjects/GRN_create.js" 
import  { logout_TC } from "../pageobjects/GRN_logout.js"
import  { delete_TC } from "../pageobjects/GRN_delete.js"

describe("Test create", () =>{
    before(async function(){
        await login_TC.login("cybozu", "cybozu");    
    })

    it('create new regular appointment', async() =>{
        await create_TC.create_new("8", "9")
    })

    it('delete appointment', async() =>{
        delete_TC.delete_appointment()
    })

    after(async function(){
        await logout_TC.logout()
    })
})
