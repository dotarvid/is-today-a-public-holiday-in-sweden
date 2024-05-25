import { Html, Head, Main, NextScript } from "next/document";

/**
 * Renders the custom Document component for the Next.js application.
 * This component is used to modify the application's <html> and <body> tags.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-gray-800 bg-gray-100 font-sans leading-normal tracking-normal">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}