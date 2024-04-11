const doc = document
const Treesinput = doc.getElementById("Trees")
Treesinput.createElement("trees","required")
Treesinput.setAttribute("type","number")
const sawmillinput = doc.getElementById("Sawmill")
sawmillinput.createElement("sawmill","required")
sawmillinput.setAttribute("type","number")

const tree = Treesinput
const cycle = 20.5
const sawmill1 = sawmillinput
const sawmill2 = sawmill1 * 2

function minuteconvert(a) {
    if (a => 60) {
        return (a / 60).toFixed(2) + " minute"
    } else {
        return a + "second"
    }
}

function production(tree, cycle, sawmill1, sawmill2) {
    const log = tree * 2
    let cutlog = 0
    let chunkplank = 0
    let plank = 0
    let realtime = 0
    let time = 0
    let alltime = []

    cutlog = log * 2
    chunkplank = cutlog
    plank = chunkplank * 2

    for (let i = 0; i < 3; i++) {
        const th = ["First", "Second", "Third"]
        const wood = ["log", "cutlog", "chunkplank"]
        const woodnum = [log, cutlog, chunkplank]
        const sawmill = [sawmill1, sawmill2, sawmill2]
        realtime = (woodnum[i] * cycle) / sawmill[i]
        alltime.push(realtime)
        time = minuteconvert(realtime)
        console.log(wood[i] + " = " + woodnum[i])
        console.log(th[i] + " chain will take " + time + " or " + (realtime / cycle).toFixed(2) + " cycle with " + sawmill[i] + " sawmill(s)")
    }

    let sum = alltime.reduce(function (x, y) {
        return x + y;
    }, 0)
    time = minuteconvert(sum)
    console.log("Plank = " + plank)
    console.log("Entire chain supply will result in " + plank + " plank with a total of " + time + " or " + (sum / cycle).toFixed(2) + " cycle with " + Math.round(sawmill1 + (sawmill2 * 2)) + " sawmill(s)")
}
