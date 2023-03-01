<script>
  import { Input } from "$lib/components";
  import { enhance, applyAction } from "$app/forms";
  import { dataset_dev } from "svelte/internal";
  import { getImageURL } from "$lib/utils";
  import { invalidateAll } from "$app/navigation";

  export let data;
  export let form;
  let loading;
  $: loading = false;
  // let nav = [
  //   { link: "/account/settings/update-profile", text: "Update Profile" },
  //   { link: "/", text: "Change Password" },
  //   { link: "/", text: "Change Email" },
  // ];

  const showPreview = (event) => {
    const target = event.target;
    const files = target.files;

    if (files.length > 0) {
      const src = URL.createObjectURL(files[0]);
      const preview = document.getElementById("avatar-preview");
      preview.src = src;
    }
  };

  const submitUpdateProfile = () => {
    loading = true;
    return async ({ result }) => {
      switch (result.type) {
        case "success":
          await invalidateAll();
          break;
        case "error":
          break;
        default:
          await applyAction(result);
      }
      loading = false;
    };
  };

  const submitUpdateEmail = () => {
    loading = true;
    return async ({ result }) => {
      switch (result.type) {
        case "success":
          await invalidateAll();
          break;
        case "error":
          break;
        default:
          await applyAction(result);
      }
      loading = false;
    };
  };

  const submitUpdateUsername = () => {
    loading = true;
    return async ({ result }) => {
      switch (result.type) {
        case "success":
          await invalidateAll();
          break;
        case "error":
          break;
        default:
          await applyAction(result);
      }
      loading = false;
    };
  };

  const submitUpdatePassword = () => {
    loading = true;
    return async ({ result }) => {
      switch (result.type) {
        case "success":
          await invalidateAll();
          break;
        case "error":
          break;
        default:
          await applyAction(result);
      }
      loading = false;
    };
  };
</script>

<div class="flex flex-col mb-14">
  <div id="UpdateProfile" class="mb-6">
    <div class="border rounded p-2">
      <h2 class="btn-dark mb-3 text-center text-lg">Update Profile</h2>
      <form
        action="?/updateProfile"
        method="POST"
        enctype="multipart/form-data"
        use:enhance={submitUpdateProfile}
      >
        <div class="grid grid-cols-2">
          <div class="rounded w-32">
            <img
              src={data.user?.avatar
                ? getImageURL(
                    data.user.collectionId,
                    data.user?.id,
                    data.user?.avatar
                  )
                : "/images/anonymous-profile.png"}
              id="avatar-preview"
              alt="user avatar"
              class="mb-2 rounded"
            />
            <input
              type="file"
              name="avatar"
              id="avatar"
              value=""
              accept="image/*"
              on:change={showPreview}
              disabled={loading}
              required
            />
          </div>
          <div>
            <Input
              id="name"
              label="Full Name"
              value={data?.user?.name}
              disabled={loading}
            />
            <div>
              <button class="btn-primary-small" disabled={loading} type="submit"
                >Update profile</button
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- Update Username -->
  <div id="updateUsername" class="mb-6">
    <div class="border rounded p-2">
      <h2 class="btn-dark mb-3 text-center text-lg">Change Username</h2>

      <form
        action="?/updateUsername"
        method="POST"
        use:enhance={submitUpdateUsername}
      >
        <Input
          label="Enter your new username"
          placeholder="Enter new username"
          type="text"
          id="username"
          required={true}
          value={data?.user?.username}
        />
        <button class="btn-primary-small" disabled={loading} type="submit"
          >Change Username</button
        >
      </form>
    </div>
  </div>
  <!-- Update Email -->
  <div id="updateEmail" class="mb-6">
    <div class="border rounded p-2">
      <h2 class="btn-dark mb-3 text-center text-lg">Change Email</h2>
      <form
        action="?/updateEmail"
        method="POST"
        use:enhance={submitUpdateEmail}
      >
        <Input
          label="Enter your new email"
          placeholder="Enter new email"
          type="email"
          id="email"
          value={form?.data?.email}
          disabled={loading}
        />
        <button class="btn-primary-small" disabled={loading} type="submit"
          >Change email</button
        >
      </form>
    </div>
  </div>

  <!-- Update Password -->
  <div id="updatePassword">
    <div class="border rounded p-2">
      <h2 class="btn-dark mb-3 text-center text-lg">Change Password</h2>
      <form
        action="?/updatePassword"
        method="POST"
        use:enhance={submitUpdatePassword}
      >
        <Input label="Old Password" type="password" id="oldPassword" required />
        <Input label="New Password" type="password" id="password" required />
        <Input
          label="Confirm New Password"
          type="password"
          id="passwordConfirm"
          required
        />
        <button class="btn-primary-small" disabled={loading} type="submit"
          >Change Password</button
        >
        <div class="text-right">
          <a href="/public/auth/reset-password" class="text-xs text-primary"
            >I forgot my password</a
          >
        </div>
      </form>
    </div>
  </div>
</div>
