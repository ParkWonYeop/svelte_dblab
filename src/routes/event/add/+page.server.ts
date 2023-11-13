import type { PageServerLoad } from './$types';
export const load = (async ({ cookies }) => {
    const token = cookies.get('accessToken')
    const response = await fetch("http://localhost:8080/organize", {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })

    if (!response.ok) {
        return { success: false }
    }

    return {
        success: true,
        token: token
    };
}) satisfies PageServerLoad;