package com.example.routing;

/**
 * Launcher class for the JavaFX application.
 * This class is needed to run the JavaFX app from IDE without module-path
 * configuration.
 * It works by calling the main RoutingApp class indirectly.
 */
public class Launcher {
    public static void main(String[] args) {
        RoutingApp.main(args);
    }
}
