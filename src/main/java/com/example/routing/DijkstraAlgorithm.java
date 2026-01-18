package com.example.routing;

import java.util.*;

/**
 * Implementation of Dijkstra's algorithm using a Priority Queue
 * for efficient shortest path computation in weighted graphs.
 * 
 * Supports multi-criteria optimization (distance or travel time).
 */
public class DijkstraAlgorithm {

    /**
     * Computes the shortest path from source to destination using Dijkstra's
     * algorithm.
     * 
     * @param graph       The road network graph
     * @param source      Starting intersection
     * @param destination Target intersection
     * @param type        Optimization criterion (DISTANCE or TIME)
     * @return PathResult containing the optimal path and costs
     */
    public PathResult findShortestPath(Graph graph, String source, String destination,
            OptimizationType type) {
        // Validate input nodes
        if (!graph.containsNode(source) || !graph.containsNode(destination)) {
            return PathResult.noPath(type);
        }

        // Distance/cost map: stores shortest known distance to each node
        Map<String, Double> distances = new HashMap<>();

        // Predecessor map: stores the previous node in the optimal path
        Map<String, String> predecessors = new HashMap<>();

        // Track visited nodes
        Set<String> visited = new HashSet<>();

        // Priority Queue for efficient minimum extraction
        PriorityQueue<NodeDistance> priorityQueue = new PriorityQueue<>();

        // Initialize all distances to infinity
        for (String node : graph.getNodes()) {
            distances.put(node, Double.POSITIVE_INFINITY);
        }

        // Distance to source is 0
        distances.put(source, 0.0);
        priorityQueue.offer(new NodeDistance(source, 0.0));

        // Main Dijkstra loop
        while (!priorityQueue.isEmpty()) {
            // Extract node with minimum distance
            NodeDistance current = priorityQueue.poll();
            String currentNode = current.getNode();

            // Skip if already processed (handles duplicate entries in PQ)
            if (visited.contains(currentNode)) {
                continue;
            }
            visited.add(currentNode);

            // Early termination if we reached the destination
            if (currentNode.equals(destination)) {
                break;
            }

            // Relax all edges from current node
            for (Edge edge : graph.getNeighbors(currentNode)) {
                String neighbor = edge.getTargetNode();

                if (visited.contains(neighbor)) {
                    continue;
                }

                // Calculate new distance through current node
                double weight = edge.getWeight(type);
                double newDistance = distances.get(currentNode) + weight;

                // Update if we found a shorter path
                if (newDistance < distances.get(neighbor)) {
                    distances.put(neighbor, newDistance);
                    predecessors.put(neighbor, currentNode);
                    priorityQueue.offer(new NodeDistance(neighbor, newDistance));
                }
            }
        }

        // Check if destination was reached
        if (!predecessors.containsKey(destination) && !source.equals(destination)) {
            return PathResult.noPath(type);
        }

        // Reconstruct the path by backtracking from destination
        List<String> path = reconstructPath(predecessors, source, destination);

        // Calculate both distance and time for the found path
        double[] costs = calculatePathCosts(graph, path);

        return new PathResult(path, costs[0], costs[1], type);
    }

    /**
     * Reconstructs the path from source to destination using predecessor map.
     */
    private List<String> reconstructPath(Map<String, String> predecessors,
            String source, String destination) {
        LinkedList<String> path = new LinkedList<>();
        String current = destination;

        while (current != null) {
            path.addFirst(current);
            if (current.equals(source)) {
                break;
            }
            current = predecessors.get(current);
        }

        return path;
    }

    /**
     * Calculates total distance and time for a given path.
     * 
     * @param graph The road network graph
     * @param path  List of nodes in the path
     * @return Array of [totalDistance, totalTime]
     */
    private double[] calculatePathCosts(Graph graph, List<String> path) {
        double totalDistance = 0.0;
        double totalTime = 0.0;

        for (int i = 0; i < path.size() - 1; i++) {
            String from = path.get(i);
            String to = path.get(i + 1);

            // Find the edge between these nodes
            for (Edge edge : graph.getNeighbors(from)) {
                if (edge.getTargetNode().equals(to)) {
                    totalDistance += edge.getDistance();
                    totalTime += edge.getTravelTime();
                    break;
                }
            }
        }

        return new double[] { totalDistance, totalTime };
    }
}
