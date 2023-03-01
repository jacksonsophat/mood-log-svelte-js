<section
  class="bg-[url('/images/bg/bg-02.png')] bg-center h-screen w-screen center-center"
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
        Sign up and keep track of your mood through out the day
      </p>
      <form action="?/register" method="POST" class="">
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
        <div class="mb-3">
          <label for="password" class="text-sm">Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="Retype your password"
            class="border w-full mt-1 rounded px-2 py-2"
          />
        </div>
        <button class="bg-primary text-white w-full py-2 rounded mt-4"
          >Sign Up</button
        >
      </form>

      <div class="mt-8">
        <p class="mb-4 text-xs">
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>
        <p class="text-sm">
          Already has an account? <a
            class="text-primary font-semibold"
            href="/public/auth/login">Log in</a
          >
        </p>
      </div>
    </div>
  </div>
</section>
