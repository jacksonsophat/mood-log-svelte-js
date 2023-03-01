import { error, redirect } from "@sveltejs/kit"

export const actions = {

    updateProfile: async ({ request, locals }) => {
        let data = await request.formData()
        const userAvatar = data.get('avatar')

        if (userAvatar.size === 0) {
            data.delete('avatar')
        }


        try {
            const { name, avatar } = await locals.pb.collection('users').update(locals?.user?.id, data)
            locals.user.name = name;
            locals.user.avatar = avatar;
        }
        catch (err) {
            console.log({ err })
            throw error(400, 'Something went wrong updating your profile');
        }

        return {
            success: true
        }
    },



    updateEmail: async ({ request, locals }) => {
        let data = Object.fromEntries(await request.formData())
        // console.log(data)
        try {
            await locals.pb.collection('users').requestEmailChange(data.email)
        } catch (err) {
            throw error(err.status, err.message)
        }

        return {
            success: true
        }
    },

    updateUsername: async ({ request, locals }) => {
        let data = Object.fromEntries(await request.formData())
        console.log(data)
        try {
            await locals.pb.collection('users').getFirstListItem(`username = "${data.username}"`)
        } catch (err) {
            if (err.status === 404) {
                try {
                    const { username } = await locals.pb.collection('users').update(locals.user.id, { username: data.username })
                    locals.user.username = username
                    return {
                        success: true
                    }
                } catch (err) {
                    console.log({ err })
                    throw error(err.status, err.message)
                }
            }
            console.log({ err })
            throw error(err.status, err.message)
        }

        return {
            success: true
        }

    },
    updatePassword: async ({ request, locals }) => {
        const data = Object.fromEntries(await request.formData())

        try {
            await locals.pb.collection('users').update(locals.user.id, data)
            locals.pb.authStore.clear()
        } catch {
            console.log('Error: ', err)
            throw error(err.status, err.message)
        }
        throw redirect(303, '/public/auth/login')
    }
}