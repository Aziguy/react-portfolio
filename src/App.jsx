import { I18nProvider } from './i18n/I18nProvider.jsx';
import { useScrollSpy } from './hooks/useScrollSpy.js';
import { useScrolled } from './hooks/useScrolled.js';
import { useTheme } from './hooks/useTheme.js';
import { sectionIds } from './data/navigation.js';
import { StructuredData } from './components/common/StructuredData.jsx';
import { ErrorBoundary } from './components/ui/ErrorBoundary.jsx';
import { BackToTop } from './components/layout/BackToTop.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { MobileNav } from './components/layout/MobileNav.jsx';
import { SkipLink } from './components/layout/SkipLink.jsx';
import { Topbar } from './components/layout/Topbar.jsx';
import { About } from './components/sections/About.jsx';
import { Certifications } from './components/sections/Certifications.jsx';
import { Contact } from './components/sections/Contact.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { Services } from './components/sections/Services.jsx';
import { Skills } from './components/sections/Skills.jsx';
import { Testimonials } from './components/sections/Testimonials.jsx';

const sections = [About, Skills, Projects, Services, Certifications, Testimonials, Contact];

const App = () => {
  const { toggleTheme } = useTheme();
  const activeId = useScrollSpy(sectionIds);
  const scrolled = useScrolled(120);

  return (
    <I18nProvider>
      <StructuredData />
      <SkipLink />
      <Topbar activeId={activeId} onToggleTheme={toggleTheme} scrolled={scrolled} />

      <main id="main">
        <Hero />
        {sections.map((SectionComponent) => (
          <ErrorBoundary key={SectionComponent.name}>
            <SectionComponent />
          </ErrorBoundary>
        ))}
      </main>

      <Footer />
      <MobileNav activeId={activeId} />
      <BackToTop visible={scrolled} />
    </I18nProvider>
  );
};

export default App;
