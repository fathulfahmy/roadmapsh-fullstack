# open AWS Console

# go to EC2

# launch instance

# Image - Amazon Linux
# Instance type - t2.micro
# Key pair - RSA
# Security group - SSH Port 22 Anywhere, MySQL/Aurora Port 3306 Anywhere

# select instance > connect > follow instructions

# open terminal 

chmod 400 ~/.ssh/your-amazon-rsa.pem

ssh -i "~/.ssh/your-amazon-rsa.pem" ec2-user@ec2-xx-xxx-xx-xxx.ap-your-region-1.compute.amazonaws.com

# install packages

sudo rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql

# https://dev.mysql.com/downloads/repo/yum/
wget https://dev.mysql.com/get/platform-and-version-specific-package-name.rpm

# https://dev.mysql.com/doc/refman/8.0/en/linux-installation-yum-repo.html
sudo yum install -y platform-and-version-specific-package-name.rpm

sudo yum install -y mysql-community-server

# run server

sudo systemctl enable mysqld

sudo systemctl start mysqld

# setup server
sudo grep 'temporary password' /var/log/mysqld.log

sudo mysql_secure_installation

# paste temporary password

sudo mysql -u root -p

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';

# copy sql into a file https://gist.githubusercontent.com/meech-ward/1723b2df87eae8bb6382828fba649d64/raw/ee52637cc953df669d95bb4ab68ac2ad1a96cd9f/lotr.sql

# execute sql
sudo mysql -u root -p

source ~/folder/subfolder/filename.sql

# create new local user
CREATE USER 'yourusername'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';

GRANT ALL PRIVILEGES ON lotr.* TO 'yourusername'@'localhost';

# create new remote user
CREATE USER 'yourusername'@'%' IDENTIFIED WITH mysql_native_password BY 'yourpassword';

GRANT ALL PRIVILEGES ON *.* TO 'yourusername'@'%';