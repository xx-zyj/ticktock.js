const TickTock = require('./ticktock')

// 1. 定时器
let ticktock = new TickTock('timer', 'timer')

ticktock.whenTick(data => {
    console.log('[TickTock]:', data)
}, null)

ticktock.when('2018-11-14 12:09:50', data => {
    let now = new Date(data.now).toLocaleString()
    console.log('[Time Ocurred 50]:', now)
}, null)

ticktock.when('2018-11-14 12:09:55', data => {
    let now = new Date(data.now).toLocaleString()
    console.log('[Time Ocurred 55]:', now)
}, null)

ticktock.whenEnd(data => {
    console.log('[TimeEnd]:', data)
}, null)

ticktock.start('2018-11-14 12:09:54', '2018-11-14 12:10:00') // 指定开始结束时间 然后立即开始运行

// setTimeout(() => {
//     ticktock.stop()
// }, 6000)

// 2. 倒计时器
// let counter = new TickTock('counter', 'counter')

// counter.whenTick((data) => {
//     console.log('[Tick]: ', data)
// }, null)

// counter.whenEnd(data => {
//     console.log('[End]: ', data)
// }, null)

// counter.count(5)
