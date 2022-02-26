<template>
<div class="py-4">
    <h1 class="text-2xl text-center text-blue-800 py-2">What would you like to send us?</h1>
    <nav>
            <ul class="space-x-4">
                <router-link to="/jacket">
                <li class="text-center py-8 px-4 hover:cursor-pointer
                bg-blue-500 hover:bg-blue-500 hover:text-blue-800 hover:animate-ping"> Jacket
                </li>
                </router-link>

                <router-link to="/shirt">
                <li class="text-center py-8 px-4 hover:cursor-pointer
                bg-blue-500 hover:bg-blue-500 hover:text-blue-800 hover:animate-ping">Shirt          
                </li>
                </router-link>

                <router-link to="/pant">
                <li class="text-center py-8 px-4 hover:cursor-pointer
                bg-blue-500 hover:bg-blue-500 hover:text-blue-800 hover:animate-ping"> Pant
                </li>
                </router-link>

                <router-link to="/shoes">
                <li class="text-center py-8 px-4 hover:cursor-pointer
                bg-blue-500 hover:bg-blue-500 hover:text-blue-800 hover:animate-ping"> Shoes
                </li>
                </router-link>
            </ul>
            </nav>
</div>
</template>