import Image from "next/image";
import { PitchModal } from "./pitch-modal";

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-cream py-3 md:py-[13px]">
      <nav className="flex items-center justify-center px-5 py-2 md:py-3">
        <div className="flex max-w-[1400px] flex-1 items-center justify-center gap-10 md:justify-between">
          {/* Left links — hidden on mobile */}
          <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Copium
            </a>
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Rejects
            </a>
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Therapy
            </a>
          </div>

          {/* Logo */}
          <a href="/" className="shrink-0">
            <Image
              src="/assets/logo.png"
              alt="WHY C?"
              width={80}
              height={30}
              className="md:h-[38px] md:w-[100px]"
              unoptimized
            />
          </a>

          {/* Right links — hidden on mobile */}
          <div className="hidden flex-1 items-center gap-8 md:flex">
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Rejectors
            </a>
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Excuses
            </a>
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Startup Graveyard
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="-mt-[60px] flex min-h-dvh flex-col items-center justify-center gap-3 px-5 pt-[60px] md:-mt-[76px] md:gap-10 md:px-4 md:pt-[76px]">
      <div className="flex flex-col items-center gap-3 md:gap-[47px]">
        {/* Heading */}
        <h1 className="text-center font-serif text-[36px] font-light leading-[1.1] text-ink sm:text-[60px] md:text-[84px]">
          Only for
          <br />
          top <em className="font-medium">1% rejected</em>
        </h1>

        {/* Quote */}
        <blockquote className="flex max-w-full flex-col gap-2 px-2 md:w-[420px] md:gap-3 md:px-0">
          <p className="font-serif text-sm leading-[1.6] text-ink md:text-lg">
            <span>[1]</span>{" "}
            <em>
              &ldquo;A formidable reject is one who seems like they&rsquo;ll
              ship anyway, regardless of whatever rejection emails are in the
              way.
            </em>
          </p>
          <cite className="block pr-2 text-right font-serif text-xs not-italic leading-[1.5] text-ink md:text-base">
            <em>— Claude</em>
          </cite>
        </blockquote>
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-4 sm:gap-5">
        <a
          href="https://offlyn.life/e/JPo9UcO"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 cursor-pointer items-center justify-center rounded-full bg-black px-5 font-serif text-base italic leading-[1.12] tracking-[-0.6px] text-[#f5f5ed] md:h-[46px] md:px-4 md:text-xl"
        >
          I will Watch
        </a>
        <PitchModal />
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Do I need a YC rejection to pitch?",
    a: "Yes. Screenshot of the rejection email or it didn\u2019t happen.",
  },
  {
    q: "Is this just making fun of people?",
    a: "No. It\u2019s making fun of the PROCESS while genuinely helping founders get real feedback. The roast format just makes the medicine go down easier.",
  },
  {
    q: "Will there be actual VCs in the audience?",
    a: "Probably.",
  },
  {
    q: "Can I pitch a new idea (not the one I sent YC)?",
    a: "Nope. You pitch the EXACT idea YC rejected.",
  },
  {
    q: "Where\u2019s this happening?",
    a: "Bangalore.",
  },
  {
    q: "Who\u2019s behind this?",
    a: "This is a part of the Agentic Summer lineup by AI & Weekends and Inner Circle.",
  },
  {
    q: "Is there a ticket to attend?",
    a: "If shortlisted to present, you walk in free. For others attending, earlybird tickets will be out soon.",
  },
];

function FAQ() {
  return (
    <section className="mx-auto w-full max-w-[680px] px-5 py-16 md:px-4 md:py-24">
      <h2 className="mb-10 font-serif text-[28px] font-light leading-[1.2] text-ink sm:text-[36px] md:mb-14 md:text-[48px]">
        <em className="font-medium">Frequently</em> asked
      </h2>
      <div className="flex flex-col">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-t border-ink/10 py-5 md:py-7"
          >
            <p className="font-serif text-base font-medium leading-[1.4] text-ink md:text-lg">
              {faq.q}
            </p>
            <p className="mt-2 font-serif text-sm leading-[1.6] text-ink/70 md:text-base">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PoweredBy() {
  return (
    <div className="flex shrink-0 items-center justify-center gap-3 pb-5 pt-3 md:gap-[19px] md:pb-16 md:pt-8">
      <span className="font-serif text-sm leading-[1.6] text-black md:text-lg">
        Powered by
      </span>
      <div className="flex items-center gap-3 md:gap-5">
        <a href="https://x.com/innercircle_so" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/inner-circle-logo.svg"
            alt="Inner Circle"
            width={60}
            height={16}
            className="md:h-[21px] md:w-[81px]"
          />
        </a>
        <a href="https://x.com/aiweekendsxyz" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/aiweekends-logo.svg"
            alt="AI Weekends"
            width={35}
            height={19}
            className="md:h-[25px] md:w-[47px]"
          />
        </a>
        <a href="https://agenticsummer.innercircle.so/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/Agentic Summer - Black.png"
            alt="Agentic Summer"
            width={70}
            height={35}
            className="md:h-[40px] md:w-[80px]"
            unoptimized
          />
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Nav />
      <Hero />
      <FAQ />
      <PoweredBy />
    </div>
  );
}
