import api from "./listings";

const endPoint = "/token";

const sendVerification = (telephone) =>
  api.post(endPoint + "/sendVerification", telephone);
const verify = (user) => api.post(endPoint + "/verify", user);

export default { sendVerification, verify };
