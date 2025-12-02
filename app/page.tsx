import { Footer } from "./components/Footer";
import { HeroFilm } from "./components/HeroFilm";
import { Navigation } from "./components/Navigation";
import { NewsletterInvitation } from "./components/NewsletterInvitation";
import { PreviewReel } from "./components/PreviewReel";
import { ReleaseCountdown } from "./components/ReleaseCountdown";
import { StoryboardMood } from "./components/StoryboardMood";

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroFilm />
      <PreviewReel />
      <ReleaseCountdown />
      <StoryboardMood />
      <section id="insider">
        <NewsletterInvitation />
      </section>
      <Footer />
    </main>
  );
}
