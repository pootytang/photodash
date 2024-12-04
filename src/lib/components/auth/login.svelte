<script>
  import { enhance } from "$app/forms";
  import { loginstate } from "$lib/state/authstate.svelte";
  let { form } = $props();
</script>

<form class="w-3/4 max-w-md space-y-4" method="POST" use:enhance>
  <h2 class="text-3xl text-center text-teal-700">Login</h2>
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
      class="input input-bordered w-full text-gray-400"
      autocomplete="off"
      required
      placeholder="Enter your password"
    />
  </div>
  <button
    type="submit"
    class="btn outline outline-teal-700 w-full text-teal-700"
  >
    Login
  </button>
  <span class="text-gray-400">
    Don't have an account? Click <button
      onclick={() => {
        loginstate.isLogin = false;
      }}
      class="text-teal-700">here</button
    > to Register
  </span>
</form>
