function solution(fees, records) {
    const park = {};
    
    records.forEach(v => {
        let [time, car, type] = v.split(" ");
        const [hour, minute] = time.split(":");
        time = hour * 60 + Number(minute);
    
        if (!park[car]) {
            park[car] = { time: 0, car };
        }   
        park[car].type = type; 
    
        if (type == "OUT") {
            park[car].time += time - park[car].lastInTime;
            return;
        } 
        park[car].lastInTime = time;
    });

    return Object.values(park)
        .sort((a, b) => a.car - b.car)
        .map(v => {
        if (v.type == "IN") {
            v.time += 1439 - v.lastInTime;
        }
        if (fees[0] > v.time) {
            return fees[1];
        }
        return fees[1] + Math.ceil((v.time - fees[0]) / fees[2]) * fees[3];
    });
}