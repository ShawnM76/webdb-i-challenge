# Database Queries

## Find all customers with postal code 1010

    CustomerName	                PostalCode
    Cactus Comidas para llevar	    1010
    Océano Atlántico Ltda.	        1010
    Rancho grande	                1010

## Find the phone number for the supplier with the id 11

    Heli Süßwaren GmbH & Co. KG	  (010) 9984510

## List first 10 orders ever places, descending by the order date

## Find all customers that live in London, Madrid, or Brazil

    London	Around the Horn	Thomas Hardy
    London	B's Beverages	Victoria Ashworth
    London	Consolidated Holdings	Elizabeth Brown
    London	Eastern Connection	Ann Devon
    London	North/South	Simon Crowther
    London	Seven Seas Imports	Hari Kumar

    Madrid	Bólido Comidas preparadas	Martín Sommer
    Madrid	FISSA Fabrica Inter. Salchichas S.A.	Diego Roel
    Madrid	Romero y tomillo	Alejandra Camino

    none for Brazil

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

    92	The Shire	Bilbo Baggins	1 Hobbit-Hole	Bag End	111	Middle Earth

## Update Bilbo Baggins record so that the postal code changes to "11122"

    92	The Shire	Bilbo Baggins	1 Hobbit-Hole	Bag End	11122	Middle Earth

## (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

## (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
