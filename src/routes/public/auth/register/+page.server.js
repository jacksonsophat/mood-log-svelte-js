import { redirect, error } from "@sveltejs/kit";


export const actions = {
    register: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())

        console.log(body)
        try {
            await locals.pb.collection('users').create(body);
            await locals.pb.collection('users').requestVerification(body.email)
        } catch (err) {
            console.log({ err })
            throw error(500, 'Something is wrong')
        }

        throw redirect(303, '/auth/login')
    }
}