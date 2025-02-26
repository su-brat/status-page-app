import { ThemeProvider } from "@/components/theme-provider";
import ServiceList from "./components/service-list/page";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <h2>Status Page</h2>
      <div className="m-auto p-auto">
        <ServiceList />
      </div>
    </ThemeProvider>
  );
}

export default App;
