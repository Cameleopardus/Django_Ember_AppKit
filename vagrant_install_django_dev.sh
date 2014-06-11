#!/usr/bin/env bash

echo "---------------------------------------------"
echo "Running vagrant bootstrap to install requirements"
echo "---------------------------------------------"

if [ "$(whoami)" != "root" ]; then
    echo "---------------------------------------------"
    echo "This script must be run as root!"
    echo "---------------------------------------------"
    exit 1
fi

echo "---------------------------------------------"
echo "updating apt-get"
echo "---------------------------------------------"
apt-get update

echo "---------------------------------------------"
echo "installing install git"
echo "---------------------------------------------"
apt-get install -y git-core

echo "---------------------------------------------"
echo "installing dev kits for libxml2 and libxslt"
echo "---------------------------------------------"
apt-get install -y libxml2-dev libxslt1-dev

echo "---------------------------------------------"
echo "installing rabbitmq server"
echo "---------------------------------------------"
apt-get install -y rabbitmq-server

echo "---------------------------------------------"
echo "disabling rabbitmq autostart on boot"
echo "---------------------------------------------"
update-rc.d -f rabbitmq-server remove

echo "---------------------------------------------"
echo "installing install pip"
echo "---------------------------------------------"
apt-get install -y python-pip

echo "---------------------------------------------"
echo "installing nodejs (npm)"
echo "---------------------------------------------"
apt-get install -y npm

echo "---------------------------------------------"
echo "installing ember-template-compiler"
echo "---------------------------------------------"
npm install ember-template-compiler

echo "---------------------------------------------"
echo "installing django env based on a requirements file."
echo "---------------------------------------------"
pip install -r "django_shared/requirements.txt"

echo "---------------------------------------------"
echo "installing unzip."
echo "---------------------------------------------"
apt-get install -y unzip

echo "---------------------------------------------"
echo "installing packer.io"
echo "---------------------------------------------"
mkdir /usr/local/packer
wget https://dl.bintray.com/mitchellh/packer/0.5.2_linux_amd64.zip -P /tmp/
unzip /tmp/0.5.2_linux_amd64.zip -d /usr/local/packer
echo "export PATH='/usr/local/packer:$PATH'" | tee /etc/profile.d/packer.sh
chmod 777 /etc/profile.d/packer.sh

echo "---------------------------------------------"
echo "installing NGINX"
echo "---------------------------------------------"
apt-get install -y nginx
rm /etc/nginx/sites-enabled/default
cp django_shared/deployment/local/nginx/app /etc/nginx/sites-available/
ln -s /etc/nginx/sites-available/app /etc/nginx/sites-enabled/app

echo "---"
echo "symlink django settings"
echo "---"
ln -s /vagrant/deployment/local/django/settings.py /vagrant/App/settings.py

echo "---------------------------------------------"
echo "restarting NGINX"
echo "---------------------------------------------"
service nginx restart

echo "---------------------------------------------"
echo " Finished."
echo "---------------------------------------------"
