import {
  CustomButton,
  DangerButton,
  LinkButton,
  PrimaryButton,
} from "./components/Button";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-around items-center">
      <PrimaryButton />
      <DangerButton />
      <LinkButton />
      <CustomButton />
    </div>
  );
};

export default App;
