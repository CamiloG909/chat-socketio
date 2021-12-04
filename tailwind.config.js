module.exports = {
	mode: "jit",
	purge: ["./client/*.html"],
	darkMode: false,
	theme: {
		colors: {
			green: "#1CCC5B",
			white: "#f5f5f5",
			"soft-white": "#f2f2f2",
			"off-white": "#ebebeb",
			"custom-black": "#1B1B1B",
			borders: "#686868",
			"borders-light": "#cccccc",
			"soft-gray": "#4A4A4A",
			gray: "#3B3B3B",
			"dark-gray": "#2B2B2B",
			"soft-green": "#75f0a0",
			green: "#1CCC5B",
			"dark-green": "#117a37",
			"soft-blue": "#729cff",
			blue: "#2D6BFF",
			"dark-blue": "#1F4AB2",
			"soft-red": "#d55a67",
			red: "#d31225",
			"dark-red": "#850d19",
		},
		extend: {
			boxShadow: (theme) => ({
				"input-text": "0px 0px 0px 3px #1ccc5a41",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
