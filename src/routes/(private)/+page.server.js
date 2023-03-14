import { error, redirect } from "@sveltejs/kit"
import { serializeNonPOJOs } from '$lib/utils'


export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/public/login')
    }

    locals.pb.autoCancellation(false);

    /*GET PUBLIC POSTS */
    const getPublicPosts = async () => {
        try {
            const publicPosts = serializeNonPOJOs(await locals.pb.collection('posts').getFullList({
                sort: '-created',
                filter: 'post_status = "publicly"',
                expand: 'user'
            }));
            return publicPosts

        } catch (err) {
            console.log({ err })
            throw error(err.status, err.message)
        }
    }


    /*GET ANONYMOUS POSTS */
    const getAnonymousPosts = async () => {
        try {
            const anonymousPosts = serializeNonPOJOs(await locals.pb.collection('posts').getFullList({
                sort: '-created',
                filter: 'post_status = "anonymously"'
            }));

            console.log('Test');
            return anonymousPosts

        } catch (err) {
            console.log({ err })
            throw error(err.status, err.message)
        }
    }


    return {
        publicPosts: getPublicPosts(),
        anonymousPosts: getAnonymousPosts()
    };
}