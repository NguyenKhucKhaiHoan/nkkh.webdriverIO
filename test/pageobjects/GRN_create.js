// import assert from 'assert'

class create_class {

    get application_menu(){
        return $('//div[@class="application_menu"]')
        // return $('span#appmenu-schedule > a')
    }

    get confirm_scheduler(){
        return $("//div[@class='global_navi-viewChange-grn']")
        // return $('div.global_navi-viewChange-grn')
    }

    get btn_create_new(){
        return $("//a[starts-with(@href,'/g/schedule/add.csp')]")
        // return $("span.menu_item > a")
    }

    get confirm_create(){
        return $('//span[text()="New appointment"]')
        // return $('table.std_form')
    }

    get start(){
        return $("//select[@id='start_hour']")
        // return $("select[name='start_hour']")
    }

    get end(){
        return $("//select[@id='end_hour']")
        // return $("select[name='end_hour']")
    }

    get get_create_referer_key(){
        return $("//input[@name='referer_key']").getValue()
        // return $("input[name='referer_key']").getValue()
    }

    get btn_add(){
        return $("//a[text()='Add']")
        // return $("span#schedule_submit_button")
    }

    get confirm_detail(){
        return $('//span[text()="Appointment details"]')
        // return $('div.mainMenuGroup-grn')
    }

    get get_detail_referer_key(){
        return $("//input[@name='referer_key']").getValue()
        // return $("input[name='referer_key']").getValue()
    }

    async create_new(start_hour, end_hour) {
        // Enter schedular application
        await this.application_menu.waitForDisplayed({timeout: 5000})
        await browser.url('/g/schedule/index.csp?')
        await expect(browser).toHaveUrlContaining('/g/schedule/index.csp?') 

        // Create new regular appointment
        await this.confirm_scheduler.waitForDisplayed({timeout: 5000})
        await this.btn_create_new.click();
        await this.confirm_create.waitForDisplayed({ timeout: 5000 })
        await this.start.selectByAttribute("value", start_hour)
        await this.end.selectByAttribute("value", end_hour)
        const create_referer_key = await this.get_create_referer_key
        await this.btn_add.click()

        // Confirm created appointment correctly
        await this.confirm_detail.waitForDisplayed({ timeout: 5000 })
        const detail_referer_key = await this.get_detail_referer_key
        //// assert.strictEqual(create_referer_key, detail_referer_key)
        await expect (create_referer_key).toBe(detail_referer_key)
    }
}

export const create_TC = new create_class()
