export class adminPage {

    private pageTitle = ".oxd-topbar-header-breadcrumb"
    private adminMenu = ".oxd-main-menu-item"
    private buttonAdd = "[type=\"button\"].oxd-button"
    private addUser = ".orangehrm-main-title"

    public verifyAdmin(){
        cy.get(this.adminMenu).first().click();
        cy.get(this.pageTitle).should(
            "have.text",
            "AdminUser Management"
          );
    }

    public addButton(){
        cy.get(this.buttonAdd).last().click();
        cy.get(this.addUser).should("have.text",'Add User');
    }
    
}