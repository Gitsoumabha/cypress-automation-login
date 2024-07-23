Feature:
  Scenario: Admin menu 
    Given Go to the admin menu
    When assert the breadcrumb menu
    Then Check add button
    Then Add a new user