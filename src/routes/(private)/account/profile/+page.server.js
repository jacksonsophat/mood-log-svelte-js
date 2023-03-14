import { error, redirect } from "@sveltejs/kit"
import { serializeNonPOJOs } from '$lib/utils'

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/public/login')
    }

    const getUserPosts = async (userId) => {
        try {
            const posts = serializeNonPOJOs(await locals.pb.collection('posts').getFullList(undefined, {
                filter: `user = "${userId}"`
            }))


            // const posts = serializeNonPOJOs(await locals.pb.collection('posts').getList(1, 20, { expand: 'user' }))
            return posts
        } catch (err) {
            console.log({ err });
            throw error(err.status, err.message)
        }
    }

    return {
        posts: getUserPosts(locals.user.id)
    }
}