1. Error creating bean with name 'inMemoryDatabaseShutdownExecutor' defined in class path resource
Solution: remove spring devtools from pom.xml, clean and reinstall maven dependencies
2. Error creating bean with name 'dataSource' defined in class path resource
Solution: add database info in resources/application.properties
3. Circular view path [preference]: would dispatch back to the current handler URL [/preference] again. Check your ViewResolver setup! (Hint: This may be the result of an unspecified view, due to default view name generation.)
Solution: in controller use @RestController instead of @Controller
4. Infinite loop between entity with @OneToMany and @ManyToOne
Solution: use @JsonManagedReference on parent and @JsonBackReference on child
5. Docker server cannot connect to db unless I do a connection test with tools like Navicat WTF!
Solution: add allowPublicKeyRetrieval=true to db url