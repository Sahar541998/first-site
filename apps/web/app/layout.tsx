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
        <body style={{
            margin: 0,
            fontFamily: `Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important`
        }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
        </html>
    );
}
