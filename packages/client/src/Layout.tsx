import { ReactNode } from "react";

import Footer from "./Footer";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div
      className="global-wrapper"
      style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
    >
      <header className="global-header" style={{ flexShrink: 0 }}>
        <h1 style={{ fontSize: 64, marginTop: 0 }}>Imdex Social Blog</h1>
        <p>Imdex social club official blog.</p>
      </header>
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
