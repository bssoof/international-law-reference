package com.example.routing;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

/**
 * Main JavaFX Application for Multi-Criteria Shortest Path Optimizer.
 * 
 * COM336 - Design and Analysis of Algorithms
 * Project #3 - First Semester 2025/2026
 * 
 * This application demonstrates Dijkstra's algorithm with Priority Queue
 * for computing optimal paths based on distance or travel time.
 */
public class RoutingApp extends Application {

    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(
                RoutingApp.class.getResource("routing.fxml"));

        Scene scene = new Scene(fxmlLoader.load(), 900, 650);

        stage.setTitle("Multi-Criteria Shortest Path Optimizer - Dijkstra's Algorithm");
        stage.setScene(scene);
        stage.setMinWidth(800);
        stage.setMinHeight(600);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}
