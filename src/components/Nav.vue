<script setup>
import { useRouter } from 'vue-router';
import useAuth from '../composable/useAuth';

const {isAuthenticated, logout} = useAuth();

const router = useRouter();

const loggingOut = () => {
    logout();
    router.push("/");
};
</script>

<template>
<div class="bg-red-800 text-red-200">
    <div class="container mx-auto flex items-center justify-between">
        <h1 class="px-2 tracking-tighter text-3xl font-thin">Vue<span class="font-normal">FakeAuth</span>
        </h1>
        <nav>
            <ul class="flex space-x-4">
                <router-link to="/">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-red-500 hover:text-red-800 hover:animate-pulse"> Home
                </li>
                </router-link>

                <router-link :to = "{path: '/about', name: 'About'}">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-red-500 hover:text-red-800 hover:animate-pulse">About
                </li>
                </router-link>

                <router-link v-if="!isAuthenticated" :to = "{path: '/login', name: 'Login'}">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-red-500 hover:text-red-800 hover:animate-pulse">Login
                </li>
                </router-link>

                <div v-else class="flex">
                <router-link :to = "{ name: 'Secret' }">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-red-500 hover:text-red-800 hover:animate-pulse">Secret
                </li>
                </router-link>

                <button @click="loggingOut">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-red-500 hover:text-red-800 hover:animate-pulse">Logout
                </li>
                </button>
                </div>
            </ul>
        </nav>
    </div>
</div>
</template>