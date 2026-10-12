import {
  startTransition,
  useState,
  useTransition,
  type ChangeEvent,
} from "react";
import "./App.css";
import ItemsComponent from "./components/ItemsComponent";
import Total from "./components/Total";
import { getQuantity } from "./utils/api";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Posts from "./components/Posts";

function App() {
  const [inputValue, setInputValue] = useState<number>(1);

  const [quantity, setQuantity] = useState<number>(1);
  const [isCalculating, startCalcTransition] = useTransition();

  const [tab, setTab] = useState<"home" | "posts" | "contact">("home");
  const [isTabPending, startTabTransition] = useTransition();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setInputValue(val);

    startCalcTransition(async () => {
      const data = await getQuantity(val);
      startTransition(() => {
        setQuantity(data);
      });
    });
  };

  const handleTabChange = (newTab: "home" | "posts" | "contact") => {
    startTabTransition(() => {
      setTab(newTab);
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🚀 React useTransition Demo</h1>
        <p>تجربة سلسة بدون تجميد الشاشة (No Unwanted Loading)</p>
      </header>

      <main className="app-main">
        <section className="card calculator-section">
          <h2>🎫 حاسبة التذاكر</h2>
          <ItemsComponent handleChange={onChange} value={inputValue} />
          <Total isPending={isCalculating} quantity={quantity} />
        </section>

        <section className="card tabs-section">
          <h2>📑 تنقل سلس بين الصفحات</h2>

          <div className="tabs-nav">
            <button
              className={`tab-btn ${tab === "home" ? "active" : ""}`}
              onClick={() => handleTabChange("home")}
            >
              Home
            </button>
            <button
              className={`tab-btn ${tab === "posts" ? "active" : ""}`}
              onClick={() => handleTabChange("posts")}
            >
              Posts (Heavy ⚠️)
            </button>
            <button
              className={`tab-btn ${tab === "contact" ? "active" : ""}`}
              onClick={() => handleTabChange("contact")}
            >
              Contact
            </button>
          </div>

          {/* المحتوى بتاع التبويبات */}
          <div
            className={`tab-content-wrapper ${isTabPending ? "is-pending" : ""}`}
          >
            {isTabPending && (
              <div className="tab-loader">جاري تجهيز الصفحة...</div>
            )}

            <div className="tab-content">
              {tab === "home" && <Home />}
              {tab === "posts" && <Posts />}
              {tab === "contact" && <Contact />}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
