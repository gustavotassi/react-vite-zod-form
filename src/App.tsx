import { BusinessForm } from './components/BusinessForm';
import { PersonForm } from './components/PersonForm';
import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <PersonForm />
        <BusinessForm />
      </div>
    </div>
  );
}
