package com.example.routing;

/**
 * Enum defining the optimization criteria for shortest path computation.
 */
public enum OptimizationType {
    DISTANCE("Distance (km)"),
    TIME("Travel Time (minutes)");

    private final String displayName;

    OptimizationType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
