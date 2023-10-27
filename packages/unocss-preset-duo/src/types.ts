// src/types.ts

// Represents the style and source configuration for a single font file
export interface FontConfig {
	weight: number; // e.g., 400, 700
	style: 'normal' | 'italic'; // Restrict to valid CSS font-style values
	src: string; // Path to the font file
	type: string; // Font type format, e.g., 'truetype'
}

// Represents a map from font family names to their font configurations
export interface FontsMap {
	[family: string]: FontConfig[];
}
