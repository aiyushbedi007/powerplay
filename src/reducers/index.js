import authReducer from "./authReducer";
import basketReducer from "./basketReducer";
import productReducer from "./productReducer";

const rootReducer = {
    auth: authReducer,
    basket: basketReducer,
    product: productReducer,
};

export default rootReducer;