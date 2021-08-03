start:
	@ docker-compose build
	@ echo "Build Completed successfully"
	@ echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
	@ docker-compose up
	@ echo "App is up and running"

stop:
	@ docker-compose stop
