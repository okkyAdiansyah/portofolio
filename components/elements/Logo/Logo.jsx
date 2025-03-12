import React from "react";
import Image from "next/image";
import Link from "next/link";
import WebLogo from "@/public/Logo.png";

const Logo = ({className}) => {
    return(
        <Link
            href={'/'}
            className={className}
        >
            <Image
                width={"full"}
                height={"full"}
                src={WebLogo}
                alt="Logo"
            />
        </Link>
    )
}

export default Logo;