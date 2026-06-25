import type { PromoCardProps } from "./PromoCard.types";

export function PromoCard({ title, buttonText }: PromoCardProps) {
  return (
    <article
      className="
        flex
        h-[130px]
        w-full
        items-center
        justify-between
        rounded-[var(--radius-md)]
        bg-[var(--brand-primary)]
        px-4
        py-3
      "
    >
      <div className="flex h-full flex-col justify-between">
        <h3 className="max-w-[140px] text-[24px] leading-[26px] text-white">
          {title}
        </h3>

        <button
          type="button"
          className="
            inline-flex
            h-8
            w-fit
            items-center
            gap-2
            rounded-full
            bg-[var(--brand-tertiary)]
            px-4
            text-[12px]
            font-medium
            text-black
            hover:opacity-90
            transition
          "
        >
          <img
            src="/images/User.svg"
            alt=""
            aria-hidden="true"
            className="h-3 w-3"
          />
          {buttonText}
        </button>
      </div>

      <img
        src="/images/Icons.svg"
        alt=""
        aria-hidden="true"
        className="
          h-[95px]
          w-[95px]
          shrink-0
          object-contain
        "
      />
    </article>
  );
}
