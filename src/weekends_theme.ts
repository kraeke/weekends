// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const weekends_theme: CustomThemeConfig = {
	name: 'weekends_theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `RobotoMono`,
		"--theme-font-family-heading": `Poppins`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #6366F1 
		"--color-primary-50": "232 232 253", // #e8e8fd
		"--color-primary-100": "224 224 252", // #e0e0fc
		"--color-primary-200": "216 217 252", // #d8d9fc
		"--color-primary-300": "193 194 249", // #c1c2f9
		"--color-primary-400": "146 148 245", // #9294f5
		"--color-primary-500": "99 102 241", // #6366F1
		"--color-primary-600": "89 92 217", // #595cd9
		"--color-primary-700": "74 77 181", // #4a4db5
		"--color-primary-800": "59 61 145", // #3b3d91
		"--color-primary-900": "49 50 118", // #313276
		// secondary | #22C55E 
		"--color-secondary-50": "222 246 231", // #def6e7
		"--color-secondary-100": "211 243 223", // #d3f3df
		"--color-secondary-200": "200 241 215", // #c8f1d7
		"--color-secondary-300": "167 232 191", // #a7e8bf
		"--color-secondary-400": "100 214 142", // #64d68e
		"--color-secondary-500": "34 197 94", // #22C55E
		"--color-secondary-600": "31 177 85", // #1fb155
		"--color-secondary-700": "26 148 71", // #1a9447
		"--color-secondary-800": "20 118 56", // #147638
		"--color-secondary-900": "17 97 46", // #11612e
		// tertiary | #1F2041 
		"--color-tertiary-50": "221 222 227", // #dddee3
		"--color-tertiary-100": "210 210 217", // #d2d2d9
		"--color-tertiary-200": "199 199 208", // #c7c7d0
		"--color-tertiary-300": "165 166 179", // #a5a6b3
		"--color-tertiary-400": "98 99 122", // #62637a
		"--color-tertiary-500": "31 32 65", // #1F2041
		"--color-tertiary-600": "28 29 59", // #1c1d3b
		"--color-tertiary-700": "23 24 49", // #171831
		"--color-tertiary-800": "19 19 39", // #131327
		"--color-tertiary-900": "15 16 32", // #0f1020
		// success | #22C55E 
		"--color-success-50": "222 246 231", // #def6e7
		"--color-success-100": "211 243 223", // #d3f3df
		"--color-success-200": "200 241 215", // #c8f1d7
		"--color-success-300": "167 232 191", // #a7e8bf
		"--color-success-400": "100 214 142", // #64d68e
		"--color-success-500": "34 197 94", // #22C55E
		"--color-success-600": "31 177 85", // #1fb155
		"--color-success-700": "26 148 71", // #1a9447
		"--color-success-800": "20 118 56", // #147638
		"--color-success-900": "17 97 46", // #11612e
		// warning | #E98A15 
		"--color-warning-50": "252 237 220", // #fceddc
		"--color-warning-100": "251 232 208", // #fbe8d0
		"--color-warning-200": "250 226 197", // #fae2c5
		"--color-warning-300": "246 208 161", // #f6d0a1
		"--color-warning-400": "240 173 91", // #f0ad5b
		"--color-warning-500": "233 138 21", // #E98A15
		"--color-warning-600": "210 124 19", // #d27c13
		"--color-warning-700": "175 104 16", // #af6810
		"--color-warning-800": "140 83 13", // #8c530d
		"--color-warning-900": "114 68 10", // #72440a
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #171738 
		"--color-surface-50": "220 220 225", // #dcdce1
		"--color-surface-100": "209 209 215", // #d1d1d7
		"--color-surface-200": "197 197 205", // #c5c5cd
		"--color-surface-300": "162 162 175", // #a2a2af
		"--color-surface-400": "93 93 116", // #5d5d74
		"--color-surface-500": "23 23 56", // #171738
		"--color-surface-600": "21 21 50", // #151532
		"--color-surface-700": "17 17 42", // #11112a
		"--color-surface-800": "14 14 34", // #0e0e22
		"--color-surface-900": "11 11 27", // #0b0b1b
		
	}
}