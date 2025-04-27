// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      screens: {
        'xs': '364px', // 👈 your custom breakpoint
      },
    },
  },
  plugins: [],
}
export default config
