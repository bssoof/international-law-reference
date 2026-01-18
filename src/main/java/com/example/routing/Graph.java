package com.example.routing;

import java.util.*;

/**
 * Represents an urban road network as a weighted graph using adjacency lists.
 * G = (V, E) where V = intersections and E = roads.
 * Optimized for Dijkstra's algorithm.
 */
public class Graph {
    private final Map<String, List<Edge>> adjacencyList;

    public Graph() {
        this.adjacencyList = new HashMap<>();
    }

    /**
     * Adds a bidirectional road segment between two intersections.
     * 
     * @param source     Source intersection
     * @param target     Target intersection
     * @param distance   Road length in kilometers
     * @param travelTime Estimated travel time in minutes
     */
    public void addEdge(String source, String target, double distance, double travelTime) {
        // Ensure both nodes exist in the graph
        adjacencyList.putIfAbsent(source, new ArrayList<>());
        adjacencyList.putIfAbsent(target, new ArrayList<>());

        // Add bidirectional edges (undirected graph for roads)
        adjacencyList.get(source).add(new Edge(target, distance, travelTime));
        adjacencyList.get(target).add(new Edge(source, distance, travelTime));
    }

    /**
     * Returns all edges connected to a given node.
     * 
     * @param node The intersection to query
     * @return List of edges from this node, or empty list if node doesn't exist
     */
    public List<Edge> getNeighbors(String node) {
        return adjacencyList.getOrDefault(node, Collections.emptyList());
    }

    /**
     * Returns all intersection nodes in the graph.
     * 
     * @return Set of all node names
     */
    public Set<String> getNodes() {
        return adjacencyList.keySet();
    }

    /**
     * Checks if a node exists in the graph.
     * 
     * @param node The node name to check
     * @return true if node exists
     */
    public boolean containsNode(String node) {
        return adjacencyList.containsKey(node);
    }

    /**
     * Returns the number of nodes in the graph.
     */
    public int getNodeCount() {
        return adjacencyList.size();
    }

    /**
     * Returns the number of edges in the graph (counting each direction once).
     */
    public int getEdgeCount() {
        int count = 0;
        for (List<Edge> edges : adjacencyList.values()) {
            count += edges.size();
        }
        return count / 2; // Divide by 2 for undirected graph
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Graph with ").append(getNodeCount()).append(" nodes and ")
                .append(getEdgeCount()).append(" edges:\n");

        for (Map.Entry<String, List<Edge>> entry : adjacencyList.entrySet()) {
            sb.append(entry.getKey()).append(": ");
            for (Edge edge : entry.getValue()) {
                sb.append(edge).append(" ");
            }
            sb.append("\n");
        }
        return sb.toString();
    }
}
