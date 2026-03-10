// components/WhatsAppButton.tsx
import Link from "next/link";
import { MessageCircle } from "lucide-react"; // Shadcn uses Lucide icons

export default function WhatsAppButton() {
  const phoneNumber = "923003018182"; // Replace with Blue Mist's actual Lahore number
  const message = encodeURIComponent("Hi Blue Mist! I'm interested in ordering some water bottles. Can you share the pricing?");
  
  return (
    <Link 
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
      {/* Optional Tooltip */}
      <span className="absolute right-16 bg-white text-green-600 px-3 py-1 rounded-md text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Order via WhatsApp
      </span>
    </Link>
  );
}