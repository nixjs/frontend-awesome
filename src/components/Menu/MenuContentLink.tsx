import React from 'react'
import { MenuIcon } from './MenuIcon'
import { Icon } from './types'

export const MenuContentLink: React.FC<{ icon?: Icon; title: string }> = ({ icon, title }) => {
    return (
        <>
            {icon && <MenuIcon icon={icon} />}
            <span className="flex-fill ml-10" data-text={title}>
                {title}
            </span>
        </>
    )
}
