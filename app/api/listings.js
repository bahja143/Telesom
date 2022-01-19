import Settings from "../config/settings";
import { create } from "apisauce";

const clientApi = create({ baseURL: Settings.endPoint });

export default clientApi;
