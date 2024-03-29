<template>
    <div class="flex flex-col text-center h-vh bg-stone-200 text-silver dark:bg-gunmetal">
        <Toolbar :title="'Half-Look'" />
        <div class="flex flex-col justify-center h-full my-22 mx-6 ">
            <section class="flex flex-col items-center justify-center py-5 rounded-3xl shadow-md bg-white text-silver dark:bg-charcoal dark:text-white h-full">
                <div class="grid grid-cols-3 gap-28 items-center justify-items-center mb-3">
                    <ChevronLeftIcon class="h-5 w-5" @click="showNextMonth()" />
                    <span class="text-lg font-bold">{{ currentMonth.toLocale('fa').format('MMMM') }}</span>
                    <ChevronRightIcon class="h-5 w-5" @click="showLastMonth()" />
                </div>
                <section class="flex flex-col items-center justify-between h-full">
                    <div dir="rtl" class="grid grid-cols-7 mb-5 dark:text-silver">
                        <div v-for="item in days" :key="item.day">
                            <span @click="showHabits(item.habits)"
                                class="flex text-center items-center justify-center p-1 mr-1 my-1 rounded-lg w-9 h-9 text-gunmetal dark:text-stone-200"
                                :class=calculateColorRange(item.progress)>{{ en2fa(item.day) }}</span>
                        </div>
                    </div>
                    <div v-if="isVisible"
                        class="fixed bg-stone-200 bg-opacity-50 dark:bg-stone-900 dark:bg-opacity-80 right-0 left-0 bottom-0 top-0 w-full">
                        <div class="right-0 left-0 mx-auto">
                            <div class="flex flex-col items-end rounded-3xl shadow-md p-4 mx-6 overflow-y-auto overflow-x-hidden relative top-37 bg-stone-200 dark:bg-gunmetal">
                                <XMarkIcon @click="hideModal()" class="h-5 w-5 mb-2" />
                                <div class="flex items-center mb-1" v-for="item in habitsList" :key="item.id">
                                    <span>{{ item.title }}</span>
                                    <CheckCircleIcon class="h-6 w-6 mr-4 ml-2 text-done" v-if="item.isDone" />
                                    <XCircleIcon class="h-6 w-6 mr-4 ml-2 text-notDone" v-if="!item.isDone" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-end">
                        <div class="text-ss pb-1">:Progress Of Habits</div>
                        <div class="flex justify-center flex-row-reverse">
                            <div v-for="item in scoreRange" :key="item.id"
                                class="flex flex-col mr-2">
                                <label class="text-ss">{{ item.mask }}</label>
                                <span class="w-9 h-5 rounded-lg" :class="item.color"></span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
        <Navbar />
    </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon, XCircleIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'

import DataStore from '../datastore.js'
import Toolbar from '../components/Toolbar.vue'
import Navbar from '../components/Navbar.vue'

export default {
    name: 'Calender',
    data() {
        return {
            currentMonth: new Date(),
            daysInMonth: null,
            days: [],
            habitsList: [],
            isVisible: false,
            scoreRange: [
                { "low": 0, "high": 0, "color": 'bg-stone-200 dark:bg-gunmetal', "mask": "" },
                { "low": 1, "high": 20, "color": 'bg-lime-200 dark:text-gunmetal', "mask": "" },
                { "low": 21, "high": 40, "color": 'bg-lime-300 dark:text-gunmetal', "mask": "" },
                { "low": 41, "high": 60, "color": 'bg-lime-400 dark:text-gunmetal', "mask": "" },
                { "low": 61, "high": 80, "color": 'bg-lime-500 dark:text-gunmetal', "mask": "" },
                { "low": 81, "high": 100, "color": 'bg-lime-600 dark:text-gunmetal', "mask": "" }
            ]
        }
    },
    components: {
        ChevronLeftIcon, ChevronRightIcon, Navbar, XCircleIcon, CheckCircleIcon, XMarkIcon, Toolbar
    },
    methods: {
        showCurrentMonth() {
            this.days = [];
            this.daysInMonth = this.currentMonth.daysInMonth();
            for (var i = 1; i <= this.daysInMonth; i++) {
                var day = i; //1
                var currentDate = this.currentMonth.clone().date(i); //1401-08-01
                var currentDateFormatted = currentDate.toLocale('en').toCalendar('gregorian').format('YYYY-MM-DD'); //2022-10-23 first day of month
                var currentTracker = DataStore.getTracker(currentDateFormatted); // ['1','4'] id of done habits
                var DayName = currentDate.toLocale('en').format('dddd').toUpperCase(); //SUNDAY
                var currentHabtis = DataStore.getHabits().filter(a => a.interval.indexOf(DayName) >= 0).map(i => { //habits
                    return {
                        id: i.id,
                        title: i.title,
                        isDone: currentTracker.indexOf(i.id.toString()) >= 0
                    };
                })

                var progress = (currentHabtis.filter(i => i.isDone).length / currentHabtis.length) * 100;

                this.days.push({
                    day: day,
                    date: currentDateFormatted,
                    faDate: currentDate.toCalendar('persian').format(),
                    habits: currentHabtis,
                    progress: progress,
                    name: DayName
                });
            }
        },
        showLastMonth() {
            this.currentMonth = this.currentMonth.subtract('months', 1);
            this.showCurrentMonth();
        },
        showNextMonth() {
            this.currentMonth = this.currentMonth.add('months', 1);
            this.showCurrentMonth();
        },
        showHabits(habitsDay) {
            if (habitsDay.length > 0) {
                this.isVisible = true;
                this.habitsList = habitsDay
            }
        },
        hideModal() {
            this.isVisible = True
        },
        calculateColorRange(item) {
            for (let key of this.scoreRange) {
                if (item >= key.low && item <= key.high) {
                    return key.color
                }
            }
        }
    },
    mounted() {
        this.showCurrentMonth();


    }
}
</script>