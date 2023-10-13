import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Contact1 from "@/components/contact/Contact1";

const ContactDark = () => {
  return (
    <>
      <Head>
        <title>Contact Dark</title>
        <meta name="description" content="Contact Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header5" footer="footer5" defaultMode="dark">
          <Contact1 />
        </RootLayout>
      </main>
    </>
  );
};

export default ContactDark;
