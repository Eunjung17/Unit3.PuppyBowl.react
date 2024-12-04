import api from "../../app/playersAPI";

const allPlayersApi = api.injectEndpoints({
    endpoints: (build) => ({
        
        getAllPlayers: build.query({
            query: ()=> ({
                url: "/players",
                method:"GET",
            }),
            providedTags:["Player"],
        }),
    }),
});

export default allPlayersApi;
export const { useGetAllPlayersQuery } = allPlayersApi;