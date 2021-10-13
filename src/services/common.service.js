import { ApiService } from "./index";

const CommonService = {
    getStates: () => ApiService.get("/states"),
    getProviderList: (payload) => ApiService.post("/provider", payload),
    getProviderDetail: (id) => ApiService.get(`/provider/${id}`),
};

export default CommonService;
