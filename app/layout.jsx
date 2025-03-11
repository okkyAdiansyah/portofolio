import React from "react";
import "./global.scss";
import { Montserrat } from "next/font/google"; 

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

export const metadata = {
    title: "Okky-Kyle | Portofolio",
    description: "Portofolio of Okky 'Kyle'"
};

const RootLayout = ({children}) => {
    return(
        <html lang="en">
            <body className={`${montserrat.variable}`}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;