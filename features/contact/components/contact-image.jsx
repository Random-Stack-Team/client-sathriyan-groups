import Image from "next/image";

export function ContactImage() {
  return (
    <div className="relative mt-10 h-[420px] overflow-hidden rounded-[28px]">
      <Image
  src="/assets/contact/contact_editorial.jpg"
  alt="Sathriyan Group"
  fill
  priority
  className="object-cover object-[50%_100%]"
  sizes="(max-width: 768px) 100vw, 50vw"
/>

      <div className="absolute inset-0 bg-[#0b1c30]/35" />

      <div className="absolute inset-0 flex items-end p-6 md:p-7">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/65 uppercase">
            Sathriyan Group
          </p>

          <h3 className="font-display mt-2 max-w-[300px] text-2xl leading-tight font-bold text-white md:text-3xl">
            Built on vision.
            <br />
            Driven by purpose.
          </h3>
        </div>
      </div>
    </div>
  );
}