import ClassesAndExams from "@/components/classes-and-exams";
import EventsAndNotices from "@/components/events-and-notice";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <ClassesAndExams />
      <EventsAndNotices />
      <Footer />
    </div>
  );
}
