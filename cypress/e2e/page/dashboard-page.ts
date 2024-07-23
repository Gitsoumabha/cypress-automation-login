export class DashboardPage {

    private pageTitle = ".oxd-topbar-header-breadcrumb"
    public verifyDashboard(){
        cy.get(this.pageTitle).should(
            "have.text",
            "Dashboard"
          );
    }
    
}
