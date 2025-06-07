# https://www.youtube.com/watch?v=TUTqYEZZUdc

# region (us-west-2)
#     vpc (10.0.0.0/16)
#         (internet gateway)
#         (s3 bucket gateway)
#         availability zones (us-west-2a)
#             subnet (10.0.1.0/24) [public]
#             subnet (10.0.2.0/24) [private]
#             subnet (10.0.3.0/24) [private]
#         availability zones (us-west-2b)
#             subnet (10.0.4.0/24) [public]
#             subnet (10.0.5.0/24) [private]
#             subnet (10.0.6.0/24) [private]

# open AWS Console

# 1. go to VPC

# create VPC

# IPv4 CIDR - 10.0.0.0/16
#             |__| |__|
#       preserved   ip address

# 2. go to Subnets

# create subnet

# select VPC

# IPv4 subnet CIDR - 10.0.1.0/24
#                     |___| |__|
#                preserved   ip address

# 3. go to Internet Gateway

# create internet gateway

# select internet gateway > actions > attach to VPC

# 4. go to Route Tables

# create route table

# select route table > actions > edit routes > add route > 0.0.0.0/0 internet gatewayy

# 5. go to Subnets

# select subnet > route table > edit route table association > route table id

# 6. go to EC2

# go to Instances

# launch instance

# select VPC, select Subnet, enable auto assign public IP

# 7. go to Instances

# select instance > connect > SSH client > follow instructions

# open terminal 

chmod 400 ~/.ssh/your-amazon-rsa.pem

ssh -i "~/.ssh/your-amazon-rsa.pem" ec2-user@xx.xxx.x.xx

# setup server (nginx)

# go to browser > http://xx.xxx.x.xx

# 8. setup instance with private subnet (nodejs)

# 9. setup reverse proxy nginx (public subnet) to nodejs (private subnet)

sudo vim /etc/nginx/nginx.conf

server {
        listen       80;
        listen       [::]:80;
        server_name  _;

        location / {
                     # nodejs private ip
          proxy_pass http://xx.xxx.x.xx:8080;
        }
    }

sudo systemctl restart nginx