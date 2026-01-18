package com.example.routing;

import javafx.collections.FXCollections;
import javafx.fxml.FXML;
import javafx.scene.control.*;
import javafx.stage.FileChooser;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Controller for the Multi-Criteria Shortest Path Optimizer JavaFX application.
 * Handles user interactions and coordinates between UI and algorithm.
 */
public class RoutingController {

    @FXML
    private ComboBox<String> sourceComboBox;
    @FXML
    private ComboBox<String> destinationComboBox;
    @FXML
    private RadioButton distanceRadio;
    @FXML
    private RadioButton timeRadio;
    @FXML
    private RadioButton bothRadio;
    @FXML
    private ToggleGroup optimizationGroup;
    @FXML
    private TextArea resultsTextArea;
    @FXML
    private Label graphStatusLabel;
    @FXML
    private Label pathLabel;

    private Graph graph;
    private final DijkstraAlgorithm dijkstra = new DijkstraAlgorithm();

    @FXML
    public void initialize() {
        // Load sample graph on startup
        try {
            onUseSampleGraph();
        } catch (Exception e) {
            System.err.println("Error initializing graph: " + e.getMessage());
            e.printStackTrace();
        }
    }

    /**
     * Handles the "Find Optimal Path" button click.
     */
    @FXML
    private void onFindPath() {
        // Validate inputs
        String source = sourceComboBox.getValue();
        String destination = destinationComboBox.getValue();

        if (source == null || destination == null) {
            showError("Please select both source and destination nodes.");
            return;
        }

        if (source.equals(destination)) {
            showError("Source and destination must be different nodes.");
            return;
        }

        if (graph == null) {
            showError("Please load a graph first.");
            return;
        }

        StringBuilder results = new StringBuilder();
        results.append("╔══════════════════════════════════════════════════════════════╗\n");
        results.append("║           SHORTEST PATH COMPUTATION RESULTS                  ║\n");
        results.append("╚══════════════════════════════════════════════════════════════╝\n\n");
        results.append(String.format("From: %s  →  To: %s\n\n", source, destination));

        String pathDisplayText = "-";

        if (distanceRadio.isSelected()) {
            // Distance optimization only
            PathResult result = dijkstra.findShortestPath(graph, source, destination, OptimizationType.DISTANCE);
            results.append(formatResult(result, "DISTANCE OPTIMIZATION"));
            pathDisplayText = result.getPathString();

        } else if (timeRadio.isSelected()) {
            // Time optimization only
            PathResult result = dijkstra.findShortestPath(graph, source, destination, OptimizationType.TIME);
            results.append(formatResult(result, "TIME OPTIMIZATION"));
            pathDisplayText = result.getPathString();

        } else if (bothRadio.isSelected()) {
            // Both optimizations
            PathResult distanceResult = dijkstra.findShortestPath(graph, source, destination,
                    OptimizationType.DISTANCE);
            PathResult timeResult = dijkstra.findShortestPath(graph, source, destination, OptimizationType.TIME);

            results.append(formatResult(distanceResult, "DISTANCE OPTIMIZATION"));
            results.append("\n");
            results.append(formatResult(timeResult, "TIME OPTIMIZATION"));

            // Compare results
            results.append("\n─────────────────────────────────────────────────\n");
            results.append("COMPARISON:\n");

            if (distanceResult.isPathFound() && timeResult.isPathFound()) {
                if (distanceResult.getPathString().equals(timeResult.getPathString())) {
                    results.append("✓ Both criteria yield the same optimal path!\n");
                    pathDisplayText = distanceResult.getPathString();
                } else {
                    results.append("✗ Different paths for different criteria:\n");
                    results.append(String.format("  • Shortest Distance: %s (%.2f km, %.2f min)\n",
                            distanceResult.getPathString(),
                            distanceResult.getTotalDistance(),
                            distanceResult.getTotalTime()));
                    results.append(String.format("  • Minimum Time: %s (%.2f km, %.2f min)\n",
                            timeResult.getPathString(),
                            timeResult.getTotalDistance(),
                            timeResult.getTotalTime()));
                    pathDisplayText = "Distance: " + distanceResult.getPathString() +
                            " | Time: " + timeResult.getPathString();
                }
            }
        }

        results.append("\n═══════════════════════════════════════════════════════════════\n");
        results.append("Algorithm: Dijkstra's Algorithm with Priority Queue\n");
        results.append("Graph: ").append(graph.getNodeCount()).append(" nodes, ")
                .append(graph.getEdgeCount()).append(" edges\n");

        resultsTextArea.setText(results.toString());
        pathLabel.setText(pathDisplayText);
    }

