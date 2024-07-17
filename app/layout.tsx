import "@/app/ui/global.css";
import { inter, pretendardFontFamily } from "@/app/ui/fonts";

export const experimental_ppr = true;
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body style={{ fontFamily: pretendardFontFamily }} className={`antialiased`}>
                {children}
            </body>
        </html>
    );
}
