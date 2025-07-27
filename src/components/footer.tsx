import Link from 'next/link'
import { Wrench, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-accent rounded-sm flex items-center justify-center">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-normal text-white">Preferred</span>
            </div>
            <p className="text-sm">
              Your trusted partner for professional equipment rental. Quality tools, competitive prices, exceptional service.
              <span className="block text-xs text-white/70 mt-2">Part of the 18fifty3 Group</span>
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="hover:text-white/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/equipment" className="hover:text-white/80 transition-colors">Browse Equipment</Link></li>
              <li><Link href="/pricing" className="hover:text-white/80 transition-colors">Pricing Plans</Link></li>
              <li><Link href="/about" className="hover:text-white/80 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white/80 transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white/80 transition-colors">Equipment Delivery</Link></li>
              <li><Link href="/services" className="hover:text-white/80 transition-colors">Setup Assistance</Link></li>
              <li><Link href="/services" className="hover:text-white/80 transition-colors">24/7 Support</Link></li>
              <li><Link href="/services" className="hover:text-white/80 transition-colors">Maintenance</Link></li>
              <li><Link href="/services" className="hover:text-white/80 transition-colors">Training</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Industrial Drive</li>
              <li>Brisbane, QLD 4000</li>
              <li className="pt-2">
                <a href="tel:1300XXXXXX" className="hover:text-white/80 transition-colors">
                  1300 XXX XXX
                </a>
              </li>
              <li>
                <a href="mailto:info@preferred.com.au" className="hover:text-white/80 transition-colors">
                  info@preferred.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 Preferred Equipment Hire | 18fifty3 Group. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:text-white/80 transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}