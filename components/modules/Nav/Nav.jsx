import NavItem from "@/components/elements/NavItem/NavItem";
import React from "react";

const Nav = ({nav}) => {
    return(
        <ul>
            {nav.map((item, id) => (
                <li key={`nav-item-${id}`}>
                    <NavItem route={item.route} content={item.content} />
                </li>
            ))}
        </ul>
    )
};

export default Nav;