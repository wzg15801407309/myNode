const EventEmitter = require("events");
class MyEventEmitter extends EventEmitter {};

const event = new MyEventEmitter();
/**创建事件 */
event.on('play',value=>{
  console.log(value);
});
event.on('play1',value=>{
  console.log(value);
});

/**时间触发 */

event.emit('play',"movie");