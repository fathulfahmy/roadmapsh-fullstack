# run postgres server
sudo systemctl start postgresql

# launch postgres shell
sudo -u postgres psql
psql
psql -h localhost -p 5432 -U username dbname
psql -h url -p 5432 -U username dbname

\q # quit shell
help # open help
\? # open manual
\l # list databases
\c dbname # connect to database

# https://www.mockaroo.com/ generate dataset
\i /folder/subfolder/filename.sql # execute sql

\df * # list functions