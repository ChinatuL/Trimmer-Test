import SectionTitle from "./section-title"
import LinkBtn from "./link-btn";
export default function CallToAction() {
  return (
      <section className="flex flex-col gap-4 items-center w-full bg-pricing-bg bg-no-repeat bg-cover py-8 text-zinc-50 px-8">
          <SectionTitle
              firstTitle='Ready to Get Started?'
              description="Join thousands of users simplifying their link-sharing process while gaining valuable insights into their audience's engagement."
      />
      <LinkBtn href="/register" text="Get Started" />
      </section>
  );
}