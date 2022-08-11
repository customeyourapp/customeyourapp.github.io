const readme = Vue.component('',{
    template:'#readme-template',
    data(){
        return{
            introduction :'生活所迫，出来代做。主要做安卓APP,Java相关和前后端。下面是之前做过的项目，需要写英文报告的也没问题',
            contact : {
                qq : '1587915719',
                email : '1587915719@qq.com'
            }

        }
    }
})
const areWeThereYet = Vue.component('',{
    template:'#project-template',
    data(){
        return {
            title:'Are we there yet',
            describeLists:[
                {describe:'基于安卓的单页面程序'},
                {describe:'使用Location Listener服务获取当前位置'},
                {describe:'根据输入的经纬度计算与当前位置的距离'},
                {describe:'将指定位置保存到Options Menu'},
                {describe:'使用谷歌地图的API导航到指定位置'},
            ],
            demandEN: 'The program is going to have to keep track of the following information:\n\n' +
                'Where we currently are (latitude and longitude)\n' +
                'Do we have valid latitude and longitude data?\n' +
                'Where is the location we want to know how far we are from?\n' +
                'What is the address of the location we want to know how far we are from?\n\n' +
                'This tells us what some member variables for this program are going to be.\n\n\n' +
                'There were several tasks I asked you to take care of during the tutorial. Be sure you have completed all of them. They are:\n\n' +
                'The Layout\n' +
                'The setUI() function\n' +
                'Computing the distance between two coordinates\n' +
                'Saving the new address to preferences\n' +
                'Adding your home coordinates to the program\n' +
                'Getting the call to newLocation() to work (Don\'t for get to call this method when the location changes as well).\n\n' +
                'Once you have the above tasks completed you are ready for the final task.',
            imgList:[
                {src:'../static/img/Are we there yet1.png'},
            ]
        }
    }
})

const game2048 = Vue.component('',{
    template: '#project-template',
    data() {
        return {
            title:'2048游戏',
            describeLists: [
                {describe: '初始时生成两个方块'},
                {describe: '用户上下左右滑动时向对应方向移动方块'},
                {describe: '相同值的方块相碰后合并'},
                {describe: '每次移动方块都产生一个新的方块'},
                {describe: '方块合并后计算对应分值'},
                {describe: '识别有效操作和无效操作'},
                {describe: '重新开始游戏'},
            ],
            demandEN: '很久之前做的，找不到了',
            imgList: [
                {src: '../static/img/game2048-1.png'},
                {src: '../static/img/game2048-2.png'},
            ]
        }
    }
})

const cruddyPizza = Vue.component('',{
    template: '#project-template',
    data(){
        return{
            title : 'Cruddy pizza',
            describeLists:[
                {describe:'使用SQLite数据持久化'},
                {describe:'使用Shared Preferences存储UI数据'},
                {describe:'Pizza订单增删查改'},
                {describe:'APP国际化，支持英语法语随系统切换'},
            ],
            demandEN:'This Cruddy Pizza assignment is primarily intended for students to demonstrate their knowledge of:\n' +
                '•\tData persistence using SQLite (Order Info).\n' +
                '•\tData persistence using Shared Preferences (Bilingual UI Settings).\n' +
                '•\tString Arrays\n' +
                '•\tUI design and internationalization\n' +
                'This application will display a list of options for building a pizza. Once the order is finished it is to be saved (created). Additional functionality will allow the user to display all orders (read), a specific order (read), modify the order (update), and cancel the order (delete). Let the user know when each operation is complete. The UI is to be able to be switched between English and French and maintain state on that setting between start-ups.',
            imgList:[
                {src:'../static/img/Cruddy pizza1.png'},
                {src:'../static/img/Cruddy pizza2.png'},
                {src:'../static/img/Cruddy pizza3.png'}
            ]
        }
    }
})

const runningTracker = Vue.component('',{
    template: '#project-template',
    data(){
        return{
            title : 'Running tracker',
            describeLists:[
                {describe : '用户移动时记录其运动情况'},
                {describe : '存储记录的运动数据'},
                {describe : '允许用户查看存储的运动数据'},
                {describe : '允许用户注释运动数据'},
            ],
            demandEN:'In this exercise you are required to build an Android running tracking application, and\n' +
                'document its design and architecture in a report. This is an assessed exercise and will account\n' +
                'for 40% of your final module mark. This is an individual coursework, and your submission\n' +
                'must be entirely your own work – please pay particular attention to the section of this\n' +
                'document regarding plagiarism. This is a sizeable and open-ended coursework compared to\n' +
                'the previous assessed exercises. This document sets out general requirements that your\n' +
                'application should meet rather than specific instructions.\n\n' +
                'The goal of this coursework is to design and implement a mobile application that functions as\n' +
                'a basic Running Tracker, in that it should allow the user to track their movement when they\n' +
                'decide to walk, run or jog, principally by logging the change in physical location using GPS.\n' +
                'The application should allow the user to inspect this data in a useful manner. The user might\n' +
                'expect to want to be able to ask simple questions of the data such as “how far have I run so\n' +
                'far today?”, “how much have I improved?” or “have I run faster than my best time today?”.\n' +
                'The application should allow the user to annotate their data. They might expect to be able to\n' +
                'tag a particular exercise activity as good, or bad, or note something about the weather\n' +
                'conditions, or they might want to associate a photograph with the exercise activity.\n\n' +
                'At the minimum, your application should support:\n' +
                '• Logging the movement of a user when they go running or walking\n' +
                '• Saving the movement data in an appropriate manner\n' +
                '• Allowing the user to inspect their data in an appropriate manner\n' +
                '• Allowing the user to annotate their data in a useful manner\n' +
                '• In principle allowing other applications to make use of the data',
            imgList:[
                {src:'../static/img/running tracker1.png'},
                {src:'../static/img/running tracker2.png'},
            ]
        }
    }
})

