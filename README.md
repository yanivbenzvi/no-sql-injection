# vagrant-nodejs-mongo

This Vagrant machine contains:
* Ubuntu 16.04
* Node.js
* MongoDB

## How to use

> **Note**
>
> I have only tested this virtual machine using Windows 10 and Windows 7 as host machines


1. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and [Vagrant](https://www.vagrantup.com/downloads.html)

2. Clone this repository

3. Run `vagrant up` in the folder that holds this repository

4. Wait for the virtual machine to download and start

5. Log in to the machine running `vagrant ssh`

### Shared folder
The folder `/Vagrant` on the virtual machine is synchronized with the folder that holds this repository in your machine. Any changes you make in the `/Vagrant` folder will be visible on your machine and vice-versa.

To run the sample project, do the following while logged into the virtual machine:
* `cd /Vagrant/src`
* `npm install`
* `nodejs server`

The app is now running on the virtual machine.

### Networking
The virtual machine's port 3000 is mapped to the host machine's port 8080. If you go to your web browser and type `http://localhost:8080` you should see the sample app that is running inside the virtual machine.

### Development
You can now use this virtual machine for development. 

You can wipe the `src` folder and put your own Node.js files in there, or create any folder structure you want. As long as it is inside the `/Vagrant` folder, and the server runs on port 3000, it will work and it will be visible from your host machine.

Also because of the shared folders, you can use your favorite text editor in the host machine to develop.

## Further reading
If you are not familiar with Vagrant or would like to learn more about it, you can read their official guides [here](https://www.vagrantup.com/intro/getting-started/index.html)
