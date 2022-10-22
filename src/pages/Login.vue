<template>
  <Card class="p-12 sm:w-2/3 md:w-1/2 lg:w-5/12 xl:w-1/4 h-fit">
    <div class="flex justify-start">
      <img class="h-6 w-auto" alt="devchallenges logo" :src="DevChallengeLogo" />
    </div>
    <h2 class="mt-6 text-xl font-bold tracking-tight text-primary">
      Join thousands of learners from around
      the world
    </h2>
    <p class="mt-2 text-sm">
      Master web development by making real-life projects. There are multiple paths for you to choose
    </p>
    <form class="mt-8 space-y-4" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />

      <!-- Email -->
      <div class="relative mt-1 rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <EnvelopeIcon class="input-icon" />
        </div>
        <label for="email-address" class="sr-only">Email</label>
        <input id="email-address" name="email" type="email" autocomplete="email" required="true"
          class="app-input block w-full pl-9" placeholder="Email" />
      </div>

      <!-- Password -->
      <div class="relative mt-1 rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <LockClosedIcon class="input-icon" />
        </div>
        <label for="password" class="sr-only">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" required="true"
          class="app-input block w-full pl-9" placeholder="Password" />
      </div>

      <!-- Sign in button -->
      <button type="submit" class="group app-primary-btn relative flex w-full justify-center">
        Start coding now
      </button>
    </form>

    <p class="block text-secondary text-sm text-center mt-6">
      or continue with these social profile
    </p>

    <div class="flex justify-center my-4 space-x-6">
      <img class="h-12 w-auto text-primary hover:cursor-pointer fill-red-500" alt="google login button"
        :src="GoogleLogo" @click="handleLoginWithSocial(SocialLogin.Google)" />
      <img class="h-12 w-auto text-primary hover:cursor-pointer" alt="facebook login button" :src="FacebookLogo"
        @click="handleLoginWithSocial(SocialLogin.Facebook)" />
      <img class="h-12 w-auto text-primary hover:cursor-pointer" alt="twitter login button" :src="TwitterLogo"
        @click="handleLoginWithSocial(SocialLogin.Twitter)" />
      <img class="h-12 w-auto text-primary hover:cursor-pointer" alt="github login button" :src="GithubLogo"
        @click="handleLoginWithSocial(SocialLogin.Github)" />
    </div>

    <p class="block text-secondary text-sm text-center mt-6">
      Already a member? <a class="text-blue-400" href="#">Login</a>
    </p>

  </Card>
</template>

<script setup lang="ts">
import DevChallengeLogo from "@/assets/devchallenges.svg";
import FacebookLogo from "@/assets/facebook.svg";
import GithubLogo from "@/assets/github.svg";
import GoogleLogo from "@/assets/google.svg";
import TwitterLogo from "@/assets/twitter.svg";
import SocialLogin from "@/enums/SocialLogin";
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/vue/24/solid';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Card from "../components/Card.vue";

const handleLoginWithSocial = async (loginProvider: SocialLogin) => {
  const auth = getAuth();
  let provider;
  switch (loginProvider) {
    case SocialLogin.Google:
      provider = new GoogleAuthProvider();
      break;
    case SocialLogin.Github:
      provider = new GithubAuthProvider();
      break;
    case SocialLogin.Facebook:
    case SocialLogin.Twitter:
      alert("Not implemented yet")
      return;
    default:
      throw new Error("Invalid social login. Please try again !")
  }
  signInWithPopup(auth, provider)
    .then((credential) => {
      console.log({ credential })
    })
}

</script>