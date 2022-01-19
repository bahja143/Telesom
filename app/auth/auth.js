import clientApi from "../api/listings";

const endPoint = "/Auth?phone=";
const login = (tellphone) => clientApi.get(endPoint + tellphone);

export default { login };
