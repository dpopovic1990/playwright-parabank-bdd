Feature: Login and account overview

  As a ParaBank customer
  I want to log in to the application
  So that I can see my accounts

  Scenario: Successful login and navigation to accounts overview
    Given I am on the login page
    When I login with valid credentials
    Then I should see the Accounts Overview page