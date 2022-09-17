docker run --hostname=quickstart.cloudera --privileged=true -t -i -v /Users/svenkang/dev/volumes/cloudera:/src -p 8888:8888 -p 80:80 -p 7180:7180 cloudera/quickstart /usr/bin/docker-quickstart

# HUE creds
cloudera/cloudera
