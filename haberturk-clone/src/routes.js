import React from 'react'
import Dunya from './pages/Content/dunya' 
import Ekonomi from './pages/Content/ekonomi'
import Gundem from './pages/Content/gundem'
import Gastro from './pages/Content/gastro'
import Kadin from './pages/Content/kadin'
import Kesfet from './pages/Content/kesfet'
import Magazin from './pages/Content/magazin'
import Resmiilanlar from './pages/Content/resmi-ilanlar'
import Saglik from './pages/Content/saglik'
import Spor from './pages/Content/spor'
import Teknoloji from './pages/Content/teknoloji'
import Video from './pages/Content/video'
import Yazilar from './pages/Content/yazilar'
import HomeLayout from './pages/Home/layout.js'
import Home from './pages/Home/home.js'


const routes = [
    {
        path : '/',
        element : <HomeLayout/>,
        children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path:'dunya',
                element:<Dunya/>
            },
            {
                path:'ekonomi',
                element:<Ekonomi/>
            },
            {
                path:'gastro',
                element:<Gastro/>
            },
            {
                path:'gundem',
                element:<Gundem/>
            },
            {
                path:'kadin',
                element:<Kadin/>
            },
            {
                path:'kesfet',
                element:<Kesfet/>
            },
            {
                path:'magazin',
                element:<Magazin/>
            },
            {
                path:'resmi-ilanlar',
                element:<Resmiilanlar/>
            },
            {
                path:'saglık',
                element:<Saglik/>
            },
            {
                path:'spor',
                element:<Spor/>
            },
            {
                path:'resmi-ilanlar',
                element:<Resmiilanlar/>
            },
            {
                path:'spor',
                element:<Spor/>
            },
            {
                path:'teknoloji',
                element:<Teknoloji/>
            },
            {
                path:'video',
                element:<Video/>
            },
            {
                path:'yazilar',
                element:<Yazilar/>
            },
        ]
    }
]

const authCheck = routes => routes.map(route => {
    if(route?.auth){
        route.element = {route}
    }
    if(route?.children){
          route.children = authCheck(route.children)
    }
    return route
})

export default authCheck(routes)
