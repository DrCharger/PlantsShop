import * as React from "react";

import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <React.Fragment>
      <div onClick={handleClickVariant("success")} style={{ width: "100%" }}>
        Buy Now
      </div>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={1500}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MyApp />
    </SnackbarProvider>
  );
}
