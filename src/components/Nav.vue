<script setup>
import useAuth from '../composable/useAuth';
const {isAuthenticated, logout} = useAuth();
</script>

<template>
<div class="bg-indigo-800 text-indigo-200">
    <div class="container mx-auto flex items-center justify-between">
        <h1 class="px-2 tracking-tighter text-3xl font-thin">Vue<span class="font-normal">FakeAuth</span>
        </h1>
        <nav>
            <ul class="flex space-x-4">
                <router-link to="/">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-indigo-500 hover:text-indigo-800 hover:animate-pulse"> Home
                </li>
                </router-link>

                <router-link :to = "{path: '/about', name: 'About'}">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-indigo-500 hover:text-indigo-800 hover:animate-pulse">About
                </li>
                </router-link>

                <router-link v-if="!isAuthenticated" :to = "{path: '/login', name: 'Login'}">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-indigo-500 hover:text-indigo-800 hover:animate-pulse">Login
                </li>
                </router-link>

                <router-link v-else :to = "{ name: 'Secret' }">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-indigo-500 hover:text-indigo-800 hover:animate-pulse">Secret
                </li>
                </router-link>

                <button v-else @click="logout">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-indigo-500 hover:text-indigo-800 hover:animate-pulse">Logout
                </li>
                </button>
            </ul>
        </nav>
    </div>
</div>
</template>