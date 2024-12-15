FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY . /app
RUN ./mvnw clean package -DskipTests
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "target/final-project.jar"]
