<script>
  import { enhance } from "$app/forms";
  import { loginstate } from "$lib/state/authstate.svelte";
  let { form } = $props();
</script>

<form
  class="w-3/4 max-w-md space-y-4"
  method="POST"
  action="?/signup"
  use:enhance
>
  <h2 class="text-3xl text-center text-teal-700">Signup</h2>
  {#if form?.error}
    <em class="text-red-600">{form.error}</em>
  {/if}
  <div class="form-control">
    <label class="label text-teal-700" for="email">
      <span class="label-text text-teal-700">Email</span>
    </label>
    <input
      id="email"
      name="email"
      type="email"
      class="input input-bordered w-full text-gray-400"
      autocomplete="on"
      placeholder="Enter your email"
      value={form?.email ?? ""}
    />
  </div>
  <div class="form-control">
    <label class="label" for="password">
      <span class="label-text text-teal-700">Password</span>
    </label>
    <input
      id="password"
      name="password"
      type="password"
      class="input input-bordered w-full text-gray-400 mb-2"
      autocomplete="off"
      required
      placeholder="Enter your password"
    />

    <input
      id="confirmpassword"
      name="confirmpassword"
      type="password"
      class="input input-bordered w-full text-gray-400"
      autocomplete="off"
      required
      placeholder="Confirm password"
    />
  </div>

  <div class="form-control">
    <label class="label text-teal-700" for="bizname">
      <span class="label-text text-teal-700">Business Name</span>
    </label>
    <input
      id="bizname"
      name="bizname"
      type="text"
      class="input input-bordered w-full text-gray-400"
      autocomplete="on"
      placeholder="Enter your business name"
      value={form?.bizname ?? ""}
    />
  </div>

  <div class="form-control">
    <label class="label text-teal-700" for="fname">
      <span class="label-text text-teal-700">First Name</span>
    </label>
    <input
      id="fname"
      name="fname"
      type="text"
      class="input input-bordered w-full text-gray-400"
      autocomplete="on"
      placeholder="Enter your first name"
      value={form?.fname ?? ""}
    />
  </div>

  <div class="form-control">
    <label class="label" for="lname">
      <span class="label-text text-teal-700">Last Name</span>
    </label>
    <input
      id="lname"
      name="lname"
      type="text"
      class="input input-bordered w-full text-gray-400"
      autocomplete="on"
      placeholder="Enter your last name"
      value={form?.lname ?? ""}
    />
  </div>

  <button
    type="submit"
    class="btn outline outline-teal-700 w-full text-teal-700"
  >
    Signup
  </button>
  <span class="text-gray-400">
    already have an account click <button
      onclick={() => {
        loginstate.isLogin = true;
      }}
      class="text-teal-700">here</button
    > to login
  </span>
</form>
