import { About } from "./sections/about/about";
import { Contact } from "./sections/contact/contact";
import { CustomerReview } from "./sections/customer-review/customer-review";
import { Header } from "./sections/header/header";
import { Services } from "./sections/services/services";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Services />
      <CustomerReview />
      <About />
      <Contact />
    </div>
  );
}

export default App;
