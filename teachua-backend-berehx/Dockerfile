FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests
RUN cp $(ls -S $(find . -name "*.jar" -not -name "*-sources.jar" -not -name "*-plain.jar") | head -n 1) /app/final-app.jar

FROM eclipse-temurin:17-jdk-focal
WORKDIR /app
COPY --from=build /app/final-app.jar ./app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-Xmx512m", "-jar", "app.jar"]
