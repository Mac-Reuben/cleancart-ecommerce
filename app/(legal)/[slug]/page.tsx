// app/legal/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const legalContent: Record<
  string,
  { title: string; content: React.ReactNode }
> = {
  "return-policy": {
    title: "Return Policy",
    content: (
      <>
        <h2>Our Promise</h2>
        <p>
          We stand behind our products and want you to be satisfied with them.
          We'll always do our best to take care of customers — our philosophy is
          to deal with you fairly and reasonably. We have long believed that
          when we treat our customers fairly, they in turn are fair with us.
        </p>
        <h2>30-Day Returns</h2>
        <p>
          You may return most new, unopened items within 30 days of delivery for
          a full refund. We'll also pay the return shipping costs if the return
          is a result of our error (you received an incorrect or defective item,
          etc.).
        </p>
        <h2>How to Make a Return</h2>
        <p>
          If you need to return an item, please Contact Us with your order
          number and details about the product you would like to return. We will
          respond quickly with instructions for how to return items from your
          order.
        </p>
      </>
    ),
  },
  warranty: {
    title: "Warranty Information",
    content: (
      <>
        <h2>Manufacturer's Warranty</h2>
        <p>
          All products sold on Achetait are covered by the manufacturer's
          warranty. Warranty periods and services vary by manufacturer and
          product. Please refer to the product's documentation for specific
          warranty information.
        </p>
        <h2>Our Support</h2>
        <p>
          While we do not provide a direct warranty, we are here to help you
          connect with the manufacturer for warranty claims. If you have an
          issue with a product, please contact our support center, and we will
          guide you through the process.
        </p>
      </>
    ),
  },
  "track-order": {
    title: "Track Your Order",
    content: (
      <>
        <h2>Order Tracking</h2>
        <p>
          Once your order has shipped, you will receive an email and/or SMS with
          your tracking number. You can use this number to track your package's
          journey to your doorstep.
        </p>
        <p>
          If you have an account with us, you can also find your tracking
          information in your order history.
        </p>
        <p>For any issues with tracking, please contact our support team.</p>
      </>
    ),
  },
  "privacy-policy": {
    title: "Privacy Policy",
    content: (
      <>
        <h2>Introduction</h2>
        <p>
          Achetait ("we," "our," or "us") is committed to protecting your
          privacy. This Privacy Policy explains how your personal information is
          collected, used, and disclosed by Achetait.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you
          create an account, place an order, or contact customer service. This
          may include your name, email address, shipping address, and phone
          number.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect to process your orders, communicate
          with you, and improve our services. We do not sell your personal
          information to third parties.
        </p>
      </>
    ),
  },
  "cookie-policy": {
    title: "Cookie Policy",
    content: (
      <>
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. We use cookies to enhance your browsing experience, such as
          keeping you logged in and remembering items in your cart.
        </p>
        <h2>Your Choices</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all
          cookies that are already on your computer and you can set most
          browsers to prevent them from being placed.
        </p>
      </>
    ),
  },
  "refund-policy": {
    title: "Refund Policy",
    content: (
      <>
        <h2>Refunds</h2>
        <p>
          Once we receive your returned item, we will inspect it and notify you
          that we have received your returned item. We will immediately notify
          you on the status of your refund after inspecting the item.
        </p>
        <p>
          If your return is approved, we will initiate a refund to your original
          method of payment. You will receive the credit within a certain amount
          of days, depending on your card issuer's policies.
        </p>
      </>
    ),
  },
  "support-center": {
    title: "Support Center",
    content: (
      <>
        <h2>How Can We Help?</h2>
        <p>
          Welcome to the Achetait Support Center. We are here to assist you with
          any questions or issues you may have. You can reach us through the
          following channels:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@achetait.com">info@achetait.com</a>
          </li>
          <li>
            <strong>Phone:</strong> 0204744300 / 0542716433
          </li>
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/233204744300"
              target="_blank"
              rel="noopener noreferrer"
            >
              0204744300
            </a>
          </li>
        </ul>
        <p>Our team is available from 9 AM to 5 PM, Monday to Friday.</p>
      </>
    ),
  },
};

interface LegalPageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const page = legalContent[slug];

  if (!page) {
    notFound();
  }

  return (
    <>
      <h1 className="font-headline text-4xl font-bold mb-8">{page.title}</h1>
      {page.content}
    </>
  );
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = legalContent[slug];
  
  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${page.title} - Achetait`,
    description: `Learn about ${page.title.toLowerCase()} at Achetait.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(legalContent).map((slug) => ({ slug }));
}
