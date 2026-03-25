FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jdk-focal
WORKDIR /app
COPY --from=build /app/target/*.jar ./
RUN rm -f *-plain.jar *-sources.jar && mv *.jar app.jar
RUN test -f app.jar || (echo "app.jar is not a file" && exit 1)
EXPOSE 8080
ENTRYPOINT ["java", "-Xmx512m", "-jar", "app.jar"]
