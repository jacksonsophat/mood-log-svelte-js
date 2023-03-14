import { error, redirect } from "@sveltejs/kit"
import { serializeNonPOJOs } from '$lib/utils'

export const load = ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/public/login')
    }


    // If user = profile

    const getAllPosts = async () => {
        if (params.username == locals.user.username) {
            console.log('Correct')
            try {
                const posts = serializeNonPOJOs(await locals.pb.collection('posts').getFullList({
                    filter: `user = "${locals.user.id}"`,
                    sort: '-created'
                }))

                console.log(posts)
                console.log('all posts')

                return posts
            } catch (err) {
                console.log({ err });
                throw error(err.status, err.message)
            }
        } else {
            console.log('Wrong')

            return posts
        }
    }


    // Get profile info
    const getProfile = async () => {
        try {
            const profile = serializeNonPOJOs(await locals.pb.collection('users').getFirstListItem(`username= "${params.username}"`))

            console.log(profile)
            console.log('all posts')

            return profile
        } catch (err) {
            console.log({ err });
            throw error(err.status, err.message)
        }
    }


    // if user != profile




    // const getUserPosts = async (userId) => {
    //     try {
    //         const posts = serializeNonPOJOs(await locals.pb.collection('posts').getFullList(undefined, {
    //             filter: `user = "${userId}"`
    //         }))

    //         return posts
    //     } catch (err) {
    //         console.log({ err });
    //         throw error(err.status, err.message)
    //     }
    // }



    return {
        posts: getAllPosts(),
        profile: getProfile()
    }
}