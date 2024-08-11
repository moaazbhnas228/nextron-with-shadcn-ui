import { ReactNode } from "react";
import Head from "next/head";
import Container from "./Container";
import Image from "next/image";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Hunt Wilson | Printer" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Container>
        <Image
          className="w-40 h-auto"
          src="/images/logo.svg"
          alt="Hunt Wilson | Printer"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Container>
    </header>
    <main>
      <Container>{children}</Container>
    </main>
    <Container className="no-print">
      <footer className="border-t py-4">
        <p className="text-sm text-gray-500">
          This application monitors real-time updates to cartons data and prints
          summaries of any additions or updates.
        </p>
      </footer>
    </Container>
  </div>
);

export default Layout;
