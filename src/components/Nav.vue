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

                <router-link :to="{name: 'Send Us'}">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-indigo-500 hover:text-indigo-800 hover:animate-pulse">Send           </li>
                </router-link>

                <router-link :to = "{path: '/apply', name: 'Apply'}">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-indigo-500 hover:text-indigo-800 hover:animate-pulse">Apply
                </li>
                </router-link>

                <router-link :to = "{path: '/aboutus', name: 'About Us'}">
                <li class="py-8 px-4 hover:cursor-pointer hover:bg-indigo-500 hover:text-indigo-800 hover:animate-pulse">About Us
                </li>
                </router-link>
            </ul>
        </nav>
    </div>
</div>
</template>