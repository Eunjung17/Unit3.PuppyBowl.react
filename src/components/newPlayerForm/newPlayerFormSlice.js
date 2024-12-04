import api from "../../app/playersAPI";

const newPlayerFormApi = api.injectEndpoints({
    endpoints: (build) => ({

        addPlayer: build.mutation({
            query: (value) => ({
                url:"/players",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',  
                },
                body: JSON.stringify({
                    name: value.name,
                    breed: value.breed,
                    imageUrl: value.imageUrl,
                    status: value.status,
                    teamId: value.teamId,
                }),
            }),
            invalidatesTags: ["Player"],
        }),

    }),
});

export default newPlayerFormApi;

export const {useAddPlayerMutation} = newPlayerFormApi;