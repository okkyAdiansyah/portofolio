import React from "react";
import Nav from "@/components/modules/Nav/Nav";
import Logo from "@/components/elements/Logo/Logo";
import styles from "@/styles/blocks/navigation.module.scss";
import CTAGroup from "@/components/modules/CTAGroup/CTAGroup";

const Navigation = () => {
    const nav = [
        {
            route: '#banner',
            content: 'Home'
        },
        {
            route: '#works',
            content: 'Works'
        },
        {
            route: '#about',
            content: 'About'
        },
    ]

    return(
        <nav className={styles.container}>
            <Nav nav={nav} />
            <Logo className={styles.logo} />
            <CTAGroup />
        </nav>
    )
}

export default Navigation;