FROM eclipse-temurin:17-jdk AS build
WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests
RUN ls -al /app/target



FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=build /app/target/final-project-0.0.1-SNAPSHOT.jar /app/final-project.jar
EXPOSE 8080
CMD ["java", "-jar", "/app/final-project.jar"]
