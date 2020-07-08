import React from "react";
import FormContainer from "./container/FormContainer";
import { FormProvider } from "./context/formContext";

function App() {
  return (
    <FormProvider>
      <>
        <FormContainer />
      </>
    </FormProvider>
  );
}

export default App;
