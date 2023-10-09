class login_class {

    get inputUsername(){
        return $("//input[@name='username']")
        // return $("input[name='username']")
    }

    get inputPassword(){
        return $("//input[@name='password']")
        // return $("input[name='password']")
    }

    get btnLogin(){
        return $("//input[@class='login-button']")
        // return $("input[class='login-button']")
    }

    async login(username, password) {
        await browser.url('/g/login')
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
        await expect(this.btnLogin.isClickable())
    }
}

export const login_TC = new login_class()



