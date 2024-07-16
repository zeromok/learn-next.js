import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
    weight: ["400", "700"],
    subsets: ["latin"],
});

// Load Pretendard-Regular font
const fontUrl = "https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff";
const fontFace = `
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('${fontUrl}') format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;

// Inject the Pretendard-Regular font-face into the document head
if (typeof document !== "undefined") {
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.innerHTML = fontFace;
    document.head.appendChild(styleElement);
}

// Export the Pretendard font family for use in components
export const pretendardFontFamily = "Pretendard-Regular";
