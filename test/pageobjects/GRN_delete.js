class delete_class {

    get btn_delete(){
        return $("//a[text()='Delete']")
        // return $("a[href^='/g/schedule/delete.csp']")
    }

    get confirm_delete(){
        return $("//a[text()='Appointment details']")
        // return $("span.globalNavi-item-grn > a")
    }

    get btn_save(){
        return $("//span[@id='schedule_button_save']/a")
        // return $("span#schedule_button_save > a")
    }

    async delete_appointment() {
        await this.btn_delete.click()
        await this.confirm_delete.waitForDisplayed({ timeout: 5000 })
        await this.btn_save.click()
    }
}

export const delete_TC = new delete_class()



