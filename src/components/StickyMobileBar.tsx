import { business } from "@/lib/business";

export default function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-[#5D4037]/10 bg-[#EFEBE9]/95 p-3 backdrop-blur-md md:hidden"
      role="navigation"
      aria-label="Snabbkontakt"
    >
      <a
        href={business.phoneLink}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#5D4037] bg-white py-3 text-sm font-semibold text-[#5D4037]"
      >
        <span aria-hidden>📞</span>
        Ring
      </a>
      <a
        href={business.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#D7CCC8] py-3 text-sm font-semibold text-[#3E2723]"
      >
        <span aria-hidden>📅</span>
        Boka
      </a>
    </div>
  );
}
