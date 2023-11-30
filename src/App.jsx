const App = () => {
  return (
    <div className="w-full h-screen flex justify-around items-center">
      <div className="w-[800px] h-[600px] bg-gray-300 rounded-lg px-5 py-2">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-xl font-medium">Welcome to MyApp</h1>
          <h1 className="text-md font-normal">Please enter your details</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
