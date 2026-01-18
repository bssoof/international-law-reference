package com.example.routing;

import java.util.List;

/**
 * Encapsulates the result of a shortest path computation.
 * Contains the path, costs, and optimization type used.
 */
public class PathResult {
    private final List<String> path;
    private final double totalDistance;
    private final double totalTime;
    private final OptimizationType optimizationType;
    private final boolean pathFound;

    /**
     * Creates a successful path result.
     */
    public PathResult(List<String> path, double totalDistance, double totalTime,
            OptimizationType optimizationType) {
        this.path = path;
        this.totalDistance = totalDistance;
        this.totalTime = totalTime;
        this.optimizationType = optimizationType;
        this.pathFound = path != null && !path.isEmpty();
    }

    /**
     * Creates a "no path found" result.
     */
    public static PathResult noPath(OptimizationType type) {
        return new PathResult(null, Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY, type);
    }

    public List<String> getPath() {
        return path;
    }

    public double getTotalDistance() {
        return totalDistance;
    }

    public double getTotalTime() {
        return totalTime;
    }

    public OptimizationType getOptimizationType() {
        return optimizationType;
    }

    public boolean isPathFound() {
        return pathFound;
    }

    /**
     * Returns the optimized cost based on the optimization type.
     */
    public double getOptimizedCost() {
        return optimizationType == OptimizationType.DISTANCE ? totalDistance : totalTime;
    }

    /**
     * Returns a formatted path string like "A → B → C → D"
     */
    public String getPathString() {
        if (!pathFound) {
            return "No path found";
        }
        return String.join(" → ", path);
    }

    @Override
    public String toString() {
        if (!pathFound) {
            return "No path found between the specified nodes.";
        }

        StringBuilder sb = new StringBuilder();
        sb.append("=== ").append(optimizationType.getDisplayName()).append(" Optimization ===\n");
        sb.append("Path: ").append(getPathString()).append("\n");
        sb.append(String.format("Total Distance: %.2f km\n", totalDistance));
        sb.append(String.format("Total Travel Time: %.2f minutes\n", totalTime));
        return sb.toString();
    }
}
