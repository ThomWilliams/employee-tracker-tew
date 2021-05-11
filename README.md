
Full Steps For launching MySQL 8 in the terminal
Connect to MySQL
$ mysql -u root -p
Enter password: (enter your root password)
Reset your password
(Replace your_new_password with the password you want to use)

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_new_password';
mysql> FLUSH PRIVILEGES;
mysql> quit
Then try connecting using node

USE THIS INSTEAD OF SQL WORKBENCH?

https://sqliteonline.com/
