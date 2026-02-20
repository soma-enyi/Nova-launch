import { Header, Container } from "./components/Layout";
import { ErrorBoundary } from "./components/UI";
import { ConnectButton } from "./components/WalletConnect";
import { TokenDeployForm } from "./components/TokenDeployForm";

function App() {
  return (
    <ErrorBoundary>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <div className="min-h-screen bg-gray-50">
        <Header>
          <ConnectButton />
        </Header>
        <main id="main-content">
          <Container>
            <TokenDeployForm />
          </Container>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
