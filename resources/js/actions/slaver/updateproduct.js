import axios from "axios";
import { UPDATE_PRODUCT } from "../type";
const url = process.env.MIX_API_URL;

export const updateProduct =
    (id, name, description, race, price, image) => (dispatch) => {
        // const formData = new FormData();
        // formData.append("name", name);
        // formData.append("description", description);
        // formData.append("race", race);
        // formData.append("price", price);
        // console.log(image);
        // console.log(name);
        // console.log(formData);
        // Array.from(image).forEach((file) => {
        //     formData.append("image[]", file);
        // });

        return axios
            .put(url + `/product/edit/${id}`, {
                name: name,
                description: description,
                race: race,
                price: price,
            })
            .then((response) => {
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: true,
                });
                return Promise.resolve();
            })
            .catch((error) => {
                console.error(error);
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: false,
                });
                return Promise.reject(error);
            });
    };
