Feature: Transfer funds

  As a ParaBank user
  I want to transfer money between my accounts
  So that I can manage my funds

  Background:
    Given I am logged in

@wip
  Scenario: Transfer funds between two accounts
    When I transfer 100 dollars from the first to the second account
    Then I should see a successful transfer message