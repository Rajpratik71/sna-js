THIS_FILE := $(lastword $(MAKEFILE_LIST))

##########

init:
	docker-compose up --build --force-recreate --no-start 
	@$(MAKE) -f $(THIS_FILE) start 

deinit:
	docker-compose down --remove-orphans

reinit: deinit init

##########

start:
	docker-compose start

stop:
	docker-compose stop

restart: stop start
