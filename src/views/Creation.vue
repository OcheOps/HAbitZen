<template>
    <div class="bg-stone-200 flex flex-col text-center min-h-screen text-silver dark:bg-gunmetal">
        <section class="title flex justify-end drop-shadow px-6 py-5 mb-5 text-white dark:text-white bg-yellow-green fixed top-0 left-0 right-0 h-[65px] z-10">
            <h1 class="text-xl font-bold">Building a Habit</h1>
            <button @click="goBack()">
                <vue-feather type="x" class="ml-20 h-6 w-6"></vue-feather>
            </button>
        </section>
        <button @click="suggestHabit()" class="bg-avocado text-white mt-21 py-3 mx-5 rounded-3xl font-bold tracking-wide shadow-md">Choose a default a habit</button>
        <section class="flex flex-col bg-white text-silver mx-6 my-5 rounded-3xl h-full dark:bg-charcoal">
            <div class="habit-title flex flex-col items-end">
                <label class="label-creation">Name is back</label>
                <span class="flex items-center justify-center bg-stone-400 w-full h-24">
                    <input v-model="habitTitle" type="text" class="text-center mx-5 mt-4 p-3 w-full rounded-3xl shadow-md font-semibold dark:bg-silver dark:text-white">
                </span>
            </div>
            <div class="habit-icon flex flex-col items-end">
                <label class="label-creation">Symbol</label>
                <section class="section-creation dark:text-white">
                    <div v-for="icon in icons" :key="icon.id">
                        <vue-feather @click="chooseIcon(icon.type)" :type="icon.type"
                            :class="{ 'bg-white': habitIcon == icon.type }"
                            class="rounded-full border-2 p-1.5 mx-1 text-stone-600 border-white dark:border-silver"></vue-feather>
                    </div>
                </section>
            </div>
            <div class="habit-color flex flex-col items-end">
                <label class="label-creation">Colour</label>
                <section class="section-creation pb-3">
                    <div @click="chooseColor(color)" v-for="(color, name) in colors" :key="name" :class="color"
                        v-bind:class="{ 'border-silver dark:border-white': habitColor == color }"
                        class="w-11 h-11 p-1 m-1 rounded-full border-4 border-white dark:border-silver">
                    </div>
                </section>
            </div>
            <div class="habit-interval flex flex-col items-end">
                <label class="label-creation">Habit repetiton per week </label>
                <section class="section-creation pb-5 pt-6">
                    <div @click="chooseDay(name)" v-for="(day, name) in weekDays" :key="name"
                        :class="{ 'border-silver border-4 dark:border-white': habitDay.indexOf(name) >= 0 }"
                        class="mx-6 mt-3 p-3 w-full rounded-3xl shadow-md text-center font-semibold tracking-wide bg-white dark:bg-silver dark:text-white">
                        {{ day }}
                    </div>
                </section>
            </div>
            <div class="habit-description flex flex-col items-end">
                <label class="label-creation">Clarifications</label>
                <span class="flex items-center justify-center w-full pt-4 pb-5 min-h-28 bg-stone-400">
                    <textarea v-model="habitDescription" type="text" dir="rtl"
                        class="flex flex-wrap text-center w-full mx-6 mt-5 p-3 rounded-3xl shadow-md font-semibold text-lg dark:bg-silver dark:text-white"></textarea>
                </span>
            </div>
            <div v-if="isVisible"
                class="modal mx-6 mt-7 p-3 rounded-3xl shadow-md text-center text-stone-600 bg-yellow-green dark:bg-silver dark:text-white">Select the required items above and then click Add habit</div>
            <button @click="setCategory()"
                class="bg-avocado py-3 mx-6 my-6 rounded-3xl text-latte font-bold tracking-wide shadow-md">Add</button>
        </section>
    </div>
</template>

<script>
import DataStore from '../datastore.js'
import { categories, habits, icons,colors,weekdays } from '../data.js';

export default {
    name: 'Creation',
    data() {
        return {
            icons: null,
            colors: colors,
            days: null,
            habitTitle: this.$route.query.title,
            habitIcon: this.$route.query.iconType,
            habitColor: null,
            habitDay: [],
            habitDescription: null,
            weekDays: weekdays,
            isVisible: false,
            categories: categories,
            habits: habits,
        }
    },
    methods: {
        setCategory() {
            if (this.habitTitle == null || this.habitDay.length == 0 || this.habitColor == null || this.habitIcon == null) {
                this.isVisible = true;
                return
            }
            DataStore.createHabit({ title: this.habitTitle, icon: this.habitIcon, color: this.habitColor, interval: this.habitDay, description: this.habitDescription });
            this.$router.push(`/Category`);
        },
        goBack() {
            if (this.$route.query.title) {
                this.$router.go(-3);
                console.log("right")
            }
            else {
                this.$router.go(-1);
            }
        },
        async loadIcons() {
            this.icons = icons;
        },
        chooseIcon(selectedIcon) {
            this.habitIcon = selectedIcon;
        },
        chooseColor(selectedColor) {
            this.habitColor = selectedColor;
        },
        chooseDay(day) {
            if (this.habitDay.indexOf(day) >= 0) {
                this.habitDay.splice(this.habitDay.indexOf(day), 1);
            }
            else {
                this.habitDay.push(day)
            }
        },
        hideModal() {
            this.isVisible = false
        },
        showCategoryHabits(categoryId) {
            this.categoryHabits = this.habits.filter(a => a.categoryId == categoryId);
        },
        suggestHabit() {
            this.$router.push(`/category/suggestion`);
        },
    },
    mounted() {
        this.loadIcons();
    }
}
</script>
