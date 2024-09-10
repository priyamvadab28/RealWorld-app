Feature: Test to perform actions on elements

  
Scenario: Navigate to home page and create new transaction
    Given Login page is open
    When Login to bank
    Then create new transcation and assert transaction is submitted
    And Logout 

Scenario: Navigate to home page and create new account
    Given Login page is open
    When Login to bank
    Then create new account 


    
    