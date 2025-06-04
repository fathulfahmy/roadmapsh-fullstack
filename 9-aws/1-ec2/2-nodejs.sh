# open AWS Console

# go to EC2

# launch instance

# Image - Amazon Linux
# Instance type - t2.micro
# Key pair - RSA
# Security group - SSH Port 22 Anywhere, Custom TCP Port 8080 Anywhere

# select instance > connect > follow instructions

# open terminal 

chmod 400 ~/.ssh/your-amazon-rsa.pem

ssh -i "~/.ssh/your-amazon-rsa.pem" ec2-user@ec2-xx-xxx-xx-xxx.ap-your-region-1.compute.amazonaws.com

# install packages

sudo dnf install -y gcc-c++ make nodejs git

# clone repo

git clone https://github.com/sam-meech-ward-bcit/lotr

# setup server

cd lotr

npm i

# run server

node server.js

# create a new environment file
vim app.env

MYSQL_HOST="13.229.103.103"
MYSQL_USER="remoteuser"
MYSQL_PASSWORD="Aqm2015!"
MYSQL_DATABASE="lotr"

# create a new service file
sudo vim /etc/systemd/system/lotr.service

[Unit]
Description=My Node Server
After=multi-user.target

[Service]
ExecStart=/usr/bin/node /home/ec2-user/lotr/server.js
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=my-node-server
User=ec2-user
EnvironmentFile=/home/ec2-user/lotr/app.env

[Install]
WantedBy=multi-user.target

# run service
sudo systemctl enable lotr.service

sudo systemctl start lotr.service

# open EC2 Public IPv4 Address

# e.g. http://13.213.74.243:8080
