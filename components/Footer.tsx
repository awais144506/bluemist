"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Facebook,
    Instagram,
    Twitter,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Droplets
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden relative">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-0" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-xl">
                                <Image
                                    src="/logo.png"
                                    alt="Blue Mist"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter">BLUE MIST</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed italic">
                            Pure as a mountain mist, that&apos;s Blue Mist. Providing Lahore with premium, mineral-rich hydration.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="https://www.facebook.com/profile.php?id=61577833215883"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                            >
                                <Facebook size={18} />
                            </Link>
                            <Link
                                href="https://www.instagram.com/bluemist786/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                            >
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            {['Home Delivery', 'Office Supply', 'Bulk Orders', 'Water Analysis', 'Filtration Plants'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                                        <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-blue-500 shrink-0 mt-1" size={20} />
                                <span>Al Jannat Main Street, Jan Muhammad Road, Sunfort Garden Housing Society, Lahore</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-blue-500 shrink-0" size={20} />
                                <span>+92 300 3018182</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-blue-500 shrink-0" size={20} />
                                <span>info@bluemistpk.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Stay Hydrated</h3>
                        <p className="text-sm text-slate-400 mb-4">Subscribe for purity tips and exclusive Lahore delivery offers.</p>
                        <div className="flex flex-col gap-2">
                            <Input
                                placeholder="Your Email"
                                className="bg-slate-900 border-slate-800 focus:ring-blue-500 h-12"
                            />
                            <Button className="bg-blue-600 hover:bg-blue-700 w-full h-12">
                                Subscribe
                            </Button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {currentYear} Blue Mist Water Company. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                    <div className="flex items-center gap-1 text-blue-500/50">
                        <Droplets size={16} />
                        <span className="font-bold tracking-tighter">PURE QUALITY</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}