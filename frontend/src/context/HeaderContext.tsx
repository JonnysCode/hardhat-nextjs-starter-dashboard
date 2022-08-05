import React from 'react'


interface IUserNavigation {
    name: string
    href: string
}


interface IHeaderContext {
    userNavigation: IUserNavigation[]
}


const HeaderContext = React.createContext<IHeaderContext>(
    { 
        userNavigation: [
            { name: 'Your Profile', href: '#' },
            { name: 'Settings', href: '#' },
            { name: 'Sign out', href: '#' }
        ],
    }
);

export default HeaderContext