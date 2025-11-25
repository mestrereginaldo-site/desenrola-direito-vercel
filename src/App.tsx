import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Article from "./pages/Article";
import CategoryArticles from "./pages/CategoryArticles";
import AllArticles from "./pages/AllArticles";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import ScrollToTop from "./components/ui/ScrollToTop";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/artigos" component={AllArticles} />
          <Route path="/artigos/:slug" component={Article} />
          <Route path="/categorias/:slug" component={CategoryArticles} />
          <Route path="/busca" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
