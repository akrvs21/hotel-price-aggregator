import { SAVE_HOTEL } from "./types";
import store from "../store";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const saveToFavoriteList = (item) => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    position: "top-end",
    icon: "success",
    title: "Added to favorites",
    showConfirmButton: false,
    timer: 1500,
  });

  store.dispatch({
    type: SAVE_HOTEL,
    payload: item,
  });
};
