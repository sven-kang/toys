Cloudera QuickStart Docker Image

Cloudera QuickStart VMs and this Docker image are single-node deployments of Cloudera's 100% open-source distribution including Apache Hadoop, and Cloudera Manager. They are ideal environments for learning about Hadoop, trying out new ideas, testing and demoing your application.
Introduction to Docker

Docker is different from other platforms you may have worked with, because it uses Linux containers. Most "virtual machines" work by isolating or simulating access to the host's hardware so an entire guest operating system can run on it. Linux containers, however, work by partitioning the resources of the host operating system: they have their own view of the filesystem and other resources, but they are running on the same kernel. This is similar to BSD jails or Solaris zones. Docker provides tooling, a packaging format, and infrastructure around Linux containers and related technologies.

Docker is well supported in several recent Linux distributions. For instance, on Ubuntu 14.04, it can be installed as follows:

sudo apt-get install docker.io

Importing the Cloudera QuickStart Image

You can import the Cloudera QuickStart image from Docker Hub:

docker pull cloudera/quickstart:latest

Running a Cloudera QuickStart Container

To run a container using the image, you must know the name or hash of the image. If you followed the Importing instructions above, the name could be cloudera/quickstart:latest (or something else if you have multiple versions downloaded). The hash is also printed in the terminal when you import, or you can look up the hashes of all imported images with:

docker images

Once you know the name or hash of the image, you can run it:

docker run --hostname=quickstart.cloudera --privileged=true -t -i [OPTIONS] [IMAGE] /usr/bin/docker-quickstart

Explanation for required flags and other options are in the following table:

--hostname=quickstart.cloudera    Required: pseudo-distributed configuration assumes this hostname
--privileged=true                 Required: for HBase, MySQL-backed Hive metastore, Hue, Oozie, Sentry, and Cloudera Manager, and possibly others
-t                                Required: once services are started, a Bash shell takes over and will die without this
-i                                Required: if you want to use the terminal, either immediately or attach later
-p 8888                           Recommended: maps the Hue port in the guest to another port on the host
-p [PORT]                         Optional: map any other ports (e.g. 7180 for Cloudera Manager, 80 for a guided tutorial)
-d                                Optional: runs the container in the background

/usr/bin/docker-quickstart is provided as a convenience to start all CDH services, then run a Bash shell. You can directly run /bin/bash instead if you wish to start services manually.

See "Networking" for details about port mapping.
Connecting To The Shell

If you do not pass the -d flag to docker run, your terminal will automatically attach to that of the container.

A container will die when you exit the shell, but you can disconnect and leave the container running by hitting Ctrl+P -> Ctrl+Q.

If you have disconnected from the shell or did pass the -d flag, you can connect to the shell later with:

docker attach [CONTAINER HASH]

You can look up the hashes of running containers with:

docker ps

When attaching to a container, you may need to hit
Networking

To make a port accessible outside the container, pass the -p <port> flag. Docker will map this port to another one on the host system. You can look up the interface to which it binds and the port number it maps to with:

docker port [CONTAINER HASH] [GUEST PORT]

If you're going to interact with the Cloudera QuickStart image from other systems, you should make sure quickstart.cloudera resolves to the IP address of the machine where the image is running. You may also want to set up port-forwarding so that the port you would normally connect to on a real cluster, is mapped to the corresponding port

Be aware that when you are mapping ports like this, services are not aware, and may give you links or other references to specific ports that are no longer resolvable on your client.
Other Notes

Docker containers will not have any permanent storage unless you set it up. When the container is killed, any data not found in the image will be lost.

Remember that Cloudera's stack is designed to run on a distributed cluster. Pausing this docker image is like pausing an entire data center: some services may shut down because from their perspective it's been a long time since they were able to communicate with the rest of the cluster.

Cloudera Manager is not started by default. To see options for starting it, run:

/home/cloudera/cloudera-manager

/home/cloudera/parcels can then be used if you wish to migrate from a package-based install to a parcel-based install. /home/cloudera/kerberos can be used to install and start Kerberos.

See Cloudera's documentation and Cloudera's website for other information, including the license agreement associated with this image. Cloudera QuickStart is not intended or supported for use in production.

Source: https://hub.docker.com/r/cloudera/quickstart/
