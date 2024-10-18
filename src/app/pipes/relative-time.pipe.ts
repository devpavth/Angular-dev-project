import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime',
  standalone: true
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value) {
      return 'No time available'; 
    }
    
    const now = new Date();
    const inputDate = new Date(value);
    
    const diffInMs = now.getTime() - inputDate.getTime(); 
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60)); 
    const diffInHours = Math.floor(diffInMinutes / 60); 

    if (diffInMinutes < 1) {
      return 'just now';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} min${diffInMinutes > 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hr${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  }
}
