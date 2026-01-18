
type AppRoutesType = {

href:string,
title:string,
target?:'_balnk'|'_self'|'_top'



}

const appRoutes:AppRoutesType[]=[

{
href:'/',
title:'Home'
},


{
href:'/Car',
title:'Car'
},


{
href:'/Register',
title:'Register'
},


{
href:'/Login',
title:'Login'
},


]

export default appRoutes;