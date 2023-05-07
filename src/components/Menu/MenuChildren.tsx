import React from 'react'
import classNames from 'classnames'
import { MenuContentLink } from './MenuContentLink'
import { Navigation } from './types'

interface MenuChildrenPropArg {
    navigation: Navigation
    routerPathName?: string
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    navList: (navs?: Navigation[]) => JSX.Element | JSX.Element[]
}

export const MenuChildren: React.FC<MenuChildrenPropArg> = ({
    navigation: { title, icon, children, path },
    routerPathName,
    onClick,
    navList
}) => {
    const activeDropdownRoute = (item: Navigation) => {
        const index = (item.children?.length && item.children.findIndex((t) => t.path?.href === routerPathName)) || -1
        return index !== -1 ? 'menu-item menu-dropdown open' : 'menu-item menu-dropdown'
    }

    return (
        <li className={classNames(activeDropdownRoute({ title, children, path }))}>
            <div
                onClick={onClick}
                className="d-flex align-items-center flex-wrap position-relative cursor-pointer menu-dropdown-title"
                role="presentation"
            >
                <MenuContentLink title={title} icon={icon} />
                <i className="ic_icon ic_down menu-dropdown--arrow" />
            </div>
            {children && <ul className="reset-ul menu-dropdown-content">{navList(children)}</ul>}
        </li>
    )
}
