import React from "react";
import MainContainer from "./container/MainContainer";
import { FormProvider } from "./context/formContext";

function App() {
  return (
    <FormProvider>
      <>
        <MainContainer />
      </>
    </FormProvider>
  );
}

export default App;
