# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
    # Every Vagrant virtual environment requires a box to build off of.
    config.vm.box = "ubuntu-13.10"

    # The url from where the 'config.vm.box' box will be fetched if it
    # doesn't already exist on the user's system.
    config.vm.box_url = "https://vagrantcloud.com/chef/ubuntu-13.10/version/1/provider/virtualbox.box"

    # set the name of the box to make it a little easier to find in virtual box
    config.vm.provider "virtualbox" do |custom_virtualbox_settings|
      custom_virtualbox_settings.name = "app_vagrant"
    end

    # Create a forwarded port mapping which allows access to a specific port
    # within the machine from a port on the host machine. In the example below,
    # accessing "localhost:8080" will access port 80 on the guest machine.
    config.vm.network :forwarded_port, guest: 80, host: 8080
    config.vm.network :forwarded_port, guest: 8000, host: 8000

    # made a folder for doing django and for putting some scripts we'll use later.
    config.vm.synced_folder ".", "/home/vagrant/django_shared"

    # let this shell script do the installation of everything you need to do django dev    
    config.vm.provision :shell, :path => "vagrant_install_django_dev.sh"

end
