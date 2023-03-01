import { redirect } from "@sveltejs/kit"

export const load = ({ locals }) => {
    // console.log({ locals })
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/auth/login')
    }
}