1. Error creating bean with name 'inMemoryDatabaseShutdownExecutor' defined in class path resource
Solution: remove spring devtools from pom.xml, clean and reinstall maven dependencies
2. Error creating bean with name 'dataSource' defined in class path resource
Solution: add database info in resources/application.properties
3. Circular view path [preference]: would dispatch back to the current handler URL [/preference] again. Check your ViewResolver setup! (Hint: This may be the result of an unspecified view, due to default view name generation.)
Solution: in controller use @RestController instead of @Controller