    /**
     * Formats a PathResult for display.
     */
    private String formatResult(PathResult result, String title) {
        StringBuilder sb = new StringBuilder();
        sb.append("▶ ").append(title).append("\n");
        sb.append("─────────────────────────────────────────────────\n");

        if (!result.isPathFound()) {
            sb.append("  ✗ No path found between the specified nodes.\n");
            return sb.toString();
        }

        sb.append(String.format("  Path: %s\n", result.getPathString()));
        sb.append(String.format("  Total Distance: %.2f km\n", result.getTotalDistance()));
        sb.append(String.format("  Total Travel Time: %.2f minutes\n", result.getTotalTime()));
        sb.append(String.format("  Number of stops: %d\n", result.getPath().size() - 1));

        return sb.toString();
    }

    /**
     * Handles the "Clear" button click.
     */
    @FXML
    private void onClear() {
        sourceComboBox.getSelectionModel().clearSelection();
        destinationComboBox.getSelectionModel().clearSelection();
        resultsTextArea.clear();
        pathLabel.setText("-");
        distanceRadio.setSelected(true);
    }

    /**
     * Handles the "Load Graph from File" button click.
     */
    @FXML
    private void onLoadFile() {
        FileChooser fileChooser = new FileChooser();
        fileChooser.setTitle("Open Graph File");
        fileChooser.getExtensionFilters().add(
                new FileChooser.ExtensionFilter("Text Files", "*.txt"));

        File file = fileChooser.showOpenDialog(sourceComboBox.getScene().getWindow());

        if (file != null) {
            try {
                graph = GraphFileReader.readGraph(file.getAbsolutePath());
                updateGraphStatus();
                resultsTextArea.setText("Graph loaded successfully from:\n" + file.getName() +
                        "\n\nNodes: " + graph.getNodeCount() +
                        "\nEdges: " + graph.getEdgeCount());
            } catch (IOException e) {
                showError("Failed to load graph: " + e.getMessage());
            }
        }
    }

    /**
     * Handles the "Use Sample Graph" button click.
     */
    @FXML
    private void onUseSampleGraph() {
        graph = GraphFileReader.createSampleGraph();
        updateGraphStatus();

        resultsTextArea.setText(
                "Sample graph loaded!\n\n" +
                        "Nodes: A, B, C, D, E, F\n\n" +
                        "Road Network:\n" +
                        "  A ↔ B: 4.5 km, 7 min\n" +
                        "  A ↔ C: 2.0 km, 4 min\n" +
                        "  A ↔ D: 9.0 km, 15 min\n" +
                        "  B ↔ C: 1.2 km, 3 min\n" +
                        "  B ↔ D: 5.0 km, 8 min\n" +
                        "  C ↔ D: 6.0 km, 10 min\n" +
                        "  B ↔ E: 3.0 km, 5 min\n" +
                        "  D ↔ E: 2.5 km, 4 min\n" +
                        "  C ↔ F: 4.0 km, 6 min\n" +
                        "  E ↔ F: 3.5 km, 5 min\n\n" +
                        "Select source and destination, then click 'Find Optimal Path'");
    }

    /**
     * Updates the node combo boxes and status label based on loaded graph.
     */
    private void updateGraphStatus() {
        if (graph != null) {
            List<String> nodes = new ArrayList<>(graph.getNodes());
            Collections.sort(nodes);

            sourceComboBox.setItems(FXCollections.observableArrayList(nodes));
            destinationComboBox.setItems(FXCollections.observableArrayList(nodes));

            graphStatusLabel.setText(String.format("Loaded: %d nodes, %d edges",
                    graph.getNodeCount(), graph.getEdgeCount()));
            graphStatusLabel.setStyle("-fx-text-fill: #4ecca3;");
        } else {
            sourceComboBox.getItems().clear();
            destinationComboBox.getItems().clear();
            graphStatusLabel.setText("Not loaded");
            graphStatusLabel.setStyle("-fx-text-fill: #e94560;");
        }
        pathLabel.setText("-");
    }

    /**
     * Shows an error message in the results area.
     */
    private void showError(String message) {
        resultsTextArea.setText("⚠ ERROR\n\n" + message);
        pathLabel.setText("-");
    }
}
