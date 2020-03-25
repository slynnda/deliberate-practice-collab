docker.stop.all:
    $(call docker.stop_all,)

docker.rm.all: docker.stop.all
    $(call docker.rm_all,)
	
docker.rmi.all: docker.rm.all
    $(call docker.rmi_all,)

define docker.stop_all
  test ! $$(docker ps -a -q | wc -l) -gt 0 || docker stop $$(docker ps -a -q)
endef

define docker.rm_all
  test ! $$(docker ps -a -q | wc -l) -gt 0 || docker rm -f $$(docker ps -a -q)
endef

define docker.rmi_all
  test ! $$(docker images -q | wc -l) -gt 0 || docker rmi -f $$(docker images -q)
endef