// Type your code below this line!

function Journey(from,to){
    this.start = from;
    this.end = to;
}
const from=process.argv[3];
const to=process.argv[4];
// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")