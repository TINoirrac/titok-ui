import httpRequest from "../utils/httpRequest";

export const searchServices = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


  // request
  //   .get(`users/search`, {
  //     params: {
  //       q: debounced,
  //       type: "less",
  //     },
  //   })
  //   .then((res) => {
  //     setSearchResult(res.data);
  //     setLoading(false);
  //   })
  //   .catch(() => {
  //     setLoading(false);
  //   });
