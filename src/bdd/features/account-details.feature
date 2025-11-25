Feature: Account details

  As a logged in ParaBank user
  I want to open an account
  So that I can see its details

  Scenario: User opens the first account from the overview
    Given I am logged in
    When I open the first account
    Then I should see the account details page