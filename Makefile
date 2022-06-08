build:
	docker-compose build

start: 
	docker-compose up -d

restart:
	make build && make start

stop:
	docker-compose kill

purge:
	docker-compose kill && docker-compose rm