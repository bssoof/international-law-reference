package com.example.routing;

/**
 * Represents a road segment (edge) in the graph with dual weights.
 * Each edge has both distance and travel time attributes.
 */
public class Edge {
    private final String targetNode;
    private final double distance; // in kilometers
    private final double travelTime; // in minutes

    /**
     * Creates a new edge to the target node with specified weights.
     * 
     * @param targetNode The destination intersection
     * @param distance   Road length in kilometers
     * @param travelTime Estimated travel time in minutes
     */
    public Edge(String targetNode, double distance, double travelTime) {
        this.targetNode = targetNode;
        this.distance = distance;
        this.travelTime = travelTime;
    }

    public String getTargetNode() {
        return targetNode;
    }

    public double getDistance() {
        return distance;
    }

    public double getTravelTime() {
        return travelTime;
    }

    /**
     * Returns the appropriate weight based on the optimization type.
     * 
     * @param type The optimization criterion
     * @return The weight value (distance or travel time)
     */
    public double getWeight(OptimizationType type) {
        return type == OptimizationType.DISTANCE ? distance : travelTime;
    }

    @Override
    public String toString() {
        return String.format("-> %s [%.2f km, %.2f min]", targetNode, distance, travelTime);
    }
}
