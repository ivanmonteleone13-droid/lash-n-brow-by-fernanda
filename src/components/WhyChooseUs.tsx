import { business } from "@/lib/business";

const icons = ["🏆", "✂️", "📍", "💰", "📱", "👨‍👩‍👦"];

export default function WhyChooseUs() {
  return (
    <section id="varfor-oss" className="bg-[#EFEBE9] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D7CCC8]">
            Varför vi?
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#5D4037] sm:text-4xl">
            Varför välja {business.name}?
          </h2>
          <p className="mt-4 text-lg text-[#5D4037]/70">
            204 recensioner bekräftar kvaliteten — så här jobbar Fernanda.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {business.usps.map((usp, index) => (
            <article
              key={usp.title}
              className="rounded-2xl border border-[#5D4037]/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#5D4037]/10 text-2xl"
                aria-hidden
              >
                {icons[index]}
              </div>
              <h3 className="text-lg font-semibold text-[#5D4037]">{usp.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5D4037]/70">
                {usp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
