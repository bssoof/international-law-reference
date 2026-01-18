package com.example.routing;

/**
 * Helper class representing a node with its current tentative distance.
 * Used for priority queue entries in Dijkstra's algorithm.
 */
public class NodeDistance implements Comparable<NodeDistance> {
    private final String node;
    private final double distance;

    public NodeDistance(String node, double distance) {
        this.node = node;
        this.distance = distance;
    }

    public String getNode() {
        return node;
    }

    public double getDistance() {
        return distance;
    }

    @Override
    public int compareTo(NodeDistance other) {
        return Double.compare(this.distance, other.distance);
    }

    @Override
    public String toString() {
        return String.format("(%s: %.2f)", node, distance);
    }
}
