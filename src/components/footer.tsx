import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Mail, PhoneCall } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-secondary/60 via-white to-white text-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-md space-y-5">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-transparent.png"
                alt="Mad Emu"
                width={220}
                height={160}
                className="h-16 w-auto object-contain drop-shadow-sm"
                priority
              />
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Trusted Capability · Cultural Integrity
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proudly Indigenous-owned, delivering integrated lifting &amp; rigging, civil &amp; haulage,
              plant &amp; equipment hire, and safety supply solutions across Australia.
            </p>
            <p className="text-xs font-medium text-muted-foreground/80">ABN 00 000 000 000</p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-accent hover:text-accent"
                aria-label="Mad Emu on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid w-full max-w-3xl grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Quick Links</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><Link href="/services" className="transition hover:text-accent">Our Services</Link></li>
                <li><Link href="/#capability" className="transition hover:text-accent">Capability Snapshot</Link></li>
                <li><Link href="/about" className="transition hover:text-accent">About Mad Emu</Link></li>
                <li><Link href="/contact" className="transition hover:text-accent">Contact</Link></li>
                <li><Link href="/privacy" className="transition hover:text-accent">Privacy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Services</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><Link href="/services#lifting" className="transition hover:text-accent">Lifting &amp; Rigging</Link></li>
                <li><Link href="/services#civil" className="transition hover:text-accent">Civil &amp; Haulage</Link></li>
                <li><Link href="/services#plant" className="transition hover:text-accent">Plant &amp; Equipment Hire</Link></li>
                <li><Link href="/services#safety" className="transition hover:text-accent">PPE, PPC &amp; Safety</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Get in Touch</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>Sydney, New South Wales</li>
                <li>Australia</li>
                <li>
                  <a href="tel:1800623368" className="flex items-center gap-2 transition hover:text-accent">
                    <PhoneCall className="h-4 w-4" />
                    1800 MADEMU
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@mad-emu.com.au" className="flex items-center gap-2 transition hover:text-accent">
                    <Mail className="h-4 w-4" />
                    hello@mad-emu.com.au
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Mad Emu. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="transition hover:text-accent">Privacy Policy</Link>
            <span className="text-border">|</span>
            <Link href="/terms" className="transition hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
