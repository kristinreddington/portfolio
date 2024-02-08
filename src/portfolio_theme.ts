// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you

import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const portfolioTheme: CustomThemeConfig = {
    name: 'portfolio_theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "black",
		"--theme-rounded-base": "6px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "0px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #a19a9e 
		"--color-primary-50": "241 240 240", // #f1f0f0
		"--color-primary-100": "236 235 236", // #ecebec
		"--color-primary-200": "232 230 231", // #e8e6e7
		"--color-primary-300": "217 215 216", // #d9d7d8
		"--color-primary-400": "189 184 187", // #bdb8bb
		"--color-primary-500": "161 154 158", // #a19a9e
		"--color-primary-600": "145 139 142", // #918b8e
		"--color-primary-700": "121 116 119", // #797477
		"--color-primary-800": "97 92 95", // #615c5f
		"--color-primary-900": "79 75 77", // #4f4b4d
		// secondary | #c3c1c2 
		"--color-secondary-50": "246 246 246", // #f6f6f6
		"--color-secondary-100": "243 243 243", // #f3f3f3
		"--color-secondary-200": "240 240 240", // #f0f0f0
		"--color-secondary-300": "231 230 231", // #e7e6e7
		"--color-secondary-400": "213 212 212", // #d5d4d4
		"--color-secondary-500": "195 193 194", // #c3c1c2
		"--color-secondary-600": "176 174 175", // #b0aeaf
		"--color-secondary-700": "146 145 146", // #929192
		"--color-secondary-800": "117 116 116", // #757474
		"--color-secondary-900": "96 95 95", // #605f5f
		// tertiary | #737561 
		"--color-tertiary-50": "234 234 231", // #eaeae7
		"--color-tertiary-100": "227 227 223", // #e3e3df
		"--color-tertiary-200": "220 221 216", // #dcddd8
		"--color-tertiary-300": "199 200 192", // #c7c8c0
		"--color-tertiary-400": "157 158 144", // #9d9e90
		"--color-tertiary-500": "115 117 97", // #737561
		"--color-tertiary-600": "104 105 87", // #686957
		"--color-tertiary-700": "86 88 73", // #565849
		"--color-tertiary-800": "69 70 58", // #45463a
		"--color-tertiary-900": "56 57 48", // #383930
		// success | #cbdbb3 
		"--color-success-50": "247 250 244", // #f7faf4
		"--color-success-100": "245 248 240", // #f5f8f0
		"--color-success-200": "242 246 236", // #f2f6ec
		"--color-success-300": "234 241 225", // #eaf1e1
		"--color-success-400": "219 230 202", // #dbe6ca
		"--color-success-500": "203 219 179", // #cbdbb3
		"--color-success-600": "183 197 161", // #b7c5a1
		"--color-success-700": "152 164 134", // #98a486
		"--color-success-800": "122 131 107", // #7a836b
		"--color-success-900": "99 107 88", // #636b58
		// warning | #767475 
		"--color-warning-50": "234 234 234", // #eaeaea
		"--color-warning-100": "228 227 227", // #e4e3e3
		"--color-warning-200": "221 220 221", // #dddcdd
		"--color-warning-300": "200 199 200", // #c8c7c8
		"--color-warning-400": "159 158 158", // #9f9e9e
		"--color-warning-500": "118 116 117", // #767475
		"--color-warning-600": "106 104 105", // #6a6869
		"--color-warning-700": "89 87 88", // #595758
		"--color-warning-800": "71 70 70", // #474646
		"--color-warning-900": "58 57 57", // #3a3939
		// error | #4b2033 
		"--color-error-50": "228 222 224", // #e4dee0
		"--color-error-100": "219 210 214", // #dbd2d6
		"--color-error-200": "210 199 204", // #d2c7cc
		"--color-error-300": "183 166 173", // #b7a6ad
		"--color-error-400": "129 99 112", // #816370
		"--color-error-500": "75 32 51", // #4b2033
		"--color-error-600": "68 29 46", // #441d2e
		"--color-error-700": "56 24 38", // #381826
		"--color-error-800": "45 19 31", // #2d131f
		"--color-error-900": "37 16 25", // #251019
		// surface | #d4c9ab 
		"--color-surface-50": "249 247 242", // #f9f7f2
		"--color-surface-100": "246 244 238", // #f6f4ee
		"--color-surface-200": "244 242 234", // #f4f2ea
		"--color-surface-300": "238 233 221", // #eee9dd
		"--color-surface-400": "225 217 196", // #e1d9c4
		"--color-surface-500": "212 201 171", // #d4c9ab
		"--color-surface-600": "191 181 154", // #bfb59a
		"--color-surface-700": "159 151 128", // #9f9780
		"--color-surface-800": "#DDD5C7", // #7f7967
		"--color-surface-900": "#fffff", // #686254
		
	}
}