import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value:string,limit?:number){
        let actual_limit= (limit) ? limit : 50
        if(!value) return null
        else return value.substr(0,actual_limit)+'...'

    }
}