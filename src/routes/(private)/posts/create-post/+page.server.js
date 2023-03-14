import { error, redirect } from "@sveltejs/kit"

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/public/login')
    }
}

export const actions = {
    createPost: async ({ request, locals }) => {
        const data = await request.formData();

        data.append('user', locals.user.id)

        try {
            await locals.pb.collection('posts').create(data)
        } catch (err) {
            console.log({ err })
            throw error(err.status, err.message)
        }

        throw redirect(303, '/')
    }
}