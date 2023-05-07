import React from 'react'
import { MenuIcon } from './MenuIcon'
import { Navigation } from './types'

export const MenuTitle: React.FC<{ navigation: Navigation }> = ({ navigation }) => {
    const { title, icon } = navigation
    return (
        <li className="menu-item">
            <div className="d-flex align-items-center menu-title">
                {icon && <MenuIcon icon={icon} />}
                <span className="flex-fill ml-10">{title}</span>
            </div>
        </li>
    )
}
