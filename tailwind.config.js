const plugin = require("tailwindcss/plugin")



const Myclass = plugin(function ({ addUtilities})
{
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)"
    },
    ".my-rotate-x-180":{
      transform:"rotateX(180deg)"
    },
    ".preserve-3d":{
      transformStyle:"preserve-3D"
    },
    ".perspective" :{
      perspective:"1000px"
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden"
    }

  })
  
}
)


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [Myclass],
}
