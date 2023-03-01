<script>
  export let form;
</script>

<section
  class="bg-[url('/images/bg/bg-04.png')] bg-center h-screen w-screen center-center"
>
  <div
    class="bg-white/60 w-full mx-2 md:w-[380px] pt-8 pb-36 px-4 backdrop-blur rounded"
  >
    <h1 class="mb-4 hidden">Log In/Register</h1>
    <div class="px-6">
      <div class="flex justify-center mb-4">
        <img src="/images/mood-log-logo.png" class="w-[150px]" alt="" />
      </div>
      <p class="text-center font-semibold mb-4">
        Welcome back, we’re glad to see you here
      </p>
      <form action="?/login" method="POST" class="">
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
        <div class="mb-3">
          <label for="password" class="text-sm">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            class="border w-full mt-1 rounded px-2 py-2"
          />
        </div>
        <button class="bg-primary text-white w-full py-2 rounded mt-4"
          >Log in</button
        >
        {#if form?.notVerified}
          <p>You must verify your email before login</p>
        {/if}
      </form>

      <div class="mt-8">
        <p class="text-sm">
          Don't have an account? <a
            class="text-primary font-semibold"
            href="/public/auth/register">Sign Up</a
          >
        </p>
        <a href="/public/auth/reset-password" class="text-xs"
          >Forget your password?</a
        >
      </div>
    </div>
  </div>
</section>
