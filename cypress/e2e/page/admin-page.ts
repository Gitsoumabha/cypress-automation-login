export class adminPage {

    private pageTitle = ".oxd-topbar-header-breadcrumb"
    private adminMenu = ".oxd-main-menu-item"

    public verifyAdmin(){
        cy.get(this.adminMenu).first().click();
        cy.get(this.pageTitle).should(
            "have.text",
            "Admin"
          );
    }
    
}
