function getClockAngle(hh_mm: string): number {
    let [hour, minute]: string[] = hh_mm.split(':')
    
    
    const hourAngle:number = +hour<=12? +hour*30:(+hour*30)-360;
    const minuteAngle:number = +minute*6;

    let angleDifference:number = Math.abs(hourAngle-minuteAngle);
    
    if(angleDifference>180){
        angleDifference = 360-angleDifference;
    }

  return angleDifference;
}


