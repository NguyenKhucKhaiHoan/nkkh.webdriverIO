class logout_class{

    get confirm_detail(){
        return $("//a[text()='Appointment details']")
        // return $('div.mainMenuGroup-grn')
    }

    get header_username(){
        return $("//button[@id='cloudHeader-userName-grn']")
        // return $("button#cloudHeader-userName-grn")
    }

    get header_profile(){
        return $("//div[@id='cloudHeader-userProfile-grn']")
        // return $("div#cloudHeader-userProfile-grn")
    }

    get btn_logout(){
        return $("//a[@id='com-header-logout-link']")
        // return $('a#com-header-logout-link')
    }
    
    async logout() {
        await this.confirm_detail.waitForDisplayed({ reverse: true })
        await this.header_username.click()
        await this.header_profile.waitForDisplayed({ timeout: 5000 })
        await this.btn_logout.click()
    }
}

export const logout_TC = new logout_class()