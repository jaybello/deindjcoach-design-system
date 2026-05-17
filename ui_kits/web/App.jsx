/* global React, Header, Hero, CourseGrid, CoachingBlock, TipsStrip, Footer, CourseDetail, BookingModal */
const { useState: useStateApp } = React;

function App() {
  const [page, setPage] = useStateApp({ name: 'home', courseId: null });
  const [booking, setBooking] = useStateApp(false);

  const openCourse = (id) => setPage({ name: 'course', courseId: id });
  const goHome     = () => setPage({ name: 'home', courseId: null });
  const openBook   = () => setBooking(true);

  return (
    <div className="ddc-app">
      <Header
        onNav={(id) => {
          if (id === 'book') { openBook(); return; }
          goHome();
        }}
        currentPage={page.name === 'home' ? 'home' : ''}
      />

      {page.name === 'home' && (
        <main>
          <Hero onPrimary={openBook} onSecondary={() => {
          const el = document.getElementById('courses');
          if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
        }} />
          <div id="courses"><CourseGrid onOpen={openCourse} onBook={openBook} /></div>
          <CoachingBlock onBook={openBook} />
          <TipsStrip />
        </main>
      )}

      {page.name === 'course' && (
        <main>
          <CourseDetail courseId={page.courseId} onBack={goHome} onBook={openBook} />
        </main>
      )}

      <Footer onNav={goHome} />

      <BookingModal open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}
window.App = App;
