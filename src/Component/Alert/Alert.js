import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { resetAlert } from "../../redux/action/alert.action";

const Alert = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const alert = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  useEffect(() => {
    if (alert.text !== "") {
      enqueueSnackbar(alert.text, {
        variant: alert.color,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });

      setTimeout(() => {
        dispatch(resetAlert());
      }, 2000);
    }
  }, [alert.text]);
  return <></>;
};

export default Alert;
