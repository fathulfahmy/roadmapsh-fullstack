# Purchase a domain from Cloudflare Registrar

# Cloudflare dashboard > DNS > Add record

# Type A
# Name @
# IPv4 address xx.xxx.xx.xx (EC2 public IPv4 address)
# Proxy enabled
# TTL auto

# Cloudflare dashboard > SSL/TLS > Origin Server > Create certificate

sudo mkdir -p /etc/ssl/cloudflare

sudo vim /etc/ssl/cloudflare/origin.pem
# copy cloudflare origin certificate and paste

sudo vim /etc/ssl/cloudflare/origin.key
# copy cloudflare private key and paste

sudo chmod 644 /etc/ssl/cloudflare/origin.pem
sudo chmod 600 /etc/ssl/cloudflare/origin.key

sudo vim /etc/nginx/nginx.conf

server {
        listen       80;
        listen       [::]:80;
        server_name  fathulfahmy.com www.fathulfahmy.com;

        location / {
          proxy_pass http://localhost:8080;
        }
    }

    server {
        listen       443 ssl;
        listen       [::]:443 ssl;
        http2        on;
        server_name  fathulfahmy.com www.fathulfahmy.com;

        ssl_certificate /etc/ssl/cloudflare/origin.pem;
        ssl_certificate_key /etc/ssl/cloudflare/origin.key;

        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers PROFILE=SYSTEM;
        ssl_prefer_server_ciphers on;
        
        include /etc/nginx/default.d/*.conf;

        location / {
          proxy_pass http://localhost:8080;
        }
    }

sudo systemctl restart nginx