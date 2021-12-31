import { ApiService } from "./index";

const CommonService = {
    getStates: () => ApiService.get("/states"),
    getProviderList: (payload) => ApiService.post("/provider", payload),
    getProviderDetail: (id) => ApiService.get(`/provider/${id}`),
    subscribeNewsletter: (payload) => ApiService.post("/newsletter-subscription", payload),
};

export default CommonService;
