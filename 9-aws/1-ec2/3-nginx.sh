# open AWS Console

# go to EC2

# launch instance

# Image - Amazon Linux
# Instance type - t2.micro
# Key pair - RSA
# Security group - SSH Port 22 Anywhere, HTTP Port 80 Anywhere, HTTPS Port 443 Anywhere

# select instance > connect > follow instructions

# open terminal 

chmod 400 ~/.ssh/your-amazon-rsa.pem

ssh -i "~/.ssh/your-amazon-rsa.pem" ec2-user@ec2-xx-xxx-xx-xxx.ap-your-region-1.compute.amazonaws.com

# install packages

sudo dnf install -y nginx

sudo systemctl enable nginx

sudo systemctl start nginx

# edit configuration
sudo vim /etc/nginx/nginx.conf

server {
        listen       80;
        listen       [::]:80;
        server_name  _;

        location / {
          proxy_pass http://localhost:8080;
        }
    }

sudo systemctl restart nginx