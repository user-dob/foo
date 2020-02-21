dev:
	docker-compose -f ./docker/docker-compose.yml --env-file ./env/.env up

dev-stop:
	docker-compose -f ./docker/docker-compose.yml down