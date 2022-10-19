<template>
  <div class="app-container">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" alt="devchallenges logo" :src="devChallengeLogo" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-primary">Sign in to your account</h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="true"
              class="app-input relative block w-full rounded-t-md" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="true"
              class="app-input relative block w-full rounded-b-md" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="h-4 w-4 rounded border-primary text-primary-theme focus:bg-primary focus:opacity-90" />
            <label for="remember-me" class="ml-2 block text-sm text-primary">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-primary-theme hover:text-primary-theme hover:opacity-90">Forgot your
              password?</a>
          </div>
        </div>

        <div>
          <button type="submit" class="group app-primary-btn relative flex w-full justify-center">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import devChallengeLogo from "./assets/devchallenges.svg";
</script>