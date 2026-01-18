package com.example.routing;

import java.io.*;
import java.nio.file.*;

/**
 * Utility class for reading graph data from text files.
 * 
 * Expected format per line: Node1 Node2 Distance Time
 * Example: A B 4.5 7
 */
public class GraphFileReader {

    /**
     * Reads a graph from a file.
     * 
     * @param filePath Path to the input file
     * @return A Graph populated with the road network
     * @throws IOException if file cannot be read
     */
    public static Graph readGraph(String filePath) throws IOException {
        Graph graph = new Graph();

        try (BufferedReader reader = Files.newBufferedReader(Paths.get(filePath))) {
            String line;
            int lineNumber = 0;

            while ((line = reader.readLine()) != null) {
                lineNumber++;
                line = line.trim();

                // Skip empty lines and comments
                if (line.isEmpty() || line.startsWith("#")) {
                    continue;
                }

                try {
                    parseLine(graph, line);
                } catch (IllegalArgumentException e) {
                    System.err.println("Warning: Invalid format at line " + lineNumber + ": " + line);
                }
            }
        }

        return graph;
    }

    /**
     * Reads a graph from an InputStream (for loading from resources).
     * 
     * @param inputStream The input stream to read from
     * @return A Graph populated with the road network
     * @throws IOException if stream cannot be read
     */
    public static Graph readGraph(InputStream inputStream) throws IOException {
        Graph graph = new Graph();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream))) {
            String line;
            int lineNumber = 0;

            while ((line = reader.readLine()) != null) {
                lineNumber++;
                line = line.trim();

                // Skip empty lines and comments
                if (line.isEmpty() || line.startsWith("#")) {
                    continue;
                }

                try {
                    parseLine(graph, line);
                } catch (IllegalArgumentException e) {
                    System.err.println("Warning: Invalid format at line " + lineNumber + ": " + line);
                }
            }
        }

        return graph;
    }

    /**
     * Parses a single line and adds the edge to the graph.
     */
    private static void parseLine(Graph graph, String line) {
        // Split by whitespace
        String[] parts = line.split("\\s+");

        if (parts.length != 4) {
            throw new IllegalArgumentException("Expected 4 values: Node1 Node2 Distance Time");
        }

        String node1 = parts[0].toUpperCase();
        String node2 = parts[1].toUpperCase();
        double distance = Double.parseDouble(parts[2]);
        double time = Double.parseDouble(parts[3]);

        if (distance < 0 || time < 0) {
            throw new IllegalArgumentException("Distance and time must be non-negative");
        }

        graph.addEdge(node1, node2, distance, time);
    }

    /**
     * Creates a sample graph for testing (embedded data).
     */
    public static Graph createSampleGraph() {
        Graph graph = new Graph();

        // Sample road network
        graph.addEdge("A", "B", 4.5, 7);
        graph.addEdge("A", "C", 2.0, 4);
        graph.addEdge("A", "D", 9.0, 15);
        graph.addEdge("B", "C", 1.2, 3);
        graph.addEdge("B", "D", 5.0, 8);
        graph.addEdge("C", "D", 6.0, 10);
        graph.addEdge("B", "E", 3.0, 5);
        graph.addEdge("D", "E", 2.5, 4);
        graph.addEdge("C", "F", 4.0, 6);
        graph.addEdge("E", "F", 3.5, 5);

        return graph;
    }
}
