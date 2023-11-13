import type { PageServerLoad } from "./$types";
export const load = (async ({ params ,cookies }) => {
    const token = cookies.get('accessToken');
    const response = await fetch(`http://localhost:8080/review?id=${params.id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    const data = await response.json();
    return { 
        props: {
            data,
            eventId:params.id
        }
    };
}) satisfies PageServerLoad