const mp3Player = Vue.component('',{
    template: '#project-template',
    data(){
        return{
            title : 'Mp3 player',
            describeLists:[
                {describe : '从sdcard/Music文件夹读取音乐并播放'},
                {describe : '允许用户停止或暂停音乐'},
                {describe : '展示当前音乐播放进度'},
                {describe : '注册安卓Service以在后台持续播放数据'},
                {describe : '注册Notification在通知栏显示音乐播放情况'},
            ],
            demandEN:'You should create an application with the functionality of a simple music player for Android,\n' +
                'which allows users to select from a number of music files stored on the SD card storage of the\n' +
                'device to be played, and allows the music to continue to play in the background while the\n' +
                'user performs other tasks.\n' +
                'Your application must consist of:\n\n' +
                '• A single Activity presenting an interface for the user that:\n' +
                'o Displays and allows the user to select from and play music files from the\n' +
                '/sdcard/Music folder\n' +
                'o Allows the user to stop or pause playback\n' +
                'o Displays the current progress of the playback (i.e. the elapsed time)\n' +
                '• A Service that provides continued playback in the background\n' +
                '• A Notification that that is displayed while the music is playing\n\n' +
                'You must implement a Service to handle the music-playing element of the application, as this\n' +
                'is a long-running task and the user can be expected to leave the initial activity to perform\n' +
                'other tasks. You should think carefully about the relationship between the Activity and Service\n' +
                'in your application, and how these should be used appropriately to perform the task. There\n' +
                'is no requirement that your service will be used remotely, i.e. you do not need to use AIDL\n\n' +
                'A simple MP3Player class is provided that wraps a basic MediaPlayer object for loading and\n' +
                'playing an MP3 file. It is left up to you to decide how best to design and implement an Activity\n' +
                'for selecting and controlling the music playback.\n' +
                'Your application must be written in Java or Kotlin and make use of the Android SDK. There\n' +
                'are no requirements to target a specific Android API version, however you can assume that\n' +
                'your application will be tested on an emulated device running Android API version 29\n' +
                '(Android 10.0), 1080x1920: 420dpi. The range of different ways that the user might engage\n' +
                'with the different elements of the task while also intermittently or for extended periods\n' +
                'engaging with other tasks, and how well the application supports this, is also part of the\n' +
                'assessment criteria.\n\n' +
                'You should consider the following when implementing your application:\n' +
                '• Appropriate use of Activities, Intents and appreciation of the Activity life-cycle\n' +
                '• Appropriate use of Services, Notifications and management of the Service life-cycle\n' +
                '• Appropriate communication between components\n' +
                '• Your application should have appropriate comments and variable / class names, so\n' +
                'that a reader can easily understand how it works at the code level',
            imgList:[
                {src:'../static/img/mp3 player1.png'},
                {src:'../static/img/mp3 player2.png'},
            ],
        }
    }
})

const simonPuzzle = Vue.component('',{
    template : '#project-template',
    data(){
        return{
            title : 'Simon Puzzle',
            describeLists : [
                {describe : '基于JavaFX的桌面游戏'},
                {describe: '名为Simon puzzle的虚拟游戏'},
                {describe: '持久化记录先前结果'},
                {describe: '计分机制'},
                {describe: '系统可以自动判断游戏胜负'},
                {describe: '为所有类，方法提供JavaDoc'},
                {describe: '编写单元测试'}
            ],
            demandEN : '收到的需求为翻译后的版本\n' +
                '这个游戏叫做Simon\'s puzzle，它是一个虚构的游戏，所以谷歌搜索它的实现是没有意义的。Simon\'s puzzle是一款基于棋盘的游戏，它有一个4 x 4的网格和五种类型的棋子，可以放置在棋盘上的网格单元中，如图1所示。玩家有16个（4 x 4=16）棋子可以放在棋盘上，游戏的目标是放置所有棋子。如果玩家成功放置所有棋子，他们赢了，如果没有，他们输了（即，如果他们没有有效的移动）。确定移动是否有效的规则有：\n' +
                '1.不得将任何部件放置在与相同类型部件相邻的网格单元中（对于随机生成的电路板，在初始电路板状态下也必须遵守此规则）。\n' +
                '2.放置一块后，网格单元的标识将更改为该块。\n' +
                '3.一旦放置，就无法拾取（从板上移除）。\n' +
                '4.每种类型的件数受分布限制：2、3、3、4、4，即某些件数比其他件数少/多。您可以自由决定初始面板的分配方式。\n' +
                '这些规则意味着可能无法完成拼图并赢得游戏：要么是初始的一组动作导致棋盘无法解，要么是，如果棋盘是随机生成的，则拼图可能没有解。\n',
            imgList : [
                {src:'../static/img/simon puzzle1.png'}
            ],
        }
    },
})
const router = new VueRouter({
    routes:[
        {path: '/readme',component: readme},
        {path:'/areWeThereYet',component:areWeThereYet},
        {path:'/game2048',component: game2048},
        {path:'/cruddyPizza',component: cruddyPizza},
        {path:'/runningTracker',component: runningTracker},
        {path:'/mp3Player',component: mp3Player},

    ]
})
const vm = new Vue({
    el:'#app',
    router:router,
    data:{
        selectIndex : 0,
    },
    methods:{
        handleOpen(key, keyPath){
            vm.selectIndex = key
            console.log(key, keyPath)
        },
        handleClose(key, keyPath){
            vm.selectIndex = 0
            console.log(key, keyPath)
        },
        clickMenu(){

        }
    }
}).$mount('#app')