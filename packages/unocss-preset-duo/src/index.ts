// src/index.ts
import type { FontsMap } from './types';

export default function presetDuo({ fonts }: { fonts: FontsMap }): any[] {
	// Generate @font-face rules
	const fontface = Object.entries(fonts)
		.map(([family, fontConfigs]) => {
			return fontConfigs
				.map(({ weight, style, src, type }) => {
					const srcPath = `url('${src}') format('${type}')`;
					return `
        @font-face {
          font-family: '${family}';
          src: ${srcPath};
          font-weight: ${weight};
          font-style: ${style};
          font-display: swap;
        }
      `;
				})
				.join('\n');
		})
		.join('\n');

	// Create a custom handler for @font-face rules
	const rule: any = () => {
		return {
			// This is a special key that UnoCSS recognizes for injecting raw CSS
			'@font-face': fontface,
		};
	};

	// Return an array of custom rules (handlers)
	return [rule];
}
