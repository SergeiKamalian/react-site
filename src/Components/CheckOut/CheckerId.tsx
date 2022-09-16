import { Navigate, useLocation } from "react-router-dom"
import React from 'react';
import { ISelfClientProps } from "../../module"


const CheckerId: React.FC<{ children: React.ReactNode }> =
    ({ children }): JSX.Element | null => {
        const location = useLocation()
        const userId = Number(location.pathname.split('/')[location.pathname.split('/').length - 1])

        const dataComments: ISelfClientProps[] = JSON.parse(localStorage.comments);
        console.log(dataComments);


        if (dataComments.some((element) => element.id === userId)) {
            return (
                <>
                    {children}
                </>
            )
        }
        return <Navigate to='/happy-clients' />
    }

export default CheckerId