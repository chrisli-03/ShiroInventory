1. Error creating bean with name 'inMemoryDatabaseShutdownExecutor' defined in class path resource
Solution: remove spring devtools from pom.xml, clean and reinstall maven dependencies
2. Error creating bean with name 'dataSource' defined in class path resource
Solution: add database info in resources/application.properties