<script>
  import Header from "$lib/components/public/Header.svelte";

  export let form;
</script>

<Header />
<section
  class="bg-[url('/images/bg/bg-05.png')] h-screen bg-center pt-40 w-screen  mr-auto ml-auto flex justify-center"
>
  <div>
    <div
      class=" mx-2 md:w-[380px] pt-8 pb-16 px-4 backdrop-blur rounded bg-white/60"
    >
      <div class="px-6">
        <h1 class="text-center text-xl font-semibold mb-4">Reset password</h1>
        <p class="text-sm">
          Enter your email and we'll send you a link to get back into your
          account.
        </p>
        <form action="?/resetPassword" method="POST" class="mt-4">
          <div class="mb-3">
            <label for="email" class="text-sm">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="border w-full mt-1 rounded px-2 py-2"
            />
          </div>

          <button class="btn-primary w-full">Reset Password</button>
        </form>
        {#if form?.success}
          <div class="w-full bg-emerald-200 p-2 rounded mt-4 text-dark">
            <p>A reset password link has been sent the email you provided.</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
