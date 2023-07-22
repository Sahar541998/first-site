import React from "react";
import StyledComponentsRegistry from "./lib/registry";

export default function RootLayout
({
     children,
 }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body style={{margin: 0}}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
        </html>
    );
}
