FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests
RUN find . -name "*.jar" -not -name "*-sources.jar" -not -name "*-plain.jar" -exec cp {} /app/final-app.jar \;

FROM eclipse-temurin:17-jdk-focal
WORKDIR /app
COPY --from=build /app/final-app.jar ./app.jar
RUN [ -f app.jar ] || (echo "FATAL: app.jar not found!" && exit 1)
EXPOSE 8080
ENTRYPOINT ["java", "-Xmx512m", "-jar", "app.jar"]
