# https://www.youtube.com/watch?v=ROjZy1WbCIA

# manual
man command-name

# print working directory
pwd

# change directory
cd /folder/subfolder

# change directory one level up
cd ..

# list
ls

# list all
ls -a

# list long
ls -l

# list files in folder/subfolder
ls folder/subfolder

# make directory
mkdir folder

# make directory parents
mkdir -p folder/subfolder

# remove empty directory
rmdir folder

# remove directory parents and ancestors
rmdir folder/subfolder

# file info
file filename.extension

# create file
touch filename.extension

# remove file 
rm filename.extension

# remove file  interactively
rm -i filename.extension

# remove directory forcibly
rm -rf folder

# copy file to new file
cp oldfile.extension newfile.extension

# copy file to new file in folder/subfolder
cp oldfile.extension folder/subfolder/

# copy folder to new folder
cp -r oldfolder newfolder

# rename file name
mv oldfilename.extension newfilename.extension

# move file and rename file name
mv oldfilename.extension folder/subfolder/newfilename.extension

# display first 10 lines of the file
head filename.extension

# display x lines of the file
head -5 filename.extension

# display last 10 lines of the file
tail filename.extension

# display last x lines of the file
tail -5 filename.extension

# Write or overwrite Hello world to a file
echo Hello world > filename.extension

# display file content
cat filename.extension

# display and concat file contents
cat filename.extension filename2.extension filename3.extension

# copy file
cat filename.extension > filename2.extension

# display file content
more filename.extension

# display file content
less filename.extension

# display system uptime
uptime

# display process
ps -A

# display process
top

# display process
htop

# display storage usage
df -h

# display disk partition
sudo fdisk -l

# display block devices
lsblk

# display network interface
ifconfig

# display network interface
ip a

# execute command as another user
sudo 

# package manager (fedora)
dnf

# package manager (ubuntu/debian )
apt

# update packages (fedora)
sudo dnf update

# update packages (ubuntu)
sudo apt update && sudo apt upgrade

# search packages (fedora)
sudo dnf search package-name

# search packages (ubuntu)
sudo apt search package-name

# install package (fedora)
sudo dnf install package-name

# install package (ubuntu)
sudo apt install package-name

# uninstall package (fedora)
sudo dnf remove package-name

# uninstall package (ubuntu)
sudo apt remove package-name

# edit file
nano filename.extension

# nano menu
# ^ - control button

# nano controls
# ctrl+g - help
# q - back
# ctrl+o - overwrite
# ctrl+f - find
# ctrl+k - cut
# ctrl+u - paste
# ctrl+_ - go to line

# edit file
vim filename.extension

# vim controls
# esc - normal mode
# i - insert mode
# v - visual mode
# :q - quit
# :wq - write and quit
# :q! - force quit