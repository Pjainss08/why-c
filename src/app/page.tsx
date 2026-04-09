import Image from "next/image";

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-cream py-[13px]">
      <nav className="flex items-center justify-center px-5 py-3">
        <div className="flex max-w-[1400px] flex-1 items-center gap-10">
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
              width={100}
              height={38}
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
    <section className="flex flex-1 flex-col items-center justify-center gap-8 px-5 py-16 md:gap-10 md:px-4 md:py-0">
      <div className="flex flex-col items-center gap-8 md:gap-[47px]">
        {/* Heading */}
        <h1 className="text-center font-serif text-[44px] font-light leading-[1.1] text-ink sm:text-[60px] md:text-[84px]">
          Only for
          <br />
          top <em className="font-medium">1% rejected</em>
        </h1>

        {/* Quote */}
        <blockquote className="flex w-[420px] max-w-full flex-col gap-3 px-2 md:px-0">
          <p className="font-serif text-base leading-[1.6] text-ink md:text-lg">
            <span>[1]</span>{" "}
            <em>
              &ldquo;A formidable reject is one who seems like they&rsquo;ll
              ship anyway, regardless of whatever rejection emails are in the
              way.
            </em>
          </p>
          <cite className="block pr-2 text-right font-serif text-sm not-italic leading-[1.5] text-ink md:text-base">
            <em>— Claude</em>
          </cite>
        </blockquote>
      </div>

      {/* CTAs */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
        <a
          href="#"
          className="flex h-[46px] items-center justify-center rounded-full bg-black px-6 font-serif text-lg italic leading-[1.12] tracking-[-0.6px] text-[#f5f5ed] md:px-4 md:text-xl"
        >
          Be an Attendee
        </a>
        <a
          href="#"
          className="font-sans text-lg leading-[1.12] tracking-[-0.6px] text-black md:text-xl"
        >
          Submit a Pitch
        </a>
      </div>
    </section>
  );
}

function PoweredBy() {
  return (
    <div className="flex items-center justify-center gap-[19px] pb-10 pt-6 md:pb-16 md:pt-8">
      <span className="font-serif text-base leading-[1.6] text-black md:text-lg">
        Powered by
      </span>
      <div className="flex items-center gap-5">
        <Image
          src="/assets/inner-circle-logo.svg"
          alt="Inner Circle"
          width={81}
          height={21}
        />
        <Image
          src="/assets/aiweekends-logo.svg"
          alt="AI Weekends"
          width={47}
          height={25}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Nav />
      <Hero />
      <PoweredBy />
    </div>
  );
}
