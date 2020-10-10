import { LikeComponent } from './like.component'

let component = new LikeComponent(10,true)
component.onClick();
console.log(`likecount: ${component.likecount}, isselected: ${component.isSelected}`)