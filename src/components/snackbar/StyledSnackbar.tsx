import * as React from "react";

import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import { NotistackProps } from "../../types/propTypes";

const MyApp: React.FC<NotistackProps> = ({ text }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`The ${text} is in the cart!`, { variant });
  };

  return (
    <React.Fragment>
      <div onClick={handleClickVariant("success")} style={{ width: "100%" }}>
        Buy Now
      </div>
    </React.Fragment>
  );
};

export const IntegrationNotistack: React.FC<NotistackProps> = ({ text }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={1500}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MyApp text={text} />
    </SnackbarProvider>
  );
};
