function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function sum(array) {
    return array.reduce((a, b) => a + b, 0);
}

function print(message){
    document.getElementById("generatedDice").innerText = message;

}

function append0(num) {
    if (num < 10) {
        return "0" + num
    }
    return "" + num
}

function formatRolls(rolls, source) {
    let appended_rolls = []
    let total = sum(rolls)
    rolls.forEach(roll => {
        appended_rolls.push(append0(roll));
    });
    return "" + total + " - [" + appended_rolls.join(", ") + "] - " + source
}

function generateDice() {
    const diceToRoll = parseInt(document.getElementById("dice_to_roll").value);
    let targetWindowSize = parseInt(document.getElementById("target_window_size").value);
    let diceNeeded = document.getElementById("dice_needed").value;
    const numGenerated = parseInt(document.getElementById("num_generated").value);
    const dicePerGroup = parseInt(document.getElementById("dice_per_group").value);

    console.log("diceToRoll: " + diceToRoll);
    console.log("targetWindowSize: " + targetWindowSize);
    console.log("diceNeeded: " + diceNeeded);
    console.log("numGenerated: " + numGenerated);
    console.log("dicePerGroup: " + dicePerGroup);

    diceNeeded = diceNeeded.split(",");
    const diceNeededInt = []
    for (let i = 0; i < diceNeeded.length; i++) {
        diceNeededInt.push(parseInt(diceNeeded[i]));
    }

    if (targetWindowSize === -1) {
        targetWindowSize = 100;
    }

    const allRolls = [];

    let default_rolls = [8, 10, 12, 13, 14, 15];
    allRolls.push(formatRolls(default_rolls, "Default"));
    let count = 0;
    while (allRolls.length < numGenerated + 1) {
        count += 1;
        if (count > 10000) {
            console.log("got stuck")
            print("Tried 10000 times to find that combo " + numGenerated + " times");
            return
        }
        let total = [];
        for (let i = 0; i < diceToRoll; i++) {
            const group = []
            for (let j = 0; j < dicePerGroup; j++) {
                group.push(getRandomInt(6));
            }
            group.sort((a, b) => b - a);
            while (group.length > 3) {
                group.pop();
            }
            total.push(sum(group));
        }
        total.sort()
        total = total.slice(0, 3).concat(total.slice(-3));

        let cont = false;
        for (let i = 0; i < diceNeededInt.length; i++) {
            if (!total.includes(diceNeededInt[i])) {
                cont = true;
                break;
            }
        }
        if (cont) {
            continue;
        }
        if (sum(total) > sum(default_rolls) + targetWindowSize ||
            sum(total) < sum(default_rolls) - targetWindowSize) {
            continue;
        }
        allRolls.push(formatRolls(total, "Generated"));
    }
    allRolls.sort();

    print(allRolls.join("\n"));
}

// while len(all_stats) < num_generated:
//     count += 1
//     total = []
//     for j in range(dice_to_roll):
//         group = []
//         for i in range(dice_per_group):
//             group.append(random.randint(1, 6))
//         group.sort(reverse=True)
//         while len(group) > 3:
//             group.pop()
//         group = sum(group)
//         total.append(group)
//     total.sort()
//     total = total[:3] + total[len(total) - 3 :]
//     cont = False
//     for die in die_needed:
//         if die not in total:
//             cont = True
//     if cont:
//         continue
//     if (
//         sum(total) > sum(default) + target_window_size
//         or sum(total) < sum(default) - target_window_size
//     ):
//         continue
//     all_stats.append(format_result(total, "Generated"))
// all_stats.sort()
// print(count)
// for stats in all_stats:
//     print(stats)