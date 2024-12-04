import api from "../../app/playersAPI";

const singlePlayerApi = api.injectEndpoints({
    endpoints: (build) => ({

        getSinglePlayer: build.query({
            query: (id)=> ({
                url: `/players/${id}`,
                method:"GET",
            }),
            providedTags:["Player"],
        }),

        deletePlayer: build.mutation({
            query: (id) => ({
              url: `/players/${id}`,
              method: "DELETE",
              headers: {
                'Content-Type': 'application/json',
              },
            }),
            invalidateTags: ["Player"],
          }),
    }),
});

export default singlePlayerApi;
export const { useGetSinglePlayerQuery, useDeletePlayerMutation} = singlePlayerApi;