import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'LinkedIn', href: '#' },
];

const legalLinks = [
  { name: 'Return Policy', href: '/return-policy' },
  { name: 'Warranty', href: '/warranty' },
  { name: 'Track Order', href: '/track-order' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
  { name: 'Refund Policy', href: '/refund-policy' },
  { name: 'Support Center', href: '/support-center' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm">
              Your trusted source for top-tier IT equipment, phones, and accessories. We deliver quality and reliability.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {social.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Office Location: 123 Tech Lane, Accra, Ghana</li>
              <li>Email: <a href="mailto:info@achetait.com" className="hover:text-primary hover:underline">info@achetait.com</a></li>
              <li>Phone: 0204744300 / 0542716433</li>
              <li>WhatsApp: <a href="https://wa.me/233204744300" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">0204744300</a></li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div className="space-y-4">
             <h3 className="font-headline text-lg font-semibold">Customer Service</h3>
             <ul className="space-y-2 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary hover:underline">{link.name}</Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Newsletter</h3>
            <p className="text-sm">
              Subscribe to get the latest deals and updates.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background"/>
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Achetait. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
