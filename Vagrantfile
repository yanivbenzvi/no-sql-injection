Vagrant.configure("2") do |config|
	config.vm.box = "ubuntu/bionic64"
	config.vm.network "private_network", ip: "192.168.44.15"
	config.vm.provision :shell, path: "bootstrap.sh"
	config.vm.network :forwarded_port, guest: 27017, host: 27017, protocol: "tcp"
end
