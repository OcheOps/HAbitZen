<template>
    <div class="flex flex-col text-center h-vh bg-stone-200 text-silver dark:bg-gunmetal">
        <Toolbar :title='"Lists of Habits"' />
        <div class="flex flex-col justify-center h-vh mx-6 ">
            <section class="flex flex-col items-center w-full h-full bg-white text-silver dark:bg-charcoal dark:text-white py-4 rounded-3xl shadow-md overflow-y-auto overflow-x-hidden my-22">
                <div class="month grid grid-cols-3 gap-28 items-center justify-items-center mb-3">
                    <ChevronLeftIcon class="h-5 w-5" @click="showNextWeek()"/>
                    <span class="text-lg font-bold mx-24">{{ monthCalendar.join(' - ') }}</span>
                    <ChevronRightIcon class="h-5 w-5" @click="showLastWeek()"/>
                </div>
                <div class="days flex flex-row-reverse mb-3 items-center">
                    <section class="flex flex-col text-center items-center" v-for="(day, name) in weekDays" :key="name"
                    :class="{ 'bg-avocado rounded-lg': day.weekDayEnName == this.selectedDay }">
                        <span @click="changeCurrentHabits(day.weekDayEnName, day.date)"
                            :class="{ 'bg-white dark:bg-gunmetal': day.weekDayEnName == this.selectedDay, 'bg-stone-200 dark:bg-gunmetal': day.weekDayEnName != this.selectedDay }"
                            class="flex items-center justify-center font-bold rounded-lg w-9 h-9 m-1 pt-1 ">{{ en2fa(day.monthDay) }}</span>
                        <div dir="rtl" :class="{ 'text-white': day.weekDayEnName == this.selectedDay }" class="text-ss mx-1 mb-1 "> {{ day.weekDayName }}</div>
                    </section>
                </div>
                <div class="habit-day flex flex-wrap flex-row-reverse justify-center items-center dark: text-silver ">
                    <section dir="rtl" v-for="habit in todayHabits" :key="habit.id" :class="habit.color"
                        class="flex flex-col items-center text-center w-32 min-h-48 rounded-2xl m-2 p-4 shadow-md font-semibold tracking-wide">
                        <span class="w-14 h-14 border-4 border-silver bg-white rounded-full pt-2 mb-2 dark:bg-gunmetal dark:text-white dark:border-white">
                            <vue-feather :type="habit.icon" class="w-8"></vue-feather>
                        </span>
                        <div class="mb-4">
                            <p class="text-sm mb-2">{{ habit.title }}</p>
                            <p class="font-normal text-xs">{{ habit.description }}</p>
                        </div>
                        <div class="flex flex-col mx-2 font-semibold text-xs shadow-md">
                            <span v-if="doneHabit[habit.id]" class="bg-avocado text-white p-2 w-24 rounded-lg">Done</span>
                            <span v-if="!doneHabit[habit.id]" class="bg-white p-2 w-24 rounded-lg dark:bg-gunmetal dark:text-white">Not Done</span>
                        </div>
                    </section>
                </div>
            </section>
        </div>
        <Navbar/>
    </div>
</template>

<script>
import { CameraIcon, UserIcon, EnvelopeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import DataStore from '../datastore.js'
import Toolbar from '../components/Toolbar.vue'
import Navbar from '../components/Navbar.vue'
import { weekdays } from '../data.js'

export default {
    name: 'Habits-List',
    data() {
        return {
            todayHabits: null,
            weekDays: weekdays,
            doneHabit: [],
            monthCalendar: [],
            currentWeekDay: new Date(),
            selectedDay: null,
            selectedDate: null
        }
    },
    components: {
        CameraIcon, UserIcon, EnvelopeIcon, ChevronLeftIcon, ChevronRightIcon, Navbar, Toolbar
    },
    methods: {
        showCurrentHabits() {
            this.todayHabits = DataStore.getHabits().filter(a => a.interval.indexOf(this.selectedDay) >= 0);
        },
        showWeekDays() {
            var todayNumber = this.currentWeekDay.days();
            var firstWeekDay = this.currentWeekDay.subtract('days', todayNumber - 1);

            var currentWeek = [];
            var monthNames = [];
            for (var i = 0; i <= 6; i++) {
                var firstDay = firstWeekDay.add('days', i);
                var currentDate = {
                    weekDay: firstDay.days(), //which day of week
                    monthDay: firstDay.date(), //which day of month
                    monthName: firstDay.toLocale('fa').format('MMMM'), // آیان
                    weekDayName: firstDay.toLocale('fa').format('dddd'), //  شنبه
                    weekDayEnName: firstDay.toLocale('en').format('dddd').toUpperCase(), // SATURDAY
                    date: firstDay.toCalendar('gregorian').format('YYYY-MM-DD') // 2022-11-12
                }
                currentWeek.push(currentDate)
                if (monthNames.indexOf(currentDate.monthName) == -1) {
                    monthNames.push(currentDate.monthName);
                }
            }
            this.monthCalendar = monthNames;
            this.weekDays = currentWeek;
        },
        showLastWeek() {
            this.currentWeekDay = this.currentWeekDay.subtract("days", 7);
            this.showWeekDays();
        },
        showNextWeek() {
            this.currentWeekDay = this.currentWeekDay.add("days", 7);
            this.showWeekDays();
        },
        showDayTracker() {
            this.doneHabit = [];
            var todayTracker = DataStore.getTracker(this.selectedDate);
            for (var item of todayTracker) {
                this.doneHabit[item] = true;
            }
        },
        changeCurrentHabits(selectedDayName, date) {
            this.selectedDay = selectedDayName;
            this.showCurrentHabits();
            this.selectedDate = date;
            this.showDayTracker();
        },
    },
    mounted() {
        this.selectedDay = new Date().toLocaleDateString("en-US", { weekday: 'long' }).toUpperCase();
        this.showCurrentHabits();

        this.showWeekDays();

        this.selectedDate = new Date().toISOString().split("T")[0];
        this.showDayTracker();
    }
}
</script>