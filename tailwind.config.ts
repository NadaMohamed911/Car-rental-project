
import type { Config } from "tailwindcss"




const config: Config = {

    content: [

        './src/pages/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}'
    ],

darkMode:'class' ,

    plugins: [



    ],

    theme: {
  extend: {
    colors: {
      primary_dark: '#070F2B',
      blue_dark:'#1B1A55',
      blue:'#535C91',
      blue_light:'#9290C3',
      winter:'#F8FAFC',
    }
  }
}

}

export default config;