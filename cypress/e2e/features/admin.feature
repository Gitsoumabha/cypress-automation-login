Feature:
  Scenario: Admin menu 
    Given I visit the login page
    When I used the valid credentials
    Then Go to the admin menu
    Then assert the breadcrumb menu
    Then Check add button
    Then Add a new user