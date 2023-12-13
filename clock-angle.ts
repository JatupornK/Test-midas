function getClockAngle(hh_mm: string): number {
    let [hour, minute]: string[] = hh_mm.split(':')
    
    const hourAngle:number = +hour*30;
    const minuteAngle:number = +minute*6;

    let angleDifference:number = Math.abs(hourAngle-minuteAngle);
    
    if(angleDifference>180){
        angleDifference = 360-angleDifference;
    }

  return angleDifference;
}

console.log(getClockAngle('09:00'))

