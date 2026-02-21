import Link from "next/link";
import { Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10 pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <Link href="/" className="text-3xl font-serif font-bold tracking-tight inline-block mb-6">
                            Tomi<span className="text-primary">Black</span>.
                        </Link>
                        <p className="text-neutral-400 max-w-md mb-8 leading-relaxed">
                            We build the visuals that keep your audience hooked. Fast cuts. Bold grades. TomiBlack is a boutique editing agency built for the new era of media.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/work" className="text-neutral-400 hover:text-white transition-colors">Work</Link>
                            </li>
                            <li>
                                <Link href="/solutions" className="text-neutral-400 hover:text-white transition-colors">Solutions</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6">Stay Updated</h4>
                        <p className="text-sm text-neutral-400 mb-4">Subscribe to our newsletter for insights on video retention.</p>
                        <div className="flex relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                            <button className="absolute right-1 top-1 bottom-1 w-10 bg-primary text-black rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                    <p>© {new Date().getFullYear()} TomiBlack Agency. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
