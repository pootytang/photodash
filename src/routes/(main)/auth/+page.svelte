<script lang="ts">
  import { loginstate } from "$lib/state/authstate.svelte";
  import { fly } from "svelte/transition";
  import Login from "$lib/components/auth/login.svelte";
  import Signup from "$lib/components/auth/signup.svelte";
  import { page } from "$app/stores";

  let { form } = $props();

  console.log($page.url);
</script>

<div class="flex h-screen w-full">
  <!-- Image Section -->
  <div class="w-1/2">
    <img
      src="/desk.avif"
      alt="Login illustration"
      class="object-cover h-full w-full"
    />
  </div>

  <!-- Form Section -->
  {#if loginstate.isLogin}
    <div
      class="w-1/2 bg-gray-100 flex items-center justify-center"
      in:fly={{ x: 100, duration: 500, delay: 30 }}
    >
      <Login form />
    </div>
  {:else}
    <div
      class="w-1/2 bg-gray-100 flex items-center justify-center"
      in:fly={{ x: 100, duration: 500, delay: 30 }}
    >
      <Signup form />
    </div>
  {/if}
</div>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>
