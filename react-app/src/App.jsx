import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />

      <main className="content">
        <h1>Welcome to My React Website</h1>

        <p>
          This website is built with React, a modern JavaScript library used for
          creating fast and interactive user interfaces. React helps developers
          build reusable components and manage application data efficiently.
        </p>

        <p>
          In this class, you will learn the basics of React, including components,
          props, state, and how to structure real-world web applications step by
          step.
        </p>

        <button className="btn">Get Started</button>
      </main>

      <Footer />
    </div>
  );
}

export default App;
