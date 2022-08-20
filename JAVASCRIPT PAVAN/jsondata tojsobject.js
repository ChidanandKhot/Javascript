let text = '{ "batter":[' +
    '{ "id": "1001", "type": "Regular" },'+
    '{ "id": "1002", "type": "Chocolate" },'+
   '{ "id": "1003", "type": "Blueberry" },'+
    '{ "id": "1004", "type": "DevilFood" } ] }';

    let obj=JSON.parse(text)

    console.log(obj.batter[1]);
    console.log(obj.batter[2],  obj.batter[3]);
